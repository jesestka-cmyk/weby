import { startIntro } from './intro.js';

/* ---------------- texty EN / CZ ---------------- */
const T = {
  en: {
    'hero.kicker': 'Opening night · by invitation only', 'hero.sub': 'A hidden bar opens its copper door', 'hero.scroll': 'Scroll',
    'meta.when': 'When', 'meta.where': 'Where', 'meta.date': 'Saturday, October 16, 2027', 'meta.time': 'From 8:00 PM',
    'meta.place': 'Behind the copper door', 'meta.dateShort': 'Oct 16, 2027 · 8:00 PM',
    'inv.kicker': '01 · The invitation',
    'inv.body': 'There is no sign, no menu in the window and no number on the door. For one night, before anyone else, we open The Cipher Room to sixty guests — candlelight, copper and cocktails built like puzzles. You are one of the sixty.',
    'inv.sign': '— The keepers of the room',
    'sec.kicker': '02 · The password', 'sec.title': 'Crack the copper lock', 'sec.sub': 'Turn the three rings until all hexagons meet at the top mark.',
    'sec.label': 'Tonight’s password', 'sec.word': '“The hexagon sleeps”', 'sec.role': 'Whisper it at the door · valid October 16 only',
    'sec.hint': 'Drag a ring — or tap it to turn', 'sec.done': 'Unlocked. Remember the password.',
    'cd.kicker': '03 · Countdown', 'cd.title': 'The door opens in', 'cd.d': 'days', 'cd.h': 'hours', 'cd.m': 'minutes', 'cd.s': 'seconds',
    'pr.kicker': '04 · The night', 'pr.title': 'Program', 'pr.hint': 'Scroll to follow the flame · tap a stop for details',
    'pr.1t': 'The door opens', 'pr.1p': 'Give the password, take the first pour.', 'pr.1m': 'First pour: the Copper Hex — mezcal, honey, smoke.',
    'pr.2t': 'The founders’ toast', 'pr.2p': 'The copper bar lights up for the first time.', 'pr.2m': 'Glasses up — and the first secret of the room revealed.',
    'pr.3t': 'Live jazz', 'pr.3p': 'A trio in the corner, cocktails built like puzzles.', 'pr.3m': 'Upright bass, brushed drums and a saxophone in the smoke.',
    'pr.4t': 'Late-night set', 'pr.4p': 'Vinyl only, until the candles burn out.', 'pr.4m': 'Bring a record request — the keepers might play it.',
    've.kicker': '05 · The place', 've.title': 'Find the copper door',
    've.s1': 'Get dropped off on N Davidson St.', 've.s2': 'Walk past the gallery with the red window.', 've.s3': 'Turn into the alley. Look for the copper hexagon.',
    've.doorv': 'Password and digital ticket · 21+', 've.open': 'Open in Maps',
    'dr.kicker': '06 · Dress code', 'dr.title': 'Black & Copper', 'dr.body': 'Dark suits, black dresses, velvet — and something that catches the candlelight.',
    'dr.c1': 'Black', 'dr.c2': 'Copper', 'dr.c3': 'Charcoal',
    'rs.kicker': '07 · RSVP', 'rs.title': 'Will you come through the door?', 'rs.by': 'Sixty places. Kindly reply by September 30, 2027.',
    'rs.name': 'Full name', 'rs.guests': 'Number of guests', 'rs.menu': 'Bites', 'rs.m1': 'Classic', 'rs.m2': 'Vegetarian', 'rs.m3': 'Vegan',
    'rs.note': 'A note for the keepers', 'rs.err': 'Please enter your name.', 'rs.send': 'Confirm attendance',
    'ps.kicker': 'The door will open for you', 'ps.guest': 'Guest', 'ps.admits': 'Admits', 'ps.show': 'Show this ticket — and say the password.',
    'ps.ics': 'Add to calendar (.ics)', 'ps.gcal': 'Google Calendar', 'ps.p1': '1 guest', 'ps.p2': '2 guests',
    'ft.line': 'Keep this quiet. We’ll be waiting behind the copper door.', 'ft.demo': 'Fictional event · design demo',
  },
  cs: {
    'hero.kicker': 'Slavnostní otevření · jen na pozvánku', 'hero.sub': 'Skrytý bar otevírá své měděné dveře', 'hero.scroll': 'Scrolluj',
    'meta.when': 'Kdy', 'meta.where': 'Kde', 'meta.date': 'sobota 16. října 2027', 'meta.time': 'Od 20:00',
    'meta.place': 'Za měděnými dveřmi', 'meta.dateShort': '16. 10. 2027 · 20:00',
    'inv.kicker': '01 · Pozvání',
    'inv.body': 'Žádná cedule, žádné menu ve výloze, žádné číslo na dveřích. Na jednu noc, dřív než kdokoli jiný, otevíráme The Cipher Room pro šedesát hostů — svíčky, měď a koktejly skládané jako hádanky. Vy jste jeden z těch šedesáti.',
    'inv.sign': '— Strážci místnosti',
    'sec.kicker': '02 · Heslo', 'sec.title': 'Otevřete měděný zámek', 'sec.sub': 'Otáčejte třemi kroužky, dokud se všechny šestiúhelníky nesejdou nahoře u značky.',
    'sec.label': 'Heslo pro dnešní noc', 'sec.word': '„Šestiúhelník spí“', 'sec.role': 'Pošeptejte ho u dveří · platí jen 16. října',
    'sec.hint': 'Táhněte kroužkem — nebo na něj klepněte', 'sec.done': 'Odemčeno. Zapamatujte si heslo.',
    'cd.kicker': '03 · Odpočet', 'cd.title': 'Dveře se otevřou za', 'cd.d': 'dní', 'cd.h': 'hodin', 'cd.m': 'minut', 'cd.s': 'sekund',
    'pr.kicker': '04 · Noc', 'pr.title': 'Program', 'pr.hint': 'Scrollujte za plamenem · klepněte na zastávku pro detail',
    'pr.1t': 'Dveře se otevírají', 'pr.1p': 'Řekněte heslo a dostanete první drink.', 'pr.1m': 'První drink: Copper Hex — mezcal, med, kouř.',
    'pr.2t': 'Přípitek zakladatelů', 'pr.2p': 'Měděný bar se poprvé rozsvítí.', 'pr.2m': 'Sklenice nahoru — a první tajemství místnosti.',
    'pr.3t': 'Živý jazz', 'pr.3p': 'Trio v rohu a koktejly skládané jako hádanky.', 'pr.3m': 'Kontrabas, metličky a saxofon v kouři.',
    'pr.4t': 'Noční set', 'pr.4p': 'Jen vinyly, dokud nedohoří svíčky.', 'pr.4m': 'Přineste přání desky — strážci ji možná pustí.',
    've.kicker': '05 · Místo', 've.title': 'Najděte měděné dveře',
    've.s1': 'Vystupte na N Davidson St.', 've.s2': 'Projděte kolem galerie s červeným oknem.', 've.s3': 'Zahněte do uličky a hledejte měděný šestiúhelník.',
    've.doorv': 'Heslo a digitální vstupenka · 21+', 've.open': 'Otevřít v mapách',
    'dr.kicker': '06 · Dress code', 'dr.title': 'Černá a měď', 'dr.body': 'Tmavé obleky, černé šaty, samet — a něco, co zachytí světlo svíček.',
    'dr.c1': 'Černá', 'dr.c2': 'Měď', 'dr.c3': 'Antracit',
    'rs.kicker': '07 · Účast', 'rs.title': 'Projdete těmi dveřmi?', 'rs.by': 'Šedesát míst. Odpovězte prosím do 30. září 2027.',
    'rs.name': 'Jméno a příjmení', 'rs.guests': 'Počet hostů', 'rs.menu': 'Jídlo', 'rs.m1': 'Klasické', 'rs.m2': 'Vegetariánské', 'rs.m3': 'Veganské',
    'rs.note': 'Vzkaz pro strážce', 'rs.err': 'Vyplňte prosím své jméno.', 'rs.send': 'Potvrdit účast',
    'ps.kicker': 'Dveře se pro vás otevřou', 'ps.guest': 'Host', 'ps.admits': 'Vstup pro', 'ps.show': 'Ukažte vstupenku — a řekněte heslo.',
    'ps.ics': 'Přidat do kalendáře (.ics)', 'ps.gcal': 'Google Kalendář', 'ps.p1': '1 osobu', 'ps.p2': '2 osoby',
    'ft.line': 'Nechte si to pro sebe. Budeme čekat za měděnými dveřmi.', 'ft.demo': 'Fiktivní akce · ukázka designu',
  },
};
let lang = 'en', lastPass = null, unlocked = false;
try { const s = localStorage.getItem('cipher-lang'); if (s && T[s]) lang = s; } catch (e) {}
const t = (k) => T[lang][k] ?? T.en[k] ?? k;
const fmtTime = (hm) => { const [h, m] = hm.split(':').map(Number); return lang === 'cs' ? hm : `${((h + 11) % 12) + 1}:${String(m).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`; };
const hooks = [];

