/* =========================================================
   Koyeba – données de démonstration
   ========================================================= */
const IMG = (id, w = 500) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
/* Photos de profil : portraits Unsplash (identifiant précédé de « u: ») */
const FACE = p => /^(data:|https?:|blob:)/.test(p) ? p : p.startsWith('u:') ? `https://images.unsplash.com/photo-${p.slice(2)}?w=200&h=200&fit=crop&crop=faces&q=80` : `https://randomuser.me/api/portraits/${p}.jpg`;
/* Utilisateur connecté (voir auth.js) ; sans photo, un avatar à ses initiales */
const ME = (typeof Auth !== 'undefined' && Auth.user()) || { first: '', last: '', email: '', photo: '' };
const ME_NAME = `${ME.first} ${ME.last}`.trim();
const initialsAvatar = name => 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#1a7f43"/><text x="50" y="50" dy=".35em" text-anchor="middle" font-family="Poppins,Arial,sans-serif" font-size="40" font-weight="600" fill="#fff">${name.split(/\s+/).map(w => w[0] || '').join('').slice(0, 2).toUpperCase() || '?'}</text></svg>`);
const ME_PHOTO = ME.photo || initialsAvatar(ME_NAME);

const LEVELS = { debutant: 'Débutant', intermediaire: 'Intermédiaire', avance: 'Avancé' };

const CATEGORIES = [
  { id: 'web',       name: 'Développement web', img: '1461749280684-dccba630e2f6' },
  { id: 'data',      name: 'Data science',      img: '1551288049-bebda4e38f71' },
  { id: 'design',    name: 'Design',            img: '1561070791-2526d30994b5' },
  { id: 'business',  name: 'Business',          img: '1522202176988-66273c2fd55f' },
  { id: 'marketing', name: 'Marketing',         img: '1432888498266-38ffec3eaf0a' },
  { id: 'langues',   name: 'Langues',           img: '1524178232363-1fb2b075b655' },
  { id: 'bureau',    name: 'Bureautique',       img: '1460925895917-afdab827c52f' },
  { id: 'securite',  name: 'Cybersécurité',     img: '1550751827-4bd374c3f58b' }
];

const TEACHERS = [
  { id: 'sarah', name: 'Sarah Mbemba', photo: 'u:1611432579699-484f7990b127', country: ['cg', 'Congo'], role: 'Développeuse full-stack, ex-lead chez une startup fintech', followers: 407192, rating: 4.8, bio: 'Sarah enseigne le développement web depuis 9 ans. Elle a formé plus de 120 000 personnes et accompagne les débutants jusqu\'à leur premier emploi.' },
  { id: 'jean',  name: 'Jean Kouassi', photo: 'u:1531384441138-2736e62e0919',   country: ['ci', "Côte d'Ivoire"], role: 'Data scientist et formateur Python', followers: 321826, rating: 4.7, bio: 'Jean a travaillé 7 ans comme data scientist dans la banque et l\'énergie. Il rend les statistiques et Python accessibles à tous.' },
  { id: 'aicha', name: 'Aïcha Diallo', photo: 'u:1531123897727-8f129e1688ce', country: ['sn', 'Sénégal'], role: 'Designer UI/UX senior', followers: 266001, rating: 4.9, bio: 'Aïcha conçoit des applications utilisées par des millions de personnes. Elle enseigne le design centré utilisateur.' },
  { id: 'marc',  name: 'Marc Ndong',   photo: 'u:1504199367641-aba8151af406',   country: ['ga', 'Gabon'], role: 'Entrepreneur et consultant en marketing digital', followers: 158340, rating: 4.6, bio: 'Marc a lancé trois entreprises en ligne. Il partage des méthodes concrètes pour vendre et communiquer sur Internet.' },
  { id: 'lucas', name: 'Lucas Martin', photo: 'u:1536766820879-059fec98ec0a',   country: ['fr', 'France'], role: 'Ingénieur logiciel, spécialiste React', followers: 142905, rating: 4.8, bio: 'Lucas développe des interfaces modernes depuis 10 ans et contribue à plusieurs projets open source.' },
  { id: 'fatou', name: 'Fatou Sow',    photo: 'u:1563132337-f159f484226c', country: ['ml', 'Mali'], role: 'Formatrice certifiée Microsoft Office', followers: 98210,  rating: 4.7, bio: 'Fatou forme les équipes d\'entreprise à Excel, Word et PowerPoint depuis 12 ans.' },
  { id: 'paul',  name: 'Paul Essomba', photo: 'u:1612214070475-1e73f478188c',   country: ['cm', 'Cameroun'], role: 'Expert en cybersécurité, pentesteur', followers: 87455,  rating: 4.6, bio: 'Paul audite la sécurité des systèmes d\'information et forme les professionnels aux bonnes pratiques.' },
  { id: 'emily', name: 'Emily Carter', photo: 'u:1507152832244-10d45c7eda57', country: ['gb', 'Royaume-Uni'], role: 'Professeure d\'anglais diplômée (CELTA)', followers: 203117, rating: 4.9, bio: 'Emily enseigne l\'anglais professionnel aux francophones avec une méthode basée sur la pratique orale.' }
];

