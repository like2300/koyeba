/* =========================================================
   Koyeba – menu latéral, barre du haut, thème, notifications
   Chaque page déclare <body data-page="..."> et contient :
   <aside class="sidebar" id="sidebar"></aside> et <div class="topbar" id="topbar"></div>
   ========================================================= */
const ICONS = {
  compass: '<circle cx="12" cy="12" r="10"/><path d="M16 8l-2 6-6 2 2-6z"/>',
  trend: '<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  route: '<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h8a3 3 0 0 0 0-6H8a3 3 0 0 1 0-6h8"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M8.2 13.9L7 23l5-3 5 3-1.2-9.1"/>',
  plus: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 8v8M8 12h8"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  cap: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  signal: '<circle cx="12" cy="12" r="2"/><path d="M16.2 7.8a6 6 0 0 1 0 8.4M7.8 16.2a6 6 0 0 1 0-8.4M19.1 4.9a10 10 0 0 1 0 14.2M4.9 19.1a10 10 0 0 1 0-14.2"/>',
  bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  play: '<path d="M7 4v16l13-8z"/>',
  pause: '<path d="M6 4h4v16H6zM14 4h4v16h-4z"/>',
  back: '<path d="M11 17l-5-5 5-5M18 17l-5-5 5-5"/>',
  fwd: '<path d="M13 17l5-5-5-5M6 17l5-5-5-5"/>',
  repeat: '<path d="M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/>',
  notes: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/>',
  star: '<path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
  chevron: '<path d="M6 9l6 6 6-6"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  x: '<path d="M18 6L6 18M6 6l12 12"/>',
  filter: '<path d="M4 6h16M7 12h10M10 18h4"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  video: '<rect x="2" y="5" width="15" height="14" rx="2"/><path d="M17 10l5-3v10l-5-3"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
  infinity: '<path d="M18.2 7.8a6 6 0 1 1 0 8.4L12 12l-6.2-4.2a6 6 0 1 0 0 8.4L12 12z"/>',
  mobile: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
  lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',
  crown: '<path d="M2 18l2-12 5 5 3-7 3 7 5-5 2 12z"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>',
  layers: '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>',
  shuffle: '<path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>',
  chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  send: '<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',
  clip: '<path d="M21.4 11.1l-9.2 9.2a6 6 0 0 1-8.5-8.5l9.2-9.2a4 4 0 0 1 5.7 5.7l-9.2 9.2a2 2 0 0 1-2.8-2.8l8.5-8.5"/>',
  left: '<path d="M15 18l-6-6 6-6"/>',
  edit: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  checks: '<path d="M18 7L8 17l-5-5M22 7l-8.5 8.5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  cauri: '<path d="M12 2.5c4.2 0 7 4.3 7 9.5s-2.8 9.5-7 9.5-7-4.3-7-9.5 2.8-9.5 7-9.5z"/><path d="M12 5.5c-.9 2-.9 11 0 13M10.2 8h1.6M10 11h1.8M10 14h1.8M10.2 17h1.6M12.2 8h1.6M12.2 11h1.8M12.2 14h1.8M12.2 17h1.6"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
  headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1v-6h3zM3 19a2 2 0 0 0 2 2h1v-6H3z"/>',
  type: '<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',
  contrast: '<circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20z" fill="currentColor"/>',
  skipback: '<path d="M19 20L9 12l10-8zM5 19V5"/>',
  skipfwd: '<path d="M5 4l10 8-10 8zM19 5v14"/>',
  keyboard: '<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/>'
};

(function buildSprite() {
  const symbols = Object.entries(ICONS).map(([k, v]) => `<symbol id="i-${k}" viewBox="0 0 24 24">${v}</symbol>`).join('');
  document.body.insertAdjacentHTML('afterbegin',
    `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
      <defs><linearGradient id="half"><stop offset="50%" stop-color="#16a34a"/><stop offset="50%" stop-color="transparent"/></linearGradient></defs>
      ${symbols}</svg>`);
})();

const icon = name => `<svg class="i"><use href="#i-${name}"/></svg>`;
const $ = id => document.getElementById(id);
const params = new URLSearchParams(location.search);

