@extends('layouts.master')

@section('title')
    Pengeluaran
@endsection

@section('content')
@includeIf('pengeluaran.form')  
  <div class="container-xxl flex-grow-1 container-p-y">
    <div class="row">
      <div class="col-lg-12 mb-4 order-0">
        <div class="card">
          <div class="d-flex align-items-end row">
            <div class="col-12 col-lg-12">
              <div class="card-body">
                <div class="demo-inline-spacing">
                    <button type="button" class="btn btn-primary me-2 tombol-tambah-pengeluaran">
                        <span class="tf-icons bx bx-plus"></span> Tambah Data Pengeluaran
                    </button>
                </div>
              </div>
              <div class="card-body">
                <div class="card-datatable table-responsive pt-0">
                        @csrf
                        <table class="table table-striped" id="tabel_pengeluaran">
                            <thead>
                                <tr>
                                    <th class="col">No</th>   
                                    <th class="col">Tanggal</th>
                                    <th class="col">Deskripsi</th>
                                    <th class="col">Nominal</th>
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
      $(document).ready(function() {
          $('#tabel_pengeluaran').DataTable({
            responsive: true,
            processing: true,
            serverSide: true,
            autoWidth: false,
            ajax: {
                url: '{{ route('pengeluaran.data') }}',
            },
            columns: [
              {   data: 'DT_RowIndex',
                  name: 'DT_RowIndex',
                  orderable: false,
                  searchable: false,
              },
              {data: 'created_at', name: 'created_at'},
              {data: 'deskripsi', name: 'deskripsi'},
              {data: 'nominal', name: 'nominal'},
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

      //proses menambahkan data produk

          $('body').on('click', '.tombol-tambah-pengeluaran', function(e) {
              $('.tombol-simpan-tambah-pengeluaran').removeClass('d-none');
              e.preventDefault();
              $('#PengeluaranModal').modal('show');
              $('.tombol-simpan-tambah-pengeluaran').click(function() {
                   simpan();
              });
          });


      //proses edit data produk   

          $('body').on('click', '.tombol-edit-pengeluaran', function(e) {
              $('.tombol-simpan-edit-pengeluaran').removeClass('d-none');
              e.preventDefault();
              var id = $(this).data('id');
              $.ajax({
                  url: 'pengeluaran/' + id + '/edit',
                  type: 'GET',
                  success: function(response) {
                      $('#PengeluaranModal').modal('show');
                      $('#created_at').val(response.result.created_at);
                      $('#deskripsi').val(response.result.deskripsi);
                      $('#nominal').val(response.result.nominal);
                      console.log(response.result);
                      $('.tombol-simpan-edit-pengeluaran').click(function() {
                          simpan(id);
                      });
                  }
              });
          });

      //proses hapus data produk

          $('body').on('click', '.tombol-hapus-pengeluaran', function(e) {
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
                          url: 'pengeluaran/' + id,
                          type: 'DELETE',
                      });
                      Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    }
                    $('#tabel_pengeluaran').DataTable().ajax.reload();
                  })
          });

      // fungsi simpan dan update
      
          function simpan(id = '') {
              if (id == '') {
                  var var_url = '/pengeluaran';
                  var var_type = 'POST';
              } else {
                  var var_url = '/pengeluaran/' + id;
                  var var_type = 'PUT';
              }
              $.ajax({
                  url: var_url,
                  type: var_type,
                  data: {
                      created_at: $('#created_at').val(),
                      deskripsi: $('#deskripsi').val(),
                      nominal: $('#nominal').val()
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
                        //   console.clear();
                          $('.alert-danger').addClass('d-none');
                          $('.alert-success').removeClass('d-none');
                          $('.alert-success').html(response.success);
                      }
                      $('#tabel_pengeluaran').DataTable().ajax.reload();
                  }
              });
          }

          $('#PengeluaranModal').on('hidden.bs.modal', function(e) {
              $(this).removeData();
              $('#created_at').val('');
              $('#deskripsi').val('');
              $('#nominal').val('');

              $('.tombol-simpan-edit-pengeluaran').addClass('d-none');
              $('.tombol-simpan-tambah-pengeluaran').addClass('d-none');

              $('.alert-danger').addClass('d-none');
              $('.alert-danger').html('');

              $('.alert-success').addClass('d-none');
              $('.alert-success').html('');
          });

          
</script>   
@endpush
