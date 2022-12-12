{{-- add new employee modal start --}}
<div class="modal fade" id="ProdukModal" tabindex="-1" aria-labelledby="exampleModalLabel"
  data-bs-backdrop="static" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Pilih Produk</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
          <div class="modal-body p-4 bg-light">
            <table class="table table-striped" id="tabel_produk">
              <thead>
                  <tr>
                      <th class="col" width="5%">No</th>   
                      <th class="col">Kode Produk</th>
                      <th class="col">Nama Produk</th>
                      <th class="col">Harga Beli</th>
                      <th class="col">Aksi</th>
                  </tr>
              </thead>
              <tbody>
                @foreach ($produk as $key => $item)
                  <tr>
                      <td width="5%">{{ $key+1 }}</td>
                      <td><span class="badge bg-success">{{ $item->kode_produk }}</span></td>
                      <td>{{ $item->nama_produk }}</td>
                      <td>{{ $item->harga_beli }}</td>
                      <td>
                        <a href="#" class="btn btn-dark btn-xs"
                          onclick="pilihProduk('{{ $item->id_produk }}', '{{ $item->kode_produk }}')">
                          <span class="tf-icons bx bx-check-circle"></span>
                          Pilih
                        </a>
                      </td>
                  </tr>                     
                @endforeach
              </tbody>
          </table>  
          </div>
      </div>
  </div>
</div>
{{-- add new employee modal end --}}

