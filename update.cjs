const fs = require('fs');

const path = 'src/i18n/translations';

const enPath = `${path}/en.json`;
const nlPath = `${path}/nl.json`;
const frPath = `${path}/fr.json`;

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const nl = JSON.parse(fs.readFileSync(nlPath, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frPath, 'utf8'));

const newEn = {
  about: {
    innovationBadge: "Driven by Innovation",
    innovationTitle: "Driven by Innovation",
    innovationDesc: "At Neuritas-AI, we believe the future belongs to businesses that embrace intelligent automation. Founded by a team of AI researchers and business innovators, we've built a platform that doesn't just automate tasks — it thinks, learns, and evolves with your business needs.",
    whatWeDoBadge: "What We Do",
    whatWeDoTitle: "What We Do",
    whatWeDoDesc: "We specialize in three core areas that transform how businesses connect with customers:",
    service1Title: "Customer Engagement",
    service1Desc: "AI that understands and responds to your customers with human-like empathy and precision.",
    service2Title: "Website Optimization",
    service2Desc: "Intelligent analytics that continuously improve your digital presence and conversion rates.",
    service3Title: "Automated Booking",
    service3Desc: "Smart scheduling systems that turn leads into appointments without manual intervention.",
    ourMissionBadge: "Our Mission",
    ourMissionTitle: "Our Mission",
    ourMissionDesc: "To empower businesses of all sizes with enterprise-grade AI automation that's accessible, powerful, and transformative. We're not just building tools — we're building the future of how businesses operate.",
    missionPoint1: "Make AI automation accessible to businesses of all sizes",
    missionPoint2: "Deliver measurable ROI through intelligent automation",
    missionPoint3: "Continuously innovate at the cutting edge of AI technology",
    missionPoint4: "Build lasting partnerships with our clients' success",
    readyToJoin: "Ready to Join Us?",
    buildFuture: "Let's Build the Future Together",
    discoverHow: "Discover how Neuritas-AI can transform your business with intelligent automation."
  },
  contact: {
    startJourney: "Start Your Journey",
    journeyDesc: "Whether you're looking to automate customer engagement, optimize your website, or streamline appointment booking, we're here to help you succeed.",
    formFullName: "Full Name *",
    formEmailAddress: "Email Address *",
    formCompanyName: "Company Name",
    formMessageLabel: "Message *",
    placeholderName: "John Doe",
    placeholderEmail: "john@company.com",
    placeholderCompany: "Your Company"
  },
  appointmentSetting: {
    smartSchedulingBadge: "Smart Scheduling",
    effortlessBookingTitle: "EFFORTLESS BOOKING",
    effortlessBookingDesc: "Let AI handle your appointment scheduling while you focus on closing deals. Smart automation that never misses a lead.",
    feat1Title: "Intelligent Scheduling",
    feat1Desc: "AI analyzes calendars, time zones, and availability to automatically book appointments at optimal times for all parties.",
    feat2Title: "Instant Response",
    feat2Desc: "Leads are engaged immediately with automated responses and booking options, maximizing conversion rates.",
    feat3Title: "Smart Follow-ups",
    feat3Desc: "Automated reminders and follow-up sequences ensure no appointment is missed and engagement stays high.",
    feat4Title: "Calendar Integration",
    feat4Desc: "Seamlessly integrates with Google Calendar, Outlook, and other popular calendar platforms.",
    successRatesTitle: "Booking Success Rates",
    stat1Label: "Appointment Show Rate",
    stat2Label: "More Bookings",
    stat3Label: "Time Saved",
    automateSchedulingBtn: "Automate Scheduling"
  },
  websiteOptimization: {
    aiPoweredAnalyticsBadge: "AI-Powered Analytics",
    maximizePerformanceTitle: "MAXIMIZE PERFORMANCE",
    maximizePerformanceDesc: "Transform your website into a high-performing conversion machine with intelligent optimization powered by advanced AI algorithms.",
    feat1Title: "Real-Time Analytics",
    feat1Desc: "Deep insights into user behavior, traffic patterns, and engagement metrics with AI-powered predictive analytics.",
    feat2Title: "Performance Monitoring",
    feat2Desc: "Continuous monitoring and optimization of page load times, resource usage, and overall site performance.",
    feat3Title: "Conversion Optimization",
    feat3Desc: "AI-driven A/B testing and personalization to maximize conversions and user engagement.",
    feat4Title: "Automated Improvements",
    feat4Desc: "Machine learning automatically identifies and implements optimization opportunities without manual intervention.",
    performanceMetricsTitle: "Performance Metrics",
    stat1Label: "Increase in Conversions",
    stat2Label: "Faster Load Times",
    stat3Label: "Better User Engagement",
    optimizeYourSiteBtn: "Optimize Your Site"
  }
};

