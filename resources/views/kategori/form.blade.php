{{-- add new employee modal start --}}
<div class="modal fade" id="KategoriModal" tabindex="-1" aria-labelledby="exampleModalLabel"
  data-bs-backdrop="static" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Tambah Kategori</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
        @csrf
        <div class="modal-body p-4 bg-light">
          <div class="alert alert-danger d-none" role="alert"></div>
          <div class="alert alert-success d-none" role="alert"></div>
          <div class="my-2">
            <label for="kategori">Kategori</label>
            <input type="text" name="nama_kategori" id="nama_kategori" class="form-control" placeholder="Kategori">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary tombol-simpan-tambah-kategori d-none">Tambah Kategori</button>
          <button type="button" class="btn btn-primary tombol-simpan-edit-kategori d-none">Update Kategori</button>
        </div>
    </div>
  </div>
</div>
{{-- add new employee modal end --}}

