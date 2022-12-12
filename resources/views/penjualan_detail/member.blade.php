{{-- add new employee modal start --}}
<div class="modal fade" id="MemberModal" tabindex="-1" aria-labelledby="exampleModalLabel"
  data-bs-backdrop="static" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Pilih Member</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
          <div class="modal-body p-4 bg-light">
            <table class="table table-striped" id="tabel_member">
              <thead>
                  <tr>
                      <th class="col">No</th>   
                      <th class="col">Nama Member</th>
                      <th class="col">No Telepon</th>
                      <th class="col">Alamat</th>
                      <th class="col">Aksi</th>
                  </tr>
              </thead>
              <tbody>
                @foreach ($member as $key => $item)
                  <tr>
                      <td width="5%">{{ $key+1 }}</td>
                      <td>{{ $item->nama_member }}</td>
                      <td>{{ $item->telepon }}</td>
                      <td>{{ $item->alamat }}</td>
                      <td>
                        <a href="#" class="btn btn-primary btn-xs btn-flat"
                          onclick="pilihMember('{{ $item->id_member }}', '{{ $item->kode_member }}')">
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

