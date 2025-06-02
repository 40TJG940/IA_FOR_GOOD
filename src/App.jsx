import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Impact from './components/Impact';
import Solutions from './components/Solutions';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import About from './components/About';
import Game from './pages/Game';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  
  // Fonction appelée quand le loading est terminé
  const handleLoadingComplete = () => {
    console.log('App: Réception du signal de fin de loading');
    setIsLoading(false);
  };

  // Sécurité supplémentaire : forcer la fin du loading après 5 secondes
  useEffect(() => {
    const maxLoadTime = setTimeout(() => {
      console.log('App: Timeout atteint, fin forcée du loading');
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(maxLoadTime);
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'game':
        return <Game />;
      case 'home':
      default:
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <Impact id="impact" />
            <Solutions id="solutions" />
            <Calculator id="calculator" />
          </>
        );
    }
  };

  return (
    <>
      {/* LoadingScreen avec AnimatePresence pour une sortie fluide */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {/* Contenu principal */}
      {!isLoading && (
        <motion.div 
          className="bg-black text-gray-100 min-h-screen overflow-x-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="fixed w-full h-full top-0 left-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-900/10 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-blue-900/10 to-transparent"></div>
          </div>

          <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
          
          <main className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {renderCurrentPage()}
              </motion.div>
            </AnimatePresence>
          </main>
          
          <Footer />
        </motion.div>
      )}

      {/* Debug info en bas */}
      <div className="fixed bottom-2 left-2 text-xs text-gray-500 bg-black/50 p-2 rounded z-50">
        Loading: {isLoading ? 'true' : 'false'}
      </div>
    </>
  );
}

export default App;