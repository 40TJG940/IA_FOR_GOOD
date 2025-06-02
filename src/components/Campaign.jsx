import React from 'react';

const Campaign = () => {
  const tips = [
    {
      id: 1,
      title: "Nettoyez votre boîte mail",
      description: "Supprimez les emails inutiles et désabonnez-vous des newsletters que vous ne lisez pas.",
      icon: "📧"
    },
    {
      id: 2,
      title: "Optimisez vos recherches",
      description: "Utilisez des favoris et accédez directement aux sites plutôt que de faire des recherches répétitives.",
      icon: "🔍"
    },
    {
      id: 3,
      title: "Réduisez le streaming",
      description: "Diminuez la qualité vidéo quand la HD n'est pas nécessaire et téléchargez vos contenus en WiFi.",
      icon: "📱"
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Nos Conseils Écologiques</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Adoptez ces gestes simples pour réduire significativement votre empreinte numérique au quotidien.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {tips.map(tip => (
            <div key={tip.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">{tip.icon}</div>
              <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-primary text-white font-medium py-3 px-8 rounded-full hover:bg-primary-dark transition duration-300">
            Voir plus de conseils
          </button>
        </div>
      </div>
    </section>
  );
};

export default Campaign;