const COURSES = [
  { id: 'js', title: 'Maîtriser JavaScript : du débutant au confirmé', subtitle: 'Apprenez JavaScript moderne (ES2024) en construisant 12 projets concrets.', teacher: 'sarah', cat: 'web', level: 'debutant', rating: 4.8, reviews: 18420, students: 124000, hours: 32, lessons: 186, lang: 'Français', price: 49.99, old: 89.99, img: '1461749280684-dccba630e2f6', best: true, updated: '09/2026', features: ['soustitres', 'quiz', 'exercices', 'certificat'] },
  { id: 'html', title: 'HTML & CSS : créez vos premiers sites web', subtitle: 'Les bases solides pour construire des sites modernes et responsive.', teacher: 'sarah', cat: 'web', level: 'debutant', rating: 4.7, reviews: 9230, students: 86000, hours: 14, lessons: 92, lang: 'Français', price: 0, img: '1498050108023-c5249f4df085', best: false, updated: '06/2026', features: ['soustitres', 'exercices', 'certificat'] },
  { id: 'react', title: 'React avancé : hooks, performance et architecture', subtitle: 'Concevez des applications React robustes et rapides.', teacher: 'lucas', cat: 'web', level: 'avance', rating: 4.8, reviews: 5120, students: 41000, hours: 22, lessons: 140, lang: 'Français', price: 59.99, old: 99.99, img: '1633356122544-f134324a6cee', best: true, updated: '10/2026', features: ['soustitres', 'quiz', 'exercices', 'certificat'] },
  { id: 'algo', title: 'Algorithmes et structures de données', subtitle: 'Préparez vos entretiens techniques et écrivez du code efficace.', teacher: 'lucas', cat: 'web', level: 'avance', rating: 4.8, reviews: 3870, students: 29000, hours: 18, lessons: 110, lang: 'Français', price: 44.99, old: 79.99, img: '1555066931-4365d14bab8c', best: false, updated: '05/2026', features: ['quiz', 'exercices', 'certificat'] },
  { id: 'code30', title: 'Apprendre à coder en 30 jours', subtitle: 'Un programme quotidien pour passer de zéro à vos premiers programmes.', teacher: 'sarah', cat: 'web', level: 'debutant', rating: 4.9, reviews: 22100, students: 158000, hours: 9, lessons: 60, lang: 'Français', price: 0, img: '1517694712202-14dd9538aa97', best: true, updated: '08/2026', features: ['audio', 'soustitres', 'quiz', 'certificat'] },
  { id: 'python', title: 'Python pour l\'analyse de données', subtitle: 'Pandas, NumPy et visualisation pour exploiter vos données.', teacher: 'jean', cat: 'data', level: 'intermediaire', rating: 4.7, reviews: 11050, students: 98700, hours: 26, lessons: 154, lang: 'Français', price: 54.99, old: 94.99, img: '1526379095098-d400fd0bf935', best: true, updated: '10/2026', features: ['audio', 'soustitres', 'quiz', 'exercices', 'certificat'] },
  { id: 'sql', title: 'Bases de données et SQL', subtitle: 'Concevez, interrogez et optimisez des bases de données relationnelles.', teacher: 'jean', cat: 'data', level: 'intermediaire', rating: 4.6, reviews: 4300, students: 37500, hours: 12, lessons: 78, lang: 'Français', price: 34.99, old: 59.99, img: '1544383835-bda2bc66a55d', best: false, updated: '04/2026', features: ['exercices', 'certificat'] },
  { id: 'ml', title: 'Machine learning : les fondamentaux', subtitle: 'Comprenez et appliquez les principaux algorithmes de machine learning.', teacher: 'jean', cat: 'data', level: 'avance', rating: 4.5, reviews: 2950, students: 21000, hours: 28, lessons: 132, lang: 'Anglais', price: 69.99, old: 119.99, img: '1504868584819-f8e8b4b6d7e3', best: false, updated: '07/2026', features: ['soustitres', 'quiz', 'exercices'] },
  { id: 'uiux', title: 'UI/UX Design de A à Z avec Figma', subtitle: 'Recherche utilisateur, wireframes, maquettes et prototypes.', teacher: 'aicha', cat: 'design', level: 'debutant', rating: 4.9, reviews: 8760, students: 73200, hours: 20, lessons: 118, lang: 'Français', price: 49.99, old: 84.99, img: '1561070791-2526d30994b5', best: true, updated: '09/2026', features: ['soustitres', 'exercices', 'certificat'] },
  { id: 'photoshop', title: 'Photoshop pour débutants', subtitle: 'Retouchez vos photos et créez des visuels professionnels.', teacher: 'aicha', cat: 'design', level: 'intermediaire', rating: 4.6, reviews: 3410, students: 28400, hours: 8, lessons: 54, lang: 'Français', price: 29.99, old: 49.99, img: '1572044162444-ad60f128bdea', best: false, updated: '03/2026', features: ['exercices'] },
  { id: 'entrepreneur', title: 'Entrepreneuriat digital : lancer son activité', subtitle: 'De l\'idée au premier client : la méthode pas à pas.', teacher: 'marc', cat: 'business', level: 'debutant', rating: 4.6, reviews: 2840, students: 54100, hours: 11, lessons: 66, lang: 'Français', price: 39.99, old: 69.99, img: '1522202176988-66273c2fd55f', best: false, updated: '08/2026', features: ['audio', 'soustitres', 'quiz', 'certificat'] },
  { id: 'marketing', title: 'Marketing digital : les bases', subtitle: 'SEO, réseaux sociaux, e-mailing et publicité en ligne.', teacher: 'marc', cat: 'marketing', level: 'debutant', rating: 4.7, reviews: 6120, students: 61300, hours: 15, lessons: 90, lang: 'Français', price: 0, img: '1432888498266-38ffec3eaf0a', best: true, updated: '10/2026', features: ['audio', 'soustitres', 'quiz', 'certificat'] },
  { id: 'anglais', title: 'Anglais professionnel : parler avec assurance', subtitle: 'Réunions, e-mails, entretiens : l\'anglais utile au travail.', teacher: 'emily', cat: 'langues', level: 'intermediaire', rating: 4.9, reviews: 14300, students: 159000, hours: 24, lessons: 120, lang: 'Anglais', price: 44.99, old: 79.99, img: '1524178232363-1fb2b075b655', best: true, updated: '09/2026', features: ['audio', 'soustitres', 'quiz', 'exercices', 'certificat'] },
  { id: 'excel', title: 'Excel pratique : formules et tableaux croisés', subtitle: 'Gagnez du temps au quotidien avec les fonctions essentielles.', teacher: 'fatou', cat: 'bureau', level: 'intermediaire', rating: 4.7, reviews: 7980, students: 69800, hours: 10, lessons: 72, lang: 'Français', price: 24.99, old: 44.99, img: '1460925895917-afdab827c52f', best: false, updated: '06/2026', features: ['soustitres', 'exercices', 'certificat'] },
  { id: 'cyber', title: 'Cybersécurité : protéger son entreprise', subtitle: 'Menaces, bonnes pratiques et réponse aux incidents.', teacher: 'paul', cat: 'securite', level: 'avance', rating: 4.6, reviews: 1980, students: 17300, hours: 16, lessons: 84, lang: 'Français', price: 64.99, old: 109.99, img: '1550751827-4bd374c3f58b', best: false, updated: '10/2026', features: ['quiz', 'certificat'] },
  { id: 'hygiene', title: 'Les bons réflexes de sécurité informatique', subtitle: 'Mots de passe, phishing, sauvegardes : protégez-vous en 2 heures.', teacher: 'paul', cat: 'securite', level: 'debutant', rating: 4.4, reviews: 860, students: 9400, hours: 2, lessons: 18, lang: 'Français', price: 0, img: '1563986768609-322da13575f3', best: false, updated: '02/2026', features: ['audio', 'soustitres', 'quiz'] }
];

