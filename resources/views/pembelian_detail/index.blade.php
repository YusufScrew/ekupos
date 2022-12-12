@extends('layouts.master')

@section('title')
    Transaksi Pembelian
@endsection

@push('css')
<style>
    .tampil-bayar {
        font-size: 4em;
        color: #fff;
        text-align: center;
        height: 100px;
    }
    .tampil-terbilang {
        padding: 10px;
        background: #f0f0f0;
        color: #000;
    }
    .tabel-pembelian tbody tr:last-child {
        display: none;
    }
    @media(max-width: 768px) {
        .tampil-bayar {
            font-size: 3em;
            height: 70px;
            padding-top: 5px;
        }
    }
</style>
@endpush

@section('content')
@includeIf('pembelian_detail.produk')  
  <div class="container-xxl flex-grow-1 container-p-y">
    <div class="row">
      <div class="col-lg-12 mb-4 order-0">
        <div class="card">
          <div class="d-flex align-items-end row">
            <div class="col-12 col-lg-12">
              <div class="card-body">
                  <table>
                    <tr>
                        <td>Supplier</td>
                        <td>: {{ $supplier->nama_supplier }}</td>
                    </tr>
                    <tr>
                        <td>Telepon</td>
                        <td>: {{ $supplier->telepon }}</td>
                    </tr>
                    <tr>
                        <td>Alamat</td>
                        <td>: {{ $supplier->alamat }}</td>
                    </tr>
                  </table>
                </div>
                <div class="card-body">
                <div class="card-datatable pt-0">
                   <form class="form-produk">    
                      @csrf
                      <div class="row mb-3">
                        <label for="kode_produk" class="col-lg-2">Kode Produk</label>
                          <div class="col-lg-5">
                              <div class="input-group">
                                  <input type="hidden" name="id_pembelian" id="id_pembelian" value="{{ $id_pembelian }}">
                                  <input type="hidden" name="id_produk" id="id_produk">
                                  <input type="text" class="form-control" name="kode_produk" id="kode_produk">
                                  <span class="input-group-btn">
                                      <button onclick="tampilProduk()" class="btn btn-primary" type="button"><i class="bx bx-right-arrow-circle"></i></button>
                                  </span>
                              </div>
                          </div>
                      </div>
                   </form>
                </div>
                <div class="card-datatable pt-0">
                  <div class="row mb-3">
                      <table class="table table-striped tabel-pembelian">
                          <thead>
                              <tr>
                                  <th class="col">No</th>
                                  <th class="col">Kode Produk</th>   
                                  <th class="col">Nama Produk</th>
                                  <th class="col">Harga</th>
                                  <th class="col" width="15%">Jumlah Item</th>
                                  <th class="col">Sub Total</th>
                                  <th class="col">Aksi</th>
                              </tr>
                          </thead>
                      </table> 
                  </div>      
                  <div class="row mb-3">
                      <div class="col-lg-8">
                                <div class="tampil-bayar bg-primary"></div>
                                <div class="tampil-terbilang"></div>
                      </div>
                      <div class="col-lg-4">
                                <form action="{{ route('pembelian.store') }}" class="form-pembelian" method="post">
                                    @csrf
                                    <input type="hidden" name="id_pembelian" value="{{ $id_pembelian }}">
                                    <input type="hidden" name="total" id="total">
                                    <input type="hidden" name="total_item" id="total_item">
                                    <input type="hidden" name="bayar" id="bayar">
                    
                                    <div class="row mb-3">
                                      <label class="col-sm-3 col-form-label fw-bold" for="nama_member">Total</label>
                                      <div class="col-sm-7">
                                        <div class="input-group input-group-merge">
                                          <input type="text" id="totalrp" class="form-control" readonly>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row mb-3">
                                      <label class="col-sm-3 col-form-label fw-bold" for="nama_member">Diskon</label>
                                      <div class="col-sm-7">
                                        <div class="input-group input-group-merge">
                                          <input type="number" name="diskon" id="diskon" class="form-control" value="{{ $diskon }}">
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row mb-3">
                                      <label class="col-sm-3 col-form-label fw-bold" for="nama_member">Bayar</label>
                                      <div class="col-sm-7">
                                        <div class="input-group input-group-merge">
                                          <input type="text" id="bayarrp" class="form-control">
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row mb-3">
                                      <div class="card text-end mb-3">
                                        <button type="submit" class="btn btn-primary pull-right btn-simpan"><i class="bx bx-save"></i> Simpan Transaksi</button>
                                      </div>
                                    </div>
                                </form>
                      </div>
                  </div>
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
     let table, table2;

      $(document).ready(function() {
      table = $('.tabel-pembelian').DataTable({
            responsive: true,
            processing: true,
            serverSide: true,
            autoWidth: false,
            ajax: {
              url: '{{ route('pembelian_detail.data', $id_pembelian) }}',
            },
            columns: [
                {data: 'DT_RowIndex', searchable: false, sortable: false},
                {data: 'kode_produk'},
                {data: 'nama_produk'},
                {data: 'harga_beli'},
                {data: 'jumlah'},
                {data: 'subtotal'},
                {data: 'aksi', searchable: false, sortable: false},
            ],
            dom: 'Brt',
            bSort: false,
            paginate: false
          })
          .on('draw.dt', function () {
            loadForm($('#diskon').val());
          });


      table2 = $('#tabel_produk').DataTable();

      $(document).on('input', '.quantity', function () {
            let id = $(this).data('id');
            let jumlah = parseInt($(this).val());
            if (jumlah < 1) {
                $(this).val(1);
                alert('Jumlah item tidak boleh kurang dari 1');
                return;
            }
            if (jumlah > 10000) {
                $(this).val(10000);
                alert('Jumlah item tidak boleh lebih dari 10000');
                return;
            }
            $.post(`{{ url('/pembelian_detail') }}/${id}`, {
                    '_token': $('[name=csrf-token]').attr('content'),
                    '_method': 'put',
                    'jumlah': jumlah
                })
                .done(response => {
                    $(this).on('mouseout', function () {
                      table.ajax.reload(() => loadForm($('#diskon').val()));       
                    });
                })
                .fail(errors => {
                    alert('Tidak dapat menyimpan data');
                    return;
                });
        });
        $(document).on('input', '#diskon', function () {
            if ($(this).val() == "") {
                $(this).val(0).select();
            }
            loadForm($(this).val());
        });
      });

      $(document).on('input', '#diskon', function () {
          if ($(this).val() == "") {
              $(this).val(0).select();
          }
          loadForm($(this).val());
      });

      $('.btn-simpan').on('click', function () {
          $('.form-pembelian').submit();
      });

      // GLOBAL SETUP 
          $.ajaxSetup({
              headers: {
                  'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              }
          });

      //proses menambahkan data produk

          function pilihProduk(id, kode) {
              $('#id_produk').val(id);
              $('#kode_produk').val(kode);
              hideProduk();
              tambahProduk();
          }

      //function tampilProduk

          function tampilProduk() {
              $('#ProdukModal').modal('show');
          }

      //function hideProduk

          function hideProduk() {
              $('#ProdukModal').modal('hide');
          }

      //function tambahProduk    

          function tambahProduk() {
              $.post('{{ route('pembelian_detail.store') }}', $('.form-produk').serialize())
                  .done(response => {
                      $('#kode_produk').focus();
                      table.ajax.reload(() => loadForm($('#diskon').val()));
                  })
                  .fail(errors => {
                      alert('Tidak dapat menyimpan data');
                      return;
                  });
          }

      //proses hapus data produk

          function deleteData(url) {
            if (confirm('Yakin ingin menghapus data terpilih?')) {
                $.post(url, {
                        '_token': $('[name=csrf-token]').attr('content'),
                        '_method': 'delete'
                    })
                    .done((response) => {
                      table.ajax.reload(() => loadForm($('#diskon').val()));
                    })
                    .fail((errors) => {
                        alert('Tidak dapat menghapus data');
                        return;
                    });
            }
          }

          function loadForm(diskon = 0) {
              $('#total').val($('.total').text());
              $('#total_item').val($('.total_item').text());
              $.get(`{{ url('/pembelian_detail/loadform') }}/${diskon}/${$('.total').text()}`)
                  .done(response => {
                      $('#totalrp').val('Rp. '+ response.totalrp);
                      $('#bayarrp').val('Rp. '+ response.bayarrp);
                      $('#bayar').val(response.bayar);
                      $('.tampil-bayar').text('Rp. '+ response.bayarrp);
                      $('.tampil-terbilang').text(response.terbilang);
                  })
                  .fail(errors => {
                      alert('Tidak dapat menampilkan data');
                      return;
                  })
          }


          
</script>   
@endpush
