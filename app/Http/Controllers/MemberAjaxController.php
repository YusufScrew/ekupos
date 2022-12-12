<?php

namespace App\Http\Controllers;

use App\Models\Member;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Yajra\DataTables\Facades\DataTables;
use Barryvdh\DomPDF\Facade\Pdf;

class MemberAjaxController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('member.index');
    }

    public function data()
    {
        $data = Member::orderBy('kode_member', 'asc')->get();
        return DataTables::of($data)
            ->addIndexColumn()
            ->addColumn('select_all', function ($member) {
                return '
                    <input type="checkbox" name="id_member[]" value="'. $member->id_member .'">
                ';
            })
            ->addColumn('kode_member', function ($member) {
                return '<span class="badge bg-success">'. $member->kode_member .'</span>';
            })
            ->addColumn('action', function ($data) {
                return view('member.tombol')->with('data',$data);
            })

            ->rawColumns(['kode_member', 'select_all'])
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
        $member = Member::latest()->first() ?? new Member();
        $request['kode_member'] = 'M'. tambah_nol_didepan((int)$member->id_member +1, 6);

        $validasi = Validator::make($request->all(), [
            'nama_member' => 'required',
            'alamat' => 'required',
            'telepon' => 'required',
        ], [
            'nama_member.required' => 'Nama member wajib diisi',
            'alamat.required' => 'Alamat wajib diisi',
            'telepon.required' => 'No Telepon wajib diisi',
        ]);

        if ($validasi->fails()) {
            return response()->json(['errors' => $validasi->errors()]);
        } else {
            $member = Member::create($request->all());
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
        $data = Member::where('id_member', $id)->first();
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
            'nama_member' => 'required',
            'alamat' => 'required',
            'telepon' => 'required',
        ], [
            'nama_member.required' => 'Nama member wajib diisi',
            'alamat.required' => 'Alamat wajib diisi',
            'telepon.required' => 'No Telepon wajib diisi',
        ]);

        if ($validasi->fails()) {
            return response()->json(['errors' => $validasi->errors()]);
        } else {
            $data = [
                'nama_member' => $request->nama_member,
                'alamat' => $request->alamat,
                'telepon' => $request->telepon
            ];
            Member::where('id_member', $id)->update($data);
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
        Member::where('id_member', $id)->delete();
    }


    public function cetakKartu(Request $request)
    {
        $datamember = collect(array());
        foreach ($request->id_member as $id) {
            $member = Member::find($id);
            $datamember[] = $member;
        }

        $datamember = $datamember->chunk(2);
        $setting    = Setting::first();

        $no  = 1;
        $pdf = Pdf::loadView('member.cetak', compact('datamember', 'no', 'setting'));
        $pdf->setPaper(array(0, 0, 566.93, 850.39), 'potrait');
        return $pdf->stream('member.pdf');
    }
}