/* Cours suivis par l'utilisateur : progression en % et dernière ouverture */
const ENROLLED = [
  { id: 'html',   progress: 100, last: '2026-10-10', done: '10/10/2026' },
  { id: 'react',  progress: 35,  last: '2026-10-28' },
  { id: 'excel',  progress: 60,  last: '2026-10-27' },
  { id: 'sql',    progress: 18,  last: '2026-10-21' },
  { id: 'cyber',  progress: 5,   last: '2026-10-15' },
  { id: 'code30', progress: 100, last: '2026-09-02', done: '02/09/2026' },
  { id: 'python', progress: 72,  last: '2026-10-29' },
  { id: 'marketing', progress: 100, last: '2026-07-18', done: '18/07/2026' }
];

const PATHS = [
  { id: 'devweb', title: 'Devenir développeur web', tag: 'Carrière', desc: 'Le parcours complet pour apprendre à créer des sites et des applications web, des bases du HTML jusqu\'à React.', courses: ['code30', 'html', 'js', 'react'], img: '1517694712202-14dd9538aa97', level: 'debutant' },
  { id: 'data', title: 'Analyste de données', tag: 'Carrière', desc: 'Collectez, nettoyez et analysez des données pour aider à la prise de décision.', courses: ['excel', 'sql', 'python', 'ml'], img: '1551288049-bebda4e38f71', level: 'intermediaire' },
  { id: 'designer', title: 'Designer d\'interfaces', tag: 'Compétence', desc: 'Concevez des interfaces belles et faciles à utiliser, de la retouche d\'image au prototype interactif.', courses: ['photoshop', 'uiux'], img: '1561070791-2526d30994b5', level: 'debutant' },
  { id: 'entrepreneur', title: 'Lancer son business en ligne', tag: 'Compétence', desc: 'Toutes les clés pour créer, promouvoir et sécuriser votre activité sur Internet.', courses: ['entrepreneur', 'marketing', 'hygiene'], img: '1522202176988-66273c2fd55f', level: 'debutant' }
];

const LEARN = {
  web: ['Écrire un code propre, lisible et maintenable', 'Construire des projets concrets à ajouter à votre portfolio', 'Comprendre le fonctionnement d\'un navigateur et du Web', 'Déboguer efficacement avec les outils de développement', 'Utiliser Git et publier votre travail en ligne', 'Appliquer les bonnes pratiques professionnelles'],
  data: ['Importer, nettoyer et préparer des jeux de données', 'Produire des graphiques clairs et parlants', 'Interroger des données avec des requêtes efficaces', 'Interpréter les résultats et les présenter', 'Automatiser les tâches répétitives', 'Mener un projet d\'analyse de bout en bout'],
  design: ['Appliquer les principes de composition et de couleur', 'Créer des maquettes haute fidélité', 'Construire un système de design réutilisable', 'Mener des tests utilisateurs simples', 'Prototyper des interactions réalistes', 'Présenter et défendre vos choix de design'],
  business: ['Valider une idée avant d\'investir', 'Construire une offre claire et rentable', 'Trouver vos premiers clients', 'Piloter votre activité avec les bons indicateurs', 'Organiser votre temps et vos priorités', 'Éviter les erreurs les plus courantes'],
  marketing: ['Définir votre cible et votre message', 'Optimiser votre référencement naturel (SEO)', 'Animer vos réseaux sociaux efficacement', 'Créer des campagnes e-mail qui convertissent', 'Mesurer vos résultats avec les bons outils', 'Construire un plan marketing complet'],
  langues: ['Vous présenter et parler de votre métier', 'Animer et participer à des réunions', 'Rédiger des e-mails professionnels', 'Réussir un entretien d\'embauche', 'Améliorer votre prononciation', 'Enrichir votre vocabulaire professionnel'],
  bureau: ['Maîtriser les formules indispensables', 'Créer des tableaux croisés dynamiques', 'Mettre en forme des rapports professionnels', 'Construire des graphiques automatiques', 'Fiabiliser vos fichiers et éviter les erreurs', 'Gagner du temps avec les raccourcis'],
  securite: ['Identifier les principales menaces', 'Mettre en place une politique de mots de passe', 'Reconnaître et déjouer le phishing', 'Sécuriser un réseau d\'entreprise', 'Organiser des sauvegardes fiables', 'Réagir correctement à un incident']
};

/* Meilleurs étudiants (classement par XP) — courses : id du cours → progression en % */
const STUDENTS = [
  { id: 'kevin',  name: 'Kevin Ngoma',    photo: 'u:1615813967515-e1838c1c5116',   city: 'Brazzaville', xp: 12840, streak: 64, joined: '01/2025', active: true,  bio: 'Étudiant en informatique, je vise un poste de développeur front-end.', week: [90, 120, 60, 75, 0, 0, 0],
    courses: { js: 100, html: 100, react: 82, algo: 100, code30: 100 } },
  { id: 'grace',  name: 'Grâce Mabiala',  photo: 'u:1523824921871-d6f1a15151f1', city: 'Pointe-Noire', xp: 11520, streak: 41, joined: '03/2025', active: true,  bio: 'Analyste junior, passionnée de données et de visualisation.', week: [60, 45, 90, 30, 0, 0, 0],
    courses: { python: 100, sql: 100, excel: 100, ml: 64 } },
  { id: 'yann',   name: 'Yann Okemba',    photo: 'u:1521119989659-a83eee488004',   city: 'Libreville', xp: 9980, streak: 27, joined: '11/2024', active: false, bio: 'Designer en reconversion, j\'apprends l\'UX et le prototypage.', week: [30, 0, 45, 0, 0, 0, 0],
    courses: { uiux: 100, photoshop: 100, html: 55 } },
  { id: 'nadia',  name: 'Nadia Bakala',   photo: 'u:1583994009785-37ec30bf9342', city: 'Douala', xp: 9310, streak: 33, joined: '05/2025', active: true,  bio: 'Entrepreneure, je lance ma boutique en ligne.', week: [40, 60, 20, 50, 0, 0, 0],
    courses: { entrepreneur: 100, marketing: 100, hygiene: 100, anglais: 38 } },
  { id: 'samuel', name: 'Samuel Itoua',   photo: 'u:1622253692010-333f2da6031d',   city: 'Kinshasa', xp: 8475, streak: 19, joined: '02/2025', active: true,  bio: 'Technicien réseau, je me spécialise en cybersécurité.', week: [50, 30, 0, 70, 0, 0, 0],
    courses: { cyber: 100, hygiene: 100, sql: 47 } },
  { id: 'ines',   name: 'Inès Moukoko',   photo: 'u:1613005798967-632017e477c8', city: 'Abidjan', xp: 7920, streak: 22, joined: '07/2025', active: false, bio: 'Assistante de direction, je perfectionne mon anglais et Excel.', week: [20, 40, 0, 0, 0, 0, 0],
    courses: { anglais: 100, excel: 100, marketing: 70 } },
  { id: 'patrick', name: 'Patrick Loemba', photo: 'u:1506277886164-e25aa3f4ef7f',  city: 'Dakar', xp: 7105, streak: 15, joined: '04/2025', active: true,  bio: 'Lycéen curieux, j\'apprends à coder pendant mon temps libre.', week: [30, 30, 30, 45, 0, 0, 0],
    courses: { code30: 100, html: 100, js: 41 } },
  { id: 'aline',  name: 'Aline Tsiba',    photo: 'u:1632765854612-9b02b6ec2b15', city: 'Yaoundé', xp: 6630, streak: 11, joined: '08/2025', active: false, bio: 'Comptable, j\'automatise mes tâches avec Excel et Python.', week: [0, 25, 0, 35, 0, 0, 0],
    courses: { excel: 100, python: 58 } }
];
const LEVEL_XP = 1500; // XP nécessaires par niveau
const studentById = id => STUDENTS.find(s => s.id === id);
const studentLevel = s => Math.floor(s.xp / LEVEL_XP) + 1;
const studentRank = s => [...STUDENTS].sort((a, b) => b.xp - a.xp).indexOf(s) + 1;

