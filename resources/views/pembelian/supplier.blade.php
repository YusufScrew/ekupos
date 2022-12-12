{{-- add new employee modal start --}}
<div class="modal fade" id="SupplierModal" tabindex="-1" aria-labelledby="exampleModalLabel"
  data-bs-backdrop="static" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Pilih Supplier</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
          <div class="modal-body p-4 bg-light">
            <table class="table table-striped" id="tabel_supplier">
              <thead>
                  <tr>
                      <th class="col">No</th>   
                      <th class="col">Nama Supplier</th>
                      <th class="col">Alamat</th>
                      <th class="col">No Telepon</th>
                      <th class="col">Aksi</th>
                  </tr>
              </thead>
              <tbody>
                @foreach ($supplier as $key => $item)
                  <tr>
                      <td>{{ $key+1 }}</td>
                      <td>{{ $item->nama_supplier }}</td>
                      <td>{{ $item->alamat }}</td>
                      <td>{{ $item->telepon }}</td>
                      <td>
                        <a href="{{ route('pembelian.create', $item->id_supplier) }}" class="btn btn-primary btn-xs btn-flat">
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

