<?php

use App\Http\Controllers\CategoriesAjaxController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LaporanAjaxController;
use App\Http\Controllers\ProdukAjaxController;
use App\Http\Controllers\MemberAjaxController;
use App\Http\Controllers\SupplierAjaxController;
use App\Http\Controllers\PengeluaranAjaxController;
use App\Http\Controllers\PembelianAjaxController;
use App\Http\Controllers\PembelianDetailAjaxController;
use App\Http\Controllers\PenjualanAjaxController;
use App\Http\Controllers\PenjualanDetailAjaxController;
use App\Http\Controllers\SettingAjaxController;
use App\Http\Controllers\UserAjaxController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect()->route('login');
});


Route::group(['middleware' => 'auth'], function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::group(['middleware' => 'level:1'], function (){
        Route::get('/kategori', function() {
            return view('kategori.index');
        })->name('kategori');
    
        Route::resource('kategoriAjax', CategoriesAjaxController::class);
        Route::get('/kategori/data', [CategoriesAjaxController::class, 'data'])->name('kategori.data');
        Route::post('/kategori/store', [CategoriesAjaxController::class, 'store'])->name('kategori.store');
    
        Route::get('/produk', function() {
            return view('produk.index');
        })->name('produk');
    
        Route::get('/produk/data', [ProdukAjaxController::class, 'data'])->name('produk.data');
        Route::post('/produk/store', [ProdukAjaxController::class, 'store'])->name('produk.store');
        Route::post('/produk/delete-selected', [ProdukAjaxController::class, 'deleteSelected'])->name('produk.delete_selected');
        Route::post('/produk/cetak-barcode', [ProdukAjaxController::class, 'cetakBarcode'])->name('produk.cetak_barcode');
        Route::resource('produk', ProdukAjaxController::class);
    
        Route::get('/member', function() {
            return view('member.index');
        })->name('member');
    
        Route::get('/member/data', [MemberAjaxController::class, 'data'])->name('member.data');
        Route::post('/member/store', [MemberAjaxController::class, 'store'])->name('member.store');
        Route::post('/member/cetak-kartu', [MemberAjaxController::class, 'cetakKartu'])->name('member.cetak_kartu');
        Route::resource('member', MemberAjaxController::class);
        
        Route::get('/supplier', function() {
            return view('suplier.index');
        })->name('supplier');
    
        Route::get('/supplier/data', [SupplierAjaxController::class, 'data'])->name('supplier.data');
        Route::post('/supplier/store', [SupplierAjaxController::class, 'store'])->name('supplier.store');
        Route::resource('supplier', SupplierAjaxController::class);
    
        Route::get('/pengeluaran', function() {
            return view('pengeluaran.index');
        })->name('pengeluaran');
    
        Route::get('/pengeluaran/data', [PengeluaranAjaxController::class, 'data'])->name('pengeluaran.data');
        Route::post('/pengeluaran/store', [PengeluaranAjaxController::class, 'store'])->name('pengeluaran.store');
        Route::resource('pengeluaran', PengeluaranAjaxController::class);
        
        Route::get('/pembelian', function() {
            return view('pembelian.index');
        })->name('pembelian');
    
        Route::get('/pembelian/data', [PembelianAjaxController::class, 'data'])->name('pembelian.data');
        Route::get('/pembelian/{id}/create', [PembelianAjaxController::class, 'create'])->name('pembelian.create');
        Route::resource('/pembelian', PembelianAjaxController::class)
            ->except('create');
    
        Route::get('/pembelian_detail/{id}/data', [PembelianDetailAjaxController::class, 'data'])->name('pembelian_detail.data');
        Route::get('/pembelian_detail/loadform/{diskon}/{total}', [PembelianDetailAjaxController::class, 'loadForm'])->name('pembelian_detail.load_form');
        Route::resource('/pembelian_detail', PembelianDetailAjaxController::class)
        ->except('create', 'show', 'edit');
    
        Route::get('/penjualan', function() {
            return view('penjualan.index');
        })->name('penjualan');
    
        Route::get('/penjualan/data', [PenjualanAjaxController::class, 'data'])->name('penjualan.data');
        Route::get('/penjualan', [PenjualanAjaxController::class, 'index'])->name('penjualan.index');
        Route::get('/penjualan/{id}', [PenjualanAjaxController::class, 'show'])->name('penjualan.show');
        Route::delete('/penjualan/{id}', [PenjualanAjaxController::class, 'destroy'])->name('penjualan.destroy');
    });

    Route::resource('/transaksi', PenjualanDetailAjaxController::class)
    ->except('show');
    Route::get('/transaksi/baru', [PenjualanAjaxController::class, 'create'])->name('transaksi.baru');
    Route::post('/transaksi/simpan', [PenjualanAjaxController::class, 'store'])->name('transaksi.simpan');
    Route::get('/transaksi/selesai', [PenjualanAjaxController::class, 'selesai'])->name('transaksi.selesai');
    Route::get('/transaksi/nota-kecil', [PenjualanAjaxController::class, 'notaKecil'])->name('transaksi.nota_kecil');
    Route::get('/transaksi/nota-besar', [PenjualanAjaxController::class, 'notaBesar'])->name('transaksi.nota_besar');

    Route::get('/transaksi/{id}/data', [PenjualanDetailAjaxController::class, 'data'])->name('transaksi.data');
    Route::get('/transaksi/loadform/{diskon}/{total}/{diterima}', [PenjualanDetailAjaxController::class, 'loadForm'])->name('transaksi.load_form');
    

    Route::group(['middleware' => 'level:1'], function () {
        Route::get('/laporan', [LaporanAjaxController::class, 'index'])->name('laporan.index');
        Route::get('/laporan/data/{awal}/{akhir}', [LaporanAjaxController::class, 'data'])->name('laporan.data');
        Route::get('/laporan/pdf/{awal}/{akhir}', [LaporanAjaxController::class, 'exportPDF'])->name('laporan.export_pdf');

        Route::get('/user/data', [UserAjaxController::class, 'data'])->name('user.data');
        Route::resource('/user', UserAjaxController::class);

        Route::get('/setting', [SettingAjaxController::class, 'index'])->name('setting.index');
        Route::get('/setting/first', [SettingAjaxController::class, 'show'])->name('setting.show');
        Route::post('/setting', [SettingAjaxController::class, 'update'])->name('setting.update');
    });

    Route::get('/profil', [UserAjaxController::class, 'profil'])->name('user.profil');
    Route::post('/profil', [UserAjaxController::class, 'updateProfil'])->name('user.update_profil');
});