/* ---------- Cours audio (accessibles aux personnes non-voyantes ou malvoyantes) ----------
   Le texte de chaque chapitre est lu à voix haute par la synthèse vocale du navigateur. */
const AUDIO_COURSES = [
  { id: 'a-clavier', title: 'Utiliser un ordinateur sans la vue', teacher: 'paul', course: null, level: 'debutant', img: '1517694712202-14dd9538aa97',
    desc: 'Lecteurs d\'écran, raccourcis clavier et navigation sur Internet, expliqués pas à pas.',
    chapters: [
      { title: 'Bienvenue', text: 'Bienvenue dans ce cours audio. Il a été conçu pour les personnes non-voyantes ou malvoyantes. Vous pouvez tout contrôler au clavier. Appuyez sur la barre d\'espace pour mettre en pause ou reprendre la lecture. Utilisez les flèches gauche et droite pour revenir à la phrase précédente ou passer à la suivante.' },
      { title: 'Le lecteur d\'écran', text: 'Un lecteur d\'écran est un logiciel qui lit à voix haute ce qui s\'affiche. Sur Windows, le lecteur gratuit le plus utilisé s\'appelle NVDA. Sur Mac et sur iPhone, il s\'appelle VoiceOver. Sur Android, il s\'appelle TalkBack. Chacun se lance avec un raccourci simple, que nous allons apprendre ensemble.' },
      { title: 'Les raccourcis essentiels', text: 'La touche Tabulation permet de passer d\'un élément à l\'autre sur une page. Maj et Tabulation permettent de revenir en arrière. La touche Entrée active un lien ou un bouton. Avec NVDA, la touche H permet de sauter de titre en titre, ce qui est très pratique pour parcourir une page rapidement.' },
      { title: 'Naviguer sur Internet', text: 'Sur un site bien conçu, chaque image a une description et chaque bouton a un nom clair. Pour trouver rapidement le contenu principal d\'une page, cherchez le premier titre de niveau un. Si un site est difficile à utiliser, vous pouvez le signaler : l\'accessibilité est un droit.' }
    ]},
  { id: 'a-code', title: 'Apprendre à coder, version audio', teacher: 'sarah', course: 'code30', level: 'debutant', img: '1461749280684-dccba630e2f6',
    desc: 'Les notions de base de la programmation expliquées uniquement à l\'oral, sans schéma.',
    chapters: [
      { title: 'Qu\'est-ce qu\'un programme ?', text: 'Un programme est une suite d\'instructions que l\'ordinateur exécute dans l\'ordre, une par une. C\'est comme une recette de cuisine : chaque étape doit être claire et précise. Si une étape est mal écrite, le résultat ne sera pas celui attendu.' },
      { title: 'Les variables', text: 'Une variable est une boîte qui porte un nom et qui contient une valeur. Par exemple, une boîte nommée âge peut contenir le nombre vingt-cinq. On peut lire ce qu\'il y a dans la boîte, ou remplacer son contenu à tout moment.' },
      { title: 'Les conditions', text: 'Une condition permet de prendre une décision. On dit : si telle chose est vraie, alors fais ceci, sinon fais cela. Par exemple : si l\'âge est supérieur ou égal à dix-huit, afficher majeur, sinon afficher mineur.' },
      { title: 'Les boucles', text: 'Une boucle permet de répéter une action plusieurs fois sans la réécrire. Par exemple : pour chaque élève de la classe, dire bonjour. L\'ordinateur répète l\'action autant de fois qu\'il y a d\'élèves, puis s\'arrête.' }
    ]},
  { id: 'a-anglais', title: 'Anglais professionnel à l\'écoute', teacher: 'emily', course: 'anglais', level: 'intermediaire', img: '1524178232363-1fb2b075b655',
    desc: 'Des expressions utiles au travail, expliquées en français et répétées lentement.',
    chapters: [
      { title: 'Se présenter', text: 'Pour vous présenter en anglais, vous pouvez dire : Hello, my name is, suivi de votre prénom. Pour donner votre métier, dites : I work as, suivi du nom de votre métier. Répétez ces phrases à voix haute après chaque écoute.' },
      { title: 'En réunion', text: 'Pour demander la parole poliment, dites : May I add something ? Pour demander de répéter, dites : Could you repeat that, please ? Ces deux phrases vous aideront dans presque toutes les réunions.' },
      { title: 'Au téléphone', text: 'Pour décrocher, dites : Hello, this is, suivi de votre nom. Pour demander d\'attendre, dites : Please hold on a moment. Pour finir l\'appel, dites : Thank you for calling, have a nice day.' }
    ]},
  { id: 'a-marketing', title: 'Marketing digital raconté', teacher: 'marc', course: 'marketing', level: 'debutant', img: '1432888498266-38ffec3eaf0a',
    desc: 'Les bases du marketing en ligne sous forme de récit, à écouter partout.',
    chapters: [
      { title: 'Connaître son client', text: 'Avant de vendre, il faut savoir à qui l\'on parle. Imaginez votre client idéal : son âge, son métier, ses besoins et ses difficultés. Plus votre portrait est précis, plus votre message sera efficace.' },
      { title: 'Être trouvé sur Internet', text: 'Le référencement naturel consiste à apparaître dans les résultats des moteurs de recherche sans payer. Pour cela, écrivez des contenus utiles qui répondent aux questions de vos clients, avec les mots qu\'ils utilisent eux-mêmes.' },
      { title: 'Fidéliser', text: 'Un client fidèle coûte beaucoup moins cher qu\'un nouveau client. Envoyez-lui des conseils utiles, remerciez-le, et demandez-lui son avis. Un client écouté devient souvent votre meilleur ambassadeur.' }
    ]},
  { id: 'a-securite', title: 'Les bons réflexes de sécurité, en audio', teacher: 'paul', course: 'hygiene', level: 'debutant', img: '1563986768609-322da13575f3',
    desc: 'Se protéger des arnaques et des pirates grâce à des conseils simples.',
    chapters: [
      { title: 'Les mots de passe', text: 'Un bon mot de passe est long, au moins douze caractères, et différent pour chaque site. Le plus simple est d\'utiliser une phrase facile à retenir pour vous, mais difficile à deviner pour les autres. Un gestionnaire de mots de passe peut aussi les retenir à votre place.' },
      { title: 'Reconnaître une arnaque', text: 'Méfiez-vous des messages urgents qui vous demandent de cliquer ou de donner vos informations. Une banque ne vous demandera jamais votre code par message. En cas de doute, appelez directement l\'organisme concerné avec le numéro officiel.' },
      { title: 'Faire des sauvegardes', text: 'Une sauvegarde est une copie de vos fichiers importants. Faites-en régulièrement, sur une clé ou sur un service en ligne. Si votre ordinateur tombe en panne ou est attaqué, vous ne perdrez rien.' }
    ]}
];
const audioMinutes = a => Math.max(1, Math.round(a.chapters.reduce((s, ch) => s + ch.text.split(/\s+/).length, 0) / 150));

