import React from 'react';
import { Target, BookOpen } from 'lucide-react';
import { capaianPembelajaran } from '../data/pembelajaranData';

const CapaianPembelajaran = () => {
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
            <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {capaianPembelajaran.judul}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {capaianPembelajaran.deskripsi}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {capaianPembelajaran.capaian.map((capaian, index) => (
              <div 
                key={capaian.id}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
              >
                <div className="flex items-center mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-800">{capaian.aspek}</h3>
                </div>
                <ul className="space-y-3">
                  {capaian.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2 font-bold">•</span>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CapaianPembelajaran;