import { MateriMikro, MateriMakro } from '../classes/MateriEkonomi';

export const materiData = [
  new MateriMikro(
    1,
    'Permintaan & Penawaran',
    'Pelajari hukum dasar ekonomi mikro tentang interaksi permintaan dan penawaran di pasar',
    'TrendingUp',
    'https://www.youtube.com/watch?v=kIFBaaPP0Ic',
    {
      pengantar: 'Permintaan dan penawaran adalah konsep fundamental dalam ekonomi yang menjelaskan bagaimana harga dan kuantitas barang ditentukan di pasar.',
      poinPenting: [
        'Hukum Permintaan: Ketika harga naik, jumlah barang yang diminta turun (ceteris paribus)',
        'Hukum Penawaran: Ketika harga naik, jumlah barang yang ditawarkan naik',
        'Titik Keseimbangan: Pertemuan kurva permintaan dan penawaran',
        'Faktor yang mempengaruhi: Pendapatan, selera, harga barang substitusi'
      ],
      contohKasus: 'Ketika harga BBM naik, permintaan terhadap mobil hemat bahan bakar meningkat, sementara permintaan mobil boros BBM menurun.'
    }
  ),
  new MateriMikro(
    2,
    'Elastisitas Harga',
    'Memahami tingkat responsivitas permintaan dan penawaran terhadap perubahan harga',
    'BarChart3',
    'https://www.youtube.com/watch?v=HHcblIxiAAk',
    {
      pengantar: 'Elastisitas mengukur seberapa sensitif jumlah barang yang diminta atau ditawarkan terhadap perubahan harga.',
      poinPenting: [
        'Elastis (E > 1): Perubahan harga menyebabkan perubahan kuantitas yang lebih besar',
        'Inelastis (E < 1): Perubahan harga menyebabkan perubahan kuantitas yang lebih kecil',
        'Unitary Elastic (E = 1): Perubahan proporsional',
        'Barang kebutuhan pokok cenderung inelastis, barang mewah cenderung elastis'
      ],
      contohKasus: 'Beras adalah barang inelastis. Meskipun harga naik, orang tetap membelinya karena merupakan kebutuhan pokok.'
    }
  ),
  new MateriMakro(
    3,
    'Inflasi & Deflasi',
    'Analisis perubahan tingkat harga secara umum dalam perekonomian',
    'DollarSign',
    'https://www.youtube.com/watch?v=5gxjWhjLQMw',
    {
      pengantar: 'Inflasi adalah kenaikan harga barang dan jasa secara umum dan terus-menerus dalam periode tertentu.',
      poinPenting: [
        'Inflasi ringan: < 10% per tahun',
        'Inflasi sedang: 10-30% per tahun',
        'Inflasi berat: 30-100% per tahun',
        'Hiperinflasi: > 100% per tahun',
        'Penyebab: Demand-pull inflation dan Cost-push inflation'
      ],
      contohKasus: 'Indonesia pernah mengalami hiperinflasi pada tahun 1998 saat krisis moneter, dengan inflasi mencapai 77.6%.'
    }
  )
];