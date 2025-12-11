import React from 'react';
import { TrendingUp, BarChart3, DollarSign } from 'lucide-react';
import { materiData } from '../data/materiData';

const MateriSection = ({ onSelectMateri }) => {
  const IconComponent = ({ name, className }) => {
    const icons = { TrendingUp, BarChart3, DollarSign };
    const Icon = icons[name] || TrendingUp;
    return <Icon className={className} />;
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Materi Pembelajaran
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Jelajahi berbagai topik ekonomi yang dirancang untuk meningkatkan pemahaman Anda
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materiData.map((materi, index) => (
            <div 
              key={materi.id}
              onClick={() => onSelectMateri(materi)}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer group"
              style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-3 rounded-lg group-hover:rotate-12 transition-transform duration-500">
                  <IconComponent name={materi.icon} className="w-6 h-6 text-white" />
                </div>
                <span className="ml-3 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {materi.kategori}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {materi.judul}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {materi.deskripsi}
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300">
                Pelajari Lebih Lanjut →
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MateriSection;