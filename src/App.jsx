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
  
  useEffect(() => {
    // Simulate loading for smooth entry animation
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

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
    <div className="bg-black text-gray-100 min-h-screen overflow-x-hidden">
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
    </div>
  );
}

export default App;