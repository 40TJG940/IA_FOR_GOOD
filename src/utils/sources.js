// Sources complètes avec liens cliquables pour le projet ECO IA

export const SOURCES = {
  // Impact environnemental principal
  VERT_CHATGPT: {
    url: "https://vert.eco/articles/electricite-eau-mineraux-co2-on-a-tente-de-mesurer-lempreinte-ecologique-de-chatgpt",
    title: "VERT - Impact écologique ChatGPT",
    description: "Mesure complète de l'empreinte écologique de ChatGPT"
  },

  // Polytechnique & recherche académique
  POLYTECHNIQUE_IA: {
    url: "https://www.polytechnique-insights.com/tribunes/energie/ia-generative-la-consommation-energetique-explose/",
    title: "Polytechnique Insights - IA générative",
    description: "La consommation énergétique explose"
  },

  // Consommation énergie & eau
  FUTURA_SCIENCES: {
    url: "https://www.futura-sciences.com/planete/actualites/environnement-voici-ce-consomme-simple-requete-chatgpt-116342/",
    title: "Futura Sciences - Consommation ChatGPT",
    description: "Ce que consomme une simple requête ChatGPT"
  },

  LEBIGDATA_IMPACT: {
    url: "https://www.lebigdata.fr/impact-ecologique-chatgpt",
    title: "LeBigData - Impact écologique",
    description: "500ml d'eau et 2,9Wh par requête ChatGPT"
  },

  // Émissions CO2 & comparaisons
  EKWATEUR_EMPREINTE: {
    url: "https://ekwateur.fr/blog/enjeux-environnementaux/empreinte-carbone-chat-gpt/",
    title: "Ekwateur - Empreinte carbone ChatGPT",
    description: "Analyse détaillée des émissions CO2"
  },

  HELLOWATT_CARBONE: {
    url: "https://www.hellowatt.fr/blog/chat-gpt-empreinte-carbone/",
    title: "Hello Watt - Chat GPT empreinte carbone",
    description: "Estimation de l'impact carbone de l'IA"
  },

  // Calculs et méthodologie
  EKIP_CALCUL: {
    url: "https://blog.ekip.app/quelle-est-lempreinte-carbone-de-chatgpt/",
    title: "Ekip - Calcul empreinte carbone",
    description: "Méthodologie de calcul de l'impact ChatGPT"
  },

  GENERATION_IA: {
    url: "https://generationia.flint.media/p/comment-calculer-vraiment-impact-carbone-de-chatgpt-climat-ia-eau",
    title: "Génération IA - Calcul impact carbone",
    description: "Comment calculer vraiment l'impact carbone de ChatGPT"
  },

  // Comparaisons énergétiques
  ALOUIT_MULTIMEDIA: {
    url: "https://www.alouit-multimedia.com/chatgpt-et-google-analyse-de-la-consommation-energetique-dune-ia-dix-fois-superieure",
    title: "Alouit - ChatGPT vs Google",
    description: "Consommation énergétique 10x supérieure"
  },

  IA_SCHOOL_BILAN: {
    url: "https://www.intelligence-artificielle-school.com/actualite/bilan-carbone-de-l-intelligence-artificielle-analyse-et-axes-d-amelioration/",
    title: "IA School - Bilan carbone IA",
    description: "Analyse et axes d'amélioration"
  },

  // Prévisions et études prospectives
  LENERGEEK_2050: {
    url: "https://lenergeek.com/2025/01/09/intelligence-artificielle-energie-2050/",
    title: "L'Energeek - IA énergie 2050",
    description: "Projections consommation IA d'ici 2050"
  },

  CONNAISSANCES_ENERGIES: {
    url: "https://www.connaissancedesenergies.org/afp/des-emissions-de-co2-qui-senvolent-pourquoi-lintelligence-artificielle-est-elle-si-energivore-240706",
    title: "Connaissance des Énergies - IA énergivore",
    description: "Pourquoi l'IA est-elle si énergivore"
  },

  // Consommation d'eau
  WEDEMAIN_EAU: {
    url: "https://www.wedemain.fr/dechiffrer/quand-lia-generative-fait-exploser-la-facture-deau-de-microsoft-et-google/",
    title: "WE DEMAIN - Facture d'eau IA",
    description: "L'IA fait exploser la consommation d'eau"
  },

  // Impact global et réglementation
  CODE_CLIMAT: {
    url: "https://www.code-climat.com/impact-environnemental-ia-chatgpt-co2-energie.html",
    title: "Code Climat - Impact environnemental IA",
    description: "Vue d'ensemble impact environnemental IA"
  },

  // Solutions et IA durable
  REPORTERRE_COUT: {
    url: "https://reporterre.net/L-insoutenable-cout-ecologique-du-boom-de-l-IA",
    title: "Reporterre - Coût écologique IA",
    description: "L'insoutenable coût écologique du boom de l'IA"
  },

  // Croissance impact IA
  ITSOCIAL_CROISSANCE: {
    url: "https://itsocial.fr/intelligence-artificielle/intelligence-artificielle-articles/lempreinte-carbone-de-lentrainement-des-modeles-des-ia-saccroit-de-plus-en-plus/",
    title: "IT Social - Croissance empreinte IA",
    description: "L'empreinte carbone de l'IA s'accroît de plus en plus"
  }
};

// Composant pour lien cliquable avec icône
export const SourceLink = ({ source, children, className = "" }) => (
  <a 
    href={source.url}
    target="_blank" 
    rel="noopener noreferrer"
    className={`text-primary hover:text-primary-light transition-colors underline inline-flex items-center gap-1 ${className}`}
    title={source.description}
  >
    {children}
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  </a>
);// Sources complètes avec liens cliquables pour le projet ECO IA