const newNl = {
  about: {
    innovationBadge: "Gedreven door Innovatie",
    innovationTitle: "Gedreven door Innovatie",
    innovationDesc: "Bij Neuritas-AI geloven we dat de toekomst toebehoort aan bedrijven die intelligente automatisering omarmen. Opgericht door een team van AI-onderzoekers en zakelijke vernieuwers, hebben we een platform gebouwd dat niet alleen taken automatiseert — het denkt, leert en evolueert met uw zakelijke behoeften.",
    whatWeDoBadge: "Wat We Doen",
    whatWeDoTitle: "Wat We Doen",
    whatWeDoDesc: "Wij specialiseren ons in drie kerngebieden die de manier waarop bedrijven contact maken met klanten transformeren:",
    service1Title: "Klantbetrokkenheid",
    service1Desc: "AI die uw klanten begrijpt en erop reageert met menselijke empathie en precisie.",
    service2Title: "Website Optimalisatie",
    service2Desc: "Intelligente analyses die uw digitale aanwezigheid en conversieratio's continu verbeteren.",
    service3Title: "Geautomatiseerde Boeking",
    service3Desc: "Slimme planningssystemen die leads omzetten in afspraken zonder handmatige tussenkomst.",
    ourMissionBadge: "Onze Missie",
    ourMissionTitle: "Onze Missie",
    ourMissionDesc: "Bedrijven van elke omvang empoweren met zakelijke AI-automatisering die toegankelijk, krachtig en transformerend is. We bouwen niet alleen tools — we bouwen de toekomst van hoe bedrijven opereren.",
    missionPoint1: "Maak AI-automatisering toegankelijk voor bedrijven van elke omvang",
    missionPoint2: "Lever meetbare ROI via intelligente automatisering",
    missionPoint3: "Innoveer voortdurend op het scherpst van de snede van AI-technologie",
    missionPoint4: "Bouw duurzame partnerschappen op basis van het succes van onze klanten",
    readyToJoin: "Klaar om Mee te Doen?",
    buildFuture: "Laten we Samen de Toekomst Bouwen",
    discoverHow: "Ontdek hoe Neuritas-AI uw bedrijf kan transformeren met intelligente automatisering."
  },
  contact: {
    startJourney: "Start Uw Reis",
    journeyDesc: "Of u nu klantbetrokkenheid wilt automatiseren, uw website wilt optimaliseren of afsprakenplanning wilt stroomlijnen, wij zijn hier om u te helpen slagen.",
    formFullName: "Volledige Naam *",
    formEmailAddress: "E-mailadres *",
    formCompanyName: "Bedrijfsnaam",
    formMessageLabel: "Bericht *",
    placeholderName: "Jan Jansen",
    placeholderEmail: "jan@bedrijf.nl",
    placeholderCompany: "Uw Bedrijf"
  },
  appointmentSetting: {
    smartSchedulingBadge: "Slimme Planning",
    effortlessBookingTitle: "MOEITELOOS BOEKEN",
    effortlessBookingDesc: "Laat AI uw afspraken plannen terwijl u zich richt op het sluiten van deals. Slimme automatisering die nooit een lead mist.",
    feat1Title: "Intelligente Planning",
    feat1Desc: "AI analyseert agenda's, tijdzones en beschikbaarheid om automatisch afspraken te boeken op de beste tijden voor alle partijen.",
    feat2Title: "Directe Reactie",
    feat2Desc: "Leads worden direct betrokken met geautomatiseerde reacties en boekingsopties, waardoor conversieratio's worden gemaximaliseerd.",
    feat3Title: "Slimme Follow-ups",
    feat3Desc: "Geautomatiseerde herinneringen en follow-up processen zorgen ervoor dat geen afspraak wordt gemist en de betrokkenheid hoog blijft.",
    feat4Title: "Agenda Integratie",
    feat4Desc: "Integreert naadloos met Google Calendar, Outlook en andere populaire agenda platforms.",
    successRatesTitle: "Succespercentages van Boekingen",
    stat1Label: "Opkomstpercentage Afspraken",
    stat2Label: "Meer Boekingen",
    stat3Label: "Tijd Bespaard",
    automateSchedulingBtn: "Plan Automatisering In"
  },
  websiteOptimization: {
    aiPoweredAnalyticsBadge: "AI-Gedreven Analyses",
    maximizePerformanceTitle: "MAXIMALISEER PRESTATIES",
    maximizePerformanceDesc: "Transformeer uw website tot een goed presterende conversiemachine met intelligente optimalisatie aangedreven door geavanceerde AI-algoritmen.",
    feat1Title: "Real-Time Analyses",
    feat1Desc: "Diepgaande inzichten in gebruikersgedrag, verkeerspatronen en betrokkenheidsstatistieken met AI-gedreven voorspellende analyses.",
    feat2Title: "Prestatie Monitoring",
    feat2Desc: "Continue monitoring en optimalisatie van laadtijden van pagina's, resourcegebruik en de algehele prestaties van de site.",
    feat3Title: "Conversie Optimalisatie",
    feat3Desc: "AI-gestuurde A/B-testen en personalisatie om conversies en gebruikersbetrokkenheid te maximaliseren.",
    feat4Title: "Geautomatiseerde Verbeteringen",
    feat4Desc: "Machine learning identificeert en implementeert automatisch optimalisatiekansen zonder handmatige tussenkomst.",
    performanceMetricsTitle: "Prestatiestatistieken",
    stat1Label: "Stijging in Conversies",
    stat2Label: "Snellere Laadtijden",
    stat3Label: "Betere Gebruikersbetrokkenheid",
    optimizeYourSiteBtn: "Optimaliseer Uw Site"
  }
};

