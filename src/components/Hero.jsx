import React from 'react';
import { TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { 
          animation: float 3s ease-in-out infinite; 
        }
      `}</style>

      <section 
        className="relative container mx-auto px-4 py-20 overflow-hidden"
        style={{
          backgroundImage: 'url(bgeko.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-blue-800/40 to-blue-600/30"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 animate-float">
            <br>
            </br>
            <br>
            </br>
          </div>
          <h2 
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}
          >
            Kuasai <span className="text-yellow-300">Ekonomi</span> dengan Mudah
          </h2>
          <p 
            className="text-xl text-blue-50 mb-8 leading-relaxed drop-shadow-lg"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}
          >
            Platform pembelajaran interaktif untuk memahami konsep ekonomi mikro dan makro. 
            Belajar kapan saja, bahkan tanpa koneksi internet!
          </p>
          <button 
            className="bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-110 transition-all duration-300 hover:bg-yellow-300"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.6s both' }}
          >
            Mulai Belajar Sekarang
          </button>
        </div>

        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      </section>
    </>
  );
};

export default Hero;