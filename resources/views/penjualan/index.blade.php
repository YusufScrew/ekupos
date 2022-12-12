@extends('layouts.master')

@section('title')
    Daftar Penjualan
@endsection

@section('content')
  <div class="container-xxl flex-grow-1 container-p-y">
    <div class="row">
      <div class="col-lg-12 mb-4 order-0">
        <div class="card">
          <div class="d-flex align-items-end row">
            <div class="col-12 col-lg-12">
              <div class="card-body">
                <div class="card-datatable table-responsive pt-0">
                        @csrf
                        <table class="table table-striped" id="tabel_penjualan">
                            <thead>
                                <tr>
                                    <th class="col">No</th>   
                                    <th>Tanggal</th>
                                    <th>Kode Member</th>
                                    <th>Total Item</th>
                                    <th>Total Harga</th>
                                    <th>Diskon</th>
                                    <th>Total Bayar</th>
                                    <th>Kasir</th>
                                    <th class="col">Aksi</th>
                                </tr>
                            </thead>
                        </table>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
@includeIf('penjualan.detail')
@endsection

@push('scripts')
<script>
  let table, table1;
      $(document).ready(function() {
          table = $('#tabel_penjualan').DataTable({
            responsive: true,
            processing: true,
            serverSide: true,
            autoWidth: false,
            ajax: {
                url: '{{ route('penjualan.data') }}',
            },
            columns: [
                {data: 'DT_RowIndex', searchable: false, sortable: false},
                {data: 'tanggal'},
                {data: 'kode_member'},
                {data: 'total_item'},
                {data: 'total_harga'},
                {data: 'diskon'},
                {data: 'bayar'},
                {data: 'kasir'},
                {data: 'aksi', searchable: false, sortable: false},
            ]
          });

          table1 = $('.table-detail').DataTable({
            processing: true,
            bSort: false,
            dom: 'Brt',
            autoWidth: false,
            columns: [
                {data: 'DT_RowIndex', searchable: false, sortable: false},
                {data: 'kode_produk'},
                {data: 'nama_produk'},
                {data: 'harga_jual'},
                {data: 'jumlah'},
                {data: 'subtotal'},
            ]
        });
      });


      // GLOBAL SETUP 
          $.ajaxSetup({
              headers: {
                  'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              }
          });

          function showDetail(url) {
              $('#modal-detail').modal('show');
              table1.ajax.url(url);
              table1.ajax.reload();
          }

          function deleteData(url) {
              if (confirm('Yakin ingin menghapus data terpilih?')) {
                  $.post(url, {
                          '_token': $('[name=csrf-token]').attr('content'),
                          '_method': 'delete'
                      })
                      .done((response) => {
                          table.ajax.reload();
                      })
                      .fail((errors) => {
                          alert('Tidak dapat menghapus data');
                          return;
                      });
              }
          }
         
</script>   
@endpush
