/* =========================================================
   Koyeba – compte utilisateur (démo, stocké dans le navigateur)
   Chargé dans le <head> de chaque page : sans compte connecté,
   on renvoie vers connexion.html avant d'afficher la page.
   ========================================================= */
const Auth = {
  KEY: 'koyeba-user', ACCOUNTS: 'koyeba-accounts',
  read(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  write(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  user() { return this.read(this.KEY, null); },
  accounts() { return this.read(this.ACCOUNTS, {}); },
  async hash(pw) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode('koyeba:' + pw));
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
  },
  clean: v => String(v || '').replace(/[<>"&]/g, '').trim(),
  login(u) { this.write(this.KEY, u); },
  // Inscription par e-mail : le mot de passe n'est jamais gardé en clair
  async signup({ first, last, email, password }) {
    email = email.trim().toLowerCase();
    const acc = this.accounts();
    if (acc[email]) throw new Error('Un compte existe déjà avec cette adresse. Connectez-vous.');
    const u = { first: this.clean(first), last: this.clean(last), email, photo: '', provider: 'email', since: new Date().toISOString() };
    acc[email] = { ...u, pw: await this.hash(password) };
    this.write(this.ACCOUNTS, acc);
    this.login(u);
    return u;
  },
  async signin(email, password) {
    email = email.trim().toLowerCase();
    const a = this.accounts()[email];
    if (!a || a.provider !== 'email') throw new Error(a ? 'Ce compte utilise Google : cliquez sur « Continuer avec Google ».' : 'Aucun compte avec cette adresse. Créez-en un.');
    if (a.pw !== await this.hash(password)) throw new Error('Mot de passe incorrect.');
    const { pw, ...u } = a;
    this.login(u);
    return u;
  },
  // Connexion Google simulée : aucun échange avec Google
  google({ first, last, email, photo = '' }) {
    email = email.trim().toLowerCase();
    const acc = this.accounts();
    const u = acc[email] ? (({ pw, ...x }) => x)(acc[email]) : { first: this.clean(first), last: this.clean(last), email, photo, provider: 'google', since: new Date().toISOString() };
    if (!acc[email]) { acc[email] = u; this.write(this.ACCOUNTS, acc); }
    this.login(u);
    return u;
  },
  update(patch) {
    for (const k of ['first', 'last', 'headline']) if (k in patch) patch[k] = this.clean(patch[k]);
    const u = { ...this.user(), ...patch };
    this.login(u);
    const acc = this.accounts();
    if (acc[u.email]) { acc[u.email] = { ...acc[u.email], ...patch }; this.write(this.ACCOUNTS, acc); }
    return u;
  },
  logout() { try { localStorage.removeItem(this.KEY); } catch {} location.href = 'connexion.html'; },
  name() { const u = this.user(); return u ? `${u.first} ${u.last}`.trim() : ''; }
};

// connexion.html et verifier.html (vérification publique des certificats) restent ouvertes sans compte
if (!Auth.user() && !/(connexion|verifier)\.html$/i.test(location.pathname)) {
  location.replace('connexion.html?next=' + encodeURIComponent((location.pathname.split('/').pop() || 'index.html') + location.search + location.hash));
}
