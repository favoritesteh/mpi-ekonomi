import React from 'react';
import { BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-blue-500" />
              EkonoLearn
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Platform pembelajaran ekonomi modern dengan fitur offline-first untuk akses tanpa batas.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                  Materi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                  Tentang Kami
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Kontak</h4>
            <p className="text-gray-400">Email: info@ekonolearn.com</p>
            <p className="text-gray-400">Tel: +62 812-3456-7890</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; 2024 EkonoLearn. Dibuat dengan ❤️ untuk pendidikan ekonomi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;