import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ecoIALogo from '../assets/images/eco-ia-logo.png'; // 👈 Votre logo PNG

const Header = ({ currentPage, setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'game', label: 'Éco-Challenge' },
  ];
  
  return (
    <header className="bg-gray-900 border-b border-gray-700 transition-colors duration-300 relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo avec image + texte */}
          <div className="flex items-center">
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer" 
              onClick={() => setCurrentPage('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Logo image */}
              <motion.img
                src={ecoIALogo}
                alt="ECO IA Logo"
                className="w-8 h-10 object-contain"
                initial={{ rotate: -10, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ 
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5 }
                }}
              />
              
              {/* Texte du logo */}
              <motion.span 
                className="text-green-500 font-bold text-xl"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Eco IA
              </motion.span>
            </motion.div>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${currentPage === item.id 
                    ? 'text-green-500' 
                    : 'text-gray-300 hover:text-green-500'
                  }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                {item.label}
                
                {/* Indicateur de page active */}
                {currentPage === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500 rounded-full"
                    layoutId="activeTab"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-green-500 focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: mobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 border-t border-gray-700">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                setMobileMenuOpen(false);
              }}
              className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium transition-colors
                ${currentPage === item.id 
                  ? 'text-green-500 bg-green-900/20' 
                  : 'text-gray-300 hover:bg-gray-700 hover:text-green-500'
                }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: mobileMenuOpen ? 1 : 0,
                x: mobileMenuOpen ? 0 : -20 
              }}
              transition={{ 
                duration: 0.2, 
                delay: mobileMenuOpen ? 0.1 * index : 0 
              }}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Petite icône pour mobile */}
              <div className="w-2 h-2 rounded-full bg-green-500 mr-3 opacity-60" />
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Header;