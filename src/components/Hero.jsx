import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = ({ setCurrentPage }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, delay: 0.6 }
    },
  };

  // Generate AI-specific particles for background animation
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 3,
    duration: Math.random() * 20 + 8,
    content: ['🤖', '⚡', '💧', '🌍', '🔥', '⚖️', 'CO₂', 'TWh'][Math.floor(Math.random() * 8)]
  }));

  const handleDiscoverTruth = () => {
    if (setCurrentPage) {
      setCurrentPage('about');
    }
    // Scroll to impact section if on same page
    setTimeout(() => {
      const impactSection = document.getElementById('impact');
      if (impactSection) {
        impactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleActNow = () => {
    const solutionsSection = document.getElementById('solutions');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-dark-400 via-dark-600 to-dark-800 py-20 md:py-32">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute text-primary opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              fontSize: `${particle.size * 2}px`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {particle.content}
          </motion.div>
        ))}
      </div>

      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }} />
      </div>

      <motion.div 
        ref={ref}
        className="container mx-auto px-4 relative z-10"
        variants={variants}
        initial="hidden"
        animate={controls}
      >
        <div className="flex flex-col items-center text-center">
          <motion.div 
            className="mb-6"
            variants={childVariants}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 text-red-300 text-sm font-medium border border-red-500/30">
              🚨 ALERTE CLIMAT
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            variants={childVariants}
          >
            <span className="text-red-400">L'IA dévore</span><br />
            <span className="text-primary">notre planète</span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl font-medium text-gray-300 mb-8 max-w-3xl"
            variants={childVariants}
          >
            ChatGPT consomme <span className="text-red-400 font-bold">10x plus d'énergie</span> qu'une recherche Google.<br />
            Une conversation = <span className="text-blue-400 font-bold">0,5L d'eau</span> évaporée.
            <br />
            <a 
              href="https://www.polytechnique-insights.com/tribunes/energie/ia-generative-la-consommation-energetique-explose/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-primary transition-colors underline"
            >
              Source: Polytechnique Insights, 2025
            </a>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-400 mb-10 max-w-3xl"
            variants={childVariants}
          >
            Derrière chaque prompt se cache une réalité cachée : <strong>des centres de données géants</strong> qui 
            consomment plus d'électricité que des <strong>pays entiers</strong> et évaporent des 
            <strong> milliards de litres d'eau</strong> pour refroidir les serveurs.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mb-12"
            variants={childVariants}
          >
            <motion.button 
              className="group relative bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 flex-1 shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(239, 68, 68, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDiscoverTruth}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center">
                <span className="mr-2">😱</span>
                Découvrir la vérité
              </span>
            </motion.button>
            
            <motion.button 
              className="group relative bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full transition-all duration-300 flex-1 shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleActNow}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center">
                <span className="mr-2">🌱</span>
                Agir maintenant
              </span>
            </motion.button>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={statsVariants}
        >
          <motion.div 
            className="bg-red-900/30 backdrop-blur-sm p-6 rounded-xl border border-red-700 hover:bg-red-900/40 transition-all duration-300 group cursor-pointer"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="text-red-400 text-5xl font-bold mb-2">×10</div>
            <p className="text-gray-300 text-lg">Une requête ChatGPT vs Google en consommation énergétique</p>
            <div className="mt-4 text-sm text-red-300">
              = 4,32g de CO₂ par question
            </div>
            <a 
              href="https://www.polytechnique-insights.com/tribunes/energie/ia-generative-la-consommation-energetique-explose/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-red-300 transition-colors mt-2 block underline"
            >
              Source: AIE & Polytechnique Insights
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-xl border border-blue-700 hover:bg-blue-900/40 transition-all duration-300 group cursor-pointer"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="text-blue-400 text-5xl font-bold mb-2">6,4 Md</div>
            <p className="text-gray-300 text-lg">litres d'eau consommés par Microsoft en 2022</p>
            <div className="mt-4 text-sm text-blue-300">
              = 2500 piscines olympiques
            </div>
            <a 
              href="https://www.wedemain.fr/dechiffrer/quand-lia-generative-fait-exploser-la-facture-deau-de-microsoft-et-google/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-blue-300 transition-colors mt-2 block underline"
            >
              Source: Rapport Microsoft 2022
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-orange-900/30 backdrop-blur-sm p-6 rounded-xl border border-orange-700 hover:bg-orange-900/40 transition-all duration-300 group cursor-pointer"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="text-orange-400 text-5xl font-bold mb-2">134 TWh</div>
            <p className="text-gray-300 text-lg">consommation annuelle estimée de l'IA en 2027</p>
            <div className="mt-4 text-sm text-orange-300">
              = consommation de l'Argentine
            </div>
            <a 
              href="https://www.connaissancedesenergies.org/afp/des-emissions-de-co2-qui-senvolent-pourquoi-lintelligence-artificielle-est-elle-si-energivore-240706" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-orange-300 transition-colors mt-2 block underline"
            >
              Source: Recherche Alex de Vries
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16 p-8 bg-gradient-to-r from-red-900/20 via-orange-900/20 to-yellow-900/20 rounded-xl border border-gray-700 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              🔥 En 2050, l'IA pourrait consommer 37% de plus que la France entière
            </h3>
            <p className="text-gray-300 mb-6 max-w-4xl mx-auto">
              Pendant que nous utilisons ChatGPT pour écrire nos emails, des serveurs géants 
              tournent 24h/24 dans des centres de données qui consomment plus d'électricité 
              que 92% des pays du monde. <strong>Il est temps d'ouvrir les yeux.</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-6">
              <span className="bg-dark-400 px-3 py-1 rounded-full">550 tonnes CO₂ pour entraîner GPT-3</span>
              <span className="bg-dark-400 px-3 py-1 rounded-full">700 m³ d'eau pour l'entraînement</span>
              <span className="bg-dark-400 px-3 py-1 rounded-full">×100 plus polluant : GPT-4 vs GPT-3.5</span>
            </div>
            <div className="text-center">
              <a 
                href="https://lenergeek.com/2025/01/09/intelligence-artificielle-energie-2050/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-primary transition-colors underline"
              >
                📊 Sources complètes: Deloitte, AIE, Microsoft, Google (2024-2025)
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <motion.button 
            className="group animate-bounce p-3 w-12 h-12 ring-2 ring-primary/50 rounded-full flex items-center justify-center cursor-pointer hover:ring-4 hover:ring-primary/30 transition-all duration-300"
            whileHover={{ scale: 1.2 }}
            onClick={() => {
              document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <svg 
              className="w-6 h-6 text-primary group-hover:text-white transition-colors" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;