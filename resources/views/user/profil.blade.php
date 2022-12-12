@extends('layouts.master')

@section('title')
    Edit Profil
@endsection

@push('css')
<style>
    .success-message{
        color:#76DF3B;
    }
    .error-message{
        color:red;
    }
</style>
@endpush

@section('content') 
  <div class="container-xxl flex-grow-1 container-p-y">
    <div class="row">
      <div class="col-xxl">
        <div class="card mb-4">
          <div class="card-header d-flex align-items-center justify-content-between">
            <h5 class="mb-0">Edit Profil</h5>
          </div>
          <div class="card-body">
            <div class="alert alert-info alert-dismissible" role="alert" style="display: none;">
                <span class="badge badge-center rounded-pill bg-info border-label-info p-3 me-2"><i class="bx bx-check fs-6"></i></span>
                Perubahan berhasil disimpan
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                </button>
            </div>
            <form action="{{ route('user.update_profil') }}" method="post" class="form-profil was-validated">
              @csrf  
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="name">Nama</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" name="name" id="name" placeholder="Nama" required autofocus value="{{ $profil->name }}"/>
                    <div class="invalid-feedback"> Please enter your name. </div>
                </div>
              </div>
              <div class="row mb-3">
                <label for="foto" class="col-sm-2 col-form-label">Foto Profil</label>
                <div class="col-sm-10">
                    <input class="form-control" type="file" name="foto" id="foto" onchange="preview('.tampil-foto', this.files[0])">
                    <div id="defaultFormControlHelp" class="form-text">Pastikan rasio foto 1:1</div>
                    <div class="invalid-feedback"> Please select the file. </div>
                    <br>
                    <div class="tampil-foto">
                        <img src="{{ url($profil->foto ?? '/') }}" width="200">
                    </div>
                </div>
              </div>
              <div class="row mb-3">
                <label for="foto" class="col-sm-2 col-form-label">Password Lama</label>
                <div class="col-sm-10">
                    <input type="password" name="old_password" id="old_password" class="form-control" minlength="6" placeholder="Password Lama">
                    <div class="invalid-feedback"> The minimum password must contain 6 characters!. </div>
                </div>
              </div>
              <div class="row mb-3">
                <label for="foto" class="col-sm-2 col-form-label">Password Baru</label>
                <div class="col-sm-10">
                    <input type="password" name="password" id="password" class="form-control" minlength="6" placeholder="Password Baru">
                    <div class="invalid-feedback"> The minimum password must contain 6 characters!. </div>
                    <div class="invalid-feedback"> Please enter your password. </div>
                </div>
              </div>
              <div class="row mb-3">
                <label for="foto" class="col-sm-2 col-form-label">Konfirmasi Password</label>
                <div class="col-sm-10">
                    <input type="password" name="confirmpassword" id="confirmpassword" class="form-control" placeholder="Konfirmasi Password">
                    <div class="form-text confirm-message"></div>
                </div>
              </div>
              <div class="row justify-content-end">
                <div class="col-sm-10">
                  <button type="submit" class="btn btn-primary">Simpan Perubahan</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection

@push('scripts')

<script>
   $(function () {
        $('#old_password').on('keyup', function () {
            if ($(this).val() != "") $('#password, #confirmpassword').attr('required', true);
            else $('#password, #confirmpassword').attr('required', false);
        });
        $('.form-profil').on('submit', function (e) {
            if (! e.preventDefault()) {
                $.ajax({
                    url: $('.form-profil').attr('action'),
                    type: $('.form-profil').attr('method'),
                    data: new FormData($('.form-profil')[0]),
                    async: false,
                    processData: false,
                    contentType: false
                })
                .done(response => {
                    $('[name=name]').val(response.name);
                    $('.tampil-foto').html(`<img src="{{ url('/') }}${response.foto}" width="200">`);
                    $('.img-profil').attr('src', `{{ url('/') }}/${response.foto}`);
                    $('.alert').fadeIn();
                    setTimeout(() => {
                        $('.alert').fadeOut();
                    }, 3000);
                })
                .fail(errors => {
                    if (errors.status == 422) {
                        alert(errors.responseJSON); 
                    } else {
                        alert('Tidak dapat menyimpan data');
                    }
                    return;
                });
            }
        });
    });
</script>  
<script>
    $('#password, #confirmpassword').on('keyup', function(){

    $('.confirm-message').removeClass('success-message').removeClass('error-message');

    let password=$('#password').val();
    let confirm_password=$('#confirmpassword').val();

    if(password===""){
        $('.confirm-message').text("Password Field cannot be empty").addClass('error-message');
    }
    else if(confirm_password===""){
        $('.confirm-message').text("Confirm Password Field cannot be empty").addClass('error-message');
    }
    else if(confirm_password===password)
    {
        $('.confirm-message').text('Password Match!').addClass('success-message');
    }
    else{
        $('.confirm-message').text("Password Doesn't Match!").addClass('error-message');
    }

    });
</script> 
@endpush
