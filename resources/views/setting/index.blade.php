@extends('layouts.master')

@section('title')
    Pengaturan
@endsection

@section('content') 
  <div class="container-xxl flex-grow-1 container-p-y">
    <div class="row">
      <div class="col-xxl">
        <div class="card mb-4">
          <div class="card-header d-flex align-items-center justify-content-between">
            <h5 class="mb-0">Pengaturan</h5>
          </div>
          <div class="card-body">
            <div class="alert alert-info alert-dismissible" role="alert" style="display: none;">
                <span class="badge badge-center rounded-pill bg-info border-label-info p-3 me-2"><i class="bx bx-check fs-6"></i></span>
                Perubahan berhasil disimpan
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                </button>
            </div>
            <form action="{{ route('setting.update') }}" method="post" class="form-setting needs-validation" novalidate>
              @csrf  
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="nama_perusahaan">Nama Perusahaan</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" name="nama_perusahaan" id="nama_perusahaan" placeholder="Nama Perusahaan" required/>
                    <div class="invalid-feedback"> Please enter your company name. </div>
                </div>
              </div>
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="telepon">No Telepon</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" name="telepon" id="telepon" placeholder="No Telepon" required/>
                    <div class="invalid-feedback"> Please enter your telephone number. </div>
                </div>
              </div>
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="alamat">Alamat</label>
                <div class="col-sm-10">
                    <textarea id="alamat" name="alamat" class="form-control" placeholder="Silahkan isi alamat perusahaan anda" aria-label="Silahkan isi alamat perusahaan anda" aria-describedby="basic-icon-default-message2" required></textarea>
                    <div class="invalid-feedback"> Please enter your company address. </div>
                </div>
              </div>
              <div class="row mb-3">
                <label for="path_logo" class="col-sm-2 col-form-label">Logo Perusahaan</label>
                <div class="col-sm-10">
                    <input class="form-control" type="file" name="path_logo" id="path_logo" onchange="preview('.tampil-logo', this.files[0])">
                    <div class="invalid-feedback"> Please select the file. </div>
                    <br>
                    <div class="tampil-logo"></div>
                </div>
              </div>
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="diskon">Diskon Member (%)</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" name="diskon" id="diskon" placeholder="John Doe" required/>
                    <div class="invalid-feedback"> Please enter the discount value. </div>
                </div>
              </div>
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="tipe_nota">Tipe Nota</label>
                <div class="col-sm-10">
                    <select class="form-select" id="tipe_nota" name="tipe_nota" aria-label="Default select example" required>
                      <option value="1">Nota Kecil</option>
                      <option value="2">Nota Besar</option>
                    </select>
                    <div class="invalid-feedback"> Please select your type of note. </div>
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
        showData();
        $('.form-setting').on('submit', function (e) {
            if (! e.preventDefault()) {
                $.ajax({
                    url: $('.form-setting').attr('action'),
                    type: $('.form-setting').attr('method'),
                    data: new FormData($('.form-setting')[0]),
                    async: false,
                    processData: false,
                    contentType: false
                })
                .done(response => {
                    showData();
                    $('.alert').fadeIn();
                    setTimeout(() => {
                        $('.alert').fadeOut();
                    }, 3000);
                })
                .fail(errors => {
                    alert('Tidak dapat menyimpan data');
                    return;
                });
            }
        });
    });

    function showData() {
        $.get('{{ route('setting.show') }}')
            .done(response => {
                $('[name=nama_perusahaan]').val(response.nama_perusahaan);
                $('[name=telepon]').val(response.telepon);
                $('[name=alamat]').val(response.alamat);
                $('[name=diskon]').val(response.diskon);
                $('[name=tipe_nota]').val(response.tipe_nota);
                $('title').text(response.nama_perusahaan + ' | Pengaturan');
                
                let words = response.nama_perusahaan.split(' ');
                let word  = '';
                words.forEach(w => {
                    word += w.charAt(0);
                });
                $('.logo-mini').text(word);
                $('.logo-lg').text(response.nama_perusahaan);
                $('.tampil-logo').html(`<img src="{{ url('/') }}${response.path_logo}" width="150">`);
                $('[rel=icon]').attr('href', `{{ url('/') }}/${response.path_logo}`);
            })
            .fail(errors => {
                alert('Tidak dapat menampilkan data');
                return;
            });
    }
</script>   
@endpush
