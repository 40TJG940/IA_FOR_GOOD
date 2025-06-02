import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveHeroSection = ({ setCurrentPage }) => {
  const [isChatExpanded, setIsChatExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "👋 Bonjour ! Je suis EcoBot, votre assistant IA responsable. Posez-moi vos questions sur l'impact environnemental de l'IA !",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const sectionRef = useRef(null);

  // Gestion du scroll pour le chatbot
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
        setIsScrolled(!isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll des messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Simulation de l'API Mistral (remplacez par votre vraie implémentation)
  const callMistralAPI = async (prompt) => {
    const MISTRAL_API_KEY = "7UpGVlvUw8tNn22PkmQOkm99huDOh5vv";
    
    try {
      const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${MISTRAL_API_KEY}`
        },
        body: JSON.stringify({
          model: 'mistral-small-latest',
          messages: [
            {
              role: 'system',
              content: 'Tu es EcoBot, un assistant spécialisé dans l\'impact environnemental de l\'IA. Réponds de manière concise et informative sur les sujets écologiques liés au numérique et à l\'intelligence artificielle.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          max_tokens: 300,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error(`Erreur API Mistral: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Erreur Mistral API:', error);
      return "Désolé, je rencontre des difficultés techniques. Voici quelques faits sur l'IA : ChatGPT consomme 10x plus d'énergie qu'une recherche Google, et l'entraînement de GPT-3 a émis 550 tonnes de CO₂.";
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const botResponse = await callMistralAPI(inputValue);
      
      setTimeout(() => {
        const botMessage = {
          id: Date.now() + 1,
          type: 'bot',
          content: botResponse,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000);
    } catch (error) {
      setTimeout(() => {
        const errorMessage = {
          id: Date.now() + 1,
          type: 'bot',
          content: "Désolé, je rencontre des difficultés. Savez-vous que l'IA consomme déjà 3.7% des émissions mondiales de CO₂ ?",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const quickActions = [
    {
      title: "Calculateur d'Impact",
      description: "Mesurez votre empreinte IA",
      icon: "📊",
      color: "from-blue-500 to-cyan-500",
      action: () => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      title: "Solutions Écologiques",
      description: "Découvrez comment réduire votre impact",
      icon: "🌱",
      color: "from-green-500 to-emerald-500",
      action: () => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      title: "Quiz Interactif",
      description: "Testez vos connaissances",
      icon: "🎯",
      color: "from-purple-500 to-pink-500",
      action: () => setCurrentPage('game')
    },
    {
      title: "Impact Choquant",
      description: "Les vérités cachées de l'IA",
      icon: "⚡",
      color: "from-red-500 to-orange-500",
      action: () => document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })
    }
  ];

  const suggestedQuestions = [
    "Quel est l'impact de ChatGPT sur l'environnement ?",
    "Comment réduire ma consommation IA ?",
    "Combien d'eau consomme l'IA ?",
    "L'IA pollue-t-elle vraiment ?"
  ];

  // Chatbot en mode floating (quand scrollé)
  const FloatingChatbot = () => (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
    >
      {isChatExpanded ? (
        <motion.div
          className="bg-dark-400 rounded-2xl border border-dark-300 shadow-2xl w-96 h-96"
          layoutId="chatbot"
        >
          {/* En-tête du chat floating */}
          <div className="flex items-center justify-between p-4 border-b border-dark-300">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                🤖
              </div>
              <span className="font-medium text-white">EcoBot</span>
            </div>
            <button
              onClick={() => setIsChatExpanded(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Messages floating */}
          <div className="h-64 overflow-y-auto p-4 space-y-3">
            {messages.slice(-3).map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs p-3 rounded-lg text-sm ${
                  message.type === 'user' 
                    ? 'bg-primary text-white' 
                    : 'bg-dark-300 text-gray-100'
                }`}>
                  {message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-dark-300 text-gray-100 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input floating */}
          <div className="p-4 border-t border-dark-300">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Votre question..."
                className="flex-1 bg-dark-200 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleSendMessage}
                className="bg-primary text-white px-3 py-2 rounded-lg hover:bg-primary-dark text-sm"
              >
                ➤
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.button
          onClick={() => setIsChatExpanded(true)}
          className="bg-primary text-white w-14 h-14 rounded-full shadow-lg hover:bg-primary-dark flex items-center justify-center text-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          layoutId="chatbot"
        >
          🤖
        </motion.button>
      )}
    </motion.div>
  );

  return (
    <>
      <section ref={sectionRef} className="py-20 bg-dark-500 relative overflow-hidden">
        {/* Particules d'arrière-plan */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Actions rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Explorez l'impact de l'IA
            </h2>
            <p className="text-gray-400 mb-12">
              Découvrez des outils interactifs pour comprendre et réduire votre empreinte numérique
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {quickActions.map((action, index) => (
                <motion.div
                  key={index}
                  className={`relative group cursor-pointer`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  onClick={action.action}
                >
                  <div className={`bg-gradient-to-br ${action.color} p-1 rounded-2xl`}>
                    <div className="bg-dark-400 rounded-2xl p-6 h-full">
                      <div className="text-4xl mb-4">{action.icon}</div>
                      <h3 className="text-white font-bold text-lg mb-2">{action.title}</h3>
                      <p className="text-gray-400 text-sm">{action.description}</p>
                    </div>
                  </div>
                  
                  {/* Effet de brillance au hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-20 rounded-2xl blur-xl`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Chatbot intégré (mode large) */}
          {!isScrolled && (
            <motion.div
              layoutId="chatbot"
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-dark-200 rounded-3xl border border-dark-300 overflow-hidden shadow-2xl">
                {/* En-tête du chatbot */}
                <div className="bg-gradient-to-r from-primary to-secondary p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
                      🤖
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-bold">EcoBot IA</h3>
                      <p className="text-primary-light">Assistant écologique intelligent</p>
                    </div>
                  </div>
                </div>

                {/* Zone de messages */}
                <div className="h-96 overflow-y-auto p-6 bg-dark-400">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={`max-w-lg p-4 rounded-2xl ${
                          message.type === 'user' 
                            ? 'bg-gradient-to-r from-primary to-primary-dark text-white ml-12' 
                            : 'bg-dark-300 text-gray-100 mr-12'
                        }`}>
                          <p className="mb-1">{message.content}</p>
                          <span className="text-xs opacity-70">
                            {message.timestamp.toLocaleTimeString()}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                    
                    {isTyping && (
                      <motion.div
                        className="flex justify-start"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="bg-dark-300 text-gray-100 p-4 rounded-2xl mr-12">
                          <div className="flex space-x-2 items-center">
                            <span>EcoBot écrit</span>
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </div>

                {/* Questions suggérées */}
                <div className="p-4 bg-dark-200 border-t border-dark-300">
                  <p className="text-gray-400 text-sm mb-3">Questions suggérées :</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {suggestedQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => setInputValue(question)}
                        className="text-xs bg-dark-300 text-gray-300 px-3 py-2 rounded-full hover:bg-dark-100 transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Zone de saisie */}
                <div className="p-6 bg-dark-200">
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Posez votre question sur l'impact environnemental de l'IA..."
                      className="flex-1 bg-dark-300 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary border border-dark-100"
                    />
                    <motion.button
                      onClick={handleSendMessage}
                      className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-xl hover:from-primary-dark hover:to-primary font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={isTyping}
                    >
                      Envoyer ➤
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Chatbot floating */}
      <AnimatePresence>
        {isScrolled && <FloatingChatbot />}
      </AnimatePresence>
    </>
  );
};

export default InteractiveHeroSection;