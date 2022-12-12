@extends('layouts.master')

@section('title')
    Produk
@endsection

@section('content')
@includeIf('produk.form')  
  <div class="container-xxl flex-grow-1 container-p-y">
    <div class="row">
      <div class="col-lg-12 mb-4 order-0">
        <div class="card">
          <div class="d-flex align-items-end row">
            <div class="col-12 col-lg-12">
              <div class="card-body">
                <div class="demo-inline-spacing">
                    <button type="button" class="btn btn-primary me-2 tombol-tambah-produk">
                        <span class="tf-icons bx bx-plus"></span> Tambah Data
                    </button>
                    <button onclick="deleteSelected('{{ route('produk.delete_selected') }}')" class="btn btn-danger me-2">
                        <span class="tf-icons bx bx-trash"></span> Hapus Data
                    </button>
                    <button onclick="cetakBarcode('{{ route('produk.cetak_barcode') }}')" class="btn btn-dark me-2 tombol-cetak-barcode-produk">
                        <span class="tf-icons bx bx-barcode"></span> Cetak Barcode
                    </button>
                </div>
              </div>
              <div class="card-body">
                <div class="card-datatable table-responsive pt-0" id="tampilkan_data_kategori">
                    <form action="" method="post" class="form-produk">
                        @csrf
                        <table class="table table-striped" id="tabel_produk">
                            <thead>
                                <tr>
                                    <th>
                                        <input type="checkbox" name="select_all" id="select_all">
                                    </th> 
                                    <th class="col">No</th>   
                                    <th class="col">Kode Produk</th>
                                    <th class="col">Nama</th>
                                    <th class="col">Kategori</th>
                                    <th class="col">Merek</th>
                                    <th class="col">Harga Beli</th>
                                    <th class="col">Harga Jual</th>
                                    <th class="col">Diskon</th>
                                    <th class="col">Stok</th>
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
          $('#tabel_produk').DataTable({
            responsive: true,
            processing: true,
            serverSide: true,
            autoWidth: false,
            ajax: {
                url: '{{ route('produk.data') }}',
            },
            columns: [
              {data: 'select_all', name: 'select_all', searchable: false, sortable: false},
              {   data: 'DT_RowIndex',
                  name: 'DT_RowIndex',
                  orderable: false,
                  searchable: false,
              },
              {data: 'kode_produk', name: 'kode_produk'},
              {data: 'nama_produk', name: 'nama_produk'},
              {data: 'nama_kategori'},
              {data: 'merek', name: 'merek'},
              {data: 'harga_beli', name: 'harga_beli'},
              {data: 'harga_jual', name: 'harga_jual'},
              {data: 'diskon', name: 'diskon'},
              {data: 'stok', name: 'stok'},
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

          $('body').on('click', '.tombol-tambah-produk', function(e) {
              $('.tombol-simpan-tambah-produk').removeClass('d-none');
              e.preventDefault();
              $('#ProdukModal').modal('show');
              $('.tombol-simpan-tambah-produk').click(function() {
                   simpan();
              });
          });


      //proses edit data produk   

          $('body').on('click', '.tombol-edit-produk', function(e) {
              $('.tombol-simpan-edit-produk').removeClass('d-none');
              e.preventDefault();
              var id = $(this).data('id');
              $.ajax({
                  url: 'produk/' + id + '/edit',
                  type: 'GET',
                  success: function(response) {
                      $('#ProdukModal').modal('show');
                      $('#nama_produk').val(response.result.nama_produk);
                      $('#id_kategori').val(response.result.id_kategori);
                      $('#merek').val(response.result.merek);
                      $('#harga_beli').val(response.result.harga_beli);
                      $('#harga_jual').val(response.result.harga_jual);
                      $('#diskon').val(response.result.diskon);
                      $('#stok').val(response.result.stok);
                      console.log(response.result);
                      $('.tombol-simpan-edit-produk').click(function() {
                          simpan(id);
                      });
                  }
              });
          });

      //proses hapus data produk

          $('body').on('click', '.tombol-hapus-produk', function(e) {
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
                          url: 'produk/' + id,
                          type: 'DELETE',
                      });
                      Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    }
                    $('#tabel_produk').DataTable().ajax.reload();
                  })
          });

      // fungsi simpan dan update
      
          function simpan(id = '') {
              if (id == '') {
                  var var_url = '/produk';
                  var var_type = 'POST';
              } else {
                  var var_url = '/produk/' + id;
                  var var_type = 'PUT';
              }
              $.ajax({
                  url: var_url,
                  type: var_type,
                  data: {
                      nama_produk: $('#nama_produk').val(),
                      id_kategori: $('#id_kategori').val(),
                      merek: $('#merek').val(),
                      harga_beli: $('#harga_beli').val(),
                      harga_jual: $('#harga_jual').val(),
                      diskon: $('#diskon').val(),
                      stok: $('#stok').val()
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
                      $('#tabel_produk').DataTable().ajax.reload();
                  }
              });
          }

          $('#ProdukModal').on('hidden.bs.modal', function(e) {
              $(this).removeData();
              $('#nama_produk').val('');
              $('#id_kategori').val('');
              $('#merek').val('');
              $('#harga_beli').val('');
              $('#harga_jual').val('');
              $('#diskon').val('0');
              $('#stok').val('');

              $('.tombol-simpan-edit-produk').addClass('d-none');
              $('.tombol-simpan-tambah-produk').addClass('d-none');

              $('.alert-danger').addClass('d-none');
              $('.alert-danger').html('');

              $('.alert-success').addClass('d-none');
              $('.alert-success').html('');
          });

          function deleteSelected(url) {
                if ($('input:checked').length > 1) {
                    if (confirm('Yakin ingin menghapus data terpilih?')) {
                        $.post(url, $('.form-produk').serialize())
                            .done((response) => {
                                $('#tabel_produk').DataTable().ajax.reload();
                            })
                            .fail((errors) => {
                                Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Tidak dapat menghapus data',
                                })
                                return;
                            });
                    }
                } else {
                    Swal.fire({
                    icon: 'info',
                    title: 'Oops...',
                    text: 'Pilih lebih dari 1 data yang akan dihapus!',
                    })
                    return;
                }
            }

            function cetakBarcode(url) {
                if ($('input:checked').length < 1) {
                    Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Pilih data yang akan dicetak!',
                    })
                    return;
                } else if ($('input:checked').length < 3) {
                    Swal.fire({
                    icon: 'info',
                    title: 'Oops...',
                    text: 'Pilih minimal 3 data untuk dicetak!',
                    })
                    return;
                } else {
                    $('.form-produk')
                        .attr('target', '_blank')
                        .attr('action', url)
                        .submit();
                }
            }
</script>   
@endpush
