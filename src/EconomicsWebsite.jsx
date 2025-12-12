import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MateriSection from './components/MateriSection';
import MateriDetail from './components/MateriDetail';
import CapaianPembelajaran from './components/CapaianPembelajaran';
import ProfilPancasila from './components/ProfilPancasila';
import TujuanPembelajaran from './components/TujuanPembelajaran';
import Footer from './components/Footer';
import OfflineIndicator from './components/OfflineIndicator';

const EconomicsWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [selectedMateri, setSelectedMateri] = useState(null);

  useEffect(() => {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(err => {
        console.log('Service Worker registration failed:', err);
      });
    }

    // Monitor online/offline status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const renderContent = () => {
    if (selectedMateri) {
      return <MateriDetail materi={selectedMateri} onBack={() => setSelectedMateri(null)} />;
    }

    switch(activeSection) {
      case 'beranda':
        return (
          <>
            <Hero />
            <MateriSection onSelectMateri={setSelectedMateri} />
            <CapaianPembelajaran />
            <ProfilPancasila />
            <TujuanPembelajaran />
          </>
        );
      case 'materi':
        return <MateriSection onSelectMateri={setSelectedMateri} />;
      case 'tentang':
        return (
          <>
            <CapaianPembelajaran />
            <ProfilPancasila />
            <TujuanPembelajaran />
          </>
        );
      default:
        return (
          <>
            <Hero />
            <MateriSection onSelectMateri={setSelectedMateri} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Offline Indicator - Notifikasi saat online/offline */}
      <OfflineIndicator />
      
      <Header 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isOnline={isOnline}
      />
      
      {renderContent()}
      
      <Footer />
    </div>
  );
};

export default EconomicsWebsite;