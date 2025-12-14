import React from 'react';
import { ArrowLeft, Play, CheckCircle, Image as ImageIcon } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MateriDetail = ({ materi, onBack }) => {
  if (!materi) return null;

  const videoId = materi.getVideoId();
  const gambarList = materi.konten.gambar || [];

  // Filter gambar berdasarkan posisi
  const gambarPengantar = gambarList.filter(g => g.posisi === 'pengantar');
  const gambarTengah = gambarList.filter(g => g.posisi === 'tengah');
  const gambarAkhir = gambarList.filter(g => g.posisi === 'akhir');

  // Komponen untuk menampilkan gambar
  const GambarSection = ({ gambarArray }) => {
    if (!gambarArray || gambarArray.length === 0) return null;
    
    // Filter gambar yang valid (bukan null, bukan string 'null', dan bukan string kosong)
    const validGambar = gambarArray.filter(g => 
      g && 
      g.url && 
      g.url.trim() !== '' && 
      g.url.toLowerCase() !== 'null' &&
      !g.url.includes('example.com')
    );
    
    // Jika tidak ada gambar valid, return null
    if (validGambar.length === 0) return null;
    
    return (
      <div className="my-8 space-y-6">
        {validGambar.map((gambar, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-4 shadow-md max-w-3xl mx-auto">
            <img 
              src={gambar.url} 
              alt={gambar.caption || 'Ilustrasi materi'}
              className="w-full h-auto rounded-lg shadow-sm object-contain max-h-96"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden flex-col items-center justify-center bg-gray-200 rounded-lg p-12 text-gray-500">
              <ImageIcon className="w-16 h-16 mb-2" />
              <p className="text-sm">Gambar tidak dapat dimuat</p>
            </div>
            {gambar.caption && (
              <p className="text-center text-gray-600 text-sm mt-3 italic">
                {gambar.caption}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="container mx-auto px-4 py-24">
      <style>{`
        /* Custom styling untuk paragraf dengan indentasi */
        .prose p {
          text-indent: 2rem;
          text-align: justify;
        }
        
        /* Styling untuk list items */
        .prose ol, .prose ul {
          padding-left: 2.5rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
        
        .prose li {
          text-align: justify;
          padding-left: 0.5rem;
          margin-bottom: 0.75rem;
        }
        
        /* Styling untuk ordered list (numbering) */
        .prose ol > li {
          padding-left: 1rem;
        }
        
        /* Styling untuk unordered list */
        .prose ul > li {
          padding-left: 0.75rem;
        }
        
        /* Jangan indent paragraf setelah heading */
        .prose h1 + p,
        .prose h2 + p,
        .prose h3 + p,
        .prose h4 + p {
          text-indent: 2rem;
        }
        
        /* Spacing untuk headings */
        .prose h1, .prose h2, .prose h3, .prose h4 {
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        /* Styling untuk nested lists */
        .prose ol ol,
        .prose ul ul,
        .prose ol ul,
        .prose ul ol {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          padding-left: 2rem;
        }
      `}</style>
      
      {/* Tombol Kembali */}
      <button 
        onClick={onBack}
        className="flex items-center text-blue-600 hover:text-blue-800 font-semibold mb-8 transition-colors duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-2 transition-transform duration-300" />
        Kembali ke Daftar Materi
      </button>

      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header Materi */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
          <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            {materi.kategori}
          </span>
          <h1 className="text-4xl font-bold mb-3">{materi.judul}</h1>
          <p className="text-blue-100 text-lg">{materi.deskripsi}</p>
        </div>

        <div className="p-8">
          
          {/* Video YouTube */}
          {videoId && (
            <div className="mb-12 max-w-4xl mx-auto">
              <div className="flex items-center mb-4">
                <Play className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-800">Video Pembelajaran</h2>
              </div>

              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={materi.judul}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {/* Konten Materi */}
          <div className="space-y-12">

            {/* Pengantar */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Pengantar</h3>
              <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line text-justify indent-8">
                {materi.konten.pengantar}
              </p>
              
              {/* Gambar Pengantar */}
              <GambarSection gambarArray={gambarPengantar} />
            </div>

            {/* Materi Lengkap (Markdown) */}
            {materi.konten.materiLengkap && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Materi Lengkap</h3>

                <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-strong:text-blue-700 prose-li:marker:text-blue-600 prose-p:text-justify prose-p:indent-8 prose-p:leading-relaxed prose-li:text-justify prose-ol:pl-8 prose-ul:pl-8">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {materi.konten.materiLengkap}
                  </ReactMarkdown>
                </div>
                
                {/* Gambar Tengah */}
                <GambarSection gambarArray={gambarTengah} />
              </div>
            )}

            {/* Poin-Poin Penting */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Poin-Poin Penting</h3>
              <div className="space-y-3">
                {materi.konten.poinPenting.map((poin, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-300"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line text-justify">
                      {poin}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contoh Kasus */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border-l-4 border-yellow-500 shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-3">💡 Contoh Kasus</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-justify indent-8">
                {materi.konten.contohKasus}
              </p>
            </div>

            {/* Gambar Akhir */}
            <GambarSection gambarArray={gambarAkhir} />

          </div>
        </div>
      </div>
    </section>
  );
};

export default MateriDetail;