function toast(msg) {
  let t = $('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2400);
}

/* ---------- Barre de navigation (en haut, menus déroulants) ---------- */
const MENUS = [
  { label: 'Apprendre', items: [
    { key: 'decouvrir',  label: 'Découvrir',      desc: 'Les cours à la une et votre progression', icon: 'compass', href: 'index.html' },
    { key: 'catalogue',  label: 'Tous les cours', desc: 'Le catalogue complet avec filtres',       icon: 'book',    href: 'cours.html' },
    { key: 'tendances',  label: 'Tendances',      desc: 'Les cours les plus suivis du moment',     icon: 'trend',   href: 'cours.html?tri=populaires' },
    { key: 'nouveaux',   label: 'Nouveaux cours', desc: 'Publiés ou mis à jour récemment',         icon: 'star',    href: 'cours.html?tri=recents' },
    { key: 'categories', label: 'Catégories',     desc: 'Explorer par domaine',                    icon: 'grid',    href: 'categories.html' },
    { key: 'parcours',   label: 'Parcours',       desc: 'Des formations étape par étape',          icon: 'route',   href: 'parcours.html' },
    { key: 'audio',      label: 'Cours audio',    desc: 'Accessibles aux personnes non-voyantes',  icon: 'headphones', href: 'audio.html' }
  ]},
  { label: 'Communauté', items: [
    { key: 'formateurs', label: 'Formateurs',          desc: 'Les experts qui enseignent sur Koyeba', icon: 'user',   href: 'formateurs.html' },
    { key: 'etudiant',   label: 'Meilleurs étudiants', desc: 'Le classement et les profils',            icon: 'award',  href: 'etudiant.html' },
    { key: 'messages',   label: 'Messages',            desc: 'Discuter avec les étudiants',             icon: 'chat',   href: 'messages.html' },
    { key: 'direct',     label: 'Classes en direct',   desc: 'Rejoindre une leçon en direct',           icon: 'signal', href: 'index.html#direct' }
  ]},
  { label: 'Ma bibliothèque', items: [
    { key: 'mescours',    label: 'Mes cours',   desc: 'Reprendre là où vous vous êtes arrêté', icon: 'play',  href: 'mes-cours.html' },
    { key: 'recents',     label: 'Récents',     desc: 'Les derniers cours ouverts',            icon: 'clock', href: 'mes-cours.html?onglet=recents' },
    { key: 'favoris',     label: 'Favoris',     desc: 'Les cours mis de côté',                 icon: 'heart', href: 'favoris.html' },
    { key: 'certificats', label: 'Certificats', desc: 'Vos certificats de réussite',           icon: 'award', href: 'certificats.html' },
    { key: 'abonnements', label: 'Abonnement et cauris', desc: 'Formules, porte-monnaie et achats', icon: 'cauri', href: 'abonnements.html' }
  ]},
  { label: 'Créer', items: [
    { key: 'nouveau',  label: 'Nouveau parcours',  desc: 'Assembler vos propres cours',      icon: 'plus',   href: 'nouveau-parcours.html' }
  ]}
];

let page = document.body.dataset.page;
if (page === 'catalogue' && params.get('tri') === 'populaires') page = 'tendances';
if (page === 'catalogue' && params.get('tri') === 'recents') page = 'nouveaux';
if (page === 'mescours' && params.get('onglet') === 'recents') page = 'recents';

// L'ancienne barre latérale et l'ancienne barre du haut ne sont plus utilisées
$('sidebar')?.remove();
$('topbar')?.remove();

const unread = Chat.unread();
const menuItems = m => m.items.map(n => `
  <a href="${n.href}" class="dd-item ${n.key === page ? 'active' : ''}">
    <span class="dd-ico">${icon(n.icon)}</span>
    <span><b>${n.label}</b><small>${n.desc}</small></span>
  </a>`).join('');

document.body.insertAdjacentHTML('afterbegin', `
<header class="nav" id="nav">
  <div class="nav-inner">
    <a href="index.html" class="logo"><span class="logo-icon">${icon('cap')}</span><span>Koy<b>eba</b></span></a>

    <nav class="nav-menu" id="navMenu">
      ${MENUS.map((m, i) => `
        <div class="nav-group ${m.items.some(n => n.key === page) ? 'current' : ''}">
          <button class="nav-link" aria-expanded="false" data-menu="${i}">${m.label}${icon('chevron')}</button>
          <div class="dropdown ${m.items.length > 4 ? 'wide' : ''}">${menuItems(m)}</div>
        </div>`).join('')}
    </nav>

    <div class="nav-actions">
      <button class="nav-icon" id="searchBtn" aria-label="Rechercher">${icon('search')}</button>
      <a class="nav-icon" href="messages.html" aria-label="Messages">${icon('chat')}<span class="nav-badge" id="msgBadge" ${unread ? '' : 'hidden'}>${unread}</span></a>
      <button class="nav-icon" id="themeBtn" aria-label="Changer de thème">${icon('moon')}</button>
      <div class="nav-group nav-user">
        <button class="nav-avatar" aria-label="Mon compte" data-menu="user"><img src="${FACE(ME_PHOTO)}" alt=""></button>
        <div class="dropdown right">
          <div class="dd-user"><img src="${FACE(ME_PHOTO)}" alt=""><span><b>${ME_NAME}</b><small>${ME.email}</small></span></div>
          <a href="compte.html" class="dd-item ${page === 'compte' ? 'active' : ''}"><span class="dd-ico">${icon('user')}</span><span><b>Mon compte</b></span></a>
          <a href="parametres.html" class="dd-item ${page === 'parametres' ? 'active' : ''}"><span class="dd-ico">${icon('settings')}</span><span><b>Paramètres</b></span></a>
          <a href="mes-cours.html" class="dd-item"><span class="dd-ico">${icon('book')}</span><span><b>Mes cours</b></span></a>
          <button class="dd-item" onclick="Auth.logout()"><span class="dd-ico">${icon('logout')}</span><span><b>Se déconnecter</b></span></button>
        </div>
      </div>
      <a href="abonnements.html#cauris" class="wallet-chip" title="Mon porte-monnaie de cauris" aria-label="Mon porte-monnaie">${icon('cauri')}<b id="walletBal">${fmtNum(Wallet.balance())}</b></a>
      <a href="abonnements.html" class="btn btn-primary btn-sm nav-cta" id="navPlan">${Sub.plan() ? icon('crown') + Sub.plan().name : 'S\'abonner'}</a>
      <button class="nav-icon nav-burger" id="menuBtn" aria-label="Menu">${icon('menu')}</button>
    </div>
  </div>

  <form class="nav-search" id="navSearch" action="cours.html">
    ${icon('search')}
    <input name="q" placeholder="Rechercher un cours, un formateur, une catégorie…" value="${(params.get('q') || '').replace(/"/g, '&quot;')}">
    <button type="button" class="nav-icon" id="searchClose" aria-label="Fermer">${icon('x')}</button>
  </form>
</header>`);

/* Ouverture des menus : survol sur ordinateur, clic partout */
const nav = $('nav');
const closeMenus = except => nav.querySelectorAll('.nav-group.open').forEach(g => g !== except && g.classList.remove('open'));
nav.addEventListener('click', e => {
  const btn = e.target.closest('[data-menu]');
  if (!btn) return;
  const g = btn.closest('.nav-group');
  closeMenus(g);
  g.classList.toggle('open');
});
document.addEventListener('click', e => { if (!e.target.closest('.nav-group')) closeMenus(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeMenus(); nav.classList.remove('searching'); } });
/* Défilement : ombre de la barre, ligne de progression, bouton « retour en haut » */
nav.insertAdjacentHTML('beforeend', '<span class="scroll-progress" id="scrollProgress" aria-hidden="true"></span>');
document.body.insertAdjacentHTML('beforeend', `<button class="to-top" id="toTop" aria-label="Revenir en haut de la page" tabindex="-1">${icon('chevron')}</button>`);
function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const p = max > 0 ? Math.min(1, scrollY / max) : 0;
  nav.classList.toggle('scrolled', scrollY > 4);
  $('scrollProgress').style.transform = `scaleX(${p})`;
  $('scrollProgress').classList.toggle('off', max < 200);
  const show = scrollY > 600;
  $('toTop').classList.toggle('show', show);
  $('toTop').tabIndex = show ? 0 : -1;
}
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll, { passive: true });
$('toTop').onclick = () => { window.scrollTo({ top: 0 }); $('nav').querySelector('.logo').focus({ preventScroll: true }); };
setTimeout(onScroll, 0);

