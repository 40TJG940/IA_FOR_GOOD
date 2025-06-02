import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import EcoGameIA from '../components/EcoGameIA';

const Game = () => {
  const [activeTab, setActiveTab] = useState('quiz');
  const [showShockingFact, setShowShockingFact] = useState(false);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  
  const shockingFacts = [
    {
      title: "ChatGPT consomme plus que des pays entiers",
      content: "En 2024, l'IA de OpenAI a consommé plus d'électricité que l'Islande (population : 380 000 habitants)",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "L'eau s'évapore littéralement",
      content: "Microsoft a consommé 6,4 milliards de litres d'eau en 2022 juste pour refroidir ses serveurs IA. Cette eau s'évapore et ne revient jamais.",
      icon: "💧",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Une image IA = 670 questions ChatGPT",
      content: "Générer une image avec DALL-E ou Midjourney pollue autant que 670 questions textuelles sur ChatGPT",
      icon: "🎨",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "L'IA croît de 400% par an",
      content: "La puissance de calcul des modèles IA les plus avancés augmente de 4 à 5 fois par an, explosant leur consommation",
      icon: "📈",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "2050 : plus que la France entière",
      content: "Si les tendances continuent, l'IA pourrait consommer 37% de plus d'électricité que la France entière d'ici 2050",
      icon: "🌍",
      color: "from-green-500 to-blue-500"
    }
  ];

  const practicalTips = [
    {
      title: "Optimisez vos prompts",
      description: "Soyez précis dès la première fois",
      impact: "Économie : 60-80% des requêtes",
      example: "❌ 'Aide-moi avec Excel' → ✅ 'Comment créer une formule VLOOKUP pour chercher des prix dans une table Excel ?'",
      icon: "✏️"
    },
    {
      title: "Choisissez le bon modèle",
      description: "GPT-3.5 pour les tâches simples",
      impact: "100x moins polluant que GPT-4",
      example: "Pour résumer, corriger, traduire → utilisez GPT-3.5 ou Claude Haiku",
      icon: "🎯"
    },
    {
      title: "Évitez les images inutiles",
      description: "1 image IA = 670 questions texte",
      impact: "Réduction massive de l'empreinte",
      example: "Décrivez plutôt que de générer, utilisez des banques d'images existantes",
      icon: "🚫"
    },
    {
      title: "Réutilisez les résultats",
      description: "Sauvegardez les bonnes réponses",
      impact: "1 réutilisation = 1 requête évitée",
      example: "Créez une bibliothèque de prompts et réponses pour vos besoins récurrents",
      icon: "🔄"
    },
    {
      title: "Sessions courtes",
      description: "Redémarrez les conversations",
      impact: "Contexte long = consommation exponentielle",
      example: "Nouvelle conversation tous les 10-15 échanges plutôt qu'une session infinie",
      icon: "⏱️"
    }
  ];

  useEffect(() => {
    // Change shocking fact every 12 seconds
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % shockingFacts.length);
    }, 12000);
    
    return () => clearInterval(interval);
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-dark-500 pt-8 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="text-center mb-12"
        >
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 text-red-300 text-sm font-medium border border-red-500/30">
              🚨 RÉVÉLATIONS CHOQUANTES
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-red-400">IA Challenge</span> 🧠
          </h1>
          
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Testez vos connaissances sur l'impact réel de l'intelligence artificielle. 
            Préparez-vous à découvrir des vérités que l'industrie tech préfère cacher...
          </p>
          
          <div className="mt-8 inline-flex bg-dark-400 rounded-full p-1 border border-gray-600">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === 'quiz' 
                  ? 'bg-red-500 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('quiz')}
            >
              🎯 Quiz Choc
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === 'tips' 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('tips')}
            >
              💡 Actions Concrètes
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === 'facts' 
                  ? 'bg-orange-500 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('facts')}
            >
              🔥 Faits Choquants
            </motion.button>
          </div>
        </motion.div>
        
        {/* Floating shocking fact */}
        <motion.div
          className="fixed bottom-6 right-6 max-w-sm bg-dark-300 p-4 rounded-lg shadow-2xl border border-red-600/50 z-40"
          initial={{ opacity: 0, x: 300 }}
          animate={{ 
            opacity: showShockingFact ? 1 : 0,
            x: showShockingFact ? 0 : 300,
          }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <div className="flex items-start">
            <div className={`text-3xl mr-3 bg-gradient-to-r ${shockingFacts[currentFactIndex].color} bg-clip-text text-transparent`}>
              {shockingFacts[currentFactIndex].icon}
            </div>
            <div>
              <h4 className="font-bold text-white text-sm mb-1">
                {shockingFacts[currentFactIndex].title}
              </h4>
              <p className="text-gray-300 text-xs">
                {shockingFacts[currentFactIndex].content}
              </p>
            </div>
            <button 
              className="ml-2 text-gray-500 hover:text-gray-300"
              onClick={() => setShowShockingFact(false)}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
        
        {/* Floating fact trigger button */}
        {!showShockingFact && (
          <motion.button
            className="fixed bottom-6 right-6 bg-red-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-40 pulse"
            onClick={() => setShowShockingFact(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ 
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 0 0 rgba(239, 68, 68, 0.7)",
                "0 0 0 10px rgba(239, 68, 68, 0)",
                "0 0 0 0 rgba(239, 68, 68, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🔥
          </motion.button>
        )}
        
        {/* Main content based on active tab */}
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
        >
          {activeTab === 'quiz' && <EcoGameIA />}
          
          {activeTab === 'tips' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  💡 5 Actions Immédiates pour Réduire Votre Impact IA
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Des gestes simples qui peuvent réduire de 70% votre empreinte carbone numérique liée à l'IA
                </p>
              </div>

              <div className="space-y-6">
                {practicalTips.map((tip, index) => (
                  <motion.div
                    key={index}
                    className="bg-dark-400 rounded-xl p-6 border border-gray-700 hover:border-primary transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{tip.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-white">{tip.title}</h3>
                          <span className="bg-green-900/50 text-green-400 text-xs px-3 py-1 rounded-full border border-green-700">
                            {tip.impact}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-4">{tip.description}</p>
                        <div className="bg-dark-300 p-4 rounded-lg">
                          <p className="text-gray-400 text-sm">{tip.example}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 p-8 rounded-xl border border-green-600/50">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    🎯 Défi 30 jours : IA Responsable
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Adoptez ces 5 pratiques pendant 30 jours et mesurez la différence. 
                    Vous pourriez réduire votre impact de <strong className="text-primary">70%</strong> !
                  </p>
                  <motion.button 
                    className="bg-primary text-white py-3 px-8 rounded-full font-bold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🚀 Je relève le défi !
                  </motion.button>
                </div>
              </motion.div>
            </div>
          )}
          
          {activeTab === 'facts' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  🔥 Vérités Cachées sur l'Impact de l'IA
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Les données que l'industrie technologique préfère ne pas mettre en avant...
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {shockingFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    className={`bg-gradient-to-br ${fact.color} bg-opacity-10 rounded-xl p-6 border border-gray-600 hover:border-opacity-50 transition-all duration-300`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="text-center">
                      <div className={`text-6xl mb-4 bg-gradient-to-r ${fact.color} bg-clip-text text-transparent`}>
                        {fact.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{fact.title}</h3>
                      <p className="text-gray-300">{fact.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-red-900/20 border border-red-600/50 rounded-xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-red-400 mb-4">
                    ⚠️ La Réalité Brutale
                  </h3>
                  <p className="text-gray-300 text-lg mb-6">
                    Pendant que nous utilisons l'IA pour écrire nos emails et générer des images "pour le fun", 
                    des <strong className="text-red-400">centres de données géants</strong> consomment plus d'électricité 
                    que <strong className="text-red-400">des pays entiers</strong> et évaporent des 
                    <strong className="text-red-400"> milliards de litres d'eau</strong> dans l'atmosphère.
                  </p>
                  <p className="text-gray-400">
                    <strong>Il est temps d'agir.</strong> Chaque prompt compte.
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Game;