/* ---------- Messagerie ---------- */
/* Un contact peut être un étudiant ou un formateur */
const contactById = id => {
  const s = studentById(id);
  if (s) return { id, name: s.name, photo: s.photo, role: `Étudiant · Niveau ${studentLevel(s)}`, online: s.active, href: `etudiant.html?id=${id}` };
  const t = teacherById(id);
  if (t) return { id, name: t.name, photo: t.photo, role: 'Formateur', online: true, href: `formateurs.html#${id}` };
  return null;
};

const Chat = {
  key: 'apprendo-chat',
  seed() {
    const m = min => Date.now() - min * 60000;
    return {
      kevin: { unread: 2, msgs: [
        { from: 'them', text: `Salut ${ME.first} ! Tu avances bien sur React ?`, t: m(1500) },
        { from: 'me', text: 'Salut Kevin, oui je suis au module sur les hooks. Pas toujours simple !', t: m(1480) },
        { from: 'them', text: 'Je l\'ai fini la semaine dernière, si tu bloques je peux t\'aider.', t: m(42) },
        { from: 'them', text: 'On peut faire une session ensemble jeudi soir ?', t: m(40) }
      ]},
      sarah: { unread: 1, msgs: [
        { from: 'me', text: 'Bonjour Sarah, merci pour le cours JavaScript, il est super clair.', t: m(3000) },
        { from: 'them', text: `Merci beaucoup ${ME.first} ! N'hésitez pas à poser vos questions dans la section Q&R.`, t: m(2900) },
        { from: 'them', text: 'Un nouveau module sur les API vient d\'être ajouté au cours.', t: m(180) }
      ]},
      grace: { unread: 0, msgs: [
        { from: 'them', text: 'Tu as déjà essayé le cours SQL ?', t: m(4400) },
        { from: 'me', text: 'Oui, je suis à 18 %. Tu le recommandes ?', t: m(4380) },
        { from: 'them', text: 'Carrément, les exercices sont très bien faits.', t: m(4370) }
      ]},
      nadia: { unread: 0, msgs: [
        { from: 'them', text: 'Merci pour ton conseil sur le marketing, ça m\'a aidée !', t: m(10000) },
        { from: 'me', text: 'Avec plaisir, bonne chance pour ta boutique !', t: m(9990) }
      ]}
    };
  },
  load() {
    try { const d = JSON.parse(localStorage.getItem(this.key)); if (d) return d; } catch {}
    return this.seed();
  },
  save(d) { try { localStorage.setItem(this.key, JSON.stringify(d)); } catch {} },
  unread(d = this.load()) { return Object.values(d).reduce((n, c) => n + (c.unread || 0), 0); }
};

/* ---------- Utilitaires ---------- */
const courseById = id => COURSES.find(c => c.id === id);
const teacherById = id => TEACHERS.find(t => t.id === id);
const catById = id => CATEGORIES.find(c => c.id === id);
const fmtNum = n => n.toLocaleString('fr-FR');
const fmtPrice = p => p === 0 ? 'Gratuit' : fmtCauris(toCauris(p));
const coursesOf = teacherId => COURSES.filter(c => c.teacher === teacherId);

function starsHTML(r) {
  let s = '<span class="stars">';
  for (let i = 1; i <= 5; i++) {
    const cls = r >= i ? 'full' : r >= i - 0.5 ? 'half' : '';
    s += `<svg class="i ${cls}"><use href="#i-star"/></svg>`;
  }
  return s + '</span>';
}

/* Favoris enregistrés dans le navigateur */
const Favs = {
  get() { try { return JSON.parse(localStorage.getItem('apprendo-favs')) || []; } catch { return []; } },
  has(id) { return this.get().includes(id); },
  toggle(id) {
    const list = this.get();
    const i = list.indexOf(id);
    i >= 0 ? list.splice(i, 1) : list.push(id);
    try { localStorage.setItem('apprendo-favs', JSON.stringify(list)); } catch {}
    return i < 0;
  }
};

