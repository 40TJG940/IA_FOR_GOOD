import React from 'react';
import { motion } from 'framer-motion';

const Impact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const impactData = [
    {
      category: "Énergie",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-900/20",
      borderColor: "border-yellow-600",
      stats: [
        {
          value: "10x",
          label: "plus qu'une recherche Google",
          detail: "Une requête ChatGPT vs Google",
          source: "AIE, 2024"
        },
        {
          value: "134 TWh",
          label: "consommation IA prévue en 2027",
          detail: "= électricité de l'Argentine",
          source: "Recherche Alex de Vries"
        },
        {
          value: "3550 TWh",
          label: "consommation IA possible en 2050",
          detail: "= 37% de plus que la France entière",
          source: "Deloitte, 2024"
        }
      ]
    },
    {
      category: "Carbone",
      icon: "🔥",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-900/20",
      borderColor: "border-red-600",
      stats: [
        {
          value: "550 t",
          label: "de CO₂ pour entraîner GPT-3",
          detail: "= 500 A/R New York-San Francisco",
          source: "Université de Californie"
        },
        {
          value: "272g",
          label: "de CO₂ par conversation ChatGPT-4",
          detail: "= 100x plus que ChatGPT-3.5",
          source: "Gen AI Impact & Ecologits"
        },
        {
          value: "+48%",
          label: "émissions Google en 5 ans",
          detail: "à cause du boom de l'IA",
          source: "Rapport Google 2024"
        }
      ]
    },
    {
      category: "Eau",
      icon: "💧",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-600",
      stats: [
        {
          value: "6,4 Md L",
          label: "consommés par Microsoft en 2022",
          detail: "= 2500 piscines olympiques",
          source: "Rapport Microsoft 2022"
        },
        {
          value: "700 m³",
          label: "pour entraîner ChatGPT-3",
          detail: "= 1400 baignoires pleines",
          source: "Univ. Colorado & Texas"
        },
        {
          value: "0,5L",
          label: "pour 25-50 questions ChatGPT",
          detail: "évaporée dans l'atmosphère",
          source: "Recherche Université Riverside"
        }
      ]
    }
  ];

  const comparisonData = [
    {
      title: "1 conversation ChatGPT-4",
      equivalent: "= 60 km en voiture",
      detail: "272g de CO₂",
      icon: "🚗",
      source: "Gen AI Impact, 2024"
    },
    {
      title: "Entraîner GPT-3",
      equivalent: "= 5 voitures sur leur vie entière",
      detail: "550 tonnes de CO₂",
      icon: "🏭",
      source: "Université de Californie"
    },
    {
      title: "Data centers IA en 2027",
      equivalent: "= consommation de l'Argentine",
      detail: "134 TWh/an",
      icon: "🌎",
      source: "Alex de Vries, VU Amsterdam"
    },
    {
      title: "25 questions ChatGPT",
      equivalent: "= faire bouillir 2 casseroles",
      detail: "0,5L d'eau évaporée",
      icon: "🔥",
      source: "Recherche Riverside & Arlington"
    }
  ];

  const handleDiscoverSolutions = () => {
    const solutionsSection = document.getElementById('solutions');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCalculateImpact = () => {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="impact" className="section-padding bg-dark-700">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-red-400 text-sm font-semibold tracking-wider uppercase">
              LA RÉALITÉ CACHÉE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              L'impact <span className="text-red-400">choquant</span> de l'IA
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-primary mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Chaque fois que vous utilisez une IA générative, vous déclenchez une cascade 
              de consommations invisibles. Voici la vérité sur ce qui se passe réellement.
            </p>
          </motion.div>

          {/* Impact Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {impactData.map((category, index) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className={`${category.bgColor} backdrop-blur-sm p-8 rounded-2xl border ${category.borderColor} hover:scale-105 transition-all duration-300`}
                whileHover={{ y: -10 }}
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.category}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {category.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className={`text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-white font-medium mb-1">{stat.label}</div>
                      <div className="text-gray-400 text-sm mb-2">{stat.detail}</div>
                      <div className="text-xs text-gray-500 italic">
                        📊 {stat.source}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Comparisons Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              🤯 Pour mieux comprendre l'ampleur
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {comparisonData.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-400 p-6 rounded-xl border border-gray-600 hover:border-primary transition-colors duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{item.icon}</div>
                    <div>
                      <div className="text-primary font-bold text-lg">{item.title}</div>
                      <div className="text-white font-medium">{item.equivalent}</div>
                      <div className="text-gray-400 text-sm">{item.detail}</div>
                      <div className="text-xs text-gray-500 mt-1 italic">
                        📊 {item.source}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hidden Costs Section */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-red-900/30 via-orange-900/30 to-yellow-900/30 p-8 rounded-2xl border border-red-600/50 backdrop-blur-sm"
          >
            <h3 className="text-3xl font-bold text-center text-white mb-8">
              🕵️ Les coûts cachés de chaque prompt
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-5xl mb-3">🏭</div>
                <h4 className="text-white font-bold mb-2">Fabrication</h4>
                <p className="text-gray-300 text-sm mb-2">
                  Serveurs NVIDIA, terres rares, extraction minière dans des conditions désastreuses
                </p>
                <div className="text-xs text-gray-500 italic">
                  📊 Global Witness, 2024
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl mb-3">⚡</div>
                <h4 className="text-white font-bold mb-2">Entraînement</h4>
                <p className="text-gray-300 text-sm mb-2">
                  Des mois de calculs intensifs sur des milliers de GPU pour créer le modèle
                </p>
                <div className="text-xs text-gray-500 italic">
                  📊 Epoch AI, 2024
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl mb-3">🔥</div>
                <h4 className="text-white font-bold mb-2">Inférence</h4>
                <p className="text-gray-300 text-sm mb-2">
                  Chaque requête fait tourner des serveurs qui chauffent et consomment 24h/24
                </p>
                <div className="text-xs text-gray-500 italic">
                  📊 Andrew Chien, 2023
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl mb-3">❄️</div>
                <h4 className="text-white font-bold mb-2">Refroidissement</h4>
                <p className="text-gray-300 text-sm mb-2">
                  Climatisation géante et évaporation d'eau pour éviter la surchauffe
                </p>
                <div className="text-xs text-gray-500 italic">
                  📊 Microsoft & Google 2022
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-red-500/20 p-4 rounded-lg border border-red-500/50 inline-block">
                <p className="text-red-300 font-medium mb-2">
                  ⚠️ Le plus inquiétant : <strong>ces impacts explosent de 4 à 5 fois par an</strong> 
                  avec chaque nouvelle génération d'IA
                </p>
                <a 
                  href="https://itsocial.fr/intelligence-artificielle/intelligence-artificielle-articles/lempreinte-carbone-de-lentrainement-des-modeles-des-ia-saccroit-de-plus-en-plus/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-red-400 hover:text-red-300 transition-colors underline"
                >
                  📊 Source: Epoch AI Institute, 2024
                </a>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-6">
              Maintenant que vous savez, que allez-vous faire ?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <motion.button
                className="group relative bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full transition-all duration-300 flex-1 shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDiscoverSolutions}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center">
                  <span className="mr-2">🌱</span>
                  Découvrir les solutions
                </span>
              </motion.button>
              
              <motion.button
                className="group relative bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 flex-1 shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCalculateImpact}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center">
                  <span className="mr-2">📊</span>
                  Calculer mon impact
                </span>
              </motion.button>
            </div>

            <div className="mt-8 p-6 bg-dark-400/50 rounded-lg border border-gray-600">
              <h4 className="text-white font-bold mb-4">📚 Sources principales de cette section :</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-300 mb-2">
                    • <a href="https://www.polytechnique-insights.com/tribunes/energie/ia-generative-la-consommation-energetique-explose/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-green-400 underline">Polytechnique Insights (2025)</a>
                  </p>
                  <p className="text-gray-300 mb-2">
                    • <a href="https://www.connaissancedesenergies.org/afp/des-emissions-de-co2-qui-senvolent-pourquoi-lintelligence-artificielle-est-elle-si-energivore-240706" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-green-400 underline">Connaissance des Énergies (2024)</a>
                  </p>
                  <p className="text-gray-300 mb-2">
                    • <a href="https://lenergeek.com/2025/01/09/intelligence-artificielle-energie-2050/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-green-400 underline">L'Energeek - Étude Deloitte (2025)</a>
                  </p>
                </div>
                <div>
                  <p className="text-gray-300 mb-2">
                    • <a href="https://www.wedemain.fr/dechiffrer/quand-lia-generative-fait-exploser-la-facture-deau-de-microsoft-et-google/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-green-400 underline">WE DEMAIN - Rapports Microsoft/Google (2023)</a>
                  </p>
                  <p className="text-gray-300 mb-2">
                    • <a href="https://vert.eco/articles/electricite-eau-mineraux-co2-on-a-tente-de-mesurer-lempreinte-ecologique-de-chatgpt" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-green-400 underline">VERT - Mesure impact ChatGPT (2024)</a>
                  </p>
                  <p className="text-gray-300 mb-2">
                    • <a href="https://itsocial.fr/intelligence-artificielle/intelligence-artificielle-articles/lempreinte-carbone-de-lentrainement-des-modeles-des-ia-saccroit-de-plus-en-plus/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-green-400 underline">IT Social - Epoch AI (2024)</a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;