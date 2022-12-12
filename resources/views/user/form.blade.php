{{-- add new employee modal start --}}
<div class="modal fade" id="modal-form" tabindex="-1" aria-labelledby="exampleModalLabel"
  data-bs-backdrop="static" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form action="" method="post" class="needs-validation" novalidate>
          @csrf
          @method('post')
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Tambah User</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
          <div class="modal-body p-4 bg-light">
            <div class="row mb-3">
              <label class="col-sm-3 col-form-label" for="name">Username</label>
              <div class="col-sm-9">
                <div class="input-group input-group-merge">
                  <input type="text" name="name" id="name" class="form-control" placeholder="Username" required>
                  <div class="valid-feedback">
                      Username looks good!
                  </div>
                  <div class="invalid-feedback">
                      Username is required!
                  </div>
                </div>  
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-3 col-form-label" for="email">E-mail</label>
              <div class="col-sm-9">
                <div class="input-group input-group-merge">
                  <input type="email" name="email" id="email" class="form-control" placeholder="E-mail" required>
                <div class="invalid-feedback">
                    Please provide a valid email!
                </div>
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-3 col-form-label" for="password">Password</label>
              <div class="col-sm-9">
                <div class="input-group input-group-merge">
                  <input type="password" name="password" id="password" class="form-control" placeholder="Password" required minlength="6">
                  <div class="invalid-feedback">
                    The minimum password must contain 6 characters!
                </div>
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-3 col-form-label" for="password_confirmation">Konfirmasi Password</label>
              <div class="col-sm-9">
                <div class="input-group input-group-merge">
                  <input type="password" name="password_confirmation" id="confirmpassword" class="form-control" placeholder="Konfirmasi Password">
                </div>
                <div class="form-text confirm-message"></div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="" class="btn btn-primary tombol-simpan-tambah-user">Simpan</button>
          </div>
        </form>
      </div>
  </div>
</div>
{{-- add new employee modal end --}}