function applyLang() {
  document.documentElement.lang = lang === 'cs' ? 'cs' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-lang]').forEach((b) => b.classList.toggle('on', b.dataset.lang === lang));
  document.querySelectorAll('.stop').forEach((s) => { s.querySelector('time').textContent = fmtTime(s.dataset.t); });
  if (unlocked) document.getElementById('lockHint').textContent = t('sec.done');
  if (lastPass) fillPass(lastPass);
  hooks.forEach((f) => f());
}
document.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => {
  lang = b.dataset.lang; try { localStorage.setItem('cipher-lang', lang); } catch (e) {}
  applyLang(); window.ScrollTrigger && ScrollTrigger.refresh();
}));

/* ---------------- intro (obálka + video) ---------------- */
const intro = document.getElementById('intro');
const whiteout = document.getElementById('whiteout');
let introApi = null, entered = false;
function enterSite(fromIntro) {
  if (entered) return; entered = true;
  whiteout.classList.remove('fade'); whiteout.classList.add('on');
  requestAnimationFrame(() => {
    intro.remove(); introApi && introApi.destroy();
    document.body.classList.remove('is-intro');
    document.getElementById('site').removeAttribute('aria-hidden');
    window.scrollTo(0, 0);
    initSite();
    setTimeout(() => { whiteout.classList.add('fade'); whiteout.classList.remove('on'); }, fromIntro ? 120 : 20);
  });
}
introApi = startIntro({ canvas: document.getElementById('gl'), onDone: () => enterSite(true), cfg: window.INTRO_CFG || {} });
if (!introApi) { const fb = document.getElementById('fallback'); fb.hidden = false; fb.addEventListener('click', () => enterSite(false)); }
document.getElementById('openBtn').addEventListener('click', () => (introApi ? introApi.open() : enterSite(false)));
document.getElementById('skipBtn').addEventListener('click', () => enterSite(false));
window.addEventListener('keydown', (e) => { if (!entered && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); introApi ? introApi.open() : enterSite(false); } });
applyLang();

