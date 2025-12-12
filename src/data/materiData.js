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
    'https://www.youtube.com/watch?v=DH6hh1g7jPE',
    {
      pengantar:
    'Masalah pokok ekonomi membahas bagaimana suatu negara atau pelaku ekonomi menentukan produksi, distribusi, konsumsi, serta cara memenuhi kebutuhan masyarakat secara efektif.',
      materiLengkap: `
**A. Masalah Pokok dalam Perekonomian**
---
Masalah pokok ekonomi dibagi menjadi dua aliran besar, yaitu **ekonomi klasik** dan **ekonomi modern**.

## 1. **Masalah Pokok Ekonomi Klasik**

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
# - Tidak dibutuhkan  
# - Tidak diinginkan  
# - Harganya tidak terjangkau  
Konsumen harus meningkatkan pendapatan untuk memenuhi kebutuhannya.

### 🔸 **Contoh kasus klasik**
Seorang petani menanam padi (**produksi**), menjual hasil panen ke koperasi (**distribusi**), dan masyarakat membeli beras untuk kebutuhan sehari-hari (**konsumsi**).
---

## 2. **Masalah Pokok Ekonomi Modern**

Modern economics merumuskan 3 masalah besar:

### 🔹 **a. What (Apa yang harus diproduksi?)**
Produsen harus menentukan barang apa yang diminati pasar.  
**Contoh:** Produsen kue hanya melanjutkan 3 dari 5 jenis kue karena 2 tidak diminati.

### 🔹 **b. How (Bagaimana memproduksi?)**
Metode, tenaga kerja, alat produksi harus efektif dan efisien.  
**Contoh:** Pengusaha kerajinan membuka lowongan di kota padat penduduk agar kuantitas produksi terpenuhi.

### 🔹 **c. For Whom (Untuk siapa barang diproduksi?)**
Menentukan target pasar berdasarkan:
# - Usia  
# - Penghasilan  
# - Minat  
# - Lokasi  

 **Contoh** : Pabrik aksesoris stainless steel menargetkan masyarakat menengah ke bawah.
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
 // Paste this inside materiData array
new MateriMikro(
  2,
  'Sistem Ekonomi',
  'Memahami berbagai sistem ekonomi: tradisional, komando, pasar, dan campuran',
  'Building',
  'https://www.youtube.com/watch?v=1wyfj9VSK98', // isi video nanti
  {
    pengantar:
      'Sistem ekonomi adalah seperangkat aturan, mekanisme, serta cara yang digunakan suatu negara untuk mengatur kegiatan produksinya guna mencapai tujuan ekonomi.',

    materiLengkap: `

Sistem ekonomi adalah perpaduan aturan, mekanisme, serta cara untuk mengatur kegiatan ekonomi. Perbedaan sistem ekonomi muncul karena perbedaan kepemilikan sumber daya dan sistem pemerintahan.


# **1. Sistem Ekonomi Tradisional**

Sistem ekonomi tradisional merupakan sistem ekonomi yang diterapkan oleh masyarakat tradisional.
## **Ciri-ciri**:
# - Teknik produksi sederhana dan diwariskan
# - Modal kecil
# - Pertukaran dengan barter
# - Belum ada pembagian kerja
# - Terikat adat dan tradisi
# - Tanah menjadi pusat kegiatan ekonomi

## **Kelebihan**:
# - Kerja sama dan kerukunan tinggi
# - Minim pemborosan
# - Tradisi terjaga
# - Alam lebih lestari

## **Kekurangan**:
# - Bergantung pada alam
# - Standar hidup rendah
# - Teknologi tertinggal
# - Perubahan lambat
-

# **2. Sistem Ekonomi Komando (Terpusat)**
Pada sistem ekonomi komando (sistem ekonomi pusat/perencanaan), peran pemerintah sangat dominan, sedangkan peran masyarakat atau pihak swasta sangat kecil. Contoh negara yang dapat dikatakan mendekati sistem ekonomi komando adalah Kuba. 
## **Ciri-ciri**:
# - Alat produksi dimiliki negara
# - Pemerintah mengatur jenis dan jumlah kerja
# - Semua kebijakan ekonomi ditentukan pemerintah

## **Kelebihan**:
# - Pemerintah mudah mengendalikan inflasi & pengangguran
# - Produksi sesuai rencana nasional
# - Distribusi pendapatan lebih mudah
# - Krisis ekonomi jarang terjadi

## **Kekurangan**:
# - Inisiatif individu rendah
# - Monopoli oleh negara
# - Tidak ada kebebasan memiliki sumber daya


# **3. Sistem Ekonomi Pasar (Liberal)**
Sistem ekonomi pasar merupakan kebalikan dari sistem ekonomi komando. Pada sistem ekonomi pasar, kegiatan ekonomi dilakukan oleh pihak swasta. Pemerintah hanya mengawasi dan melakukan kegiatan ekonomi yang berhubungan dengan penyelenggaraan negara. Contoh negara yang sistem ekonominya mendekati sistem ekonomi pasar adalah Amerika Serikat dan Inggris.
## **Ciri-ciri**:
# - Sumber produksi milik masyarakat
# - Pemerintah tidak ikut campur langsung
# - Terdapat pemilik modal & pekerja
# - Persaingan bebas
# - Berorientasi keuntungan
# - Keputusan berdasarkan kondisi pasar

## **Kelebihan**:
# - Kreativitas & inovasi masyarakat meningkat
# - Kepemilikan sumber daya bebas
# - Kualitas barang tinggi
# - Efisien karena berorientasi profit

## **Kekurangan**:
# - Sulit pemerataan pendapatan
# - Eksploitasi pekerja
# - Monopoli sering muncul
# - Gejolak ekonomi sering terjadi


# **4. Sistem Ekonomi Campuran**
Dalam sistem ekonomi campuran, pemerintah dan swasta (masyarakat) saling berinteraksi dalam memecahkan masalah ekonomi. Kegiatan ekonomi masyarakat diserahkan kepada kekuatan pasar. Namun sampai pada batas tertentu, pemerintah tetap melakukan kendali dan campur tangan. Tujuan pemerintah dalam campur tangan adalah agar perekonomian tidak lepas kendali sama sekali dan tidak hanya menguntungkan pemilik modal besar.
## **Ciri-ciri**:
# - Pemerintah & swasta bersama mengatur ekonomi
# - Mekanisme pasar tetap digunakan
# - Persaingan ada tetapi diawasi pemerintah

## **Kelebihan**:
# - Stabilitas ekonomi lebih terjaga
# - Pemerintah dapat fokus mengembangkan UMKM
# - Kebebasan berusaha tetap ada
# - Hak milik individu tetap diakui

## **Kekurangan**:
# - Sulit menentukan batas peran pemerintah & swasta
# - Sulit menentukan batas penguasaan sumber produksi


`,

    poinPenting: [
      'Sistem tradisional bergantung adat & alam',
      'Sistem komando dikuasai negara',
      'Sistem pasar memberikan kebebasan penuh masyarakat',
      'Sistem campuran menggabungkan pasar dan intervensi pemerintah'
    ],

    contohKasus:
      'Banyak negara modern cenderung menerapkan sistem ekonomi campuran untuk menjaga keseimbangan antara kebebasan pasar dan stabilitas ekonomi.'
  }
),

  // =================================
  // 📘 MATERI 3 — ELASTISITAS
  // =================================
 // Paste this inside materiData array
new MateriMikro(
  3,
  'Sistem Ekonomi Pancasila',
  'Memahami landasan, nilai dasar, karakteristik, dan hal yang harus dihindari dalam sistem ekonomi Pancasila',
  'Handshake',
  'https://www.youtube.com/watch?v=F_jv9kRYmRs', // isi video nanti
  {
    pengantar:
      'Sistem Ekonomi Pancasila adalah sistem ekonomi khas Indonesia yang berlandaskan Pancasila dan UUD 1945, serta bertujuan mewujudkan kesejahteraan rakyat berdasarkan asas kekeluargaan.',

    materiLengkap: `
Sistem ekonomi Pancasila merupakan sistem ekonomi nasional Indonesia yang berdasarkan nilai-nilai Pancasila dan UUD 1945. Sistem ini menekankan asas kekeluargaan, keadilan sosial, dan kesejahteraan masyarakat.

# **1. Landasan Konstitusional Sistem Ekonomi Pancasila**

Landasan sistem ekonomi Pancasila terdapat pada:

# - **Pancasila**
# - **Pasal 27 ayat (2)**: Hak warga negara atas pekerjaan dan penghidupan layak
# - **Pasal 28**: Kebebasan berserikat, berkumpul, dan mengeluarkan pendapat
# - **Pasal 31**: Hak memperoleh pendidikan
# - **Pasal 33**:
  # 1) Perekonomian disusun sebagai usaha bersama berasaskan kekeluargaan
  # 2) Cabang produksi penting dikuasai negara
  # 3) Sumber daya alam digunakan untuk kemakmuran rakyat
# - **Pasal 34**: Fakir miskin dan anak terlantar dipelihara negara

# **2. Nilai-Nilai Dasar Perekonomian Indonesia**
Sesuai dengan landasannya, nilai-nilai yang mendasari perekonomian Indonesia juga harus sesuai dengan nilai-nilai yang terkandung dalam Pancasila. Berikut ini nilai-nilai dasar perekonomian Indonesia yang sesuai dengan Pancasila.

### **a. Ketuhanan**
Kegiatan ekonomi tidak hanya mengejar keuntungan, tetapi juga memperhatikan moral dan sosial.

### **b. Kemanusiaan / Pemerataan Sosial**
Bertujuan mengurangi ketimpangan sosial dan mewujudkan pemerataan ekonomi.

### **c. Kepentingan Nasional**
Perekonomian nasional harus kuat, tangguh, dan mandiri menghadapi globalisasi.

### **d. Kepentingan Rakyat (Demokrasi Ekonomi)**
Berlandaskan:
# - Kerakyatan & kekeluargaan
# - Koperasi dan usaha kooperatif

### **e. Keadilan Sosial**
Keseimbangan antara perencanaan pusat dan otonomi daerah untuk mewujudkan keadilan bagi seluruh rakyat.

# **3. Karakteristik Perekonomian Indonesia**

# - Pemerintah dan swasta hidup berdampingan untuk mencegah ekstrem sistem liberal maupun komando
# - Berdasarkan asas kekeluargaan, tidak didominasi modal maupun buruh
# - Masyarakat berperan penting dalam produksi
# - Negara menguasai sumber daya alam untuk kepentingan umum

# **4. Hal-Hal Negatif yang Harus Dihindari**
Dalam perekonomian Indonesia terdapat beberapa hal yang harus dihindari. Hal-hal tersebut antara lain sebagai berikut.
### **a. Sistem Ekonomi Liberal Bebas**
Eksploitasi sumber daya dan ketidakstabilan ekonomi (pernah terjadi 1950–1957).

### **b. Sistem Ekonomi Komando**
Mematikan potensi swasta dan inovasi.

### **c. Persaingan Tidak Sehat & Pemusatan Kekuasaan Ekonomi**
Mengakibatkan ketimpangan dan merugikan masyarakat.

`,

    poinPenting: [
      'Berdasarkan Pancasila dan UUD 1945',
      'Menjunjung asas kekeluargaan dan keadilan sosial',
      'Negara menguasai cabang produksi penting',
      'Menghindari liberalisme, komando, dan monopoli'
    ],

    contohKasus:
      'Dalam pengelolaan sumber daya alam seperti tambang dan air, negara berperan besar agar hasilnya digunakan untuk sebesar-besar kemakmuran rakyat.'
  }
),
];