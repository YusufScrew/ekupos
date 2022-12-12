@extends('layouts.master')

@section('title')
    Daftar User
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
@includeIf('user.form')  
  <div class="container-xxl flex-grow-1 container-p-y">
    <div class="row">
      <div class="col-lg-12 mb-4 order-0">
        <div class="card">
          <div class="d-flex align-items-end row">
            <div class="col-12 col-lg-12">
              <div class="card-body">
                <div class="demo-inline-spacing">
                  <button onclick="addForm('{{ route('user.store') }}')" class="btn btn-primary me-2">
                        <span class="tf-icons bx bx-plus"></span> Tambah User
                    </button>
                </div>
              </div>
              <div class="card-body">
                <div class="card-datatable table-responsive pt-0">
                        @csrf
                        <table class="table table-striped" id="tabel_user">
                            <thead>
                                <tr>
                                    <th class="col">No</th>   
                                    <th class="col">Nama</th>
                                    <th class="col">Email</th>
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
<script>
      $(document).ready(function() {
          $('#tabel_user').DataTable({
            responsive: true,
            processing: true,
            serverSide: true,
            autoWidth: false,
            ajax: {
                url: '{{ route('user.data') }}',
            },
            columns: [
              {data: 'DT_RowIndex', searchable: false, sortable: false},
              {data: 'name'},
              {data: 'email'},
              {data: 'aksi', searchable: false, sortable: false},
            ]
          });

          $('body').validator().on('submit', '.tombol-simpan-tambah-user', function(e) {
              if (! e.preventDefault()) {
                  $.post($('#modal-form form').attr('action'), $('#modal-form form').serialize())
                      .done((response) => {
                          $('#modal-form').modal('hide');
                          $('#tabel_user').DataTable().ajax.reload();
                      })
                      .fail((errors) => {
                          alert('Tidak dapat menyimpan data');
                          return;
                      });
              }
          });
      });

      function addForm(url) {
          $('#modal-form').modal('show');
          $('#modal-form .modal-title').text('Tambah User');
          $('#modal-form form')[0].reset();
          $('#modal-form form').attr('action', url);
          $('#modal-form [name=_method]').val('post');
          $('#modal-form [name=name]').focus();
          $('#password, #confirmpassword').attr('required', true);
      }

      function editForm(url) {
          $('#modal-form').modal('show');
          $('#modal-form .modal-title').text('Edit User');
          $('#modal-form form')[0].reset();
          $('#modal-form form').attr('action', url);
          $('#modal-form [name=_method]').val('put');
          $('#modal-form [name=name]').focus();
          $('#password, #confirmpassword').attr('required', false);
          $.get(url)
              .done((response) => {
                  $('#modal-form [name=name]').val(response.name);
                  $('#modal-form [name=email]').val(response.email);
              })
              .fail((errors) => {
                  alert('Tidak dapat menampilkan data');
                  return;
              });
      }

      function deleteData(url) {
          if (confirm('Yakin ingin menghapus data terpilih?')) {
              $.post(url, {
                      '_token': $('[name=csrf-token]').attr('content'),
                      '_method': 'delete'
                  })
                  .done((response) => {
                    $('#tabel_user').DataTable().ajax.reload();
                  })
                  .fail((errors) => {
                      alert('Tidak dapat menghapus data');
                      return;
                  });
          }
      }

      
</script>   
@endpush
