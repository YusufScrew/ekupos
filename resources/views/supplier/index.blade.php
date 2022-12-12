@extends('layouts.master')

@section('title')
    Supplier
@endsection

@section('content')
@includeIf('supplier.form')  
  <div class="container-xxl flex-grow-1 container-p-y">
    <div class="row">
      <div class="col-lg-12 mb-4 order-0">
        <div class="card">
          <div class="d-flex align-items-end row">
            <div class="col-12 col-lg-12">
              <div class="card-body">
                <div class="demo-inline-spacing">
                    <button type="button" class="btn btn-primary me-2 tombol-tambah-supplier">
                        <span class="tf-icons bx bx-plus"></span> Tambah Data Supplier
                    </button>
                </div>
              </div>
              <div class="card-body">
                <div class="card-datatable table-responsive pt-0">
                        @csrf
                        <table class="table table-striped" id="tabel_supplier">
                            <thead>
                                <tr>
                                    <th class="col">No</th>   
                                    <th class="col">Nama Supplier</th>
                                    <th class="col">Alamat</th>
                                    <th class="col">No Telepon</th>
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
          $('#tabel_supplier').DataTable({
            responsive: true,
            processing: true,
            serverSide: true,
            autoWidth: false,
            ajax: {
                url: '{{ route('supplier.data') }}',
            },
            columns: [
              {   data: 'DT_RowIndex',
                  name: 'DT_RowIndex',
                  orderable: false,
                  searchable: false,
              },
              {data: 'nama_supplier', name: 'nama_supplier'},
              {data: 'alamat', name: 'alamat'},
              {data: 'telepon', name: 'telepon'},
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

          $('body').on('click', '.tombol-tambah-supplier', function(e) {
              $('.tombol-simpan-tambah-supplier').removeClass('d-none');
              e.preventDefault();
              $('#SupplierModal').modal('show');
              $('.tombol-simpan-tambah-supplier').click(function() {
                   simpan();
              });
          });


      //proses edit data produk   

          $('body').on('click', '.tombol-edit-supplier', function(e) {
              $('.tombol-simpan-edit-supplier').removeClass('d-none');
              e.preventDefault();
              var id = $(this).data('id');
              $.ajax({
                  url: 'supplier/' + id + '/edit',
                  type: 'GET',
                  success: function(response) {
                      $('#SupplierModal').modal('show');
                      $('#nama_supplier').val(response.result.nama_supplier);
                      $('#alamat').val(response.result.alamat);
                      $('#telepon').val(response.result.telepon);
                      console.log(response.result);
                      $('.tombol-simpan-edit-supplier').click(function() {
                          simpan(id);
                      });
                  }
              });
          });

      //proses hapus data produk

          $('body').on('click', '.tombol-hapus-supplier', function(e) {
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
                          url: 'supplier/' + id,
                          type: 'DELETE',
                      });
                      Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    }
                    $('#tabel_supplier').DataTable().ajax.reload();
                  })
          });

      // fungsi simpan dan update
      
          function simpan(id = '') {
              if (id == '') {
                  var var_url = '/supplier';
                  var var_type = 'POST';
              } else {
                  var var_url = '/supplier/' + id;
                  var var_type = 'PUT';
              }
              $.ajax({
                  url: var_url,
                  type: var_type,
                  data: {
                      nama_supplier: $('#nama_supplier').val(),
                      alamat: $('#alamat').val(),
                      telepon: $('#telepon').val()
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
                      $('#tabel_supplier').DataTable().ajax.reload();
                  }
              });
          }

          $('#SupplierModal').on('hidden.bs.modal', function(e) {
              $(this).removeData();
              $('#nama_supplier').val('');
              $('#alamat').val('');
              $('#telepon').val('');

              $('.tombol-simpan-edit-supplier').addClass('d-none');
              $('.tombol-simpan-tambah-supplier').addClass('d-none');

              $('.alert-danger').addClass('d-none');
              $('.alert-danger').html('');

              $('.alert-success').addClass('d-none');
              $('.alert-success').html('');
          });

          
</script>   
@endpush