$('searchBtn').onclick = () => { nav.classList.add('searching'); $('navSearch').q.focus(); };
$('searchClose').onclick = () => nav.classList.remove('searching');

/* ---------- Menu mobile et panneaux ---------- */
const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);
const closePanels = () => {
  nav.classList.remove('mobile-open');
  document.querySelectorAll('.filters.open').forEach(f => f.classList.remove('open'));
  overlay.classList.remove('show');
};
overlay.onclick = closePanels;
/* ---------- Menu mobile façon centre de contrôle iOS ---------- */
const CC_TILES = [
  ['decouvrir', 'Accueil', 'compass', 'index.html'],
  ['catalogue', 'Cours', 'book', 'cours.html'],
  ['tendances', 'Tendances', 'trend', 'cours.html?tri=populaires'],
  ['categories', 'Catégories', 'grid', 'categories.html'],
  ['parcours', 'Parcours', 'route', 'parcours.html'],
  ['audio', 'Audio', 'headphones', 'audio.html'],
  ['formateurs', 'Formateurs', 'user', 'formateurs.html'],
  ['etudiant', 'Étudiants', 'award', 'etudiant.html'],
  ['mescours', 'Mes cours', 'play', 'mes-cours.html'],
  ['favoris', 'Favoris', 'heart', 'favoris.html'],
  ['certificats', 'Certificats', 'award', 'certificats.html'],
  ['nouveau', 'Créer', 'plus', 'nouveau-parcours.html']
];
function buildCC() {
  const next = ENROLLED.filter(e => e.progress < 100).sort((x, y) => y.last.localeCompare(x.last))[0];
  const nc = next && courseById(next.id);
  const on = k => document.body.classList.contains(k);
  const unreadNow = Chat.unread();
  return `
    <div class="cc-top">
      <a href="compte.html" class="cc-user"><img src="${FACE(ME_PHOTO)}" alt=""><span><b>${ME_NAME}</b><small>Voir mon compte</small></span></a>
      <button class="cc-close" id="ccClose" aria-label="Fermer le menu">${icon('x')}</button>
    </div>
    <div class="cc-grid">
      <div class="cc-mod cc-toggles" role="group" aria-label="Réglages rapides">
        <button class="cc-round ${on('dark') ? 'on' : ''}" data-cc="theme" aria-pressed="${on('dark')}" aria-label="Mode sombre">${icon('moon')}</button>
        <button class="cc-round ${on('a11y-big') ? 'on' : ''}" data-cc="big" aria-pressed="${on('a11y-big')}" aria-label="Grand texte">${icon('type')}</button>
        <button class="cc-round ${on('a11y-hc') ? 'on' : ''}" data-cc="hc" aria-pressed="${on('a11y-hc')}" aria-label="Contraste élevé">${icon('contrast')}</button>
        <button class="cc-round" data-cc="search" aria-label="Rechercher">${icon('search')}</button>
      </div>
      ${nc ? `<a class="cc-mod cc-now" href="lecture.html?id=${nc.id}">
        <img src="${IMG(nc.img, 300)}" alt="">
        <span class="cc-now-txt"><small>Continuer</small><b>${nc.title.split(':')[0].trim()}</b>
          <span class="cc-bar"><span style="width:${next.progress}%"></span></span></span>
        <span class="cc-now-play">${icon('play')}</span>
      </a>` : `<a class="cc-mod cc-now" href="cours.html"><span class="cc-now-txt"><small>Commencer</small><b>Explorer les cours</b></span></a>`}
      <a class="cc-mod cc-wide ${page === 'messages' ? 'current' : ''}" href="messages.html">
        <span class="cc-ico">${icon('chat')}${unreadNow ? `<i class="cc-badge">${unreadNow}</i>` : ''}</span>
        <span><b>Messages</b><small>${unreadNow ? `${unreadNow} non lu${unreadNow > 1 ? 's' : ''}` : 'Aucun nouveau message'}</small></span>
      </a>
      <a class="cc-mod cc-wide" href="index.html#direct">
        <span class="cc-ico">${icon('signal')}</span><span><b>En direct</b><small>Leçon en cours</small></span>
      </a>
      ${CC_TILES.map(([k, label, ic, href]) => `
        <a class="cc-tile ${k === page ? 'current' : ''}" href="${href}">
          <span class="cc-sq">${icon(ic)}</span><span class="cc-lbl">${label}</span>
        </a>`).join('')}
      <a class="cc-mod cc-premium" href="abonnements.html">${icon('crown')}<span><b>${Sub.plan() ? 'Formule ' + Sub.plan().name : 'Choisir un abonnement'}</b><small>${fmtNum(Wallet.balance())} cauris dans votre porte-monnaie</small></span>${icon('arrow')}</a>
      <a class="cc-mod cc-wide cc-half" href="parametres.html"><span class="cc-ico">${icon('settings')}</span><span><b>Paramètres</b></span></a>
      <button class="cc-mod cc-wide cc-half" data-cc="help"><span class="cc-ico">${icon('chat')}</span><span><b>Aide</b></span></button>
    </div>`;
}
document.body.insertAdjacentHTML('beforeend', '<div class="cc" id="cc" role="dialog" aria-modal="true" aria-label="Menu" hidden></div>');
function openCC(open) {
  const cc = $('cc');
  if (open) { cc.innerHTML = buildCC(); cc.hidden = false; requestAnimationFrame(() => cc.classList.add('show')); document.body.style.overflow = 'hidden'; cc.querySelector('a, button').focus(); }
  else { cc.classList.remove('show'); document.body.style.overflow = ''; setTimeout(() => { if (!cc.classList.contains('show')) cc.hidden = true; }, 250); }
  $('menuBtn').setAttribute('aria-expanded', open);
}
$('menuBtn').onclick = () => openCC(true);
$('cc').addEventListener('click', e => {
  if (e.target.id === 'cc' || e.target.closest('#ccClose')) return openCC(false);
  const b = e.target.closest('[data-cc]');
  if (!b) return;
  const act = b.dataset.cc;
  if (act === 'theme') applyTheme(!document.body.classList.contains('dark'));
  if (act === 'big') setA11y('big', !document.body.classList.contains('a11y-big'));
  if (act === 'hc') setA11y('hc', !document.body.classList.contains('a11y-hc'));
  if (act === 'search') { openCC(false); nav.classList.add('searching'); $('navSearch').q.focus(); return; }
  if (act === 'help') { openCC(false); $('fab')?.click(); return; }
  const isOn = { theme: 'dark', big: 'a11y-big', hc: 'a11y-hc' }[act];
  b.classList.toggle('on', document.body.classList.contains(isOn));
  b.setAttribute('aria-pressed', document.body.classList.contains(isOn));
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !$('cc').hidden) openCC(false); });

