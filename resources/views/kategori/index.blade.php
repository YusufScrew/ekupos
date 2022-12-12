@extends('layouts.master')

@section('title')
    Kategori
@endsection

@section('content')
@includeIf('kategori.form')   
  <div class="container-xxl flex-grow-1 container-p-y">
    <div class="row">
      <div class="col-lg-12 mb-4 order-0">
        <div class="card">
          <div class="d-flex align-items-end row">
            <div class="col-lg-12">
              <div class="card-body">
                <button type="button" class="btn btn-primary me-2 tombol-tambah-kategori">
                    <span class="tf-icons bx bx-plus"></span> Tambah Data
                </button>
              </div>
              <div class="card-body">
                <div class="card-datatable table-responsive pt-0" id="tampilkan_data_kategori">
                  <table class="table table-striped" id="tabel_kategori">
                    <thead>
                        <tr>
                            <th class="col-md-1">No</th>
                            <th class="col-md-5">Kategori</th>
                            <th class="col-md-2">Aksi</th>
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
      $(document).ready(function() {
          $('#tabel_kategori').DataTable({
            responsive: true,
            processing: true,
            serverSide: true,
            autoWidth: false,
            ajax: {
                url: '{{ route('kategori.data') }}',
            },
            columns: [
              {   data: 'DT_RowIndex',
                  name: 'DT_RowIndex',
                  orderable: false,
                  searchable: false,
              },
              {data: 'nama_kategori', name: 'nama_kategori'},
              {data: 'action', name: 'action'}
            ]
          });
      });

      // GLOBAL SETUP 
          $.ajaxSetup({
              headers: {
                  'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              }
          });

      //proses menambahkan data kategori

          $('body').on('click', '.tombol-tambah-kategori', function(e) {
              $('.tombol-simpan-tambah-kategori').removeClass('d-none');
              e.preventDefault();
              $('#KategoriModal').modal('show');
              $('.tombol-simpan-tambah-kategori').click(function() {
                   simpan();
              });
          });


      //proses edit data kategori    

          $('body').on('click', '.tombol-edit-kategori', function(e) {
              $('.tombol-simpan-edit-kategori').removeClass('d-none');
              e.preventDefault();
              var id = $(this).data('id');
              $.ajax({
                  url: 'kategoriAjax/' + id + '/edit',
                  type: 'GET',
                  success: function(response) {
                      $('#KategoriModal').modal('show');
                      $('#nama_kategori').val(response.result.nama_kategori);
                      console.log(response.result);
                      $('.tombol-simpan-edit-kategori').click(function() {
                          simpan(id);
                      });
                  }
              });
          });

      //proses hapus data kategori 

          // $('body').on('click', '.tombol-hapus-kategori', function(e) {
          //     if (confirm('Yakin mau hapus data ini?') == true) {
          //         var id = $(this).data('id');
          //         $.ajax({
          //             url: 'kategoriAjax/' + id,
          //             type: 'DELETE',
          //         });
          //         $('#tabel_kategori').DataTable().ajax.reload();
          //     }
          // });

          $('body').on('click', '.tombol-hapus-kategori', function(e) {
                  e.preventDefault();
                  Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    customClass: {
                        confirmButton: "btn btn-primary me-3",
                        cancelButton: "btn btn-label-secondary"
                    },
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      var id = $(this).data('id');
                      $.ajax({
                          url: 'kategoriAjax/' + id,
                          type: 'DELETE',
                      });
                      Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    }
                    $('#tabel_kategori').DataTable().ajax.reload();
                  })
          });

      // fungsi simpan dan update
      
          function simpan(id = '') {
              if (id == '') {
                  var var_url = 'kategoriAjax';
                  var var_type = 'POST';
              } else {
                  var var_url = 'kategoriAjax/' + id;
                  var var_type = 'PUT';
              }
              $.ajax({
                  url: var_url,
                  type: var_type,
                  data: {
                      nama_kategori: $('#nama_kategori').val()
                  },
                  success: function(response) {
                      if (response.errors) {
                          console.log(response.errors);
                          $('.alert-danger').removeClass('d-none');
                          $('.alert-danger').html("<ul>");
                          $.each(response.errors, function(key, value) {
                              $('.alert-danger').find('ul').append("<li>" + value +
                                  "</li>");
                          });
                          $('.alert-danger').append("</ul>");
                      } else {
                          console.clear();
                          $('.alert-danger').addClass('d-none');
                          $('.alert-success').removeClass('d-none');
                          $('.alert-success').html(response.success);
                      }
                      $('#tabel_kategori').DataTable().ajax.reload();
                  }
              });
          }

          $('#KategoriModal').on('hidden.bs.modal', function(e) {
              $(this).removeData();
              $('#nama_kategori').val('');

              $('.tombol-simpan-edit-kategori').addClass('d-none');
              $('.tombol-simpan-tambah-kategori').addClass('d-none');

              $('.alert-danger').addClass('d-none');
              $('.alert-danger').html('');

              $('.alert-success').addClass('d-none');
              $('.alert-success').html('');
          });
</script>   
@endpush