/* Carte de cours réutilisable (grilles) */
function courseCard(c, extra = '') {
  const t = teacherById(c.teacher);
  return `<a class="ccard" href="cours-detail.html?id=${c.id}">
    <div class="img"><img src="${IMG(c.img)}" alt="" loading="lazy"><span class="lvl">${LEVELS[c.level].toUpperCase()}</span>
      ${c.features.includes('audio') ? `<span class="audio-tag" title="Version audio disponible"><svg class="i"><use href="#i-headphones"/></svg>Audio</span>` : ''}
      <button class="fav-btn ${Favs.has(c.id) ? 'on' : ''}" data-fav="${c.id}" aria-label="Favori"><svg class="i"><use href="#i-heart"/></svg></button></div>
    <div class="body">
      <h4>${c.title}</h4>
      <span class="by">${t.name}</span>
      <span class="rate"><span class="rating-num">${c.rating.toFixed(1).replace('.', ',')}</span>${starsHTML(c.rating)}(${fmtNum(c.reviews)})</span>
      ${extra || `<span class="price">${fmtPrice(c.price)}</span>`}
    </div>
  </a>`;
}

/* =========================================================
   Programme d'un cours (exemple) et progression de l'apprenant
   ========================================================= */
const LESSON_TYPES = {
  video:    { icon: 'video',      label: 'Vidéo' },
  audio:    { icon: 'headphones', label: 'Audio' },
  article:  { icon: 'notes',      label: 'Lecture' },
  quiz:     { icon: 'check',      label: 'Quiz' },
  exercice: { icon: 'edit',       label: 'Exercice' },
  document: { icon: 'file',       label: 'Document' }
};
const SECTION_NAMES = ['Introduction et installation', 'Les notions fondamentales', 'Aller plus loin', 'Mise en pratique guidée', 'Projet final', 'Conclusion et prochaines étapes'];
const SECTION_TYPES = [
  ['video', 'video', 'article', 'audio', 'quiz'],
  ['video', 'article', 'video', 'video', 'quiz'],
  ['video', 'video', 'article', 'exercice', 'quiz'],
  ['video', 'exercice', 'video', 'document', 'quiz'],
  ['video', 'exercice', 'document', 'video', 'quiz'],
  ['video', 'article', 'document', 'video', 'quiz']
];

/* Construit un programme d'exemple de 6 sections × 5 leçons, avec tous les types de leçons */
function buildCurriculum(c) {
  const learn = LEARN[c.cat];
  const minPer = Math.max(4, Math.round(c.hours * 60 / c.lessons));
  return SECTION_NAMES.map((name, i) => ({
    title: name,
    lessons: SECTION_TYPES[i].map((type, k) => {
      if (type === 'audio' && !c.features.includes('audio')) type = 'video';
      const topic = learn[(i + k) % learn.length];
      const titles = {
        video: i === 0 && k === 0 ? `Bienvenue dans « ${c.title.split(':')[0].trim()} »` : topic,
        audio: `Version audio : ${name.toLowerCase()}`,
        article: `À lire : l'essentiel sur ${name.toLowerCase()}`,
        quiz: i === 5 ? 'Quiz final du cours' : `Quiz : ${name.toLowerCase()}`,
        exercice: `Exercice pratique : ${topic.charAt(0).toLowerCase() + topic.slice(1)}`,
        document: i === 4 ? 'Cahier des charges du projet' : 'Fiche récapitulative à télécharger'
      };
      const min = { video: minPer + (k % 3), audio: 6, article: 5, quiz: 4, exercice: 15, document: 2 }[type];
      return { id: `s${i}l${k}`, title: titles[type], type, min, preview: i === 0 && k < 2, section: i };
    })
  }));
}
const allLessons = c => buildCurriculum(c).flatMap(s => s.lessons);

/* Progression enregistrée dans le navigateur : { idCours: { done: [ids], last: id, notes: {id: texte}, enrolled: true } } */
const Learn = {
  key: 'apprendo-learn',
  all() { try { return JSON.parse(localStorage.getItem(this.key)) || {}; } catch { return {}; } },
  get(id) {
    const all = this.all();
    if (all[id]) return all[id];
    // Première ouverture : on part de la progression de démonstration
    const e = ENROLLED_BASE.find(x => x.id === id);
    const c = courseById(id);
    if (!e || !c) return { done: [], last: null, notes: {}, enrolled: false };
    const lessons = allLessons(c);
    const n = Math.round(lessons.length * e.progress / 100);
    return { done: lessons.slice(0, n).map(l => l.id), last: (lessons[Math.min(n, lessons.length - 1)] || lessons[0]).id, notes: {}, enrolled: true, lastDate: e.last };
  },
  set(id, data) { const all = this.all(); all[id] = data; try { localStorage.setItem(this.key, JSON.stringify(all)); } catch {} },
  isEnrolled(id) { return this.get(id).enrolled; },
  enroll(id) { const d = this.get(id); d.enrolled = true; d.lastDate = new Date().toISOString().slice(0, 10); this.set(id, d); },
  progress(id) { const c = courseById(id); return c ? Math.round(this.get(id).done.length / allLessons(c).length * 100) : 0; }
};

/* Les cours suivis reflètent la progression réelle enregistrée */
const ENROLLED_BASE = ENROLLED.map(e => ({ ...e }));
(function syncEnrolled() {
  const stored = Learn.all();
  ENROLLED.forEach(e => { if (stored[e.id]) e.progress = Learn.progress(e.id); });
  Object.entries(stored).forEach(([id, d]) => {
    if (!d.enrolled || ENROLLED.some(e => e.id === id) || !courseById(id)) return;
    ENROLLED.push({ id, progress: Learn.progress(id), last: d.lastDate || '2026-10-29' });
  });
  ENROLLED.forEach(e => { if (stored[e.id]?.lastDate) e.last = stored[e.id].lastDate; if (e.progress === 100 && !e.done) e.done = new Date(e.last).toLocaleDateString('fr-FR'); });
})();

/* =========================================================
   Monnaie de la plateforme : les cauris
   1 200 cauris = 2 000 XAF
   ========================================================= */
const CAURI_XAF = 2000 / 1200;
const toCauris = eur => Math.round(eur * 40 / 50) * 50;          // prix des cours (catalogue en €) → cauris
const caurisToXAF = n => Math.round(n * CAURI_XAF / 5) * 5;
const fmtXAF = n => fmtNum(Math.round(n)) + ' FCFA';
const fmtCauris = n => `<span class="cauri">${typeof icon === 'function' ? icon('cauri') : ''}${fmtNum(n)}</span>`;
const coursePrice = c => toCauris(c.price);

