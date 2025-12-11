export class MateriEkonomi {
  constructor(id, judul, deskripsi, icon, kategori, videoUrl, konten) {
    this.id = id;
    this.judul = judul;
    this.deskripsi = deskripsi;
    this.icon = icon;
    this.kategori = kategori;
    this.videoUrl = videoUrl;
    this.konten = konten;
  }

  getInfo() {
    return `${this.judul} - ${this.kategori}`;
  }

  getVideoId() {
    const match = this.videoUrl.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  }
}

// OOP: Class untuk Materi Mikro
export class MateriMikro extends MateriEkonomi {
  constructor(id, judul, deskripsi, icon, videoUrl, konten) {
    super(id, judul, deskripsi, icon, 'Ekonomi Mikro', videoUrl, konten);
  }
}

// OOP: Class untuk Materi Makro
export class MateriMakro extends MateriEkonomi {
  constructor(id, judul, deskripsi, icon, videoUrl, konten) {
    super(id, judul, deskripsi, icon, 'Ekonomi Makro', videoUrl, konten);
  }
}

// OOP: Class untuk mengelola data
export class EkonomiDataManager {
  constructor(materiList) {
    this.materiList = materiList;
  }

  getMateriByKategori(kategori) {
    return this.materiList.filter(m => m.kategori === kategori);
  }

  getAllMateri() {
    return this.materiList;
  }

  getMateriById(id) {
    return this.materiList.find(m => m.id === id);
  }
}