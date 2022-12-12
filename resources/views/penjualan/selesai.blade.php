@extends('layouts.master')

@section('title')
    Transaksi Penjualan
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
                  <div class="alert alert-success d-flex" role="alert">
                    <span class="badge badge-center rounded-pill bg-success border-label-success p-3 me-2"><i class="bx bx-check fs-6"></i></span>
                    <div class="d-flex flex-column ps-1">
                      <h6 class="alert-heading d-flex align-items-center fw-bold mb-1">Well done :)</h6>
                      <span>Transaksi berhasil</span>
                    </div>
                  </div>
                  <div class="demo-inline-spacing">
                    @if ($setting->tipe_nota == 1)
                    <button type="button" class="btn btn-warning me-2" onclick="notaKecil('{{ route('transaksi.nota_kecil') }}', 'Nota Kecil')">Cetak Ulang Nota</button>
                    @else
                    <button type="button" class="btn btn-warning me-2" onclick="notaBesar('{{ route('transaksi.nota_besar') }}', 'Nota PDF')">Cetak Ulang Nota</button>
                    @endif
                    <a href="{{ route('transaksi.baru') }}" class="btn btn-primary me-2">Transaksi Baru</a>
                  </div>     
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
      // tambahkan untuk delete cookie innerHeight terlebih dahulu
        document.cookie = "innerHeight=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        
        function notaKecil(url, title) {
            popupCenter(url, title, 625, 500);
        }

        function notaBesar(url, title) {
            popupCenter(url, title, 900, 675);
        }

        function popupCenter(url, title, w, h) {
            const dualScreenLeft = window.screenLeft !==  undefined ? window.screenLeft : window.screenX;
            const dualScreenTop  = window.screenTop  !==  undefined ? window.screenTop  : window.screenY;
            const width  = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
            const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
            const systemZoom = width / window.screen.availWidth;
            const left       = (width - w) / 2 / systemZoom + dualScreenLeft
            const top        = (height - h) / 2 / systemZoom + dualScreenTop
            const newWindow  = window.open(url, title, 
            `
                scrollbars=yes,
                width  = ${w / systemZoom}, 
                height = ${h / systemZoom}, 
                top    = ${top}, 
                left   = ${left}
            `
            );
            if (window.focus) newWindow.focus();
        }
</script>   
@endpush