/* ---------- Thème clair / sombre ---------- */
function applyTheme(dark) {
  document.body.classList.toggle('dark', dark);
  $('themeBtn').innerHTML = icon(dark ? 'sun' : 'moon');
  try { localStorage.setItem('apprendo-theme', dark ? 'dark' : 'light'); } catch {}
  document.dispatchEvent(new CustomEvent('themechange', { detail: dark }));
}
/* Options d'accessibilité (grand texte, contraste élevé), appliquées sur tout le site */
function setA11y(name, on) {
  document.body.classList.toggle('a11y-' + name, on);
  let a = {};
  try { a = JSON.parse(localStorage.getItem('apprendo-a11y')) || {}; } catch {}
  a[name] = on;
  try { localStorage.setItem('apprendo-a11y', JSON.stringify(a)); } catch {}
}
try { const a = JSON.parse(localStorage.getItem('apprendo-a11y')) || {}; Object.keys(a).forEach(k => document.body.classList.toggle('a11y-' + k, !!a[k])); } catch {}

let savedTheme = null;
try { savedTheme = localStorage.getItem('apprendo-theme'); } catch {}
applyTheme(savedTheme === 'dark');
setTimeout(() => document.body.classList.add('ready'), 150);
$('themeBtn').onclick = () => applyTheme(!document.body.classList.contains('dark'));