/* ---------------- scrollovací příběh ---------------- */
let siteReady = false;
function initSite() {
  if (siteReady) return; siteReady = true;
  gsap.registerPlugin(ScrollTrigger);
  hero(); candles(); lock(); board(); program(); venue(); coins(); reveals();
  requestAnimationFrame(() => ScrollTrigger.refresh());
}
const clamp01 = (x) => Math.min(1, Math.max(0, x));
const seg = (p, a, b) => clamp01((p - a) / (b - a));

/* 1 · hero: šestiúhelník se vykreslí a z jeho vrcholů přiletí písmena */
function hero() {
  const lines = [...document.querySelectorAll('.hex polygon')];
  lines.forEach((l) => { const L = l.getTotalLength(); l.style.strokeDasharray = L; l.style.strokeDashoffset = L; l.dataset.len = L; });
  const [h0, h1, h2, h3] = lines;
  gsap.to(h0, { strokeDashoffset: 0, duration: 2.2, ease: 'power2.inOut', delay: 0.4 });
  gsap.to('.h-kick', { opacity: 1, duration: 1.2, delay: 1 });
  gsap.set('.h4', { opacity: 0 });
  const letters = gsap.utils.toArray('.letters b');
  const R = Math.min(innerWidth, innerHeight) * 0.38;
  letters.forEach((b, i) => {
    const a = -Math.PI / 2 + i * Math.PI / 3;
    gsap.set(b, { x: Math.cos(a) * R - (i - 2.5) * b.offsetWidth, y: Math.sin(a) * R, rotation: (i % 2 ? 1 : -1) * 90, scale: 0.2, opacity: 0, filter: 'blur(12px)' });
  });
  const tl = gsap.timeline({ scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom bottom', scrub: 0.7 } });
  tl.to('.scroll-cue', { opacity: 0, duration: 0.2 }, 0)
    .to(h1, { strokeDashoffset: 0, duration: 0.8 }, 0)
    .to(h2, { strokeDashoffset: 0, duration: 0.8 }, 0.15)
    .to(h3, { strokeDashoffset: 0, duration: 0.6 }, 0.45)
    .to('.h4', { opacity: 0.7, duration: 0.4 }, 0.6)
    .to('.glow', { opacity: 1, duration: 1 }, 0.3)
    .to('.hex', { rotation: 30, duration: 2.4 }, 0)
    .to(letters, { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.9, stagger: 0.09, ease: 'power3.out' }, 0.7)
    .to('.hex', { scale: 1.7, opacity: 0.16, duration: 0.8 }, 1.45)
    .to('.w-the, .w-room', { opacity: 1, duration: 0.4 }, 1.6)
    .to('.letters b', { backgroundPosition: '-150% 0', duration: 1 }, 1.4)
    .to('.hero-sub', { opacity: 1, y: 0, duration: 0.4 }, 1.8)
    .fromTo('.hero-meta', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.4 }, 1.95)
    .to({}, { duration: 0.35 });
}

/* 2 · pozvání: slova se rozsvěcí jako svíčky */
function candles() {
  const el = document.getElementById('candleText');
  let words = [], prog = 0;
  const split = () => {
    const txt = el.textContent;
    el.innerHTML = txt.split(/(\s+)/).map((w) => (/\s+/.test(w) ? w : `<span class="w">${w}</span>`)).join('');
    words = [...el.querySelectorAll('.w')]; paint();
  };
  const paint = () => {
    const lit = prog * 1.12 * words.length;
    words.forEach((w, i) => { w.classList.toggle('lit', i < lit); w.classList.toggle('hot', i < lit && i > lit - 4); });
    document.querySelector('.invite .sign').style.opacity = seg(prog, 0.85, 0.95);
  };
  split(); hooks.push(split);
  ScrollTrigger.create({ trigger: '#invite', start: 'top top', end: 'bottom bottom', onUpdate: (s) => { prog = s.progress; paint(); } });
}

/* 3 · měděný kódový zámek */
function lock() {
  const svg = document.getElementById('lockSvg'), box = document.getElementById('lockBox'), hint = document.getElementById('lockHint');
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs, parent) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); parent && parent.appendChild(e); return e; };
  svg.innerHTML = `<defs><radialGradient id="cuRing" cx="35%" cy="30%" r="90%"><stop offset="0" stop-color="#ffd9c2"/><stop offset=".35" stop-color="#d99a78"/><stop offset=".7" stop-color="#9a5a3e"/><stop offset="1" stop-color="#5e3020"/></radialGradient></defs>`;
  const G = {
    hex: (s) => `M0,${-s} L${s * .866},${-s / 2} L${s * .866},${s / 2} L0,${s} L${-s * .866},${s / 2} L${-s * .866},${-s / 2}Z`,
    tri: (s) => `M0,${-s} L${s * .9},${s * .6} L${-s * .9},${s * .6}Z`,
    vtri: (s) => `M0,${s} L${s * .9},${-s * .6} L${-s * .9},${-s * .6}Z`,
    circ: (s) => `M${-s * .8},0 a${s * .8},${s * .8} 0 1,0 ${s * 1.6},0 a${s * .8},${s * .8} 0 1,0 ${-s * 1.6},0`,
    dia: (s) => `M0,${-s} L${s * .7},0 L0,${s} L${-s * .7},0Z`,
    cross: (s) => `M0,${-s} V${s} M${-s},0 H${s}`,
  };
  const keys = ['hex', 'tri', 'vtri', 'circ', 'dia', 'cross'];
  const rings = [{ r0: 50, r1: 86, s: 9 }, { r0: 90, r1: 122, s: 9 }, { r0: 126, r1: 154, s: 8 }];
  mk('path', { d: 'M0,-157 l-8,-12 h16z', class: 'notch' }, svg);
  const state = rings.map((R, k) => {
    const g = mk('g', { class: 'ring' }, svg);
    const inner = mk('g', {}, g);
    mk('path', { class: 'band', 'fill-rule': 'evenodd', d: `M0,${-R.r1}A${R.r1},${R.r1} 0 1,1 0,${R.r1}A${R.r1},${R.r1} 0 1,1 0,${-R.r1}Z M0,${-R.r0}A${R.r0},${R.r0} 0 1,0 0,${R.r0}A${R.r0},${R.r0} 0 1,0 0,${-R.r0}Z` }, inner);
    const order = [...keys].sort(() => Math.random() - 0.5);
    const hexIdx = order.indexOf('hex');
    const rm = (R.r0 + R.r1) / 2;
    order.forEach((key, i) => mk('path', { class: 'glyph', d: G[key](R.s), transform: `rotate(${i * 60}) translate(0,${-rm})` }, inner));
    for (let i = 0; i < 6; i++) mk('line', { x1: 0, y1: -R.r0, x2: 0, y2: -R.r1, stroke: 'rgba(60,28,15,.45)', 'stroke-width': 1, transform: `rotate(${i * 60 + 30})` }, inner);
    const off = (1 + ((k * 2 + Math.floor(Math.random() * 3)) % 5)) * 60;   // vždy mimo správnou polohu
    return { g, inner, rot: -hexIdx * 60 + off, hexIdx };
  });
  mk('circle', { r: 46, class: 'hub' }, svg);
  mk('path', { d: G.hex(22), fill: 'none', stroke: '#d08f6c', 'stroke-width': 1.5 }, svg);
  const apply = (s) => s.inner.setAttribute('transform', `rotate(${s.rot})`);
  const isOk = (s) => (((s.rot + s.hexIdx * 60) % 360) + 360) % 360 === 0;
  state.forEach(apply);
  const center = () => { const b = svg.getBoundingClientRect(); return { x: b.left + b.width / 2, y: b.top + b.height / 2 }; };
  const ang = (e) => { const c = center(); return Math.atan2(e.clientY - c.y, e.clientX - c.x) * 180 / Math.PI; };
  function snap(s, target) {
    const o = { r: s.rot };
    gsap.to(o, { r: target, duration: 0.45, ease: 'back.out(2)', onUpdate: () => { s.rot = o.r; apply(s); }, onComplete: () => { s.rot = Math.round(target); apply(s); check(); } });
  }
  function check() {
    state.forEach((s) => s.g.classList.toggle('ok', isOk(s)));
    if (!unlocked && state.every(isOk)) {
      unlocked = true; box.classList.add('open');
      hint.textContent = t('sec.done'); hint.style.color = 'var(--cu-hi)';
    }
  }
  state.forEach((s) => {
    let a0 = 0, r0 = 0, moved = 0, dragging = false;
    s.g.addEventListener('pointerdown', (e) => { if (unlocked) return; dragging = true; moved = 0; a0 = ang(e); r0 = s.rot; s.g.setPointerCapture(e.pointerId); gsap.killTweensOf(s); e.preventDefault(); });
    s.g.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      let d = ang(e) - a0; if (d > 180) d -= 360; if (d < -180) d += 360;
      moved = Math.max(moved, Math.abs(d)); s.rot = r0 + d; apply(s);
    });
    const end = () => {
      if (!dragging) return; dragging = false;
      snap(s, moved < 4 ? Math.round(r0 / 60) * 60 + 60 : Math.round(s.rot / 60) * 60);
    };
    s.g.addEventListener('pointerup', end); s.g.addEventListener('pointercancel', end);
  });
}

