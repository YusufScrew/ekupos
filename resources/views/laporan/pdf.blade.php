<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laporan Pendapatan</title>

    
    <style>
        #laporan {
          font-family: Arial, Helvetica, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }

        body h3, body h4 {
            font-family: Arial, Helvetica, sans-serif;
            text-align: center;
        }
        
        #laporan td, #laporan th {
          border: 1px solid #ddd;
          padding: 8px;
        }
        
        #laporan tr:nth-child(even){background-color: #f2f2f2;}
        
        #laporan tr:hover {background-color: #ddd;}
        
        #laporan th {
          padding-top: 12px;
          padding-bottom: 12px;
          text-align: center;
          background-color: #000000;
          color: white;
        }
    </style>
</head>

<body>
    <h3 class="text-center">Laporan Pendapatan</h3>
    <h4 class="text-center">
        Tanggal {{ tanggal_indonesia($awal, false) }}
        s/d
        Tanggal {{ tanggal_indonesia($akhir, false) }}
    </h4>

    <table id="laporan">
        <thead>
            <tr>
                <th width="5%">No</th>
                <th width="22%">Tanggal</th>
                <th>Penjualan</th>
                <th>Pembelian</th>
                <th>Pengeluaran</th>
                <th>Pendapatan</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($data as $row)
                <tr>
                    @foreach ($row as $col)
                        <td>{{ $col }}</td>
                    @endforeach
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>