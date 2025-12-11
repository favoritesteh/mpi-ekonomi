import React, { useState, useEffect } from 'react';
import { WifiOff, Wifi } from 'lucide-react';

const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowNotification(true);
      
      // Hide notification after 3 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowNotification(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!showNotification && isOnline) return null;

  return (
    <>
      <style>{`
        @keyframes slideInDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes slideOutUp {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(-100%);
            opacity: 0;
          }
        }
        
        .notification-enter {
          animation: slideInDown 0.4s ease-out forwards;
        }
        
        .notification-exit {
          animation: slideOutUp 0.4s ease-out forwards;
        }
      `}</style>

      <div 
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 notification-enter ${!showNotification && isOnline ? 'notification-exit' : ''}`}
      >
        <div className={`flex items-center space-x-3 px-6 py-4 rounded-full shadow-2xl backdrop-blur-md border-2 ${
          isOnline 
            ? 'bg-green-500 border-green-400 text-white' 
            : 'bg-yellow-500 border-yellow-400 text-gray-900'
        }`}>
          {isOnline ? (
            <>
              <Wifi className="w-6 h-6" />
              <span className="font-semibold">Kembali Online! 🎉</span>
            </>
          ) : (
            <>
              <WifiOff className="w-6 h-6" />
              <div>
                <p className="font-semibold">Mode Offline</p>
                <p className="text-sm opacity-90">Konten di-cache tersedia</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Persistent offline banner */}
      {!isOnline && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 px-4 z-40">
          <div className="container mx-auto flex items-center justify-center space-x-2">
            <WifiOff className="w-4 h-4" />
            <span className="text-sm font-medium">
              Anda sedang offline. Beberapa fitur mungkin terbatas.
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default OfflineIndicator;