const newFr = {
  about: {
    innovationBadge: "Animé par l'Innovation",
    innovationTitle: "Animé par l'Innovation",
    innovationDesc: "Chez Neuritas-AI, nous pensons que l'avenir appartient aux entreprises qui adoptent l'automatisation intelligente. Fondée par une équipe de chercheurs en IA et d'innovateurs commerciaux, nous avons construit une plateforme qui ne se contente pas d'automatiser les tâches — elle réfléchit, apprend et évolue avec vos besoins.",
    whatWeDoBadge: "Ce Que Nous Faisons",
    whatWeDoTitle: "Ce Que Nous Faisons",
    whatWeDoDesc: "Nous nous spécialisons dans trois domaines fondamentaux qui transforment la façon dont les entreprises interagissent avec leurs clients :",
    service1Title: "Engagement Client",
    service1Desc: "Une IA qui comprend et répond à vos clients avec une empathie et une précision humaines.",
    service2Title: "Optimisation de Site Web",
    service2Desc: "Des analyses intelligentes qui améliorent en continu votre présence numérique et vos taux de conversion.",
    service3Title: "Réservation Automatisée",
    service3Desc: "Des systèmes de planification intelligents qui transforment les prospects en rendez-vous sans intervention manuelle.",
    ourMissionBadge: "Notre Mission",
    ourMissionTitle: "Notre Mission",
    ourMissionDesc: "Donner aux entreprises de toutes tailles les moyens d'utiliser une automatisation de l'IA de niveau entreprise qui est accessible, puissante et transformatrice. Nous ne créons pas seulement des outils — nous créons l'avenir de la façon dont les entreprises fonctionnent.",
    missionPoint1: "Rendre l'automatisation par l'IA accessible aux entreprises de toutes tailles",
    missionPoint2: "Fournir un retour sur investissement mesurable grâce à l'automatisation intelligente",
    missionPoint3: "Innover continuellement à la pointe de la technologie de l'IA",
    missionPoint4: "Construire des partenariats durables avec le succès de nos clients",
    readyToJoin: "Prêt à Nous Rejoindre ?",
    buildFuture: "Construisons l'Avenir Ensemble",
    discoverHow: "Découvrez comment Neuritas-AI peut transformer votre entreprise avec l'automatisation intelligente."
  },
  contact: {
    startJourney: "Commencez Votre Voyage",
    journeyDesc: "Que vous cherchiez à automatiser l'engagement client, à optimiser votre site Web ou à rationaliser la prise de rendez-vous, nous sommes là pour vous aider à réussir.",
    formFullName: "Nom Complet *",
    formEmailAddress: "Adresse E-mail *",
    formCompanyName: "Nom de l'Entreprise",
    formMessageLabel: "Message *",
    placeholderName: "Jean Dupont",
    placeholderEmail: "jean@entreprise.fr",
    placeholderCompany: "Votre Entreprise"
  },
  appointmentSetting: {
    smartSchedulingBadge: "Planification Intelligente",
    effortlessBookingTitle: "RÉSERVATION SANS EFFORT",
    effortlessBookingDesc: "Laissez l'IA gérer la planification de vos rendez-vous pendant que vous vous concentrez sur la conclusion de ventes. Une automatisation intelligente qui ne manque jamais un prospect.",
    feat1Title: "Planification Intelligente",
    feat1Desc: "L'IA analyse les calendriers, les fuseaux horaires et les disponibilités pour réserver automatiquement des rendez-vous aux moments optimaux pour toutes les parties.",
    feat2Title: "Réponse Instantanée",
    feat2Desc: "Les prospects sont engagés immédiatement avec des réponses automatisées et des options de réservation, maximisant ainsi les taux de conversion.",
    feat3Title: "Suivis Intelligents",
    feat3Desc: "Des rappels automatisés et des séquences de suivi garantissent qu'aucun rendez-vous n'est manqué et que l'engagement reste élevé.",
    feat4Title: "Intégration de Calendrier",
    feat4Desc: "S'intègre de manière transparente avec Google Agenda, Outlook et d'autres plateformes d'agenda populaires.",
    successRatesTitle: "Taux de Réussite des Réservations",
    stat1Label: "Taux de Présence aux Rendez-vous",
    stat2Label: "Plus de Réservations",
    stat3Label: "Temps Gagné",
    automateSchedulingBtn: "Automatiser la Planification"
  },
  websiteOptimization: {
    aiPoweredAnalyticsBadge: "Analyses Alimentées par l'IA",
    maximizePerformanceTitle: "MAXIMISER LES PERFORMANCES",
    maximizePerformanceDesc: "Transformez votre site Web en une machine de conversion performante avec une optimisation intelligente alimentée par des algorithmes d'IA avancés.",
    feat1Title: "Analyses en Temps Réel",
    feat1Desc: "Des informations approfondies sur le comportement des utilisateurs, les modèles de trafic et les mesures d'engagement avec des analyses prédictives basées sur l'IA.",
    feat2Title: "Surveillance des Performances",
    feat2Desc: "Surveillance et optimisation continues des temps de chargement des pages, de l'utilisation des ressources et des performances globales du site.",
    feat3Title: "Optimisation des Conversions",
    feat3Desc: "Tests A/B basés sur l'IA et personnalisation pour maximiser les conversions et l'engagement des utilisateurs.",
    feat4Title: "Améliorations Automatisées",
    feat4Desc: "L'apprentissage automatique identifie et met en œuvre automatiquement les opportunités d'optimisation sans intervention manuelle.",
    performanceMetricsTitle: "Mesures de Performance",
    stat1Label: "Augmentation des Conversions",
    stat2Label: "Temps de Chargement Plus Rapides",
    stat3Label: "Meilleur Engagement Utilisateur",
    optimizeYourSiteBtn: "Optimiser Votre Site"
  }
};

const mergeObj = (old, update) => {
  for (const page in update) {
    if (!old[page]) old[page] = {};
    for (const key in update[page]) {
      old[page][key] = update[page][key];
    }
  }
}

mergeObj(en, newEn);
mergeObj(nl, newNl);
mergeObj(fr, newFr);

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(nlPath, JSON.stringify(nl, null, 2));
fs.writeFileSync(frPath, JSON.stringify(fr, null, 2));

console.log('Translations inserted completely.');
