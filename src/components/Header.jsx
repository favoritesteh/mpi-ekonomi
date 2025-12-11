import React from 'react';
import { BookOpen, Wifi, WifiOff } from 'lucide-react';

const Header = ({ isMenuOpen, setIsMenuOpen, activeSection, setActiveSection, isOnline }) => {
  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hamburgerTop {
          0% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(6px) rotate(0); }
          100% { transform: translateY(6px) rotate(45deg); }
        }
        @keyframes hamburgerMiddle {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes hamburgerBottom {
          0% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-6px) rotate(0); }
          100% { transform: translateY(-6px) rotate(-45deg); }
        }
        @keyframes hamburgerTopReverse {
          0% { transform: translateY(6px) rotate(45deg); }
          50% { transform: translateY(6px) rotate(0); }
          100% { transform: translateY(0) rotate(0); }
        }
        @keyframes hamburgerMiddleReverse {
          0% { opacity: 0; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes hamburgerBottomReverse {
          0% { transform: translateY(-6px) rotate(-45deg); }
          50% { transform: translateY(-6px) rotate(0); }
          100% { transform: translateY(0) rotate(0); }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0); }
          to { transform: translateX(100%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes slideInFromRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .hamburger-line { 
          transition: all 0.3s ease; 
        }
        .hamburger-open .line-top { 
          animation: hamburgerTop 0.6s ease forwards; 
        }
        .hamburger-open .line-middle { 
          animation: hamburgerMiddle 0.6s ease forwards; 
        }
        .hamburger-open .line-bottom { 
          animation: hamburgerBottom 0.6s ease forwards; 
        }
        .hamburger-closed .line-top { 
          animation: hamburgerTopReverse 0.6s ease forwards; 
        }
        .hamburger-closed .line-middle { 
          animation: hamburgerMiddleReverse 0.6s ease forwards; 
        }
        .hamburger-closed .line-bottom { 
          animation: hamburgerBottomReverse 0.6s ease forwards; 
        }
        .sidebar-enter { 
          animation: slideInRight 0.4s ease-out forwards; 
        }
        .sidebar-exit { 
          animation: slideOutRight 0.4s ease-out forwards; 
        }
        .overlay-enter { 
          animation: fadeIn 0.3s ease-out forwards; 
        }
        .overlay-exit { 
          animation: fadeOut 0.3s ease-out forwards; 
        }
        .menu-item { 
          animation: slideInFromRight 0.5s ease-out forwards; 
          opacity: 0; 
        }
        .menu-item:nth-child(1) { animation-delay: 0.1s; }
        .menu-item:nth-child(2) { animation-delay: 0.2s; }
        .menu-item:nth-child(3) { animation-delay: 0.3s; }
      `}</style>

      <header className="absolute top-0 left-0 right-0 z-50" style={{ animation: 'slideDown 0.5s ease-out' }}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-14 h-14 bg-white rounded-xl overflow-hidden group-hover:scale-110 transition-transform duration-500 shadow-xl">
                <img 
                  src="./business-growth.png" 
                  alt="EkonoLearn Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full hidden items-center justify-center bg-blue-600">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white drop-shadow-2xl">MPI-Ekonomi</h1>
                <p className="text-xs text-white/90 drop-shadow-lg">Portal Pembelajaran Ekonomi</p>
              </div>
            </div>

            {/* Status Online/Offline - Desktop only */}
            <div className="hidden md:flex items-center space-x-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
              {isOnline ? (
                <>
                  <Wifi className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-800 font-medium">Online</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm text-gray-800 font-medium">Offline Mode</span>
                </>
              )}
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-3 hover:bg-white/20 rounded-xl transition-all duration-300 backdrop-blur-sm shadow-lg ${isMenuOpen ? 'hamburger-open bg-white/10' : 'hamburger-closed'}`}
            >
              <div className="w-7 h-6 flex flex-col justify-between">
                <span className="hamburger-line line-top w-full h-0.5 bg-white rounded shadow-sm"></span>
                <span className="hamburger-line line-middle w-full h-0.5 bg-white rounded shadow-sm"></span>
                <span className="hamburger-line line-bottom w-full h-0.5 bg-white rounded shadow-sm"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Menu */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 overlay-enter"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-blue-400 to-blue-500 shadow-2xl z-50 sidebar-enter">
            <div className="p-8">
              {/* Close button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-lg transition-all duration-300"
              >
                <div className="w-6 h-6 relative">
                  <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white rounded transform rotate-45"></span>
                  <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white rounded transform -rotate-45"></span>
                </div>
              </button>

              {/* Logo in sidebar */}
              <div className="mb-12 mt-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="./business-growth.png" 
                      alt="EkonoLearn Logo" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full hidden items-center justify-center bg-blue-600">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">MPI-Ekonomi</h2>
                    <p className="text-xs text-blue-200">Menu Navigasi</p>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <nav className="space-y-2">
                {['Beranda', 'Materi', 'Tentang'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setActiveSection(item.toLowerCase());
                      setIsMenuOpen(false);
                    }}
                    className="menu-item block w-full text-left px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:translate-x-2 text-white font-medium text-lg backdrop-blur-sm border border-white/20"
                  >
                    {item}
                  </button>
                ))}
              </nav>

              {/* Status di sidebar - Mobile */}
              <div className="mt-8 md:hidden">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20">
                  {isOnline ? (
                    <>
                      <Wifi className="w-5 h-5 text-green-300" />
                      <span className="text-sm text-white font-medium">Status: Online</span>
                    </>
                  ) : (
                    <>
                      <WifiOff className="w-5 h-5 text-yellow-300" />
                      <span className="text-sm text-white font-medium">Status: Offline Mode</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;