<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    use HasFactory;
    public $table = "kategori";
    protected $primaryKey = 'id_kategori';
    protected $fillable = ['nama_kategori'];
    protected $guarded = [];
}
