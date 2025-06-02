import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  return (
    <section className="section-padding bg-dark-600">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Notre Mission</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Sensibiliser sur l'impact environnemental du numérique et de l'IA, 
              tout en proposant des solutions concrètes pour un usage plus responsable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Pourquoi l'empreinte numérique ?</h3>
              <div className="space-y-6">
                <p className="text-gray-300">
                  L'utilisation massive des technologies numériques et de l'IA génère une consommation 
                  d'énergie considérable. Un simple email stocké pendant un an équivaut à l'émission de 10g de CO₂.
                </p>
                <p className="text-gray-300">
                  Le secteur numérique représente déjà <span className="text-primary font-bold">4% des émissions mondiales</span> 
                  de gaz à effet de serre, et ce chiffre pourrait doubler d'ici 2025.
                </p>
                <div className="bg-dark-400 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-bold text-white mb-2">Impact de l'IA générative :</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Entraînement d'un grand modèle : 284 tonnes de CO₂</li>
                    <li>• Une requête ChatGPT : 4.32g de CO₂</li>
                    <li>• Génération d'une image : 2.9g de CO₂</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-8 border border-gray-700">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌍</div>
                  <h4 className="text-xl font-bold text-white mb-4">L'urgence d'agir</h4>
                  <p className="text-gray-300 mb-6">
                    Chaque clic, chaque recherche, chaque prompt a un impact. 
                    Ensemble, nous pouvons faire la différence.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-dark-500 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-primary">3.7%</div>
                      <div className="text-sm text-gray-400">émissions mondiales</div>
                    </div>
                    <div className="bg-dark-500 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-primary">×2</div>
                      <div className="text-sm text-gray-400">croissance d'ici 2025</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Objectif</h3>
              <p className="text-gray-400">
                Réduire l'empreinte carbone du numérique par la sensibilisation et l'action
              </p>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-white mb-3">Éducation</h3>
              <p className="text-gray-400">
                Comprendre les enjeux environnementaux du numérique et de l'IA
              </p>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">Action</h3>
              <p className="text-gray-400">
                Proposer des solutions concrètes et accessibles à tous
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-dark-400 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Ensemble, agissons pour un numérique responsable</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Notre campagne vise à créer une prise de conscience collective sur l'impact environnemental 
                du numérique et à encourager l'adoption de pratiques plus durables.
              </p>
              <motion.button 
                className="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Rejoignez le mouvement
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;