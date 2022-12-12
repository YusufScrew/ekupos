@extends('layouts.master')

@section('title')
    Member
@endsection

@section('content')
@includeIf('member.form')  
  <div class="container-xxl flex-grow-1 container-p-y">
    <div class="row">
      <div class="col-lg-12 mb-4 order-0">
        <div class="card">
          <div class="d-flex align-items-end row">
            <div class="col-12 col-lg-12">
              <div class="card-body">
                <div class="demo-inline-spacing">
                    <button type="button" class="btn btn-primary me-2 tombol-tambah-member">
                        <span class="tf-icons bx bx-plus"></span> Tambah Data
                    </button>
                </div>
              </div>
              <div class="card-body">
                <div class="card-datatable table-responsive pt-0">
                    <form action="" method="post" class="form-member">
                        @csrf
                        <table class="table table-striped" id="tabel_member">
                            <thead>
                                <tr>
                                    <th>
                                        <input type="checkbox" name="select_all" id="select_all">
                                    </th> 
                                    <th class="col">No</th>   
                                    <th class="col">Kode Member</th>
                                    <th class="col">Nama Member</th>
                                    <th class="col">Alamat</th>
                                    <th class="col">No Telepon</th>
                                    <th class="col">Aksi</th>
                                </tr>
                            </thead>
                        </table>
                    </form>    
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
          $('#tabel_member').DataTable({
            responsive: true,
            processing: true,
            serverSide: true,
            autoWidth: false,
            ajax: {
                url: '{{ route('member.data') }}',
            },
            columns: [
              {data: 'select_all', name: 'select_all', searchable: false, sortable: false},
              {   data: 'DT_RowIndex',
                  name: 'DT_RowIndex',
                  orderable: false,
                  searchable: false,
              },
              {data: 'kode_member', name: 'kode_member'},
              {data: 'nama_member', name: 'nama_member'},
              {data: 'alamat', name: 'alamat'},
              {data: 'telepon', name: 'telepon'},
              {data: 'action', name: 'action'}
            ]
          });

            $('[name=select_all]').on('click', function () {
                $(':checkbox').prop('checked', this.checked);
            });
      });

      // GLOBAL SETUP 
          $.ajaxSetup({
              headers: {
                  'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              }
          });

      //proses menambahkan data produk

          $('body').on('click', '.tombol-tambah-member', function(e) {
              $('.tombol-simpan-tambah-member').removeClass('d-none');
              e.preventDefault();
              $('#MemberModal').modal('show');
              $('.tombol-simpan-tambah-member').click(function() {
                   simpan();
              });
          });


      //proses edit data produk   

          $('body').on('click', '.tombol-edit-member', function(e) {
              $('.tombol-simpan-edit-member').removeClass('d-none');
              e.preventDefault();
              var id = $(this).data('id');
              $.ajax({
                  url: 'member/' + id + '/edit',
                  type: 'GET',
                  success: function(response) {
                      $('#MemberModal').modal('show');
                      $('#nama_member').val(response.result.nama_member);
                      $('#alamat').val(response.result.alamat);
                      $('#telepon').val(response.result.telepon);
                      console.log(response.result);
                      $('.tombol-simpan-edit-member').click(function() {
                          simpan(id);
                      });
                  }
              });
          });

      //proses hapus data produk

          $('body').on('click', '.tombol-hapus-member', function(e) {
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
                          url: 'member/' + id,
                          type: 'DELETE',
                      });
                      Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    }
                    $('#tabel_member').DataTable().ajax.reload();
                  })
          });

      // fungsi simpan dan update
      
          function simpan(id = '') {
              if (id == '') {
                  var var_url = '/member';
                  var var_type = 'POST';
              } else {
                  var var_url = '/member/' + id;
                  var var_type = 'PUT';
              }
              $.ajax({
                  url: var_url,
                  type: var_type,
                  data: {
                      nama_member: $('#nama_member').val(),
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
                          console.clear();
                          $('.alert-danger').addClass('d-none');
                          $('.alert-success').removeClass('d-none');
                          $('.alert-success').html(response.success);
                      }
                      $('#tabel_member').DataTable().ajax.reload();
                  }
              });
          }

          $('#MemberModal').on('hidden.bs.modal', function(e) {
              $(this).removeData();
              $('#nama_member').val('');
              $('#alamat').val('');
              $('#telepon').val('');

              $('.tombol-simpan-edit-member').addClass('d-none');
              $('.tombol-simpan-tambah-member').addClass('d-none');

              $('.alert-danger').addClass('d-none');
              $('.alert-danger').html('');

              $('.alert-success').addClass('d-none');
              $('.alert-success').html('');
          });


            function cetakKartu(url) {
                if ($('input:checked').length < 1) {
                    Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Pilih data yang akan dicetak!',
                    })
                    return;
                } else {
                    $('.form-member')
                        .attr('target', '_blank')
                        .attr('action', url)
                        .submit();
                }
            }
</script>   
@endpush
