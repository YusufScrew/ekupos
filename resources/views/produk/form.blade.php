{{-- add new employee modal start --}}
<div class="modal fade" id="ProdukModal" tabindex="-1" aria-labelledby="exampleModalLabel"
  data-bs-backdrop="static" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Tambah Produk</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
        @csrf
        <div class="modal-body p-4 bg-light">
          <div class="alert alert-danger d-none" role="alert"></div>
          <div class="alert alert-success d-none" role="alert"></div>
          <div class="row mb-3">
            <label class="col-sm-3 col-form-label" for="nama_produk">Nama Produk</label>
            <div class="col-sm-9">
                <input type="text" name="nama_produk" id="nama_produk" class="form-control" placeholder="Nama Produk">
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-3 col-form-label" for="kategori">Kategori</label>
            <div class="col-sm-9">
                <select name="id_kategori" id="id_kategori" class="form-control">
                    <option value="">Pilih Kategori</option>
                    @foreach ($kategori as $item)
                    <option value="{{ $item->id_kategori }}">{{ $item->nama_kategori }}</option>
                    @endforeach
                </select>
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-3 col-form-label" for="merek">Merek</label>
            <div class="col-sm-9">
                <input type="text" name="merek" id="merek" class="form-control" placeholder="Merek">
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-3 col-form-label" for="harga_beli">Harga Beli</label>
            <div class="col-sm-9">
                <input type="number" name="harga_beli" id="harga_beli" class="form-control" placeholder="Harga Beli">
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-3 col-form-label" for="harga_Jual">Harga Jual</label>
            <div class="col-sm-9">
                <input type="number" name="harga_jual" id="harga_jual" class="form-control" placeholder="Harga Jual">
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-3 col-form-label" for="stok">Diskon</label>
            <div class="col-sm-9">
                <input type="number" name="diskon" id="diskon" class="form-control" value="0">
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-3 col-form-label" for="stok">Stok</label>
            <div class="col-sm-9">
                <input type="number" name="stok" id="stok" class="form-control" placeholder="Stok">
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary tombol-simpan-tambah-produk d-none">Tambah Produk</button>
          <button type="button" class="btn btn-primary tombol-simpan-edit-produk d-none">Simpan Produk</button>
        </div>
    </div>
  </div>
</div>
{{-- add new employee modal end --}}

