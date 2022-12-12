<aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
          <div class="app-brand demo">
            <a href="{{ route('dashboard') }}" class="app-brand-link">
              <img src="{{ asset('img/ekupos1.png') }}" alt class="w-px-150 h-auto" />
            </a>

            <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
              <i class="bx bx-chevron-left bx-sm align-middle"></i>
            </a>
          </div>

          <div class="menu-inner-shadow"></div>

          <ul class="menu-inner py-1">
            <!-- Dashboard -->
            <li class="menu-item {{ request()->is('dashboard') ? 'active' : '' }}">
              <a href="{{ route('dashboard') }}" class="menu-link">
                <i class="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">Dashboard</div>
              </a>
            </li>

            @if (auth()->user()->level == 1)
                
            <!-- Master -->
            <li class="menu-header small text-uppercase">
              <span class="menu-header-text">Master</span>
            </li>
                <li class="menu-item {{ request()->is('kategori') ? 'active' : '' }}">
                <a href="{{ url('kategori') }}" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-cube"></i>
                    <div data-i18n="Analytics">Kategori</div>
                </a>
                </li>
                <li class="menu-item {{ request()->is('produk') ? 'active' : '' }}">
                <a href="{{ url('produk') }}" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-grid-alt"></i>
                    <div data-i18n="Analytics">Produk</div>
                </a>
                </li>
                <li class="menu-item {{ request()->is('member') ? 'active' : '' }}">
                <a href="{{ url('member') }}" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-id-card"></i>
                    <div data-i18n="Analytics">Member</div>
                </a>
                </li>
                <li class="menu-item {{ request()->is('supplier') ? 'active' : '' }}">
                <a href="{{ url('supplier') }}" class="menu-link">
                    <i class="menu-icon tf-icons bx bxs-truck"></i>
                    <div data-i18n="Analytics">Supplier</div>
                </a>
                </li>
            
            <!-- Transaksi -->
            <li class="menu-header small text-uppercase">
              <span class="menu-header-text">Transaksi</span>
            </li>
                <li class="menu-item {{ request()->is('pengeluaran') ? 'active' : '' }}">
                <a href="{{ url('pengeluaran') }}" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-money"></i>
                    <div data-i18n="Analytics">Pengeluaran</div>
                </a>
                </li>
                <li class="menu-item {{ request()->is('pembelian') ? 'active' : '' }}">
                <a href="{{ url('pembelian') }}" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-download"></i>
                    <div data-i18n="Analytics">Pembelian</div>
                </a>
                </li>
                <li class="menu-item {{ request()->is('transaksi.baru') ? 'active' : '' }}">
                  <a href="{{ route('transaksi.baru') }}" class="menu-link">
                      <i class="menu-icon tf-icons bx bxs-cart-add"></i>
                      <div data-i18n="Analytics">Transaksi Baru</div>
                  </a>
                </li>
                <li class="menu-item {{ request()->is('transaksi.index') ? 'active' : '' }}">
                <a href="{{ route('transaksi.index') }}" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-cart"></i>
                    <div data-i18n="Analytics">Transaksi Aktif</div>
                </a>
                </li>
                <li class="menu-item {{ request()->is('penjualan') ? 'active' : '' }}">
                  <a href="{{ route('penjualan.index') }}" class="menu-link">
                      <i class="menu-icon tf-icons bx bxs-book"></i>
                      <div data-i18n="Analytics">Data Penjualan</div>
                  </a>
                </li>
                

            <!-- Report -->
            <li class="menu-header small text-uppercase">
              <span class="menu-header-text">Report</span>
            </li>
                <li class="menu-item {{ request()->is('laporan') ? 'active' : '' }}">
                <a href="{{ route('laporan.index') }}" class="menu-link">
                    <i class="menu-icon tf-icons bx bxs-report"></i>
                    <div data-i18n="Analytics">Laporan</div>
                </a>
                </li> 
                
            <!-- System -->
            <li class="menu-header small text-uppercase">
              <span class="menu-header-text">System</span>
            </li>
            <li class="menu-item {{ request()->is('user') ? 'active' : '' }}">
                <a href="{{ route('user.index') }}" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-user"></i>
                    <div data-i18n="Analytics">User</div>
                </a>
                </li>   
                <li class="menu-item {{ request()->is('setting') ? 'active' : '' }}">
                <a href="{{ route('setting.index') }}" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-cog"></i>
                    <div data-i18n="Analytics">Pengaturan</div>
                </a>
                </li>  
            @else
            <li class="menu-header small text-uppercase">
              <span class="menu-header-text">Transaksi</span>
            </li>
            <li class="menu-item {{ request()->is('transaksi.baru') ? 'active' : '' }}">
              <a href="{{ route('transaksi.baru') }}" class="menu-link">
                  <i class="menu-icon tf-icons bx bxs-cart-add"></i>
                  <div data-i18n="Analytics">Transaksi Baru</div>
              </a>
            </li>
            <li class="menu-item {{ request()->is('transaksi.index') ? 'active' : '' }}">
            <a href="{{ route('transaksi.index') }}" class="menu-link">
                <i class="menu-icon tf-icons bx bx-cart"></i>
                <div data-i18n="Analytics">Transaksi Aktif</div>
            </a>
            </li>    
            @endif    
          </ul>
        </aside>