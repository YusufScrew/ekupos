@extends('layouts.master')

@section('title')
    Daftar Pembelian
@endsection

@section('content')
@includeIf('pembelian.supplier')
@includeIf('pembelian.detail')  
  <div class="container-xxl flex-grow-1 container-p-y">
    <div class="row">
      <div class="col-lg-12 mb-4 order-0">
        <div class="card">
          <div class="d-flex align-items-end row">
            <div class="col-12 col-lg-12">
              <div class="card-body">
                <div class="demo-inline-spacing">
                    <button type="button" class="btn btn-primary me-2 tombol-transaksi-baru">
                        <span class="tf-icons bx bx-plus"></span> Transaksi Baru
                    </button>
                    @empty(! session('id_pembelian'))
                    <a href="{{ route('pembelian_detail.index') }}" class="btn btn-info me-2"><i class="bx bx-pencil"></i> Transaksi Aktif</a>
                    @endempty
                </div>
              </div>
              <div class="card-body">
                <div class="card-datatable table-responsive pt-0">
                        @csrf
                        <table class="table table-striped" id="tabel_pembelian">
                            <thead>
                                <tr>
                                    <th class="col">No</th>   
                                    <th class="col">Tanggal</th>
                                    <th class="col">Supplier</th>
                                    <th class="col">Total Item</th>
                                    <th class="col">Total Harga</th>
                                    <th class="col">Diskon</th>
                                    <th class="col">Total Bayar</th>
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
@endsection

@push('scripts')
<script>
  let table, table1;
      $(document).ready(function() {
          table = $('#tabel_pembelian').DataTable({
            responsive: true,
            processing: true,
            serverSide: true,
            autoWidth: false,
            ajax: {
                url: '{{ route('pembelian.data') }}',
            },
            columns: [
              {data: 'DT_RowIndex', searchable: false, sortable: false},
              {data: 'tanggal'},
              {data: 'supplier'},
              {data: 'total_item'},
              {data: 'total_harga'},
              {data: 'diskon'},
              {data: 'bayar'},
              {data: 'aksi', searchable: false, sortable: false},
            ]
          });

          $('#tabel_supplier').DataTable();

          table1 = $('.table-detail').DataTable({
            processing: true,
            bSort: false,
            dom: 'Brt',
            autoWidth: false,
            columns: [
                {data: 'DT_RowIndex', searchable: false, sortable: false},
                {data: 'kode_produk'},
                {data: 'nama_produk'},
                {data: 'harga_beli'},
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

      //proses menambahkan data produk

          $('body').on('click', '.tombol-transaksi-baru', function(e) {
              e.preventDefault();
              $('#SupplierModal').modal('show');
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
