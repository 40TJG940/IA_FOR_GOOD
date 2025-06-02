import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 z-50">
      <div className="text-center">
        {/* Logo animé principal */}
        <motion.div 
          className="mb-8 relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Container centré pour tous les éléments */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Cercle extérieur */}
            <motion.div 
              className="absolute w-32 h-32 rounded-full border-4 border-transparent bg-gradient-to-r from-green-500 to-blue-500 p-1"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full bg-gray-900"></div>
            </motion.div>
            
            {/* Cercle intérieur */}
            <motion.div 
              className="absolute w-20 h-20 rounded-full border-4 border-transparent bg-gradient-to-r from-red-500 to-orange-500 p-1"
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full bg-gray-900"></div>
            </motion.div>
            
            {/* Icône centrale */}
            <motion.div 
              className="absolute z-10 flex items-center justify-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 200 }}
            >
              <div className="text-5xl">🌱</div>
            </motion.div>
            
            {/* Particules flottantes */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-green-400 rounded-full"
                style={{
                  left: `${16 + Math.cos(i * Math.PI / 4) * 50}px`,
                  top: `${16 + Math.sin(i * Math.PI / 4) * 50}px`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Titre principal */}
        <motion.h2 
          className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Eco IA Challenge
        </motion.h2>
        
        {/* Sous-titre */}
        <motion.p 
          className="text-gray-400 text-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          Découvrez l'impact réel de l'IA
        </motion.p>
        
        {/* Barre de progression */}
        <motion.div 
          className="w-64 h-2 bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.4, duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
        
        {/* Texte de chargement */}
        <motion.div
          className="text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.4 }}
        >
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Chargement des données environnementales...
          </motion.span>
        </motion.div>
        
        {/* Faits rapides pendant le chargement */}
        <motion.div 
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.p 
            className="text-red-400 text-sm font-medium"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.7, 1, 0.7] 
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💡 Saviez-vous ? ChatGPT consomme 10x plus qu'une recherche Google
          </motion.p>
        </motion.div>
      </div>
      
      {/* Effet de fond */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;