<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use App\Models\Produk;
use Barryvdh\DomPDF\PDF as DomPDFPDF;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Yajra\DataTables\Facades\DataTables;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\App;

class ProdukAjaxController extends Controller 
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response 
     */
    public function index()
    {
        $kategori = Categories::all();
        return view('produk.index', compact('kategori')); 
    }

    public function data()
    {
        $data = Produk::leftJoin('kategori', 'kategori.id_kategori', 'produk.id_kategori')
        ->select('produk.*', 'nama_kategori')
        ->orderBy('kode_produk', 'asc')
        ->get();
        return DataTables()
            ->of($data)
            ->addIndexColumn()
            ->addColumn('select_all', function ($produk) {
                return '
                    <input type="checkbox" name="id_produk[]" value="'. $produk->id_produk .'">
                ';
            })
            ->addColumn('kode_produk', function ($produk) {
                return '<span class="badge bg-success">'. $produk->kode_produk .'</span>';
            })
            ->addColumn('harga_beli', function ($produk) {
                return format_uang($produk->harga_beli);
            })
            ->addColumn('harga_jual', function ($produk) {
                return format_uang($produk->harga_jual);
            })
            ->addColumn('stok', function ($produk) {
                return format_uang($produk->stok);
            })
            ->addColumn('action', function ($data) {
                return view('produk.tombol')->with('data',$data);
            })
            ->rawColumns(['kode_produk', 'select_all'])
            ->make(true);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $produk = Produk::latest()->first() ?? new Produk();
        $request['kode_produk'] = 'P'. tambah_nol_didepan((int)$produk->id_produk +1, 6);

        $validasi = Validator::make($request->all(), [
            'nama_produk' => 'required',
            'id_kategori' => 'required',
            'merek' => 'required',
            'harga_beli' => 'required',
            'harga_jual' => 'required',
            'stok' => 'required',
        ], [
            'nama_produk.required' => 'Nama Produk wajib diisi',
            'id_kategori.required' => 'Kategori wajib dipilih',
            'merek.required' => 'Merek wajib diisi',
            'harga_beli.required' => 'Harga Beli wajib diisi',
            'harga_jual.required' => 'Harga Jual wajib diisi',
            'stok.required' => 'Stok wajib diisi',
        ]);

        if ($validasi->fails()) {
            return response()->json(['errors' => $validasi->errors()]);
        } else {
            $produk = Produk::create($request->all());
            return response()->json(['success' => "Berhasil menyimpan data"]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = Produk::where('id_produk', $id)->first();
        return response()->json(['result' => $data]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validasi = Validator::make($request->all(), [
            'nama_produk' => 'required',
            'id_kategori' => 'required',
            'merek' => 'required',
            'harga_beli' => 'required',
            'harga_jual' => 'required',
            'stok' => 'required',
        ], [
            'nama_produk.required' => 'Nama Produk wajib diisi',
            'id_kategori.required' => 'Kategori wajib dipilih',
            'merek.required' => 'Merek wajib diisi',
            'harga_beli.required' => 'Harga Beli wajib diisi',
            'harga_jual.required' => 'Harga Jual wajib diisi',
            'stok.required' => 'Stok wajib diisi',
        ]);

        if ($validasi->fails()) {
            return response()->json(['errors' => $validasi->errors()]);
        } else {
            $data = [
                'nama_produk' => $request->nama_produk,
                'id_kategori' => $request->id_kategori,
                'merek' => $request->merek,
                'harga_beli' => $request->harga_beli,
                'harga_jual' => $request->harga_jual,
                'stok' => $request->stok
            ];
            Produk::where('id_produk', $id)->update($data);
            return response()->json(['success' => "Berhasil melakukan update data"]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Produk::where('id_produk', $id)->delete();
    }

    public function deleteSelected(Request $request)
    {
        foreach ($request->id_produk as $id) {
            Produk::where('id_produk', $id)->delete();
        }
        return response(null, 204);
    }

    public function cetakBarcode(Request $request)
    {
        $dataproduk = array();
        foreach ($request->id_produk as $id) {
            $produk = Produk::find($id);
            $dataproduk[] = $produk;
        }
            // return $dataproduk;
            $no  = 1;
            $pdf = Pdf::loadview('produk.barcode', compact('dataproduk', 'no'));
            $pdf->setPaper('a4', 'potrait');
            return $pdf->stream('produk.pdf');
    }
}
