{{-- add new employee modal start --}}
<div class="modal fade" id="PengeluaranModal" tabindex="-1" aria-labelledby="exampleModalLabel"
  data-bs-backdrop="static" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form action="" method="post">
          @csrf
          @method('post')
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Tambah Pengeluaran</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
          <div class="modal-body p-4 bg-light">
            <div class="alert alert-danger d-none" role="alert"></div>
            <div class="alert alert-success d-none" role="alert"></div>
            <div class="row mb-3">
              <label class="col-sm-3 col-form-label" for="alamat">Deskripsi</label>
              <div class="col-sm-9">
                <div class="input-group input-group-merge">
                  <span class="input-group-text"><i class="bx bx-message-detail"></i></span>
                  <input type="text" name="deskripsi" id="deskripsi" class="form-control" placeholder="Deskripsi">
                </div>  
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-3 col-form-label" for="harga_beli">Nominal</label>
              <div class="col-sm-9">
                <div class="input-group input-group-merge">
                  <span class="input-group-text"><i class="bx bx-purchase-tag"></i></span>
                  <input type="number" name="nominal" id="nominal" class="form-control" placeholder="Nominal">
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary tombol-simpan-tambah-pengeluaran d-none">Tambah Pengeluaran</button>
            <button type="button" class="btn btn-primary tombol-simpan-edit-pengeluaran d-none">Simpan Data Pengeluaran</button>
          </div>
        </form>
      </div>
  </div>
</div>
{{-- add new employee modal end --}}