/* ---------- Boutons favoris (partout) ---------- */
document.addEventListener('click', e => {
  const b = e.target.closest('[data-fav]');
  if (!b) return;
  e.preventDefault();
  e.stopPropagation();
  const added = Favs.toggle(b.dataset.fav);
  document.querySelectorAll(`[data-fav="${b.dataset.fav}"]`).forEach(x => x.classList.toggle('on', added));
  toast(added ? 'Ajouté à vos favoris' : 'Retiré de vos favoris');
  document.dispatchEvent(new CustomEvent('favchange'));
});

/* =========================================================
   Assistant virtuel Koyeba (bouton flottant, toutes les pages)
   Réponses automatiques à partir d'une FAQ + contact de l'assistance
   ========================================================= */
(function assistant() {
  const FAQ = [
    [/certificat|attestation|diplôme/i, 'Un certificat est délivré quand vous terminez 100 % d\'un cours. Retrouvez-les dans <a href="certificats.html">Ma bibliothèque › Certificats</a>, où vous pouvez les télécharger.'],
    [/rembours|annul/i, 'Tous les cours payants sont <b>satisfaits ou remboursés pendant 30 jours</b>. Pour une demande, <button class="link-btn" data-contact>contactez l\'assistance</button>.'],
    [/mot de passe|connexion|connecter|identifiant/i, 'Pour changer de mot de passe ou d\'adresse e-mail, ouvrez <a href="compte.html">Mon compte</a>. Si vous n\'arrivez pas à vous connecter, l\'assistance peut vous aider.'],
    [/audio|aveugle|non.?voyant|malvoyant|accessib/i, 'Nous proposons des <a href="audio.html">cours audio accessibles</a>, entièrement lus à voix haute et contrôlables au clavier. Les options « Grand texte » et « Contraste élevé » s\'appliquent à tout le site.'],
    [/cauri|monnaie|porte.?monnaie|solde|recharger/i, 'Les <b>cauris</b> sont la monnaie d\'Koyeba : <b>1 200 cauris = 2 000 FCFA</b>. Ils servent à acheter des cours et des certificats. Rechargez votre porte-monnaie dans <a href="abonnements.html#cauris">Abonnement et cauris</a>.'],
    [/prix|premium|abonnement|formule|payer|paiement|tarif/i, 'Il existe 4 formules : <b>Étudiant</b> (2 000 FCFA/mois), <b>Pro</b> (5 000), <b>Max</b> (9 000) et <b>Établissement</b> (25 000). En paiement unique, vous avez 12 mois pour le prix de 10. Voir <a href="abonnements.html">les abonnements</a>.'],
    [/télécharg|hors.?ligne|offline/i, 'Le téléchargement des vidéos pour les regarder hors ligne est inclus dans l\'abonnement Premium. Les fiches récapitulatives des cours sont téléchargeables par tous.'],
    [/formateur|enseigner|publier|importer|créer un cours/i, 'Vous pouvez publier votre propre formation depuis <a href="importer.html">Créer › Importer un cours</a>. Elle est vérifiée par notre équipe avant d\'être en ligne.'],
    [/progress|reprendre|continuer|où j.?en suis/i, 'Votre progression est enregistrée automatiquement. Reprenez là où vous vous êtes arrêté dans <a href="mes-cours.html">Mes cours</a>.'],
    [/parcours/i, 'Un parcours regroupe plusieurs cours pour atteindre un objectif. Découvrez-les dans <a href="parcours.html">Parcours</a>, ou créez le vôtre dans <a href="nouveau-parcours.html">Nouveau parcours</a>.'],
    [/message|contacter un étudiant|discuter/i, 'Vous pouvez écrire aux autres étudiants et aux formateurs depuis <a href="messages.html">Messages</a>.'],
    [/bonjour|salut|hello|bonsoir|coucou/i, 'Bonjour ! Je suis l\'assistant virtuel d\'Koyeba. Posez-moi une question sur les cours, les certificats, les paiements ou l\'accessibilité.'],
    [/merci/i, 'Avec plaisir ! N\'hésitez pas si vous avez une autre question.'],
    [/conseiller|humain|assistance|support|aide|problème|bug/i, 'Je peux transmettre votre demande à un conseiller. <button class="link-btn" data-contact>Contacter l\'assistance</button>']
  ];
  const SUGGEST = ['Comment obtenir un certificat ?', 'Je veux être remboursé', 'Cours pour non-voyants', 'Prix de Premium', 'Parler à un conseiller'];
  const KEY = 'apprendo-assistant';
  const esc = s => s.replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  let log = [];
  try { log = JSON.parse(sessionStorage.getItem(KEY)) || []; } catch {}
  const persist = () => { try { sessionStorage.setItem(KEY, JSON.stringify(log.slice(-40))); } catch {} };

  document.body.insertAdjacentHTML('beforeend', `
    <button class="fab" id="fab" aria-label="Ouvrir l'assistant virtuel" aria-expanded="false" aria-controls="assist">
      ${icon('chat')}<span class="fab-label">Besoin d'aide ?</span>
    </button>
    <section class="assist" id="assist" role="dialog" aria-label="Assistant virtuel Koyeba" hidden>
      <header class="as-head">
        <span class="as-bot">${icon('cap')}</span>
        <div><b>Assistant Koyeba</b><small><i></i>Assistant virtuel · répond tout de suite</small></div>
        <button class="nav-icon" id="asClose" aria-label="Fermer l'assistant">${icon('x')}</button>
      </header>
      <div class="as-body" id="asBody" aria-live="polite"></div>
      <div class="as-chips" id="asChips">${SUGGEST.map(s => `<button>${s}</button>`).join('')}</div>
      <form class="as-input" id="asForm">
        <input id="asText" placeholder="Posez votre question…" autocomplete="off" aria-label="Votre question">
        <button class="nav-icon" aria-label="Envoyer">${icon('send')}</button>
      </form>
      <form class="as-contact" id="asContact" hidden>
        <h4>Contacter l'assistance</h4>
        <p>Un conseiller vous répond par e-mail sous 24 h (jours ouvrés).</p>
        <label>Sujet<select class="input" name="subject" required>
          <option>Problème technique</option><option>Paiement ou remboursement</option><option>Mon compte</option><option>Accessibilité</option><option>Autre question</option></select></label>
        <label>Adresse e-mail<input class="input" name="email" type="email" required value="alberto.rossi@exemple.com"></label>
        <label>Votre message<textarea class="input" name="message" required minlength="10" placeholder="Décrivez votre demande…"></textarea></label>
        <div class="as-actions"><button type="button" class="btn btn-ghost btn-sm" id="asBack">Retour</button><button class="btn btn-primary btn-sm">Envoyer la demande</button></div>
      </form>
    </section>`);

  const body = $('asBody');
  const render = () => {
    if (!log.length) log.push({ from: 'bot', html: `Bonjour ${esc(ME.first)} ! Je suis l'assistant virtuel de Koyeba. Comment puis-je vous aider ?` });
    body.innerHTML = log.map(m => `<div class="as-msg ${m.from}">${m.from === 'bot' ? m.html : esc(m.text)}</div>`).join('');
    body.scrollTop = body.scrollHeight;
  };
  const answer = q => (FAQ.find(([re]) => re.test(q)) || [null, 'Je n\'ai pas de réponse précise à cette question. <button class="link-btn" data-contact>Contacter l\'assistance</button> et un conseiller vous répondra.'])[1];
  function ask(q) {
    log.push({ from: 'me', text: q });
    render();
    body.insertAdjacentHTML('beforeend', '<div class="as-msg bot typing-dots"><i></i><i></i><i></i></div>');
    body.scrollTop = body.scrollHeight;
    setTimeout(() => { log.push({ from: 'bot', html: answer(q) }); persist(); render(); }, 650);
  }
  const showContact = on => { $('asContact').hidden = !on; $('asForm').hidden = on; $('asChips').hidden = on; body.hidden = on; if (on) $('asContact').subject.focus(); };
  const open = on => {
    $('assist').hidden = !on;
    $('fab').setAttribute('aria-expanded', on);
    $('fab').classList.toggle('open', on);
    if (on) { render(); $('asText').focus(); }
  };

  $('fab').onclick = () => open($('assist').hidden);
  $('asClose').onclick = () => { open(false); $('fab').focus(); };
  $('asForm').onsubmit = e => { e.preventDefault(); const q = $('asText').value.trim(); if (q) { $('asText').value = ''; ask(q); } };
  $('asChips').onclick = e => { if (e.target.tagName === 'BUTTON') e.target.textContent === 'Parler à un conseiller' ? showContact(true) : ask(e.target.textContent); };
  body.addEventListener('click', e => { if (e.target.closest('[data-contact]')) showContact(true); });
  $('asBack').onclick = () => showContact(false);
  $('asContact').onsubmit = e => {
    e.preventDefault();
    const f = e.target;
    const ticket = 'APP-' + Math.floor(10000 + Math.random() * 89999);
    let tickets = [];
    try { tickets = JSON.parse(localStorage.getItem('apprendo-tickets')) || []; } catch {}
    tickets.unshift({ ticket, subject: f.subject.value, email: f.email.value, message: f.message.value, date: new Date().toISOString() });
    try { localStorage.setItem('apprendo-tickets', JSON.stringify(tickets)); } catch {}
    log.push({ from: 'bot', html: `Votre demande <b>${ticket}</b> (${esc(f.subject.value)}) a bien été enregistrée. Un conseiller vous répondra à <b>${esc(f.email.value)}</b> sous 24 h.` });
    persist();
    f.message.value = '';
    showContact(false);
    render();
    toast('Demande envoyée à l\'assistance');
  };
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !$('assist').hidden) { open(false); $('fab').focus(); } });
})();

