<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;
    public $table = "member";
    protected $primaryKey = 'id_member';
    protected $fillable = ['nama_member', 'alamat', 'kode_member', 'telepon'];
    protected $guarded = [];
}
