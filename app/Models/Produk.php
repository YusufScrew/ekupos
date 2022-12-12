<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produk extends Model
{
    use HasFactory;
    public $table = "produk";
    protected $primaryKey = 'id_produk';
    protected $fillable = ['nama_produk', 'id_kategori', 'kode_produk', 'merek', 'harga_beli', 'harga_jual', 'diskon', 'stok'];
    protected $guarded = [];
}
