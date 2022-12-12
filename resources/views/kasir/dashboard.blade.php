:@extends('layouts.master')

@section('title')
    Dashboard
@endsection

@section('content')
<div class="container-xxl flex-grow-1 container-p-y">
    <div class="row">
      <div class="col-lg-12 order-lg-2 order-1 align-self-end mb-4">
        <div class="card">
          <div class="d-flex align-items-end row">
            <div class="col-sm-7">
              <div class="card-body">
                <h5 class="card-title text-primary">Wellcome to EKU POS👋</h5>
                <p class="mb-4">Hi, selamat datang kembali <span class="fw-bold">{{ auth()->user()->name }}</span>
                Anda login di EKU POS sebagai Kasir.</p>
    
                <a href="{{ route('transaksi.baru') }}" class="btn btn-sm btn-primary mt-2" role="button">Buat Transaksi Baru</a>
              </div>
            </div>
            <div class="col-sm-5 text-center text-sm-left">
              <div class="card-body pb-0 px-0 px-md-4">
                <img src="{{ asset('sneat/assets/img/illustrations/man-with-laptop-light.png') }}" height="140" alt="View Badge User" data-app-light-img="illustrations/man-with-laptop-light.png" data-app-dark-img="illustrations/man-with-laptop-dark.png">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection