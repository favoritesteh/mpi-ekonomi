import { MateriMikro, MateriMakro } from '../classes/MateriEkonomi';

export const materiData = [
  // =============================
  // 📘 MATERI 1 — MASALAH POKOK EKONOMI
  // =============================
  new MateriMikro(
    1,
    'Masalah Pokok Ekonomi Klasik & Modern',
    'Menjelaskan masalah pokok ekonomi klasik (produksi, distribusi, konsumsi) serta masalah modern (what, how, for whom)',
    'BookOpen',
    'https://www.youtube.com/watch?v=kIFBaaPP0Ic',
    {
      pengantar:
        'Masalah pokok ekonomi membahas bagaimana suatu negara atau pelaku ekonomi menentukan produksi, distribusi, konsumsi, serta cara memenuhi kebutuhan masyarakat secara efektif.',

      materiLengkap: `
***A. Masalah Pokok dalam Perekonomian***

Masalah pokok ekonomi dibagi menjadi dua aliran besar, yaitu **ekonomi klasik** dan **ekonomi modern**.

---

## 1. ***Masalah Pokok Ekonomi Klasik***

Menurut teori klasik, terdapat **tiga masalah utama**:

### 🔹 **a. Masalah Produksi**
**Apa barang atau jasa yang harus diproduksi?**  
Agar kebutuhan manusia terpenuhi, produsen harus mengetahui barang apa yang benar-benar diperlukan masyarakat.

### 🔹 **b. Masalah Distribusi**
**Bagaimana barang sampai ke konsumen?**  
Pada masa klasik, distribusi dilakukan melalui pasar nyata (transaksi langsung).

### 🔹 **c. Masalah Konsumsi**
**Apakah barang akan dikonsumsi atau tidak?**  
Barang bisa tidak dikonsumsi bila:
- Tidak dibutuhkan  
- Tidak diinginkan  
- Harganya tidak terjangkau  

Konsumen harus meningkatkan pendapatan untuk memenuhi kebutuhannya.

### 🔸 **Contoh kasus klasik**
Seorang petani menanam padi (**produksi**), menjual hasil panen ke koperasi (**distribusi**), dan masyarakat membeli beras untuk kebutuhan sehari-hari (**konsumsi**).

---

## 2. ***Masalah Pokok Ekonomi Modern***

Modern economics merumuskan 3 masalah besar:

### 🔹 **a. What (Apa yang harus diproduksi?)**
Produsen harus menentukan barang apa yang diminati pasar.  
**Contoh:** Produsen kue hanya melanjutkan 3 dari 5 jenis kue karena 2 tidak diminati.

### 🔹 **b. How (Bagaimana memproduksi?)**
Metode, tenaga kerja, alat produksi harus efektif dan efisien.  
**Contoh:** Pengusaha kerajinan membuka lowongan di kota padat penduduk agar kuantitas produksi terpenuhi.

### 🔹 **c. For Whom (Untuk siapa barang diproduksi?)**
Menentukan target pasar berdasarkan:
- Usia  
- Penghasilan  
- Minat  
- Lokasi  

**Contoh:** Pabrik aksesoris stainless steel menargetkan masyarakat menengah ke bawah.

---
`,

      poinPenting: [
        'Masalah pokok klasik: produksi, distribusi, konsumsi',
        'Masalah pokok modern: what, how, for whom',
        'Produsen harus menentukan barang yang dibutuhkan masyarakat',
        'Distribusi menentukan bagaimana barang sampai ke konsumen',
        'Target pasar penting dalam sistem ekonomi modern'
      ],

      contohKasus:
        'Produsen kue hanya meneruskan 3 produk yang laku di pasaran dan menghentikan 2 produk yang tidak diminati untuk efisiensi produksi.'
    }
  ),

  // =================================
  // 📘 MATERI 2 — PERMINTAAN & PENAWARAN
  // =================================
  new MateriMikro(
    2,
    'Permintaan & Penawaran',
    'Pelajari hukum dasar ekonomi mikro tentang interaksi permintaan dan penawaran di pasar',
    'TrendingUp',
    'https://www.youtube.com/watch?v=kIFBaaPP0Ic',
    {
      pengantar:
        'Permintaan dan penawaran adalah konsep fundamental dalam ekonomi yang menjelaskan bagaimana harga dan kuantitas barang ditentukan di pasar.',

      materiLengkap: `
## ★ Materi Lengkap: Permintaan & Penawaran

### 🔹 Hukum Permintaan  
Jika harga naik → jumlah barang yang diminta turun (*ceteris paribus*).

### 🔹 Hukum Penawaran  
Jika harga naik → jumlah barang yang ditawarkan naik.

### 🔹 Titik Keseimbangan  
Terjadi ketika kurva permintaan dan penawaran bertemu.

### 🔹 Faktor Perubahan  
- Pendapatan  
- Selera  
- Harga barang substitusi  
- Ekspektasi harga
`,

      poinPenting: [
        'Hukum Permintaan: harga naik → permintaan turun',
        'Hukum Penawaran: harga naik → penawaran naik',
        'Equilibrium adalah pertemuan kurva P & Q',
        'Dipengaruhi pendapatan, selera, substitusi'
      ],

      contohKasus:
        'Ketika harga BBM naik, permintaan mobil hemat bahan bakar meningkat, sementara permintaan mobil boros BBM menurun.'
    }
  ),

  // =================================
  // 📘 MATERI 3 — ELASTISITAS
  // =================================
  new MateriMikro(
    3,
    'Elastisitas Harga',
    'Memahami responsivitas permintaan dan penawaran terhadap harga',
    'BarChart3',
    'https://www.youtube.com/watch?v=HHcblIxiAAk',
    {
      pengantar: 'Elastisitas mengukur seberapa sensitif jumlah barang terhadap perubahan harga.',

      materiLengkap: `
## ★ Materi Lengkap Elastisitas

### Jenis Elastisitas:
- **Elastis (E > 1)**: Perubahan kuantitas lebih besar dari perubahan harga  
- **Inelastis (E < 1)**: Perubahan kuantitas lebih kecil  
- **Unitary (E = 1)**: Seimbang  
- Barang pokok biasanya inelastis, barang mewah elastis
`,

      poinPenting: [
        'Elastis (E > 1), Inelastis (E < 1)',
        'Barang pokok cenderung inelastis',
        'Barang mewah lebih elastis'
      ],

      contohKasus:
        'Beras adalah barang inelastis. Meskipun harga naik, masyarakat tetap membelinya.'
    }
  ),
];