/* 4 · překlápěcí tabule */
function board() {
  const groups = { d: 3, h: 2, m: 2, s: 2 };
  const flaps = {};
  for (const u in groups) {
    const host = document.querySelector(`.grp[data-u="${u}"] .flaps`);
    flaps[u] = Array.from({ length: groups[u] }, () => {
      const f = document.createElement('div'); f.className = 'flap'; f.dataset.v = '0';
      f.innerHTML = '<div class="half top"><span>0</span></div><div class="half bot"><span>0</span></div><div class="half top ft"><span>0</span></div><div class="half bot fb"><span>0</span></div>';
      host.appendChild(f); return f;
    });
  }
  const setFlap = (f, v) => {
    if (f.dataset.v === v) return;
    const old = f.dataset.v; f.dataset.v = v;
    const [top, bot, ft, fb] = f.querySelectorAll('span');
    top.textContent = v; bot.textContent = old; ft.textContent = old; fb.textContent = v;
    f.classList.remove('go'); void f.offsetWidth; f.classList.add('go');
    clearTimeout(f._t); f._t = setTimeout(() => { bot.textContent = v; ft.textContent = v; f.classList.remove('go'); }, 600);
  };
  let started = false;
  const tick = () => {
    let d = Math.max(0, EVENT_START - Date.now()) / 1000;
    const D = Math.floor(d / 86400); d -= D * 86400;
    const H = Math.floor(d / 3600); d -= H * 3600;
    const M = Math.floor(d / 60), S = Math.floor(d - M * 60);
    const vals = { d: String(D).padStart(3, '0'), h: String(H).padStart(2, '0'), m: String(M).padStart(2, '0'), s: String(S).padStart(2, '0') };
    for (const u in vals) [...vals[u]].forEach((c, i) => setFlap(flaps[u][i], c));
  };
  ScrollTrigger.create({ trigger: '#count', start: 'top 75%', once: true, onEnter: () => {
    if (started) return; started = true;
    // úvodní roztočení tabule
    let n = 0; const spin = setInterval(() => {
      for (const u in flaps) flaps[u].forEach((f) => setFlap(f, String((+f.dataset.v + 3) % 10)));
      if (++n > 5) { clearInterval(spin); tick(); setInterval(tick, 1000); }
    }, 120);
  } });
}