const CAURI_PACKS = [
  { cauris: 600,  xaf: 1000 },
  { cauris: 1200, xaf: 2000, tag: 'Le plus choisi' },
  { cauris: 3300, xaf: 5000, tag: '+10 % offerts' },
  { cauris: 7200, xaf: 10000, tag: '+20 % offerts' }
];
const CERT_PRICE = 300; // prix d'un certificat sans abonnement, en cauris

/* Les 4 formules d'abonnement (prix en FCFA par mois ; paiement unique = 12 mois, 2 mois offerts) */
const PLANS = [
  { id: 'etudiant', name: 'Étudiant', tagline: 'Pour débuter sereinement', monthly: 2000, icon: 'book',
    courses: 'debutant', certs: 2,
    features: ['Tous les cours de niveau débutant', '2 certificats inclus par mois', 'Cours audio accessibles', 'Assistant virtuel 24 h/24'] },
  { id: 'pro', name: 'Pro', tagline: 'Pour progresser sans limite', monthly: 5000, icon: 'star', popular: true,
    courses: 'all', certs: Infinity,
    features: ['Tout le catalogue, tous niveaux', 'Certificats illimités inclus', 'Téléchargement hors ligne', 'Exercices corrigés par les formateurs'] },
  { id: 'max', name: 'Max', tagline: 'Pour aller plus vite avec un mentor', monthly: 9000, icon: 'crown',
    courses: 'all', certs: Infinity,
    features: ['Tout ce qui est inclus dans Pro', '1 séance de mentorat par mois', 'Classes en direct illimitées', 'Assistance prioritaire'] },
  { id: 'etablissement', name: 'Établissement', tagline: 'Pour les écoles et les entreprises', monthly: 25000, icon: 'users',
    courses: 'all', certs: Infinity, seats: 20,
    features: ['Jusqu\'à 20 apprenants', 'Tableau de bord de suivi', 'Certificats au nom de l\'établissement', 'Accompagnement à la mise en place'] }
];
const planPrice = (p, period) => period === 'unique' ? p.monthly * 10 : p.monthly;   // 12 mois pour le prix de 10
const planById = id => PLANS.find(p => p.id === id);

/* Emplacement institutionnel sur les certificats.
   Les armoiries et le nom d'un ministère ne doivent être affichés qu'avec son accord officiel :
   passez authorized à true et indiquez le fichier du logo fourni par le ministère. */
const CERT_PARTNER = {
  authorized: false, // passer à true avec l'accord écrit du ministère : son nom s'affiche alors sous les armoiries
  name: "Ministère de l'Enseignement préscolaire, primaire, secondaire et de l'Alphabétisation",
  country: 'République du Congo',
  motto: 'Unité · Travail · Progrès',
  logo: 'assets/img/armoiries-mono.png'
};

/* Porte-monnaie de cauris (enregistré dans le navigateur) */
const Wallet = {
  key: 'apprendo-wallet',
  get() {
    try { const w = JSON.parse(localStorage.getItem(this.key)); if (w) return w; } catch {}
    return { balance: 1500, history: [{ label: 'Bonus de bienvenue', amount: 1500, date: '2026-10-01' }] };
  },
  save(w) { try { localStorage.setItem(this.key, JSON.stringify(w)); } catch {} document.dispatchEvent(new CustomEvent('walletchange')); },
  balance() { return this.get().balance; },
  add(amount, label) { const w = this.get(); w.balance += amount; w.history.unshift({ label, amount, date: new Date().toISOString().slice(0, 10) }); this.save(w); },
  spend(amount, label) {
    const w = this.get();
    if (w.balance < amount) return false;
    w.balance -= amount; w.history.unshift({ label, amount: -amount, date: new Date().toISOString().slice(0, 10) }); this.save(w);
    return true;
  }
};

/* Abonnement en cours */
const Sub = {
  key: 'apprendo-sub',
  get() { try { return JSON.parse(localStorage.getItem(this.key)); } catch { return null; } },
  plan() { const s = this.get(); if (!s) return null; if (s.end && new Date(s.end) < new Date()) return null; return planById(s.plan); },
  set(planId, period) {
    const start = new Date(), end = new Date(start);
    end.setMonth(end.getMonth() + (period === 'unique' ? 12 : 1));
    const s = { plan: planId, period, start: start.toISOString().slice(0, 10), end: end.toISOString().slice(0, 10), auto: period === 'mensuel' };
    try { localStorage.setItem(this.key, JSON.stringify(s)); } catch {}
    document.dispatchEvent(new CustomEvent('subchange'));
    return s;
  },
  cancel() { try { localStorage.removeItem(this.key); } catch {} document.dispatchEvent(new CustomEvent('subchange')); },
  includesCourse(c) { const p = this.plan(); return !!p && (p.courses === 'all' || p.courses === c.level); }
};

/* Certificats débloqués : { idCours: { date, code, how } } + compteur mensuel des certificats inclus */
/* Vérification des certificats (simulation) : le QR code ouvre verifier.html avec les données
   du certificat et une empreinte calculée dessus ; une donnée modifiée ne correspond plus. */
