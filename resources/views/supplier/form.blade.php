{{-- add new employee modal start --}}
<div class="modal fade" id="SupplierModal" tabindex="-1" aria-labelledby="exampleModalLabel"
  data-bs-backdrop="static" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form action="" method="post">
          @csrf
          @method('post')
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Tambah Supplier</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
          <div class="modal-body p-4 bg-light">
            <div class="alert alert-danger d-none" role="alert"></div>
            <div class="alert alert-success d-none" role="alert"></div>
            <div class="row mb-3">
              <label class="col-sm-3 col-form-label" for="nama_supplier">Nama Supplier</label>
              <div class="col-sm-9">
                <div class="input-group input-group-merge">
                  <span class="input-group-text"><i class="bx bx-user"></i></span>
                  <input type="text" name="nama_supplier" id="nama_supplier" class="form-control" placeholder="Nama Supplier">
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-3 col-form-label" for="alamat">Alamat</label>
              <div class="col-sm-9">
                <div class="input-group input-group-merge">
                  <span class="input-group-text"><i class="bx bx-map"></i></span>
                  <textarea name="alamat" id="alamat" class="form-control" placeholder="Alamat"></textarea>
                </div>  
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-3 col-form-label" for="harga_beli">No Telepon</label>
              <div class="col-sm-9">
                <div class="input-group input-group-merge">
                  <span class="input-group-text"><i class="bx bx-phone"></i></span>
                  <input type="number" name="telepon" id="telepon" class="form-control" placeholder="No Telepon">
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary tombol-simpan-tambah-supplier d-none">Tambah Supplier</button>
            <button type="button" class="btn btn-primary tombol-simpan-edit-supplier d-none">Simpan Data Supplier</button>
          </div>
        </form>
      </div>
  </div>
</div>
{{-- add new employee modal end --}}