/* 5 · program: plamen putuje po měděné kolejnici, hodiny se točí */
function program() {
  const track = document.getElementById('track'), rail = document.getElementById('rail');
  const path = document.getElementById('railPath'), lit = document.getElementById('railLit'), flame = document.getElementById('flame');
  const stops = [...document.querySelectorAll('.stop')];
  const ticks = document.querySelector('.clock .ticks');
  for (let i = 0; i < 12; i++) { const l = document.createElementNS('http://www.w3.org/2000/svg', 'line'); l.setAttribute('x1', 0); l.setAttribute('y1', -40); l.setAttribute('x2', 0); l.setAttribute('y2', i % 3 ? -37 : -33); l.setAttribute('transform', `rotate(${i * 30})`); ticks.appendChild(l); }
  const hh = document.querySelector('.hand-h'), mm = document.querySelector('.hand-m');
  stops.forEach((s) => s.querySelectorAll('.ico path, .ico circle').forEach((p) => { const L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L; p.style.transition = 'stroke-dashoffset 1.4s ease'; }));
  let xs = [], len = 0, y = 0;
  const mins = stops.map((s) => { const [h, m] = s.dataset.t.split(':').map(Number); return h * 60 + m; });
  function layout() {
    const W = track.scrollWidth;
    y = stops[0].offsetTop - 32;
    xs = stops.map((s) => s.offsetLeft + 40);
    rail.setAttribute('viewBox', `0 0 ${W} 60`); rail.style.width = W + 'px'; rail.style.height = '60px'; rail.style.top = '0px';
    const d = `M${xs[0]},${y} L${xs[xs.length - 1]},${y}`;
    path.setAttribute('d', d); lit.setAttribute('d', d);
    len = xs[xs.length - 1] - xs[0]; lit.style.strokeDasharray = len;
    flame.style.top = y + 'px';
  }
  layout();
  function update(p) {
    const fx = xs[0] + len * p;
    flame.style.left = fx + 'px';
    lit.style.strokeDashoffset = len * (1 - p);
    stops.forEach((s, i) => { const on = fx >= xs[i] - 2; if (on !== s.classList.contains('on')) { s.classList.toggle('on', on); s.querySelectorAll('.ico path, .ico circle').forEach((q) => { q.style.strokeDashoffset = on ? 0 : q.style.strokeDasharray; }); } });
    let k = 0; while (k < xs.length - 2 && fx > xs[k + 1]) k++;
    const f = clamp01((fx - xs[k]) / (xs[k + 1] - xs[k]));
    const tm = mins[k] + (mins[k + 1] - mins[k]) * f;
    mm.setAttribute('transform', `rotate(${(tm % 60) * 6})`);
    hh.setAttribute('transform', `rotate(${((tm / 60) % 12) * 30})`);
  }
  const st = gsap.to(track, {
    x: () => -(track.scrollWidth - innerWidth), ease: 'none',
    scrollTrigger: { trigger: '#program', start: 'top top', end: 'bottom bottom', scrub: 0.6, invalidateOnRefresh: true, onRefresh: layout, onUpdate: (s) => update(s.progress) },
  }).scrollTrigger;
  update(0);
  stops.forEach((s, i) => {
    const go = () => {
      const was = s.classList.contains('open');
      stops.forEach((o) => o.classList.remove('open'));
      if (!was) s.classList.add('open');
      const target = st.start + (i / (stops.length - 1)) * (st.end - st.start);
      window.scrollTo({ top: target, behavior: 'smooth' });
    };
    s.addEventListener('click', go);
    s.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
  });
}