const certFingerprint = (code, name, course, date) => {
  let h = 0x811c9dc5;
  for (const ch of `koyeba|${code}|${name}|${course}|${date}`) { h ^= ch.codePointAt(0); h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(36).toUpperCase().padStart(7, '0');
};
const certVerifyURL = (courseId, done, info, name = ME_NAME) => {
  const u = new URL('verifier.html', location.href);
  u.search = new URLSearchParams({ c: info.code, n: name, k: courseId, d: done, s: certFingerprint(info.code, name, courseId, done) });
  return u.href;
};
const certQR = url => {
  if (typeof qrcode === 'undefined') return '';
  const q = qrcode(0, 'M'); q.addData(url); q.make();
  return q.createSvgTag({ cellSize: 1, margin: 0, scalable: true });
};

/* Le certificat lui-même (aperçu à l'écran et version imprimable) */
/* Contour à arabesques du certificat (encre unique, proportions A4 paysage) */
const CERT_FRAME = `<svg class="cp-frame" viewBox="0 0 297 210" preserveAspectRatio="none" aria-hidden="true">
  <defs>
    <pattern id="cpScrollH" width="9" height="6" patternUnits="userSpaceOnUse">
      <path d="M0 3C1.5.4 3 .4 4.5 3S7.5 5.6 9 3M0 3c1.5 2.6 3 2.6 4.5 0S7.5.4 9 3" fill="none" stroke="currentColor" stroke-width=".35"/>
      <circle cx="2.25" cy="3" r=".5" fill="currentColor"/><circle cx="6.75" cy="3" r=".5" fill="currentColor"/>
    </pattern>
    <pattern id="cpScrollV" href="#cpScrollH" patternTransform="rotate(90)"/>
    <g id="cpCorner" fill="none" stroke="currentColor">
      <rect x="3" y="3" width="12" height="12" fill="#fff" stroke="none"/>
      <rect x="4" y="4" width="10" height="10" stroke-width=".5"/>
      <circle cx="9" cy="9" r="2.8" stroke-width=".4"/>
      <path d="M9 4.6c1.2 1.6 1.2 3 0 4.4-1.2-1.4-1.2-2.8 0-4.4zM9 13.4c1.2-1.6 1.2-3 0-4.4-1.2 1.4-1.2 2.8 0 4.4zM4.6 9c1.6-1.2 3-1.2 4.4 0-1.4 1.2-2.8 1.2-4.4 0zM13.4 9c-1.6-1.2-3-1.2-4.4 0 1.4 1.2 2.8 1.2 4.4 0z" fill="currentColor" stroke="none" opacity=".85"/>
      <g id="cpCurl" stroke-linecap="round">
        <path d="M15.5 15.5c9-.5 17 .5 24 3.6 4 1.8 4.4 6.3 1.4 7.4-2.6.9-4.6-1.6-3.2-3.4 1-1.2 2.8-.6 2.6.8" stroke-width=".45"/>
        <path d="M24 16.6c3.4 1.6 5.2 4 5.4 6.6.2 2.2-2 3-3.2 1.7-.9-1-.2-2.4 1-2.1" stroke-width=".35"/>
        <path d="M41 21.5c4-.6 7.5.2 10 2.2" stroke-width=".3"/>
        <path d="M30.5 18.8c1.3-1.8 3.3-2.6 5.4-2.3-1 1.7-2.9 2.5-5.4 2.3z" fill="currentColor" stroke="none"/>
        <path d="M19 15.9c.9-1.6 2.6-2.3 4.4-2-.8 1.5-2.4 2.2-4.4 2z" fill="currentColor" stroke="none"/>
      </g>
      <use href="#cpCurl" transform="matrix(0 1 1 0 0 0)"/>
      <circle cx="15.5" cy="15.5" r=".8" fill="currentColor" stroke="none"/>
    </g>
  </defs>
  <rect x="3.5" y="3.5" width="290" height="203" fill="none" stroke="currentColor" stroke-width=".8"/>
  <rect x="12" y="6" width="273" height="6" fill="url(#cpScrollH)"/>
  <rect x="12" y="198" width="273" height="6" fill="url(#cpScrollH)"/>
  <rect x="6" y="12" width="6" height="186" fill="url(#cpScrollV)"/>
  <rect x="285" y="12" width="6" height="186" fill="url(#cpScrollV)"/>
  <rect x="13.5" y="13.5" width="270" height="183" fill="none" stroke="currentColor" stroke-width=".35"/>
  <use href="#cpCorner"/>
  <use href="#cpCorner" transform="translate(297 0) scale(-1 1)"/>
  <use href="#cpCorner" transform="translate(0 210) scale(1 -1)"/>
  <use href="#cpCorner" transform="translate(297 210) scale(-1 -1)"/>
  <path d="M136 13.5c4 3 8.5 4.2 12.5 4.2s8.5-1.2 12.5-4.2M136 196.5c4-3 8.5-4.2 12.5-4.2s8.5 1.2 12.5 4.2" fill="none" stroke="currentColor" stroke-width=".35"/>
  <path d="M148.5 15.6l1.6 2.1-1.6 2.1-1.6-2.1zM148.5 194.4l1.6-2.1-1.6-2.1-1.6 2.1z" fill="currentColor"/>
</svg>`;

function certHTML(c, e, info, forPrint = false, name = ME_NAME) {
  const t = teacherById(c.teacher);
  const ministry = CERT_PARTNER.authorized ? `<p class="cp-ministry">${CERT_PARTNER.name}</p>` : '';
  return `<div class="cpaper">${CERT_FRAME}<div class="cp-in">
    <div class="cp-head">
      <img class="cp-arms" src="${CERT_PARTNER.logo}" alt="Armoiries de la République du Congo">
      <p class="cp-country">${CERT_PARTNER.country}</p>
      <p class="cp-motto">${CERT_PARTNER.motto}</p>
      ${ministry}
    </div>
    <p class="cp-school">Koyeba · Plateforme d'enseignement en ligne</p>
    <p class="cp-kicker">Certificat de réussite</p>
    <p class="cp-small">Il est certifié que</p>
    <p class="cp-name">${name}</p>
    <p class="cp-small">a suivi avec succès l'intégralité de l'enseignement</p>
    <p class="cp-course">${c.title}</p>
    <p class="cp-meta">${c.hours} heures · Niveau ${LEVELS[c.level].toLowerCase()} · ${catById(c.cat).name}</p>
    <div class="cp-foot">
      <div><span class="cp-sign">${t.name}</span><small>Le formateur</small></div>
      ${info ? `<span class="cp-qr">${certQR(certVerifyURL(c.id, e.done, info, name))}<small>Scannez pour vérifier</small></span>` : '<span class="cp-qr cp-qr-empty"></span>'}
      <div><span>Délivré le ${e.done}</span><small>${info ? 'N° ' + info.code : 'Numéro attribué à la récupération'}</small></div>
    </div>
  </div></div>`;
}

const Certs = {
  key: 'apprendo-certs',
  all() { try { return JSON.parse(localStorage.getItem(this.key)) || {}; } catch { return {}; } },
  has(id) { return !!this.all()[id]; },
  usedThisMonth() { const m = new Date().toISOString().slice(0, 7); return Object.values(this.all()).filter(x => x.how === 'abonnement' && x.date.startsWith(m)).length; },
  // Ce que coûte la récupération : 0 si l'abonnement l'inclut, sinon CERT_PRICE cauris
  cost() { const p = Sub.plan(); if (!p) return CERT_PRICE; return this.usedThisMonth() < p.certs ? 0 : CERT_PRICE; },
  unlock(id, how) {
    const all = this.all();
    all[id] = { date: new Date().toISOString().slice(0, 10), code: 'KYB-' + new Date().getFullYear() + '-' + Math.random().toString(36).slice(2, 7).toUpperCase(), how };
    try { localStorage.setItem(this.key, JSON.stringify(all)); } catch {}
    return all[id];
  }
};
