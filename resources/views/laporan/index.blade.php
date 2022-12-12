@extends('layouts.master')

@section('title')
    Laporan Pendapatan
@endsection

@section('content')
@includeIf('laporan.form')  
  <div class="container-xxl flex-grow-1 container-p-y">
    <div class="row">
      <div class="col-lg-12 mb-4 order-0">
        <div class="card">
          <div class="d-flex align-items-end row">
            <div class="col-12 col-lg-12">
              <div class="card-body">
                <h5>Laporan Pendapatan {{ tanggal_indonesia($tanggalAwal, false) }} s/d {{ tanggal_indonesia($tanggalAkhir, false) }}</h5>
                <br>
                <div>
                    <button onclick="updatePeriode()" class="btn btn-primary me-2">
                        <span class="tf-icons bx bx-plus-circle"></span> Edit Periode
                    </button>
                    <a href="{{ route('laporan.export_pdf', [$tanggalAwal, $tanggalAkhir]) }}" target="_blank" class="btn btn-danger me-2">
                        <span class="tf-icons bx bxs-file-pdf"></span> Export PDF
                    </a>
                </div>
              </div>
              <div class="card-body">
                <div class="card-datatable table-responsive pt-0">
                        @csrf
                        <table class="table table-striped" id="tabel_laporan">
                            <thead>
                                <tr>
                                    <th width="5%">No</th>
                                    <th class="col">Tanggal</th>   
                                    <th class="col">Penjualan</th>
                                    <th class="col">Pembelian</th>
                                    <th class="col">Pengeluaran</th>
                                    <th class="col">Pendapatan</th>
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
<script src="{{ asset('sneat/assets/vendor/libs/bootstrap-datepicker/bootstrap-datepicker.js') }}"></script>
<script>
      $(document).ready(function() {
          $('#tabel_laporan').DataTable({
            responsive: true,
            processing: true,
            serverSide: true,
            autoWidth: false,
            ajax: {
                url: '{{ route('laporan.data', [$tanggalAwal, $tanggalAkhir]) }}',
            },
            columns: [
                {data: 'DT_RowIndex', searchable: false, sortable: false},
                {data: 'tanggal'},
                {data: 'penjualan'},
                {data: 'pembelian'},
                {data: 'pengeluaran'},
                {data: 'pendapatan'}
            ],
            dom: 'Brt',
            bSort: false,
            bPaginate: false,
          });

          $('.datepicker').datepicker({
            format: 'yyyy-mm-dd',
            autoclose: true
          });
      });

      function updatePeriode() {
          $('#modal-periode').modal('show');
      }
          
</script>   
@endpush