/* 6 · místo: trasa se vykreslí ke dveřím */
const VENUE = { lat: 35.24540, lng: -80.80488, name: 'The Cipher Room, NoDa, Charlotte, NC' };
function venue() {
  document.getElementById('mapsLink').href = `https://www.google.com/maps/search/?api=1&query=${VENUE.lat},${VENUE.lng}`;
  if (!window.L) return;
  const route = [[35.24742, -80.80380], [35.24690, -80.80448], [35.24636, -80.80518], [35.24598, -80.80566], [35.24572, -80.80532], [35.24552, -80.80507], [35.24540, -80.80488]];
  const m = L.map('map', { zoomControl: false, dragging: false, scrollWheelZoom: false, doubleClickZoom: false, touchZoom: false, boxZoom: false, keyboard: false, tap: false, attributionControl: true });
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap contributors' }).addTo(m);
  const fit = () => {
    const mobile = innerWidth < 760, card = document.querySelector('.venue-card');
    m.invalidateSize();
    m.fitBounds(L.latLngBounds(route), mobile
      ? { paddingTopLeft: [30, 80], paddingBottomRight: [30, card.offsetHeight + 40], maxZoom: 18 }
      : { paddingTopLeft: [card.offsetWidth + card.offsetLeft + 60, 80], paddingBottomRight: [80, 80], maxZoom: 18 });
  };
  fit();
  const line = L.polyline(route, { className: 'route', interactive: false }).addTo(m);
  L.marker(route[0], { icon: L.divIcon({ className: '', html: '<div class="pin start"></div>', iconSize: [14, 14], iconAnchor: [7, 7] }), interactive: false }).addTo(m);
  const door = L.marker(route[route.length - 1], { icon: L.divIcon({ className: '', html: '<div class="pin door"><svg viewBox="-12 -12 24 24"><path d="M0,-10L8.7,-5L8.7,5L0,10L-8.7,5L-8.7,-5Z" fill="#16100d" stroke="#f2c6ab" stroke-width="2"/><circle r="2.5" fill="#f2c6ab"/></svg></div>', iconSize: [34, 34], iconAnchor: [17, 17] }), interactive: false }).addTo(m);
  let prog = 0;
  const steps = [...document.querySelectorAll('.steps li')];
  const draw = () => {
    const el = line.getElement(); if (!el) return;
    const L0 = el.getTotalLength(); el.style.strokeDasharray = L0;
    const p = seg(prog, 0.12, 0.8);
    el.style.strokeDashoffset = L0 * (1 - p);
    const de = door.getElement(); if (de) { de.style.opacity = seg(prog, 0.75, 0.85); }
    steps.forEach((s, i) => s.classList.toggle('on', prog > [0.08, 0.38, 0.62][i]));
  };
  m.on('zoomend moveend resize', draw);
  ScrollTrigger.create({ trigger: '#venue', start: 'top top', end: 'bottom bottom', onUpdate: (s) => { prog = s.progress; draw(); }, onRefresh: () => { fit(); draw(); } });
  draw();
}

