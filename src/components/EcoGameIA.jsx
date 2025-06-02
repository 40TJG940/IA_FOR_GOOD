import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import questionsData from '../data/questions.json';

const EcoGameIA = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [carbonSaved, setCarbonSaved] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [userChoices, setUserChoices] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fonction pour mélanger et sélectionner aléatoirement les questions
  const shuffleAndSelectQuestions = (questionsArray, count = 7) => {
    const shuffled = [...questionsArray].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  // Charger les questions depuis le fichier JSON
  useEffect(() => {
    try {
      // Adapter à la structure de votre JSON
      const allQuestions = questionsData.quiz_ia_ecologie.questions
        .filter(q => q.question && q.options && q.reponse_correcte && q.explication) // Filtrer les questions complètes
        .map(q => ({
          id: q.id,
          question: q.question,
          options: q.options,
          correct: q.options.indexOf(q.reponse_correcte), // Trouve l'index de la réponse correcte
          impact: Math.floor(Math.random() * 300 + 100), // Impact aléatoire entre 100-400g CO2
          explanation: q.explication,
          shockingFact: `💡 Fait surprenant : Cette question fait partie des 40 questions sur l'impact écologique de l'IA !`
        }));

      // Sélectionner aléatoirement 7 questions parmi toutes les questions disponibles
      const selectedQuestions = shuffleAndSelectQuestions(allQuestions, 7);

      setQuestions(selectedQuestions);
      setLoading(false);

      console.log(`${allQuestions.length} questions disponibles, ${selectedQuestions.length} sélectionnées aléatoirement`);

    } catch (err) {
      console.error('Erreur lors du chargement des questions:', err);
      setError('Erreur lors du chargement des questions');
      setLoading(false);
    }
  }, []);

  const handleAnswer = (selectedOption) => {
    if (isAnimating || questions.length === 0) return;

    setIsAnimating(true);
    const currentQ = questions[currentQuestion];
    const isAnswerCorrect = selectedOption === currentQ.correct;

    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);
    setUserChoices([...userChoices, {
      question: currentQuestion,
      correct: isAnswerCorrect,
      selectedOption,
      questionId: currentQ.id
    }]);

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
    setLoading(true);

    // Recharger avec de nouvelles questions aléatoires
    setTimeout(() => {
      try {
        const allQuestions = questionsData.quiz_ia_ecologie.questions
          .filter(q => q.question && q.options && q.reponse_correcte && q.explication)
          .map(q => ({
            id: q.id,
            question: q.question,
            options: q.options,
            correct: q.options.indexOf(q.reponse_correcte),
            impact: Math.floor(Math.random() * 300 + 100),
            explanation: q.explication,
            shockingFact: `💡 Fait surprenant : Cette question fait partie des 40 questions sur l'impact écologique de l'IA !`
          }));

        const selectedQuestions = shuffleAndSelectQuestions(allQuestions, 7);
        setQuestions(selectedQuestions);
        setLoading(false);
      } catch (err) {
        setError('Erreur lors du rechargement des questions');
        setLoading(false);
      }
    }, 500);
  };

  const getScoreMessage = () => {
    if (questions.length === 0) return "";

    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return "🏆 Expert en impact IA ! Vous êtes parfaitement informé(e) !";
    if (percentage >= 70) return "🌟 Très bien ! Vous connaissez bien les enjeux de l'IA !";
    if (percentage >= 50) return "👍 Pas mal ! Vous commencez à comprendre l'impact de l'IA !";
    if (percentage >= 30) return "📚 Il y a encore à apprendre sur l'impact environnemental de l'IA...";
    return "😱 Découverte choquante ! L'impact de l'IA est bien plus important que vous ne le pensiez !";
  };

  // États de chargement et d'erreur
  if (loading) {
    return (
      <motion.div
        className="max-w-4xl mx-auto my-10 p-8 bg-dark-400 rounded-2xl shadow-2xl border border-red-600/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center">
          <div className="text-4xl mb-4">🎲</div>
          <p className="text-white text-xl">Sélection aléatoire de 7 questions parmi 40...</p>
          <p className="text-gray-400 text-sm mt-2">Chaque partie sera unique !</p>
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        className="max-w-4xl mx-auto my-10 p-8 bg-dark-400 rounded-2xl shadow-2xl border border-red-600/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center">
          <div className="text-4xl mb-4">❌</div>
          <p className="text-red-400 text-xl">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Réessayer
          </button>
        </div>
      </motion.div>
    );
  }

  if (questions.length === 0) {
    return (
      <motion.div
        className="max-w-4xl mx-auto my-10 p-8 bg-dark-400 rounded-2xl shadow-2xl border border-red-600/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center">
          <div className="text-4xl mb-4">📝</div>
          <p className="text-white text-xl">Aucune question disponible</p>
        </div>
      </motion.div>
    );
  }

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
          {/* Header avec progression */}
          <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
            <span className="bg-dark-300 px-3 py-1 rounded-full">
              Question {currentQuestion + 1}/{questions.length}
            </span>
            <span className="bg-primary/20 px-3 py-1 rounded-full text-primary">
              Score: {score}/{questions.length}
            </span>
            <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-400 text-xs">
              ID: {questions[currentQuestion]?.id}
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
                className="text-2xl font-bold text-white mb-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {questions[currentQuestion]?.question}
              </motion.h3>
            </AnimatePresence>

            {/* Section de feedback */}
            {showFeedback ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`text-center p-6 rounded-lg mb-6 ${isCorrect ? 'bg-green-800/30 border border-green-600' : 'bg-red-800/30 border border-red-600'}`}>
                  <span className="text-3xl mr-3">{isCorrect ? '✅' : '❌'}</span>
                  <p className="font-bold text-xl">{isCorrect ? 'Correct !' : 'Incorrect.'}</p>
                  <p className="text-sm mt-2 text-gray-300">
                    Réponse correcte: {questions[currentQuestion]?.options[questions[currentQuestion]?.correct]}
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-lg mb-4">{questions[currentQuestion]?.explanation}</p>

                  <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-800/30' : 'bg-orange-900/30'} border ${isCorrect ? 'border-green-600' : 'border-orange-600'}`}>
                    <p className="font-bold text-sm mb-2">
                      <span className="mr-2">💥</span>
                      FAIT SURPRENANT :
                    </p>
                    <p className="text-sm">{questions[currentQuestion]?.shockingFact}</p>
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
                      <span className="font-bold">{Math.round(questions[currentQuestion]?.impact)}g de CO₂ économisés</span>
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
                    {questions[currentQuestion]?.options.map((option, index) => (
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
        /* Section des résultats finaux */
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className={`text-8xl w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 ${score === questions.length ? 'bg-green-500/20 border-4 border-green-500' :
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {getScoreMessage()}
          </motion.p>

          {/* Informations sur les questions posées */}
          <motion.div
            className="bg-dark-300 p-6 rounded-xl mb-8 border border-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h4 className="text-gray-200 text-lg mb-4 font-bold">📊 Questions de cette partie</h4>
            <div className="text-sm text-gray-400 space-y-1">
              {questions.map((q, index) => (
                <div key={q.id} className="flex justify-between items-center">
                  <span>Question {index + 1} (ID: {q.id})</span>
                  <span className={userChoices[index]?.correct ? 'text-green-400' : 'text-red-400'}>
                    {userChoices[index]?.correct ? '✅' : '❌'}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Résultats */}
          <motion.div
            className="bg-dark-300 p-8 rounded-xl mb-8 border border-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h4 className="text-gray-200 text-2xl mb-4 font-bold">🌍 Votre impact positif</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-dark-500 p-6 rounded-lg border border-green-600/30">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {Math.round(carbonSaved)}g
                </div>
                <p className="text-gray-300">CO₂ économisés</p>
                <p className="text-gray-500 text-sm mt-2">
                  = {Math.round(carbonSaved / 120)} km de voiture évités
                </p>
              </div>

              <div className="bg-dark-500 p-6 rounded-lg border border-blue-600/30">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {Math.round((score / questions.length) * 100)}%
                </div>
                <p className="text-gray-300">de réponses correctes</p>
                <p className="text-gray-500 text-sm mt-2">
                  {score}/{questions.length} questions
                </p>
              </div>

              <div className="bg-dark-500 p-6 rounded-lg border border-purple-600/30">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  40
                </div>
                <p className="text-gray-300">questions disponibles</p>
                <p className="text-gray-500 text-sm mt-2">
                  7 sélectionnées aléatoirement
                </p>
              </div>
            </div>
          </motion.div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={resetGame}
              className="bg-gradient-to-r from-primary to-green-600 text-white py-3 px-6 rounded-full font-medium flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🎲 Nouvelles questions aléatoires
            </motion.button>

            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📤 Partager mes résultats
            </motion.button>
          </div>

          <motion.div
            className="mt-8 text-center text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <p className="mb-2">
              🎯 Chaque partie est unique avec 7 questions aléatoires parmi 40 !
            </p>
            <p>Rejouez pour découvrir de nouveaux aspects de l'impact environnemental de l'IA</p>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default EcoGameIA;