export const SOURCES = {
  // Impact environnemental principal
  VERT_CHATGPT: {
    url: "https://vert.eco/articles/electricite-eau-mineraux-co2-on-a-tente-de-mesurer-lempreinte-ecologique-de-chatgpt",
    title: "VERT - Impact écologique ChatGPT",
    description: "Mesure complète de l'empreinte écologique de ChatGPT"
  },

  // Polytechnique & recherche académique
  POLYTECHNIQUE_IA: {
    url: "https://www.polytechnique-insights.com/tribunes/energie/ia-generative-la-consommation-energetique-explose/",
    title: "Polytechnique Insights - IA générative",
    description: "La consommation énergétique explose"
  },

  // Consommation énergie & eau
  FUTURA_SCIENCES: {
    url: "https://www.futura-sciences.com/planete/actualites/environnement-voici-ce-consomme-simple-requete-chatgpt-116342/",
    title: "Futura Sciences - Consommation ChatGPT",
    description: "Ce que consomme une simple requête ChatGPT"
  },

  LEBIGDATA_IMPACT: {
    url: "https://www.lebigdata.fr/impact-ecologique-chatgpt",
    title: "LeBigData - Impact écologique",
    description: "500ml d'eau et 2,9Wh par requête ChatGPT"
  },

  // Émissions CO2 & comparaisons
  EKWATEUR_EMPREINTE: {
    url: "https://ekwateur.fr/blog/enjeux-environnementaux/empreinte-carbone-chat-gpt/",
    title: "Ekwateur - Empreinte carbone ChatGPT",
    description: "Analyse détaillée des émissions CO2"
  },

  HELLOWATT_CARBONE: {
    url: "https://www.hellowatt.fr/blog/chat-gpt-empreinte-carbone/",
    title: "Hello Watt - Chat GPT empreinte carbone",
    description: "Estimation de l'impact carbone de l'IA"
  },

  // Calculs et méthodologie
  EKIP_CALCUL: {
    url: "https://blog.ekip.app/quelle-est-lempreinte-carbone-de-chatgpt/",
    title: "Ekip - Calcul empreinte carbone",
    description: "Méthodologie de calcul de l'impact ChatGPT"
  },

  GENERATION_IA: {
    url: "https://generationia.flint.media/p/comment-calculer-vraiment-impact-carbone-de-chatgpt-climat-ia-eau",
    title: "Génération IA - Calcul impact carbone",
    description: "Comment calculer vraiment l'impact carbone de ChatGPT"
  },

  // Comparaisons énergétiques
  ALOUIT_MULTIMEDIA: {
    url: "https://www.alouit-multimedia.com/chatgpt-et-google-analyse-de-la-consommation-energetique-dune-ia-dix-fois-superieure",
    title: "Alouit - ChatGPT vs Google",
    description: "Consommation énergétique 10x supérieure"
  },

  IA_SCHOOL_BILAN: {
    url: "https://www.intelligence-artificielle-school.com/actualite/bilan-carbone-de-l-intelligence-artificielle-analyse-et-axes-d-amelioration/",
    title: "IA School - Bilan carbone IA",
    description: "Analyse et axes d'amélioration"
  },

  // Prévisions et études prospectives
  LENERGEEK_2050: {
    url: "https://lenergeek.com/2025/01/09/intelligence-artificielle-energie-2050/",
    title: "L'Energeek - IA énergie 2050",
    description: "Projections consommation IA d'ici 2050"
  },

  CONNAISSANCES_ENERGIES: {
    url: "https://www.connaissancedesenergies.org/afp/des-emissions-de-co2-qui-senvolent-pourquoi-lintelligence-artificielle-est-elle-si-energivore-240706",
    title: "Connaissance des Énergies - IA énergivore",
    description: "Pourquoi l'IA est-elle si énergivore"
  },

  // Consommation d'eau
  WEDEMAIN_EAU: {
    url: "https://www.wedemain.fr/dechiffrer/quand-lia-generative-fait-exploser-la-facture-deau-de-microsoft-et-google/",
    title: "WE DEMAIN - Facture d'eau IA",
    description: "L'IA fait exploser la consommation d'eau"
  },

  // Impact global et réglementation
  CODE_CLIMAT: {
    url: "https://www.code-climat.com/impact-environnemental-ia-chatgpt-co2-energie.html",
    title: "Code Climat - Impact environnemental IA",
    description: "Vue d'ensemble impact environnemental IA"
  },

  // Solutions et IA durable
  REPORTERRE_COUT: {
    url: "https://reporterre.net/L-insoutenable-cout-ecologique-du-boom-de-l-IA",
    title: "Reporterre - Coût écologique IA",
    description: "L'insoutenable coût écologique du boom de l'IA"
  },

  // Croissance impact IA
  ITSOCIAL_CROISSANCE: {
    url: "https://itsocial.fr/intelligence-artificielle/intelligence-artificielle-articles/lempreinte-carbone-de-lentrainement-des-modeles-des-ia-saccroit-de-plus-en-plus/",
    title: "IT Social - Croissance empreinte IA",
    description: "L'empreinte carbone de l'IA s'accroît de plus en plus"
  }
};

// Composant pour lien cliquable avec icône
export const SourceLink = ({ source, children, className = "" }) => (
  <a 
    href={source.url}
    target="_blank" 
    rel="noopener noreferrer"
    className={`text-primary hover:text-primary-light transition-colors underline inline-flex items-center gap-1 ${className}`}
    title={source.description}
  >
    {children}
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  </a>
);