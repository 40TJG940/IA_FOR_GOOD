import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EcoGameIA = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [carbonSaved, setCarbonSaved] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [userChoices, setUserChoices] = useState([]);

  const questions = [
    {
      question: "Combien de fois ChatGPT-4 consomme-t-il plus d'énergie qu'une recherche Google ?",
      options: [
        "2 fois plus",
        "5 fois plus", 
        "10 fois plus",
        "50 fois plus"
      ],
      correct: 2,
      impact: 200,
      explanation: "Une requête ChatGPT-4 consomme environ 10 fois plus d'énergie qu'une recherche Google classique, soit 4,32g de CO₂ par question.",
      shockingFact: "Si ChatGPT était un pays, il consommerait plus d'électricité que l'Islande !"
    },
    {
      question: "Quelle quantité d'eau Microsoft a-t-elle consommée en 2022 pour ses centres de données IA ?",
      options: [
        "1 milliard de litres",
        "3,2 milliards de litres",
        "6,4 milliards de litres",
        "12 milliards de litres"
      ],
      correct: 2,
      impact: 150,
      explanation: "Microsoft a consommé 6,4 milliards de litres d'eau en 2022, soit l'équivalent de 2500 piscines olympiques, principalement pour refroidir ses serveurs IA.",
      shockingFact: "Cette eau s'évapore dans l'atmosphère et ne revient jamais dans le cycle naturel !"
    },
    {
      question: "Combien d'émissions de CO₂ l'entraînement de GPT-3 a-t-il généré ?",
      options: [
        "55 tonnes de CO₂",
        "284 tonnes de CO₂", 
        "550 tonnes de CO₂",
        "1200 tonnes de CO₂"
      ],
      correct: 2,
      impact: 300,
      explanation: "L'entraînement de GPT-3 a émis 550 tonnes de CO₂, soit l'équivalent de 500 vols aller-retour New York-San Francisco.",
      shockingFact: "GPT-4 nécessite encore plus de puissance de calcul, multipliant cet impact !"
    },
    {
      question: "En 2050, quelle pourrait être la consommation énergétique de l'IA selon les projections ?",
      options: [
        "Équivalente à l'Espagne",
        "37% de plus que la France entière",
        "Équivalente à l'Allemagne",
        "Double de l'Italie"
      ],
      correct: 1,
      impact: 400,
      explanation: "Selon Deloitte, l'IA pourrait consommer 3550 TWh en 2050, soit 37% de plus que la consommation totale de la France en 2023.",
      shockingFact: "Cette croissance exponentielle menace tous les objectifs climatiques mondiaux !"
    },
    {
      question: "Combien de requêtes ChatGPT équivaut une seule génération d'image IA en termes d'impact carbone ?",
      options: [
        "50 requêtes",
        "200 requêtes",
        "670 requêtes",
        "1000 requêtes"
      ],
      correct: 2,
      impact: 250,
      explanation: "Générer une image avec DALL-E ou Midjourney consomme autant d'énergie que 670 questions textuelles sur ChatGPT, soit 2,9g de CO₂.",
      shockingFact: "Les créateurs de contenu qui génèrent 10 images par jour polluent comme 6700 questions ChatGPT !"
    },
    {
      question: "Quelle est la croissance annuelle de la puissance de calcul des modèles d'IA les plus avancés ?",
      options: [
        "Double chaque année",
        "Triple chaque année",
        "Multipliée par 4-5 chaque année",
        "Multipliée par 10 chaque année"
      ],
      correct: 2,
      impact: 350,
      explanation: "Selon Epoch AI, la puissance de calcul des modèles comme GPT-4 ou Gemini Ultra augmente de 4 à 5 fois par an, explosant leur consommation.",
      shockingFact: "Cette croissance exponentielle rend l'IA de plus en plus gourmande en ressources !"
    },
    {
      question: "Combien de fois ChatGPT-4 est-il plus polluant que ChatGPT-3.5 ?",
      options: [
        "2 fois plus polluant",
        "10 fois plus polluant",
        "50 fois plus polluant",
        "100 fois plus polluant"
      ],
      correct: 3,
      impact: 180,
      explanation: "ChatGPT-4 émet environ 100 fois plus de CO₂ que ChatGPT-3.5 pour une tâche similaire, illustrant l'impact des modèles plus complexes.",
      shockingFact: "Utiliser GPT-3.5 au lieu de GPT-4 pour les tâches simples peut diviser votre impact par 100 !"
    },
    {
      question: "Quel pourcentage de l'électricité mondiale les centres de données consomment-ils actuellement ?",
      options: [
        "0,5%",
        "1,5%", 
        "3%",
        "5%"
      ],
      correct: 1,
      impact: 120,
      explanation: "Les centres de données consomment actuellement 1,5% de l'électricité mondiale, mais ce chiffre pourrait tripler d'ici 2030 avec l'essor de l'IA.",
      shockingFact: "Les centres de données consomment plus d'énergie que 92% des pays du monde !"
    }
  ];

  const handleAnswer = (selectedOption) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const currentQ = questions[currentQuestion];
    const isAnswerCorrect = selectedOption === currentQ.correct;
    
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);
    setUserChoices([...userChoices, { question: currentQuestion, correct: isAnswerCorrect, selectedOption }]);
    
    if (isAnswerCorrect) {
      setScore(score + 1);
      setCarbonSaved(carbonSaved + currentQ.impact);
    }
    
    // After showing feedback, move to next question
    setTimeout(() => {
      setShowFeedback(false);
      setIsAnimating(false);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setGameComplete(true);
      }
    }, 4000);
  };

  const resetGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setGameComplete(false);
    setCarbonSaved(0);
    setShowFeedback(false);
    setUserChoices([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return "🏆 Expert en impact IA ! Vous êtes parfaitement informé(e) !";
    if (percentage >= 70) return "🌟 Très bien ! Vous connaissez bien les enjeux de l'IA !";
    if (percentage >= 50) return "👍 Pas mal ! Vous commencez à comprendre l'impact de l'IA !";
    if (percentage >= 30) return "📚 Il y a encore à apprendre sur l'impact environnemental de l'IA...";
    return "😱 Découverte choquante ! L'impact de l'IA est bien plus important que vous ne le pensiez !";
  };

  const progressPercentage = ((currentQuestion + (showFeedback ? 1 : 0)) / questions.length) * 100;

  return (
    <motion.div 
      className="max-w-4xl mx-auto my-10 p-8 bg-dark-400 rounded-2xl shadow-2xl border border-red-600/30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {!gameComplete ? (
        <div className="space-y-8">
          <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
            <span className="bg-dark-300 px-3 py-1 rounded-full">
              Question {currentQuestion + 1}/{questions.length}
            </span>
            <span className="bg-primary/20 px-3 py-1 rounded-full text-primary">
              Score: {score}/{questions.length}
            </span>
          </div>
          
          <div className="relative h-2 w-full bg-gray-700 rounded-full mb-8 overflow-hidden">
            <motion.div 
              className="absolute h-full bg-gradient-to-r from-red-500 via-orange-500 to-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          
          <div className="bg-dark-300 p-8 rounded-xl border border-gray-600">
            <AnimatePresence mode="wait">
              <motion.h3 
                key={`question-${currentQuestion}`}
                className="text-2xl font-bold mb-8 text-white leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-red-400">🔥</span> {questions[currentQuestion].question}
              </motion.h3>
            </AnimatePresence>
            
            {showFeedback ? (
              <motion.div 
                className={`p-6 rounded-xl ${isCorrect ? 'bg-green-900/30 text-green-300 border border-green-700' : 'bg-red-900/30 text-red-300 border border-red-700'}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{isCorrect ? '✅' : '❌'}</span>
                  <p className="font-bold text-xl">{isCorrect ? 'Correct !' : 'Incorrect.'}</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-lg mb-4">{questions[currentQuestion].explanation}</p>
                  
                  <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-800/30' : 'bg-orange-900/30'} border ${isCorrect ? 'border-green-600' : 'border-orange-600'}`}>
                    <p className="font-bold text-sm mb-2">
                      <span className="mr-2">💥</span>
                      FAIT CHOQUANT :
                    </p>
                    <p className="text-sm">{questions[currentQuestion].shockingFact}</p>
                  </div>
                </div>
                
                {isCorrect && (
                  <div className="bg-green-800/40 p-4 rounded-lg border border-green-600">
                    <p className="font-medium text-sm mb-2">
                      🌱 Impact environnemental évité grâce à vos connaissances :
                    </p>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-bold">{questions[currentQuestion].impact}g de CO₂ économisés</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <div className="space-y-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`options-${currentQuestion}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {questions[currentQuestion].options.map((option, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        className="w-full text-left p-6 border border-gray-700 rounded-xl hover:border-red-500 hover:bg-red-900/10 transition-all mb-4 text-gray-300 group"
                        whileHover={{ x: 10, backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="flex items-center">
                          <span className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-600 mr-4 text-lg font-bold group-hover:border-red-400 group-hover:text-red-400 transition-colors">
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span className="text-lg">{option}</span>
                        </span>
                      </motion.button>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      ) : (
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12">
            <motion.div 
              className="w-40 h-40 mx-auto relative mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
            >
              <div className={`w-full h-full rounded-full flex items-center justify-center text-6xl ${
                score === questions.length ? 'bg-green-500/20 border-4 border-green-500' :
                score >= questions.length * 0.7 ? 'bg-blue-500/20 border-4 border-blue-500' :
                score >= questions.length * 0.5 ? 'bg-yellow-500/20 border-4 border-yellow-500' :
                'bg-red-500/20 border-4 border-red-500'
              }`}>
                {score === questions.length ? '🏆' :
                 score >= questions.length * 0.7 ? '🌟' :
                 score >= questions.length * 0.5 ? '👍' :
                 score >= questions.length * 0.3 ? '📚' : '😱'}
              </div>
            </motion.div>
            
            <motion.h3 
              className="text-3xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Quiz terminé !
            </motion.h3>
            
            <motion.p 
              className="text-xl mb-6 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {getScoreMessage()}
            </motion.p>
            
            <motion.div
              className="flex items-center justify-center gap-4 text-2xl font-bold text-primary mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <span>Score final:</span>
              <div className="flex items-center bg-dark-300 px-6 py-2 rounded-full">
                <span className="text-3xl text-primary">{score}</span>
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-400">{questions.length}</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="bg-dark-300 p-8 rounded-xl mb-8 border border-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <h4 className="text-gray-200 text-2xl mb-4 font-bold">🌍 Votre impact positif</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark-500 p-6 rounded-lg border border-green-600/30">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {carbonSaved}g
                </div>
                <p className="text-gray-300">CO₂ économisés grâce à vos connaissances</p>
                <p className="text-gray-500 text-sm mt-2">
                  = {Math.round(carbonSaved / 120)} km de voiture évités
                </p>
              </div>
              
              <div className="bg-dark-500 p-6 rounded-lg border border-blue-600/30">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {Math.round((score/questions.length) * 100)}%
                </div>
                <p className="text-gray-300">de réponses correctes</p>
                <p className="text-gray-500 text-sm mt-2">
                  Potentiel de réduction d'impact
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="border-t border-gray-700 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <h4 className="font-bold mb-6 text-gray-200 text-xl">🤝 Engagez-vous maintenant :</h4>
            <div className="relative mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-500 to-primary opacity-30 rounded-xl blur"></div>
              <div className="relative bg-dark-400 p-6 rounded-xl border border-gray-600">
                <p className="mb-6 text-gray-300 text-lg">
                  <strong>"Je m'engage à utiliser l'IA de manière responsable en appliquant 
                  au moins 3 pratiques éco-responsables apprises dans ce quiz."</strong>
                </p>
                <motion.button 
                  className="bg-gradient-to-r from-primary to-green-600 text-white py-4 px-8 rounded-full font-bold text-lg shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  🌱 Je m'engage pour la planète !
                </motion.button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={resetGame}
                className="bg-dark-300 text-gray-300 py-3 px-6 rounded-full hover:bg-dark-200 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🔄 Refaire le quiz
              </motion.button>
              
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📤 Partager mes résultats
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-8 text-center text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <p className="mb-4 text-lg font-medium text-red-400">
              "Chaque prompt compte. Chaque choix a un impact."
            </p>
            <p>Partagez ce quiz pour sensibiliser votre entourage à l'impact réel de l'IA</p>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default EcoGameIA;