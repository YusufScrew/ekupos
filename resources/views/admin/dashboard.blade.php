:@extends('layouts.master')

@section('title')
    Dashboard
@endsection

@section('content')
<div class="container-xxl flex-grow-1 container-p-y">
  <!-- Cards with few info -->
<div class="row">
  <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div class="card-info">
            <p class="card-text">Kategori</p>
            <div class="d-flex align-items-end mb-2">
              <h4 class="card-title mb-0 me-2">{{ $kategori }} Kategori</h4>
            </div>
            <small>Total Kategori</small>
          </div>
          <div class="card-icon">
            <span class="badge bg-label-primary rounded p-2">
              <i class='bx bx-cube bx-sm'></i>
            </span><br><br>
            <a href="{{ url('kategori') }}">Lihat</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div class="card-info">
            <p class="card-text">Produk</p>
            <div class="d-flex align-items-end mb-2">
              <h4 class="card-title mb-0 me-2">{{ $produk }} Produk</h4>
            </div>
            <small>Total Produk</small>
          </div>
          <div class="card-icon">
            <span class="badge bg-label-info rounded p-2">
              <i class='bx bx-grid-alt bx-sm'></i>
            </span><br><br>
            <a href="{{ url('produk') }}">Lihat</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div class="card-info">
            <p class="card-text">Member</p>
            <div class="d-flex align-items-end mb-2">
              <h4 class="card-title mb-0 me-2">{{ $member }} Member</h4>
            </div>
            <small>Total Member</small>
          </div>
          <div class="card-icon">
            <span class="badge bg-label-danger rounded p-2">
              <i class='bx bx-id-card bx-sm'></i>
            </span><br><br>
            <a href="{{ url('member') }}">Lihat</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div class="card-info">
            <p class="card-text">Supplier</p>
            <div class="d-flex align-items-end mb-2">
              <h4 class="card-title mb-0 me-2">{{ $supplier }} Supplier</h4>
            </div>
            <small>Total Supplier</small>
          </div>
          <div class="card-icon">
            <span class="badge bg-label-success rounded p-2">
              <i class='bx bxs-truck bx-sm'></i>
            </span><br><br>
            <a href="{{ url('supplier') }}">Lihat</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!--/ Cards with few info -->
<!-- Total Income -->
<div class="col-md-12 col-lg-12 mb-4">
  <div class="card">
    <div class="row row-bordered g-0">
      <div class="col-md-12">
        <div class="card-header">
          <h5 class="card-title mb-0">Grafik Total Pendapatan</h5>
          <small class="card-subtitle">{{ tanggal_indonesia($tanggal_awal, false) }} s/d {{ tanggal_indonesia($tanggal_akhir, false) }}</small>
        </div>
        <div class="card-body">
          <div id="chart"></div>
        </div>
      </div>
    </div>
  </div>
</div>  
  <!--/ Total Income -->
</div>
@endsection

@push('scripts')
<script>
  var options = {
  chart: {
      height: 220,
      type: "area",
      toolbar: !1,
      dropShadow: {
          enabled: !0,
          top: 14,
          left: 2,
          blur: 3,
          color: config.colors.primary,
          opacity: .15
      }
  },
  dataLabels: {
    enabled: false
  },
  series: [{
    name: 'Pendapatan',
    data: {{ json_encode($data_pendapatan) }}
  }],
  colors: [config.colors.primary],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100]
    }
  },
  xaxis: {
    categories: {{ json_encode($data_tanggal) }}
  }
}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
</script>

@endpush