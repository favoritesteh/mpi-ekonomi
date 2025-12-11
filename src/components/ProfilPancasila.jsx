import React from 'react';
import { Award } from 'lucide-react';
import { profilPancasila } from '../data/pembelajaranData';

const ProfilPancasila = () => {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-red-100 p-4 rounded-full mb-4">
              <Award className="w-8 h-8 text-red-600" />
            </div>

            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {profilPancasila.judul}
            </h2>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {profilPancasila.deskripsi}
            </p>
          </div>

          {/* GRID ITEM */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profilPancasila.profil.map((item, index) => (
              <div 
                key={item.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex gap-4 items-start"
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
              >
                
                {/* ICON LEFT */}
                <div className="flex-shrink-0">
                  {typeof item.icon === "string" && item.icon.endsWith(".png") ? (
                    <img 
                      src={item.icon} 
                      alt={item.nama}
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    <span className="text-4xl">{item.icon}</span>
                  )}
                </div>

                {/* TEXT CONTENT */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.nama}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.deskripsi}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilPancasila;
