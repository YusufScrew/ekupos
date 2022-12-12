{{-- add new employee modal start --}}
<div class="modal fade" id="modal-periode" tabindex="-1" aria-labelledby="exampleModalLabel"
  data-bs-backdrop="static" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form action="{{ route('laporan.index') }}" method="get" data-toggle="validator" class="form-horizontal">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Periode Laporan</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
          <div class="modal-body p-4 bg-light">
            <div class="row mb-3">
              <label class="col-sm-3 col-form-label" for="tanggal_awal">Tanggal Awal</label>
              <div class="col-sm-9">
                <div class="input-group input-group-merge">
                  <input type="text" name="tanggal_awal" id="tanggal_awal" class="form-control datepicker" autofocus required
                        value="{{ request('tanggal_awal') }}"
                        style="border-radius: 0 !important;"/>
                </div>  
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-3 col-form-label" for="harga_beli">Tanggal Akhir</label>
              <div class="col-sm-9">
                <div class="input-group input-group-merge">
                  <input type="text" name="tanggal_akhir" id="tanggal_akhir" class="form-control datepicker" required
                        value="{{ request('tanggal_akhir') ?? date('Y-m-d') }}"
                        style="border-radius: 0 !important;"/>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button class="btn btn-primary">Simpan</button>
          </div>
        </form>
      </div>
  </div>
</div>
{{-- add new employee modal end --}}