/* =========================================================
   Recherche avec suggestions (barre du haut)
   ========================================================= */
(function searchSuggest() {
  const form = $('navSearch'), input = form.q;
  form.insertAdjacentHTML('beforeend', '<div class="suggest" id="suggest" role="listbox" aria-label="Suggestions" hidden></div>');
  const box = $('suggest');
  const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const mark = (txt, q) => {
    const i = norm(txt).indexOf(norm(q));
    return i < 0 || !q ? txt : `${txt.slice(0, i)}<mark>${txt.slice(i, i + q.length)}</mark>${txt.slice(i + q.length)}`;
  };
  const POPULAR = ['JavaScript', 'Python', 'Excel', 'Anglais', 'Design', 'Cours audio'];
  let items = [], active = -1;
  const safe = s => s.replace(/</g, '&lt;');

  function build(q) {
    const n = norm(q.trim());
    if (!n) {
      items = POPULAR.map(p => ({ label: p, href: p === 'Cours audio' ? 'audio.html' : `cours.html?q=${encodeURIComponent(p)}`, icon: 'trend', group: 'Recherches populaires' }));
    } else {
      const has = s => norm(s).includes(n);
      items = [
        ...COURSES.filter(c => has(c.title) || has(c.subtitle)).slice(0, 5).map(c => ({ label: c.title, sub: `${teacherById(c.teacher).name} · ${LEVELS[c.level]}`, img: IMG(c.img, 80), href: `cours-detail.html?id=${c.id}`, group: 'Cours' })),
        ...AUDIO_COURSES.filter(a => has(a.title)).slice(0, 2).map(a => ({ label: a.title, sub: 'Cours audio accessible', icon: 'headphones', href: `audio.html?id=${a.id}`, group: 'Cours audio' })),
        ...CATEGORIES.filter(c => has(c.name)).map(c => ({ label: c.name, sub: `${COURSES.filter(x => x.cat === c.id).length} cours`, icon: 'grid', href: `cours.html?cat=${c.id}`, group: 'Catégories' })),
        ...TEACHERS.filter(t => has(t.name)).slice(0, 3).map(t => ({ label: t.name, sub: 'Formateur', img: FACE(t.photo), round: true, href: `formateurs.html#${t.id}`, group: 'Formateurs' })),
        ...STUDENTS.filter(s => has(s.name)).slice(0, 3).map(s => ({ label: s.name, sub: `Étudiant · ${fmtNum(s.xp)} XP`, img: FACE(s.photo), round: true, href: `etudiant.html?id=${s.id}`, group: 'Étudiants' }))
      ];
    }
    active = -1;
    let g = null;
    if (n && !items.length) {
      box.innerHTML = `<p class="sg-empty">Aucun résultat pour « ${safe(q.trim())} ». Essayez un autre mot.</p>`;
    } else {
      box.innerHTML = items.map((it, i) => {
        const head = it.group !== g ? `<div class="sg-group">${(g = it.group)}</div>` : '';
        return head + `<a class="sg-item" role="option" id="sg${i}" href="${it.href}">
          ${it.img ? `<img src="${it.img}" alt="" class="${it.round ? 'round' : ''}">` : `<span class="sg-ico">${icon(it.icon)}</span>`}
          <span><b>${mark(it.label, q.trim())}</b>${it.sub ? `<small>${it.sub}</small>` : ''}</span></a>`;
      }).join('') + (n ? `<a class="sg-all" href="cours.html?q=${encodeURIComponent(q.trim())}">${icon('search')}Voir tous les résultats pour « ${safe(q.trim())} »</a>` : '');
    }
    box.hidden = false;
  }
  const setActive = i => {
    active = (i + items.length) % items.length;
    box.querySelectorAll('.sg-item').forEach((el, k) => el.classList.toggle('active', k === active));
    input.setAttribute('aria-activedescendant', 'sg' + active);
    $('sg' + active)?.scrollIntoView({ block: 'nearest' });
  };
  input.setAttribute('autocomplete', 'off');
  input.addEventListener('input', () => build(input.value));
  input.addEventListener('focus', () => build(input.value));
  input.addEventListener('keydown', e => {
    if (box.hidden || !items.length) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive(active + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(active - 1); }
    else if (e.key === 'Enter' && active >= 0) { e.preventDefault(); location.href = items[active].href; }
  });
  document.addEventListener('click', e => { if (!e.target.closest('#navSearch, #searchBtn')) box.hidden = true; });
  // Raccourci : Ctrl + K ou / pour ouvrir la recherche
  document.addEventListener('keydown', e => {
    const typing = ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName);
    if ((e.key === 'k' && (e.ctrlKey || e.metaKey)) || (e.key === '/' && !typing)) {
      e.preventDefault(); nav.classList.add('searching'); input.focus();
    }
  });
})();

/* Solde de cauris et formule affichés dans la barre du haut */
document.addEventListener('walletchange', () => { const b = $('walletBal'); if (b) b.textContent = fmtNum(Wallet.balance()); });
document.addEventListener('subchange', () => { const p = Sub.plan(); $('navPlan').innerHTML = p ? icon('crown') + p.name : 'S\'abonner'; });
