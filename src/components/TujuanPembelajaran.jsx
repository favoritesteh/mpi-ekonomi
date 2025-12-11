import React from 'react';
import { Flag, CheckCircle2 } from 'lucide-react';
import { tujuanPembelajaran } from '../data/pembelajaranData';

const TujuanPembelajaran = () => {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-100 p-4 rounded-full mb-4">
              <Flag className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {tujuanPembelajaran.judul}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {tujuanPembelajaran.deskripsi}
            </p>
          </div>

          <div className="space-y-8">
            {tujuanPembelajaran.tujuan.map((tujuan, index) => (
              <div 
                key={tujuan.id}
                className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both` }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    {index + 1}
                  </span>
                  {tujuan.kategori}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {tujuan.items.map((item, idx) => (
                    <div key={idx} className="flex items-start bg-white p-4 rounded-lg hover:shadow-md transition-all duration-300">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TujuanPembelajaran;