/* 7 · dress code: mince se převrátí */
function coins() {
  gsap.fromTo('.coin', { rotateY: 180 }, { rotateY: 0, stagger: 0.25, ease: 'power2.inOut', scrollTrigger: { trigger: '.coins', start: 'top 85%', end: 'center 50%', scrub: 0.8 } });
}

/* nástupy textů */
function reveals() {
  gsap.utils.toArray('.rv').forEach((el) => gsap.to(el, { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } }));
}

/* RSVP -> vstupenka vyjede ze štěrbiny */
const EVENT_START = Date.UTC(2027, 9, 17, 0, 0); // 8:00 PM EDT
const EVENT_END = Date.UTC(2027, 9, 17, 6, 0);
const form = document.getElementById('rsvpForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const f = new FormData(form);
  const name = (f.get('name') || '').trim();
  document.getElementById('formErr').hidden = name.length > 1;
  if (name.length < 2) return;
  lastPass = { id: 'CR27-' + Math.random().toString(36).slice(2, 6).toUpperCase(), name, guests: f.get('guests'), menu: f.get('menu') };
  fillPass(lastPass);
  form.hidden = true;
  const pw = document.getElementById('passWrap'); pw.hidden = false;
  pw.scrollIntoView({ behavior: 'smooth', block: 'center' });
  setTimeout(() => pw.classList.add('out'), 500);
  window.ScrollTrigger && ScrollTrigger.refresh();
});
function fillPass(p) {
  document.getElementById('passId').textContent = p.id;
  document.getElementById('passName').textContent = p.name;
  document.getElementById('passAdmits').textContent = t(p.guests === '2' ? 'ps.p2' : 'ps.p1');
  const q = qrcode(0, 'M'); q.addData(`CIPHER27|${p.id}|${p.name}|${p.guests}|${p.menu}`); q.make();
  document.getElementById('qr').innerHTML = q.createSvgTag({ cellSize: 4, margin: 0, scalable: true });
  const title = 'The Cipher Room — Opening Night';
  const details = `Ticket ${p.id}. Dress code: Black & Copper. Bring the password.`;
  const fmt = (ms) => new Date(ms).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  document.getElementById('gcalBtn').href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${fmt(EVENT_START)}/${fmt(EVENT_END)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(VENUE.name)}`;
  document.getElementById('icsBtn').onclick = () => {
    const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//The Cipher Room//Opening Night//EN', 'BEGIN:VEVENT',
      `UID:${p.id}@cipher27`, `DTSTAMP:${fmt(Date.now())}`, `DTSTART:${fmt(EVENT_START)}`, `DTEND:${fmt(EVENT_END)}`,
      `SUMMARY:${title}`, `DESCRIPTION:${details}`, `LOCATION:${VENUE.name.replace(/,/g, '\\,')}`,
      'BEGIN:VALARM', 'TRIGGER:-P1D', 'ACTION:DISPLAY', 'DESCRIPTION:The Cipher Room tomorrow', 'END:VALARM',
      'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
    a.download = 'cipher-room-2027.ics'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  };
}
