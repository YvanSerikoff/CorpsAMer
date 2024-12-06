const quizData = [
  {
    question: "Quelle partie du corps humain est comparée aux courants océaniques dans leur rôle de transport de nutriments et d'énergie ?",
    options: [
      "A) Le cœur",
      "B) Les poumons",
      "C) Les vaisseaux sanguins",
      "D) Le cerveau"
    ],
    correctAnswer: "C) Les vaisseaux sanguins",
    explanation: "Les vaisseaux sanguins transportent le sang et les nutriments à travers le corps, tout comme les courants océaniques déplacent l'eau et les éléments essentiels dans l'océan."
  },
  {
    question: "Quel mécanisme du corps humain peut être comparé à la manière dont les océans régulent la température globale de la Terre ?",
    options: [
      "A) La digestion",
      "B) La circulation sanguine",
      "C) Le système nerveux",
      "D) La respiration"
    ],
    correctAnswer: "B) La circulation sanguine",
    explanation: "La circulation sanguine aide à réguler la température corporelle, tout comme les océans régulent la température mondiale en stockant et en redistribuant la chaleur."
  },
  {
    question: "Quelle partie de l'océan est comparable aux reins humains, filtrant et nettoyant l'eau ?",
    options: [
      "A) Le fond marin",
      "B) Les courants de surface",
      "C) Les récifs coralliens",
      "D) Les zones d’upwelling"
    ],
    correctAnswer: "A) Le fond marin",
    explanation: "Le fond marin, en particulier les zones proches des fosses océaniques, joue un rôle dans le filtrage des éléments dans l'eau, un peu comme les reins filtrent les déchets dans le corps."
  },
  {
    question: "Quel dysfonctionnement du corps humain peut être comparé à la pollution des océans ?",
    options: [
      "A) L'hypertension",
      "B) Le diabète",
      "C) Les maladies respiratoires",
      "D) L'empoisonnement par les toxines"
    ],
    correctAnswer: "D) L'empoisonnement par les toxines",
    explanation: "Tout comme la pollution des océans perturbe l'écosystème marin, l'empoisonnement par les toxines dans le corps perturbe le bon fonctionnement de l'organisme."
  },
  {
    question: "Quel système humain est comparable à la manière dont les océans influencent le climat global ?",
    options: [
      "A) Le système immunitaire",
      "B) Le système respiratoire",
      "C) Le système endocrinien",
      "D) Le système circulatoire"
    ],
    correctAnswer: "C) Le système endocrinien",
    explanation: "Le système endocrinien, en régulant la production d'hormones, influence de nombreux aspects du corps humain, tout comme les océans influencent le climat global en régulant la chaleur et l'humidité."
  },
  {
    question: "Les vagues océaniques peuvent être comparées à quel mécanisme du corps humain ?",
    options: [
      "A) Les contractions musculaires",
      "B) Les battements du cœur",
      "C) La circulation sanguine",
      "D) La respiration"
    ],
    correctAnswer: "B) Les battements du cœur",
    explanation: "Les vagues océaniques, en se formant et en se retirant, rappellent les battements du cœur qui rythment la circulation sanguine dans le corps."
  },
  {
    question: "Quel phénomène des océans est similaire à la manière dont les capillaires sanguins distribuent l'oxygène dans le corps ?",
    options: [
      "A) Les marées",
      "B) Le courant de convection",
      "C) Le phénomène d'upwelling",
      "D) La circulation thermohaline"
    ],
    correctAnswer: "C) Le phénomène d'upwelling",
    explanation: "L'upwelling est un phénomène où l'eau profonde, riche en nutriments, remonte à la surface, tout comme les capillaires sanguins amènent l'oxygène et les nutriments aux cellules."
  },
  {
    question: "Comment les océans peuvent-ils être comparés au système lymphatique humain ?",
    options: [
      "A) Ils transportent des éléments vitaux",
      "B) Ils régulent la température",
      "C) Ils filtrent les impuretés",
      "D) Ils produisent des énergies renouvelables"
    ],
    correctAnswer: "C) Ils filtrent les impuretés",
    explanation: "Tout comme le système lymphatique filtre les déchets et les impuretés dans le corps, les océans absorbent et filtrent des substances essentielles à l'équilibre de la planète."
  },
  {
    question: "Quelle comparaison peut être faite entre les nerfs du système humain et les câbles sous-marins ?",
    options: [
      "A) Ils sont responsables de la communication",
      "B) Ils transportent l'énergie",
      "C) Ils régulent la température",
      "D) Ils produisent des substances chimiques"
    ],
    correctAnswer: "A) Ils sont responsables de la communication",
    explanation: "Les nerfs humains transmettent des signaux électriques dans tout le corps, tout comme les câbles sous-marins transmettent des informations et des données à travers l'océan."
  },
  {
    question: "Quelle partie de l'océan joue un rôle similaire aux poumons humains en filtrant et en échangeant des gaz ?",
    options: [
      "A) Les récifs coralliens",
      "B) Les estuaires",
      "C) La surface des océans",
      "D) Le plancton"
    ],
    correctAnswer: "D) Le plancton",
    explanation: "Le plancton, tout comme les poumons humains, joue un rôle essentiel dans l'échange gazeux, produisant de l'oxygène et absorbant du dioxyde de carbone."
  },
  {
    question: "Quel effet négatif d'un dysfonctionnement du système circulatoire humain peut être comparé à la dégradation des écosystèmes marins ?",
    options: [
      "A) Les varices",
      "B) Les maladies cardiaques",
      "C) L'hypertension",
      "D) L'athérosclérose"
    ],
    correctAnswer: "D) L'athérosclérose",
    explanation: "Tout comme l'athérosclérose bloque le flux sanguin dans le corps, la pollution et la dégradation des écosystèmes marins bloquent les processus vitaux dans l'océan."
  },
  {
    question: "Quel phénomène dans les océans peut être comparé à la réaction d'un corps humain à un virus ?",
    options: [
      "A) L'évaporation",
      "B) Les tempêtes",
      "C) Les courants marins",
      "D) Le réchauffement des eaux"
    ],
    correctAnswer: "B) Les tempêtes",
    explanation: "Les tempêtes océaniques, qui surviennent en réponse à des perturbations, sont comparables à la réaction du système immunitaire humain face à une infection."
  },
  {
    question: "Quelle partie du système humain est semblable à la manière dont les océans distribuent les nutriments et l'énergie à la planète ?",
    options: [
      "A) Le système nerveux",
      "B) Le système digestif",
      "C) Le système circulatoire",
      "D) Le système respiratoire"
    ],
    correctAnswer: "C) Le système circulatoire",
    explanation: "Le système circulatoire distribue les nutriments et l'oxygène dans tout le corps, de manière similaire à la manière dont les océans redistribuent la chaleur et les nutriments à l'échelle mondiale."
  },
  {
    question: "Quel est l'équivalent des gènes dans l'océan, responsables de la reproduction et de la diversité biologique ?",
    options: [
      "A) Les courants océaniques",
      "B) Les espèces marines",
      "C) Le plancton",
      "D) Les récifs coralliens"
    ],
    correctAnswer: "B) Les espèces marines",
    explanation: "Les espèces marines, comme les gènes dans un organisme, assurent la diversité biologique et la reproduction dans les écosystèmes océaniques."
  },
  {
    question: "Quel processus océanique peut être comparé à la digestion dans le corps humain ?",
    options: [
      "A) L'évaporation",
      "B) L'absorption des nutriments par le plancton",
      "C) Le cycle de l'azote",
      "D) Les courants marins"
    ],
    correctAnswer: "B) L'absorption des nutriments par le plancton",
    explanation: "Le plancton absorbe les nutriments de l'eau de mer pour se nourrir, tout comme le système digestif humain absorbe les nutriments des aliments."
  },
  {
    question: "Quel mécanisme du corps humain peut être comparé aux vagues océaniques qui changent constamment ?",
    options: [
      "A) Le rythme cardiaque",
      "B) La respiration",
      "C) Les contractions musculaires",
      "D) La circulation sanguine"
    ],
    correctAnswer: "A) Le rythme cardiaque",
    explanation: "Tout comme les vagues, le rythme cardiaque est un mouvement régulier et essentiel qui propulse le sang dans le corps, maintenant ainsi son fonctionnement."
  },
  {
    question: "Les récifs coralliens jouent un rôle similaire à quelle partie du corps humain ?",
    options: [
      "A) Les poumons",
      "B) Les os",
      "C) Les reins",
      "D) Le foie"
    ],
    correctAnswer: "A) Les poumons",
    explanation: "Les récifs coralliens, comme les poumons humains, assurent un échange de gaz essentiel (oxygène et dioxyde de carbone) et soutiennent la vie marine."
  },
  {
    question: "Quel mécanisme dans l'océan peut être comparé au système nerveux humain en ce qui concerne la coordination et la communication ?",
    options: [
      "A) Les courants de marée",
      "B) Le système de courant thermohalin",
      "C) Le plancton",
      "D) Les câbles sous-marins"
    ],
    correctAnswer: "B) Le système de courant thermohalin",
    explanation: "Le système de courant thermohalin, qui assure la circulation de l'eau à travers l'océan, joue un rôle de coordination et de régulation similaire à celui du système nerveux dans le corps humain."
  },
  {
    question: "Quel processus océanique est comparé à la régulation hormonale dans le corps humain ?",
    options: [
      "A) Les courants de surface",
      "B) L'upwelling",
      "C) La circulation thermohaline",
      "D) Le phénomène de photosynthèse dans le plancton"
    ],
    correctAnswer: "C) La circulation thermohaline",
    explanation: "La circulation thermohaline, qui régule le climat mondial en redistribuant la chaleur, joue un rôle similaire à celui des hormones dans le corps humain, qui régulent divers processus biologiques."
  },
  {
    question: "Quel phénomène dans l'océan est similaire à une infection qui affecte le corps humain ?",
    options: [
      "A) La montée des eaux",
      "B) Le réchauffement des océans",
      "C) La pollution plastique",
      "D) Les tempêtes océaniques"
    ],
    correctAnswer: "C) La pollution plastique",
    explanation: "La pollution plastique dans l'océan perturbe l'équilibre naturel, tout comme une infection peut perturber l'équilibre d'un organisme en perturbant ses fonctions."
  },
  {
    question: "Les systèmes circulatoires marins peuvent être comparés à quelle partie du corps humain ?",
    options: [
      "A) Le système immunitaire",
      "B) Le système circulatoire",
      "C) Le système nerveux",
      "D) Le système lymphatique"
    ],
    correctAnswer: "B) Le système circulatoire",
    explanation: "Les systèmes circulatoires marins transportent des éléments vitaux, tout comme le système circulatoire humain transporte le sang, l'oxygène et les nutriments à travers le corps."
  },
  {
    question: "Quel processus dans l'océan joue un rôle similaire à la digestion des protéines dans le corps humain ?",
    options: [
      "A) Le cycle de l'azote",
      "B) Le processus de décomposition",
      "C) La photosynthèse du phytoplancton",
      "D) Le rejet des gaz par les vagues"
    ],
    correctAnswer: "B) Le processus de décomposition",
    explanation: "La décomposition dans l'océan, qui transforme les organismes morts en nutriments, est comparable à la digestion des protéines dans le corps humain, où les aliments sont décomposés pour libérer des nutriments."
  },
  {
    question: "Quel phénomène dans les océans est similaire au rôle des poumons humains ?",
    options: [
      "A) Les récifs coralliens",
      "B) L'oxygénation de l'eau par les algues",
      "C) Le plancton",
      "D) Les courants thermohalins"
    ],
    correctAnswer: "B) L'oxygénation de l'eau par les algues",
    explanation: "Les algues, en effectuant la photosynthèse, libèrent de l'oxygène dans l'eau, tout comme les poumons libèrent de l'oxygène dans le sang pour être distribué dans le corps."
  },
  {
    question: "Quel système humain est semblable aux courants océaniques en ce qui concerne leur rôle de redistribution des ressources ?",
    options: [
      "A) Le système digestif",
      "B) Le système nerveux",
      "C) Le système circulatoire",
      "D) Le système respiratoire"
    ],
    correctAnswer: "C) Le système circulatoire",
    explanation: "Le système circulatoire redistribue le sang et les nutriments à travers le corps, de manière similaire à la manière dont les courants océaniques redistribuent la chaleur, les nutriments et l'énergie à l'échelle mondiale."
  },
  {
    question: "Quel phénomène dans l'océan peut être comparé à une obstruction dans les artères humaines ?",
    options: [
      "A) La montée des eaux",
      "B) Les marées",
      "C) La pollution plastique",
      "D) Les courants sous-marins"
    ],
    correctAnswer: "C) La pollution plastique",
    explanation: "La pollution plastique dans l'océan obstrue et perturbe l'écosystème marin, tout comme une obstruction dans les artères humaines (athérosclérose) perturbe la circulation sanguine."
  },
  {
    question: "Quel aspect des océans est comparable à la régulation de la température corporelle dans le corps humain ?",
    options: [
      "A) Les courants marins",
      "B) Le système thermohalin",
      "C) L'évaporation de l'eau",
      "D) Le plancton"
    ],
    correctAnswer: "A) Les courants marins",
    explanation: "Les courants marins, qui régulent la température de l'océan en redistribuant la chaleur, sont comparables à la régulation thermique du corps humain pour maintenir une température constante."
  },
  {
    question: "Quel processus océanique peut être comparé à la respiration dans le corps humain ?",
    options: [
      "A) La photosynthèse des algues",
      "B) La circulation thermohaline",
      "C) L'évaporation de l'eau",
      "D) Les marées"
    ],
    correctAnswer: "A) La photosynthèse des algues",
    explanation: "La photosynthèse des algues produit de l'oxygène, tout comme la respiration humaine permet d'absorber de l'oxygène et de rejeter du dioxyde de carbone."
  },
  {
    question: "Quel phénomène océanique peut être comparé à la fonction des poumons dans le corps humain ?",
    options: [
      "A) Les courants de surface",
      "B) Les zones d'upwelling",
      "C) Les récifs coralliens",
      "D) Les marées"
    ],
    correctAnswer: "B) Les zones d'upwelling",
    explanation: "Les zones d'upwelling apportent des nutriments des profondeurs de l'océan à la surface, tout comme les poumons apportent de l'oxygène de l'air au sang."
  },
  {
    question: "Quel aspect des océans est comparable à la peau humaine en termes de protection et de régulation ?",
    options: [
      "A) La couche de glace polaire",
      "B) La barrière de corail",
      "C) La surface de l'eau",
      "D) Les mangroves"
    ],
    correctAnswer: "B) La barrière de corail",
    explanation: "La barrière de corail protège les côtes des vagues et des tempêtes, tout comme la peau protège le corps des agressions extérieures et régule la température."
  },
  {
    question: "Quel processus océanique peut être comparé à la circulation lymphatique dans le corps humain ?",
    options: [
      "A) La migration des poissons",
      "B) La circulation des nutriments",
      "C) La formation des vagues",
      "D) La marée noire"
    ],
    correctAnswer: "B) La circulation des nutriments",
    explanation: "La circulation des nutriments dans l'océan est comparable à la circulation lymphatique qui transporte les nutriments et élimine les déchets dans le corps humain."
  },
  {
    question: "Quel phénomène océanique peut être comparé à la fonction des reins dans le corps humain ?",
    options: [
      "A) La filtration des sédiments",
      "B) La circulation thermohaline",
      "C) Les courants de surface",
      "D) Les marées"
    ],
    correctAnswer: "A) La filtration des sédiments",
    explanation: "La filtration des sédiments dans l'océan est comparable à la fonction des reins qui filtrent les déchets et les toxines du sang dans le corps humain."
  },
  {
    question: "Quel processus océanique peut être comparé à la digestion dans le corps humain ?",
    options: [
      "A) La décomposition des matières organiques",
      "B) La photosynthèse des algues",
      "C) La circulation thermohaline",
      "D) Les marées"
    ],
    correctAnswer: "A) La décomposition des matières organiques",
    explanation: "La décomposition des matières organiques dans l'océan est comparable à la digestion dans le corps humain, où les aliments sont décomposés pour libérer des nutriments."
  },
  {
    question: "Quel aspect des océans est comparable au système immunitaire dans le corps humain ?",
    options: [
      "A) Les barrières de corail",
      "B) Les courants marins",
      "C) Les zones d'upwelling",
      "D) Les mangroves"
    ],
    correctAnswer: "D) Les mangroves",
    explanation: "Les mangroves protègent les côtes des tempêtes et des érosions, tout comme le système immunitaire protège le corps contre les infections et les maladies."
  },
  {
    question: "Quel phénomène océanique peut être comparé à la circulation sanguine dans le corps humain ?",
    options: [
      "A) Les courants marins",
      "B) Les marées",
      "C) La migration des poissons",
      "D) L'évaporation de l'eau"
    ],
    correctAnswer: "A) Les courants marins",
    explanation: "Les courants marins transportent l'eau et les nutriments à travers l'océan, tout comme la circulation sanguine transporte le sang et les nutriments à travers le corps humain."
  },
  {
    question: "Quel phénomène océanique peut être comparé à la fonction du foie dans le corps humain ?",
    options: [
      "A) La décomposition des matières organiques",
      "B) La filtration des sédiments",
      "C) La photosynthèse des algues",
      "D) Les courants marins"
    ],
    correctAnswer: "B) La filtration des sédiments",
    explanation: "La filtration des sédiments dans l'océan est comparable à la fonction du foie qui filtre les toxines et les déchets du sang dans le corps humain."
  },
  {
    question: "Quel aspect des océans est comparable au système nerveux dans le corps humain ?",
    options: [
      "A) Les courants marins",
      "B) Les vagues",
      "C) Les récifs coralliens",
      "D) Les marées"
    ],
    correctAnswer: "B) Les vagues",
    explanation: "Les vagues transportent de l'énergie à travers l'océan, tout comme le système nerveux transporte des signaux électriques à travers le corps humain."
  },
  {
    question: "Quel processus océanique peut être comparé à la transpiration dans le corps humain ?",
    options: [
      "A) L'évaporation de l'eau",
      "B) La photosynthèse des algues",
      "C) La circulation thermohaline",
      "D) Les marées"
    ],
    correctAnswer: "A) L'évaporation de l'eau",
    explanation: "L'évaporation de l'eau à la surface de l'océan est comparable à la transpiration dans le corps humain, qui aide à réguler la température corporelle."
  },
  {
    question: "Quel phénomène océanique peut être comparé à la fonction des globules blancs dans le corps humain ?",
    options: [
      "A) Les barrières de corail",
      "B) Les courants marins",
      "C) Les zones d'upwelling",
      "D) Les mangroves"
    ],
    correctAnswer: "D) Les mangroves",
    explanation: "Les mangroves protègent les côtes des tempêtes et des érosions, tout comme les globules blancs protègent le corps contre les infections et les maladies."
  },
  {
    question: "Quel phénomène océanique peut être comparé à la fonction des muscles dans le corps humain ?",
    options: [
      "A) Les courants marins",
      "B) Les vagues",
      "C) Les marées",
      "D) Les récifs coralliens"
    ],
    correctAnswer: "B) Les vagues",
    explanation: "Les vagues génèrent de l'énergie et du mouvement dans l'océan, tout comme les muscles génèrent de l'énergie et du mouvement dans le corps humain."
  },
  {
    question: "Quel processus océanique peut être comparé à la circulation de l'oxygène dans le corps humain ?",
    options: [
      "A) La photosynthèse des algues",
      "B) La circulation thermohaline",
      "C) Les courants marins",
      "D) Les marées"
    ],
    correctAnswer: "A) La photosynthèse des algues",
    explanation: "La photosynthèse des algues produit de l'oxygène, tout comme la circulation sanguine transporte l'oxygène dans le corps humain."
  },
  {
    question: "Quel aspect des océans est comparable à la fonction des os dans le corps humain ?",
    options: [
      "A) Les récifs coralliens",
      "B) Les courants marins",
      "C) Les zones d'upwelling",
      "D) Les marées"
    ],
    correctAnswer: "A) Les récifs coralliens",
    explanation: "Les récifs coralliens fournissent une structure et un habitat pour de nombreuses espèces marines, tout comme les os fournissent une structure et un support pour le corps humain."
  },
  {
    question: "Quel phénomène océanique peut être comparé à la fonction des neurones dans le corps humain ?",
    options: [
      "A) Les courants marins",
      "B) Les vagues",
      "C) Les marées",
      "D) Les récifs coralliens"
    ],
    correctAnswer: "B) Les vagues",
    explanation: "Les vagues transportent de l'énergie et de l'information à travers l'océan, tout comme les neurones transportent des signaux électriques et de l'information à travers le corps humain."
  },
  {
    question: "Quel phénomène océanique peut être comparé à la fonction des artères dans le corps humain ?",
    options: [
      "A) Les courants marins",
      "B) Les vagues",
      "C) Les marées",
      "D) Les récifs coralliens"
    ],
    correctAnswer: "A) Les courants marins",
    explanation: "Les courants marins transportent l'eau et les nutriments à travers l'océan, tout comme les artères transportent le sang et les nutriments à travers le corps humain."
  },
  {
    question: "Quel processus océanique peut être comparé à la fonction des reins dans le corps humain ?",
    options: [
      "A) La filtration des sédiments",
      "B) La photosynthèse des algues",
      "C) La circulation thermohaline",
      "D) Les marées"
    ],
    correctAnswer: "A) La filtration des sédiments",
    explanation: "La filtration des sédiments dans l'océan est comparable à la fonction des reins qui filtrent les déchets et les toxines du sang dans le corps humain."
  },
  {
    question: "Quel aspect des océans est comparable à la fonction des muscles dans le corps humain ?",
    options: [
      "A) Les courants marins",
      "B) Les vagues",
      "C) Les marées",
      "D) Les récifs coralliens"
    ],
    correctAnswer: "B) Les vagues",
    explanation: "Les vagues génèrent de l'énergie et du mouvement dans l'océan, tout comme les muscles génèrent de l'énergie et du mouvement dans le corps humain."
  },
  {
    question: "Quel phénomène océanique peut être comparé à la fonction des globules rouges dans le corps humain ?",
    options: [
      "A) Les courants marins",
      "B) Les vagues",
      "C) Les marées",
      "D) Les récifs coralliens"
    ],
    correctAnswer: "A) Les courants marins",
    explanation: "Les courants marins transportent l'oxygène et les nutriments à travers l'océan, tout comme les globules rouges transportent l'oxygène et les nutriments à travers le corps humain."
  }
];
