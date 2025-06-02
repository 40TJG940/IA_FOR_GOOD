import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Calculator = () => {
  // Usage parameters
  const [chatgptQuestions, setChatgptQuestions] = useState(20);
  const [claudeQuestions, setClaudeQuestions] = useState(10);
  const [imageGenerations, setImageGenerations] = useState(3);
  const [codeGenerations, setCodeGenerations] = useState(5);
  const [videoGenerations, setVideoGenerations] = useState(1);
  
  // Impact values
  const [co2Impact, setCo2Impact] = useState(0);
  const [waterImpact, setWaterImpact] = useState(0);
  const [energyImpact, setEnergyImpact] = useState(0);

  // Emission factors based on real research data
  const emissionFactors = {
    chatgptQuestion: 4.32, // gCO2e per ChatGPT-4 question
    claudeQuestion: 3.8, // gCO2e per Claude question
    imageGeneration: 2900, // gCO2e per image generation
    codeGeneration: 6.5, // gCO2e per code generation
    videoGeneration: 85000, // gCO2e per minute of video generation
    waterPerCO2: 0.02, // liters of water per gCO2e
    energyPerCO2: 0.002, // kWh per gCO2e
  };

  // Calculate impact whenever inputs change
  useEffect(() => {
    const dailyCO2 = 
      chatgptQuestions * emissionFactors.chatgptQuestion +
      claudeQuestions * emissionFactors.claudeQuestion +
      imageGenerations * emissionFactors.imageGeneration +
      codeGenerations * emissionFactors.codeGeneration +
      (videoGenerations / 7) * emissionFactors.videoGeneration;
    
    const monthlyCO2 = dailyCO2 * 30;
    const monthlyWater = monthlyCO2 * emissionFactors.waterPerCO2;
    const monthlyEnergy = monthlyCO2 * emissionFactors.energyPerCO2;
    
    setCo2Impact(monthlyCO2);
    setWaterImpact(monthlyWater);
    setEnergyImpact(monthlyEnergy);
  }, [chatgptQuestions, claudeQuestions, imageGenerations, codeGenerations, videoGenerations]);

  const getComparisons = () => {
    return {
      kmCar: Math.round(co2Impact / 120),
      flights: Math.round(co2Impact / 90000),
      steaks: Math.round(co2Impact / 3000),
      smartphones: Math.round(energyImpact / 0.015),
      bottles: Math.round(waterImpact / 0.5),
      trees: Math.round(co2Impact / 22000),
    };
  };

  const comparisons = getComparisons();

  const handleDiscoverSolutions = () => {
    const solutionsSection = document.getElementById('solutions');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShareResults = () => {
    const shareText = `🌍 Mon impact IA mensuel:\n• ${co2Impact.toFixed(0)}g de CO₂\n• ${waterImpact.toFixed(1)}L d'eau évaporée\n• Équivalent: ${comparisons.kmCar}km en voiture\n\nCalculez le vôtre sur notre site ! #IAResponsable #ClimateTech`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Mon impact environnemental IA',
        text: shareText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Résultats copiés dans le presse-papier !');
      });
    }
  };

  const handleDownloadReport = () => {
    const reportData = {
      date: new Date().toLocaleDateString('fr-FR'),
      usage: {
        chatgpt: chatgptQuestions,
        claude: claudeQuestions,
        images: imageGenerations,
        code: codeGenerations,
        video: videoGenerations
      },
      impact: {
        co2: co2Impact.toFixed(2),
        water: waterImpact.toFixed(2),
        energy: energyImpact.toFixed(2)
      },
      comparisons
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(reportData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `rapport-impact-ia-${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const SliderInput = ({ value, setValue, label, min, max, icon, unit = "/ jour" }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <label className="text-gray-300 flex items-center">
          <span className="text-2xl mr-3">{icon}</span>
          {label}
        </label>
        <span className="text-primary font-medium">{value} {unit}</span>
      </div>
      <div className="flex items-center">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          className="w-full h-3 bg-dark-300 rounded-lg appearance-none cursor-pointer accent-primary hover:accent-green-400 transition-colors"
        />
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );

  const ImpactDisplay = ({ title, value, unit, icon, comparison, color = "primary" }) => (
    <motion.div 
      className="bg-dark-400 rounded-xl p-6 border border-gray-700 hover:border-primary transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{icon}</span>
        <h3 className="text-white font-semibold text-lg">{title}</h3>
      </div>
      <div className={`text-4xl font-bold text-${color} mb-2`}>
        {value.toFixed(value > 1000 ? 0 : 1)} <span className="text-lg">{unit}</span>
      </div>
      <p className="text-gray-400 text-sm">{comparison}</p>
    </motion.div>
  );

  return (
    <section id="calculator" className="py-20 bg-dark-700">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              MESUREZ VOTRE IMPACT
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Calculateur d'empreinte <span className="text-red-400">IA</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-primary mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez l'impact réel de votre utilisation quotidienne de l'intelligence artificielle 
              sur l'environnement. Les chiffres pourraient vous surprendre...
            </p>
            <div className="mt-4">
              <a 
                href="https://vert.eco/articles/electricite-eau-mineraux-co2-on-a-tente-de-mesurer-lempreinte-ecologique-de-chatgpt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-primary transition-colors underline"
              >
                📊 Méthodologie basée sur VERT, Gen AI Impact & Ecologits (2024)
              </a>
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Section */}
            <div>
              <div className="bg-dark-400 rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                  <span className="text-3xl mr-3">🎛️</span>
                  Votre utilisation quotidienne
                </h3>
                
                <SliderInput
                  value={chatgptQuestions}
                  setValue={setChatgptQuestions}
                  label="Questions ChatGPT-4"
                  min={0}
                  max={100}
                  icon="🤖"
                />
                
                <SliderInput
                  value={claudeQuestions}
                  setValue={setClaudeQuestions}
                  label="Questions Claude/Anthropic"
                  min={0}
                  max={100}
                  icon="🧠"
                />
                
                <SliderInput
                  value={imageGenerations}
                  setValue={setImageGenerations}
                  label="Générations d'images IA"
                  min={0}
                  max={20}
                  icon="🎨"
                />
                
                <SliderInput
                  value={codeGenerations}
                  setValue={setCodeGenerations}
                  label="Générations de code"
                  min={0}
                  max={50}
                  icon="💻"
                />
                
                <SliderInput
                  value={videoGenerations}
                  setValue={setVideoGenerations}
                  label="Générations vidéo IA"
                  min={0}
                  max={10}
                  icon="🎬"
                  unit="/ semaine"
                />

                <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 p-4 rounded-lg mt-8 border border-red-600/50">
                  <h4 className="font-bold text-red-300 mb-2 flex items-center">
                    <span className="mr-2">⚠️</span>
                    Saviez-vous que...
                  </h4>
                  <ul className="text-red-200 text-sm space-y-1 mb-3">
                    <li>• 1 image IA = 670 questions ChatGPT en impact carbone</li>
                    <li>• ChatGPT-4 pollue 100x plus que ChatGPT-3.5</li>
                    <li>• 1 minute de vidéo IA = 20 000 questions textuelles</li>
                  </ul>
                  <div className="text-xs text-gray-400">
                    📊 Sources: Gen AI Impact, Université de Washington
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <span className="text-3xl mr-3">📊</span>
                Votre impact mensuel
              </h3>
              
              <div className="space-y-6">
                <ImpactDisplay 
                  title="Émissions de CO₂"
                  value={co2Impact}
                  unit="g CO₂"
                  icon="🔥"
                  comparison={`= ${comparisons.kmCar} km en voiture ou ${comparisons.steaks} steaks de bœuf`}
                  color="red-400"
                />
                
                <ImpactDisplay 
                  title="Consommation d'eau"
                  value={waterImpact}
                  unit="litres"
                  icon="💧"
                  comparison={`= ${comparisons.bottles} bouteilles de 500ml évaporées dans l'atmosphère`}
                  color="blue-400"
                />
                
                <ImpactDisplay 
                  title="Consommation d'énergie"
                  value={energyImpact}
                  unit="kWh"
                  icon="⚡"
                  comparison={`= ${comparisons.smartphones} recharges complètes de smartphone`}
                  color="yellow-400"
                />
              </div>
              
              {/* Actionable Insights */}
              <div className="mt-8 p-6 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-xl border border-green-600/30">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">💡</span>
                  <span className="text-white font-bold text-lg">Actions immédiates</span>
                </div>
                
                {co2Impact > 1000 && (
                  <div className="bg-red-900/30 p-3 rounded-lg mb-3 border border-red-600/50">
                    <p className="text-red-300 text-sm font-medium">
                      🚨 Impact élevé ! Réduire de 50% vos générations d'images économiserait 
                      {Math.round(imageGenerations * emissionFactors.imageGeneration * 30 * 0.5 / 1000)} kg de CO₂/mois
                    </p>
                  </div>
                )}
                
                {videoGenerations > 2 && (
                  <div className="bg-orange-900/30 p-3 rounded-lg mb-3 border border-orange-600/50">
                    <p className="text-orange-300 text-sm font-medium">
                      🎬 Les vidéos IA sont extrêmement polluantes ! 1 vidéo de moins par semaine = 
                      {Math.round(emissionFactors.videoGeneration * 4 / 1000)} kg de CO₂ économisés/mois
                    </p>
                  </div>
                )}
                
                <div className="bg-green-900/30 p-3 rounded-lg border border-green-600/50">
                  <p className="text-green-300 text-sm">
                    ✅ Privilégiez ChatGPT-3.5 ou Claude Haiku pour les tâches simples : 
                    10x moins polluant que GPT-4 !
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-8">
              Prêt(e) à réduire votre impact IA ?
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
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
                onClick={handleShareResults}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center">
                  <span className="mr-2">📤</span>
                  Partager mes résultats
                </span>
              </motion.button>
              
              <motion.button
                className="group relative bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 flex-1 shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(107, 114, 128, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadReport}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center">
                  <span className="mr-2">📊</span>
                  Télécharger le rapport
                </span>
              </motion.button>
            </div>
          </div>

          {/* Sources Section */}
          <div className="mt-12 p-6 bg-dark-400/50 rounded-xl border border-gray-600">
            <h4 className="text-white font-bold mb-4 text-center">📚 Sources de calcul utilisées :</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-300 mb-2">
                  • <a href="https://vert.eco/articles/electricite-eau-mineraux-co2-on-a-tente-de-mesurer-lempreinte-ecologique-de-chatgpt" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-green-400 underline">VERT - Impact ChatGPT (2024)</a>
                </p>
                <p className="text-gray-300 mb-2">
                  • <a href="https://ekwateur.fr/blog/enjeux-environnementaux/empreinte-carbone-chat-gpt/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-green-400 underline">Ekwateur - Empreinte carbone IA</a>
                </p>
              </div>
              <div>
                <p className="text-gray-300 mb-2">
                  • <a href="https://blog.ekip.app/quelle-est-lempreinte-carbone-de-chatgpt/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-green-400 underline">Ekip - Calcul impact ChatGPT</a>
                </p>
                <p className="text-gray-300 mb-2">
                  • <a href="https://generationia.flint.media/p/comment-calculer-vraiment-impact-carbone-de-chatgpt-climat-ia-eau" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-green-400 underline">Génération IA - Méthodologie</a>
                </p>
              </div>
              <div>
                <p className="text-gray-300 mb-2">
                  • Université de Washington (2024)
                </p>
                <p className="text-gray-300 mb-2">
                  • Gen AI Impact & Ecologits
                </p>
              </div>
            </div>
            <div className="mt-4 text-center text-xs text-gray-500">
              * Facteurs d'émission basés sur les recherches les plus récentes (2024-2025)
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Calculator;