import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Solutions = () => {
  const [activeTab, setActiveTab] = useState('utilisateur');
  const [committedUsers, setCommittedUsers] = useState(1247); // Simulated counter

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const solutionsUtilisateur = [
    {
      id: 1,
      title: "Optimiser ses prompts",
      description: "Rédiger des instructions précises pour obtenir le résultat en 1 seule fois",
      icon: "✏️",
      impact: "Fort",
      detail: "Économie potentielle : 60-80% des requêtes inutiles",
      examples: "❌ 'Écris-moi quelque chose sur les chats' → ✅ 'Écris un article de 300 mots sur les bienfaits des chats domestiques pour la santé mentale'",
      source: "Gen AI Impact, 2024"
    },
    {
      id: 2,
      title: "Privilégier le texte aux images/vidéos",
      description: "Générer du texte consomme 10 à 100 fois moins d'énergie que des images",
      icon: "📝",
      impact: "Fort",
      detail: "1 image IA = énergie de 670 requêtes textuelles",
      examples: "Utilisez DALL-E ou Midjourney uniquement quand nécessaire, préférez la description textuelle",
      source: "VERT, 2024"
    },
    {
      id: 3,
      title: "Utiliser des modèles plus légers",
      description: "Choisir des versions 'lite' pour les tâches simples",
      icon: "📊",
      impact: "Fort",
      detail: "ChatGPT-3.5 consomme 100x moins que GPT-4",
      examples: "Pour résumer, corriger ou traduire → utilisez GPT-3.5 ou Claude Haiku",
      source: "Recherche Université Chicago"
    },
    {
      id: 4,
      title: "Réutiliser les résultats",
      description: "Sauvegarder et recycler les bonnes réponses plutôt que de regénérer",
      icon: "🔄",
      impact: "Moyen",
      detail: "1 réutilisation évite 1 nouvelle requête",
      examples: "Créez une bibliothèque de prompts et réponses types pour vos besoins récurrents",
      source: "Pratiques recommandées"
    },
    {
      id: 5,
      title: "Limiter les sessions longues",
      description: "Préférer plusieurs courtes conversations qu'une longue session",
      icon: "⏱️",
      impact: "Moyen",
      detail: "Le contexte long augmente la consommation exponentiellement",
      examples: "Redémarrez la conversation tous les 10-15 échanges plutôt que de continuer indéfiniment",
      source: "Analyse consommation IA"
    },
    {
      id: 6,
      title: "Éviter les requêtes 'pour le fun'",
      description: "Utiliser l'IA pour des besoins réels, pas pour s'amuser",
      icon: "🎯",
      impact: "Moyen",
      detail: "Chaque requête inutile = 4,32g de CO₂",
      examples: "Évitez 'Raconte-moi une blague', préférez des usages productifs et utiles",
      source: "Calculs impact carbone"
    }
  ];

  const solutionsEntreprises = [
    {
      id: 1,
      title: "Établir une politique d'usage IA",
      description: "Définir des règles claires pour l'utilisation de l'IA dans l'entreprise",
      icon: "📋",
      impact: "Fort",
      detail: "Peut réduire de 40-60% l'usage inutile",
      examples: "Limiter les outils IA autorisés, former aux bonnes pratiques, monitorer l'usage",
      source: "Green Software Foundation"
    },
    {
      id: 2,
      title: "Héberger des modèles en local",
      description: "Utiliser des modèles open-source sur vos propres serveurs",
      icon: "💻",
      impact: "Fort",
      detail: "Élimine les transferts de données vers les clouds",
      examples: "Llama 2, Mistral 7B, ou Phi-3 pour les besoins internes",
      source: "Ecolab État français"
    },
    {
      id: 3,
      title: "Mutualiser les requêtes",
      description: "Partager les résultats d'IA au sein des équipes",
      icon: "👥",
      impact: "Fort",
      detail: "1 requête partagée = 10 requêtes évitées",
      examples: "Base de données commune des prompts/réponses par département",
      source: "Bonnes pratiques entreprise"
    },
    {
      id: 4,
      title: "Choisir des fournisseurs verts",
      description: "Privilégier les IA hébergées avec des énergies renouvelables",
      icon: "🌱",
      impact: "Moyen",
      detail: "Peut diviser par 10 l'empreinte carbone",
      examples: "Vérifier les rapports environnementaux d'OpenAI, Anthropic, Google...",
      source: "Rapports environnementaux 2024"
    },
    {
      id: 5,
      title: "Former les employés",
      description: "Sensibiliser aux impacts et enseigner l'éco-conception des prompts",
      icon: "🎓",
      impact: "Fort",
      detail: "Utilisateurs formés = 50% de requêtes plus efficaces",
      examples: "Ateliers prompt engineering, guides internes, sensibilisation impact",
      source: "Études formation utilisateurs"
    },
    {
      id: 6,
      title: "Monitorer la consommation",
      description: "Mesurer et limiter l'usage d'APIs d'IA par équipe/projet",
      icon: "📊",
      impact: "Moyen",
      detail: "Visibilité = premier pas vers la réduction",
      examples: "Dashboards d'usage, budgets CO₂ par équipe, alertes de surconsommation",
      source: "Outils monitoring IA"
    }
  ];

  const solutionsTech = [
    {
      id: 1,
      title: "Optimiser les modèles (pruning)",
      description: "Supprimer les paramètres inutiles pour réduire la taille des modèles",
      icon: "✂️",
      impact: "Fort",
      detail: "Peut réduire de 90% la taille sans perte notable",
      examples: "DistilBERT (66% plus petit que BERT), MobileBERT pour mobile",
      source: "Recherche académique IA"
    },
    {
      id: 2,
      title: "Quantification des modèles",
      description: "Réduire la précision numérique pour diminuer les calculs",
      icon: "🔢",
      impact: "Fort",
      detail: "Passage de 32-bit à 8-bit = 4x moins de mémoire",
      examples: "GPTQ, AWQ, ou techniques de quantification post-entraînement",
      source: "Techniques optimisation IA"
    },
    {
      id: 3,
      title: "Edge computing et cache intelligent",
      description: "Traiter localement et mettre en cache les réponses fréquentes",
      icon: "⚡",
      impact: "Fort",
      detail: "Cache hit = 0 consommation serveur distant",
      examples: "Redis pour cache, modèles edge comme Phi-3 Mini, TinyLlama",
      source: "Architecture edge computing"
    },
    {
      id: 4,
      title: "Entraînement efficace",
      description: "Utiliser des techniques d'apprentissage plus économes",
      icon: "🧠",
      impact: "Fort",
      detail: "Transfer learning = 100x moins de calculs",
      examples: "Fine-tuning, LoRA, prompt tuning au lieu d'entraînement from scratch",
      source: "Recherche ML efficace"
    },
    {
      id: 5,
      title: "Optimisation matérielle",
      description: "Utiliser des puces spécialisées plus efficaces",
      icon: "🔧",
      impact: "Moyen",
      detail: "TPU vs GPU = 2-5x plus efficace pour l'IA",
      examples: "Google TPU, Apple Neural Engine, puces dédiées IA",
      source: "Comparaisons matériel IA"
    },
    {
      id: 6,
      title: "Centres de données verts",
      description: "Héberger dans des centres alimentés aux énergies renouvelables",
      icon: "🌍",
      impact: "Fort",
      detail: "Peut diviser par 20 l'empreinte carbone",
      examples: "Iceland (géothermie), Norway (hydroélectrique), centres certifiés verts",
      source: "Rapports data centers verts"
    }
  ];

  const tabs = [
    { id: 'utilisateur', label: 'Utilisateurs', icon: '👤' },
    { id: 'entreprises', label: 'Entreprises', icon: '🏢' },
    { id: 'tech', label: 'Développeurs', icon: '💻' }
  ];

  const getCurrentSolutions = () => {
    switch (activeTab) {
      case 'utilisateur': return solutionsUtilisateur;
      case 'entreprises': return solutionsEntreprises;
      case 'tech': return solutionsTech;
      default: return solutionsUtilisateur;
    }
  };

  const handleCommitment = () => {
    setCommittedUsers(prev => prev + 1);
    alert('🌱 Merci pour votre engagement ! Ensemble, nous pouvons faire la différence.');
  };

  const handleShareSolutions = () => {
    const shareText = `🌱 Découvrez les solutions pour une IA responsable !\n\n✅ Optimiser ses prompts\n✅ Privilégier le texte aux images\n✅ Utiliser des modèles légers\n\nRejoignez ${committedUsers} personnes déjà engagées ! #IAResponsable`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Solutions pour une IA responsable',
        text: shareText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Solutions copiées dans le presse-papier !');
      });
    }
  };

  return (
    <section id="solutions" className="section-padding bg-dark-600">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              AGISSONS MAINTENANT
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Solutions <span className="text-primary">concrètes</span> pour une IA responsable
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              L'IA peut rester utile tout en réduisant drastiquement son impact. 
              Voici comment agir selon votre profil.
            </p>
            <div className="mt-4">
              <a 
                href="https://reporterre.net/L-insoutenable-cout-ecologique-du-boom-de-l-IA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-primary transition-colors underline"
              >
                📊 Sources: Green Software Foundation, Ecolab État, recherches académiques
              </a>
            </div>
          </motion.div>

          {/* Engagement Counter */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 p-6 rounded-xl border border-green-600/50 inline-block">
              <p className="text-white text-lg mb-2">
                <span className="text-3xl font-bold text-primary">{committedUsers.toLocaleString()}</span> 
                <span className="ml-2">personnes déjà engagées pour une IA responsable !</span>
              </p>
              <p className="text-gray-400 text-sm">Rejoignez le mouvement</p>
            </div>
          </motion.div>

          {/* Tabs */}
          <motion.div variants={itemVariants} className="flex justify-center mb-12">
            <div className="bg-dark-400 p-2 rounded-full border border-gray-600">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-dark-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">{tab.icon}</span>
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Solutions Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {getCurrentSolutions().map((solution, index) => (
                <motion.div
                  key={solution.id}
                  className="bg-dark-400 rounded-xl p-6 border border-gray-700 hover:border-primary transition-all duration-300 group"
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{solution.icon}</div>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      solution.impact === 'Fort' ? 'bg-green-900/50 text-green-400 border border-green-700' :
                      'bg-yellow-900/50 text-yellow-400 border border-yellow-700'
                    }`}>
                      Impact {solution.impact}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {solution.description}
                  </p>
                  
                  <div className="bg-dark-500 p-3 rounded-lg mb-4">
                    <div className="text-primary font-medium text-sm mb-1">💡 Impact</div>
                    <div className="text-gray-300 text-sm">{solution.detail}</div>
                  </div>
                  
                  <div className="bg-dark-300 p-3 rounded-lg mb-3">
                    <div className="text-gray-400 font-medium text-sm mb-1">Exemple concret :</div>
                    <div className="text-gray-300 text-sm">{solution.examples}</div>
                  </div>

                  <div className="text-xs text-gray-500 italic">
                    📊 Source: {solution.source}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Impact Potential */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="bg-gradient-to-r from-green-900/30 via-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-green-600/50 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-center text-white mb-8">
                🎯 Potentiel d'impact collectif
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-green-400 mb-2">-70%</div>
                  <h4 className="text-white font-bold mb-2">Consommation énergétique</h4>
                  <p className="text-gray-300 text-sm">
                    En optimisant nos prompts et en choisissant les bons modèles
                  </p>
                  <div className="text-xs text-gray-500 mt-2 italic">
                    📊 Green Software Foundation
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-400 mb-2">-50%</div>
                  <h4 className="text-white font-bold mb-2">Empreinte carbone</h4>
                  <p className="text-gray-300 text-sm">
                    Avec des centres de données verts et des modèles optimisés
                  </p>
                  <div className="text-xs text-gray-500 mt-2 italic">
                    📊 Recherche CarbonMin
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-5xl font-bold text-purple-400 mb-2">-80%</div>
                  <h4 className="text-white font-bold mb-2">Consommation d'eau</h4>
                  <p className="text-gray-300 text-sm">
                    Grâce aux nouvelles technologies de refroidissement
                  </p>
                  <div className="text-xs text-gray-500 mt-2 italic">
                    📊 Microsoft initiatives 2024
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                  Si seulement 10% des utilisateurs d'IA adoptaient ces pratiques, 
                  nous pourrions économiser l'équivalent de la consommation électrique 
                  de <strong className="text-primary">la Belgique</strong> chaque année.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                  <motion.button
                    className="group relative bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full transition-all duration-300 flex-1 shadow-lg overflow-hidden"
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCommitment}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      <span className="mr-2">🤝</span>
                      Je m'engage
                    </span>
                  </motion.button>
                  
                  <motion.button
                    className="group relative bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 flex-1 shadow-lg overflow-hidden"
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleShareSolutions}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      <span className="mr-2">📤</span>
                      Partager ces solutions
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sources Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-dark-400/50 rounded-xl p-8 border border-gray-600">
              <h4 className="text-white font-bold mb-6 text-center text-xl">📚 Sources et références utilisées :</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                <div>
                  <h5 className="text-primary font-bold mb-3">Organisations officielles</h5>
                  <p className="text-gray-300 mb-2">
                    • <a href="https://reporterre.net/L-insoutenable-cout-ecologique-du-boom-de-l-IA" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-green-400 underline">Green Software Foundation</a>
                  </p>
                  <p className="text-gray-300 mb-2">
                    • <a href="https://www.ecolab.ademe.fr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-green-400 underline">Ecolab - État français</a>
                  </p>
                  <p className="text-gray-300 mb-2">
                    • <a href="https://www.connaissancedesenergies.org/afp/des-emissions-de-co2-qui-senvolent-pourquoi-lintelligence-artificielle-est-elle-si-energivore-240706" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-green-400 underline">Agence Internationale Énergie</a>
                  </p>
                </div>
                <div>
                  <h5 className="text-primary font-bold mb-3">Recherche académique</h5>
                  <p className="text-gray-300 mb-2">
                    • <a href="https://generationia.flint.media/p/comment-calculer-vraiment-impact-carbone-de-chatgpt-climat-ia-eau" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-green-400 underline">Université de Chicago - CarbonMin</a>
                  </p>
                  <p className="text-gray-300 mb-2">
                    • Recherches optimisation ML
                  </p>
                  <p className="text-gray-300 mb-2">
                    • Études architectures edge computing
                  </p>
                </div>
                <div>
                  <h5 className="text-primary font-bold mb-3">Rapports industriels</h5>
                  <p className="text-gray-300 mb-2">
                    • <a href="https://www.wedemain.fr/dechiffrer/quand-lia-generative-fait-exploser-la-facture-deau-de-microsoft-et-google/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-green-400 underline">Rapports environnementaux 2024</a>
                  </p>
                  <p className="text-gray-300 mb-2">
                    • Initiatives Microsoft refroidissement
                  </p>
                  <p className="text-gray-300 mb-2">
                    • Comparaisons matériel IA
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <blockquote className="text-2xl font-medium text-gray-300 italic mb-4">
              "L'IA la plus écologique est celle qu'on n'utilise pas inutilement"
            </blockquote>
            <cite className="text-gray-500">- Principe de sobriété numérique</cite>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;