import React from 'react';
import { ArrowLeft, Play, CheckCircle } from 'lucide-react';

const MateriDetail = ({ materi, onBack }) => {
  if (!materi) return null;

  const videoId = materi.getVideoId();

  return (
    <section className="container mx-auto px-4 py-24">
      <button 
        onClick={onBack}
        className="flex items-center text-blue-600 hover:text-blue-800 font-semibold mb-8 transition-colors duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-2 transition-transform duration-300" />
        Kembali ke Daftar Materi
      </button>

      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
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
            <div className="mb-8">
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
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Pengantar</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {materi.konten.pengantar}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Poin-Poin Penting</h3>
              <div className="space-y-3">
                {materi.konten.poinPenting.map((poin, index) => (
                  <div key={index} className="flex items-start bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">{poin}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-gray-800 mb-3">💡 Contoh Kasus</h3>
              <p className="text-gray-700 leading-relaxed">
                {materi.konten.contohKasus}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MateriDetail;