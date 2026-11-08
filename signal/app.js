import { startIntro } from './intro.js';

/* ---------------- texty EN / CZ ---------------- */
const T = {
  en: {
    'intro.top': 'Incoming transmission · 1 sealed invitation',
    'intro.cta': 'Tap the seal to open', 'intro.skip': 'Skip intro', 'intro.t': 'You’ve got a signal.',
    'hero.kicker': 'Veyra Labs presents', 'hero.sub': 'A private launch night', 'hero.rsvp': 'RSVP',
    'meta.when': 'When', 'meta.where': 'Where', 'meta.date': 'Thursday, September 16, 2027', 'meta.time': 'Doors at 6:30 PM',
    'meta.dateShort': 'Sep 16, 2027 · 6:30 PM',
    'inv.kicker': '01 · The invitation', 'inv.title': 'You’re on the list.',
    'inv.body': 'For three years we’ve been building something quietly. On September 16 we switch it on — for the first time, in one room, for two hundred people. No livestream. No press. Just the signal, and you.',
    'inv.sign': '— The Veyra Labs team',
    'sec.kicker': '02 · Classified', 'sec.title': 'Tonight’s keynote', 'sec.hold': 'Hold to decrypt',
    'sec.role': 'Chief Scientist at Veyra Labs — the engineer who taught machines to listen.',
    'cd.kicker': '03 · Countdown', 'cd.title': 'The signal goes live in', 'cd.d': 'days', 'cd.h': 'hours', 'cd.m': 'minutes', 'cd.s': 'seconds', 'cd.live': 'The signal is live.',
    'pr.kicker': '04 · The evening', 'pr.title': 'Program',
    'pr.1t': 'Doors & welcome drinks', 'pr.1p': 'Chrome bar opens, ambient set in the hangar.',
    'pr.2t': 'Opening keynote', 'pr.2p': 'Our classified guest on why machines should listen first.',
    'pr.3t': 'The first public signal', 'pr.3p': 'The live demo. Phones down, eyes up.',
    'pr.4t': 'Dinner & conversations', 'pr.4p': 'Seasonal tasting menu. Meet the people who built it.',
    'pr.5t': 'Afterparty', 'pr.5p': 'Live set by the Frequency Collective, till late.',
    've.kicker': '05 · The place', 've.body': 'A restored 1940s aircraft hangar in South End, Charlotte.',
    've.park': 'Parking', 've.parkv': 'Valet at the north gate', 've.transit': 'Transit', 've.transitv': 'LYNX Blue Line · East/West Blvd, 6 min walk',
    've.open': 'Open in Maps',
    'dr.kicker': '06 · Dress code', 'dr.title': 'White & Chrome',
    'dr.body': 'Wear white, silver or grey — and one touch of electric blue. We’ll take care of the light.',
    'dr.c1': 'White', 'dr.c2': 'Chrome', 'dr.c3': 'Graphite', 'dr.c4': 'One blue accent',
    'rs.kicker': '07 · RSVP', 'rs.title': 'Confirm your frequency', 'rs.by': 'Kindly reply by August 20, 2027.',
    'rs.name': 'Full name', 'rs.company': 'Company', 'rs.email': 'Email', 'rs.guests': 'Guests', 'rs.g1': 'Just me', 'rs.g2': 'Me + 1',
    'rs.menu': 'Menu', 'rs.m1': 'Tasting', 'rs.m2': 'Vegetarian', 'rs.m3': 'Vegan', 'rs.note': 'Anything we should know?',
    'rs.err': 'Please fill in your name and a valid email.', 'rs.send': 'Send signal',
    'ps.kicker': 'Access granted', 'ps.guest': 'Guest', 'ps.admits': 'Admits', 'ps.show': 'Show this QR code at the door.',
    'ps.ics': 'Add to calendar (.ics)', 'ps.gcal': 'Google Calendar', 'ps.p1': '1 person', 'ps.p2': '2 people',
    'ft.line': 'Signal received. See you on the frequency.', 'ft.demo': 'Fictional event · design demo',
  },
  cs: {
    'intro.top': 'Příchozí přenos · 1 zapečetěná pozvánka',
    'intro.cta': 'Klepni na pečeť a otevři', 'intro.skip': 'Přeskočit intro', 'intro.t': 'Máte signál.',
    'hero.kicker': 'Veyra Labs uvádí', 'hero.sub': 'Soukromý večer uvedení', 'hero.rsvp': 'Potvrdit účast',
    'meta.when': 'Kdy', 'meta.where': 'Kde', 'meta.date': 'čtvrtek 16. září 2027', 'meta.time': 'Vstup od 18:30',
    'meta.dateShort': '16. 9. 2027 · 18:30',
    'inv.kicker': '01 · Pozvání', 'inv.title': 'Jste na seznamu.',
    'inv.body': 'Tři roky jsme v tichosti stavěli něco nového. 16. září to poprvé zapneme — v jedné místnosti, pro dvě stě lidí. Žádný přenos. Žádní novináři. Jen signál a vy.',
    'inv.sign': '— Tým Veyra Labs',
    'sec.kicker': '02 · Přísně tajné', 'sec.title': 'Hlavní host večera', 'sec.hold': 'Podrž a dešifruj',
    'sec.role': 'Hlavní vědkyně Veyra Labs — inženýrka, která naučila stroje naslouchat.',
    'cd.kicker': '03 · Odpočet', 'cd.title': 'Signál se spustí za', 'cd.d': 'dní', 'cd.h': 'hodin', 'cd.m': 'minut', 'cd.s': 'sekund', 'cd.live': 'Signál je živě.',
    'pr.kicker': '04 · Večer', 'pr.title': 'Program',
    'pr.1t': 'Příchod a welcome drink', 'pr.1p': 'Otevírá chromový bar, v hangáru hraje ambientní set.',
    'pr.2t': 'Úvodní keynote', 'pr.2p': 'Náš tajný host o tom, proč by stroje měly nejdřív naslouchat.',
    'pr.3t': 'První veřejný signál', 'pr.3p': 'Živé demo. Telefony dolů, oči nahoru.',
    'pr.4t': 'Večeře a rozhovory', 'pr.4p': 'Sezónní degustační menu. Seznamte se s lidmi, kteří to postavili.',
    'pr.5t': 'Afterparty', 'pr.5p': 'Živý set Frequency Collective, dlouho do noci.',
    've.kicker': '05 · Místo', 've.body': 'Zrekonstruovaný letecký hangár ze 40. let v South Endu v Charlotte.',
    've.park': 'Parkování', 've.parkv': 'Parkování s obsluhou u severní brány', 've.transit': 'MHD', 've.transitv': 'LYNX Blue Line · East/West Blvd, 6 minut pěšky',
    've.open': 'Otevřít v mapách',
    'dr.kicker': '06 · Dress code', 'dr.title': 'Bílá a chrom',
    'dr.body': 'Oblečte se do bílé, stříbrné nebo šedé — a přidejte jeden detail elektricky modré. O světlo se postaráme my.',
    'dr.c1': 'Bílá', 'dr.c2': 'Chrom', 'dr.c3': 'Grafit', 'dr.c4': 'Jeden modrý detail',
    'rs.kicker': '07 · Účast', 'rs.title': 'Potvrďte účast', 'rs.by': 'Odpovězte prosím do 20. srpna 2027.',
    'rs.name': 'Jméno a příjmení', 'rs.company': 'Firma', 'rs.email': 'E-mail', 'rs.guests': 'Počet hostů', 'rs.g1': 'Jen já', 'rs.g2': 'Já + 1',
    'rs.menu': 'Menu', 'rs.m1': 'Degustační', 'rs.m2': 'Vegetariánské', 'rs.m3': 'Veganské', 'rs.note': 'Něco, co bychom měli vědět?',
    'rs.err': 'Vyplňte prosím jméno a platný e-mail.', 'rs.send': 'Odeslat signál',
    'ps.kicker': 'Přístup povolen', 'ps.guest': 'Host', 'ps.admits': 'Vstup pro', 'ps.show': 'Tento QR kód ukažte u vstupu.',
    'ps.ics': 'Přidat do kalendáře (.ics)', 'ps.gcal': 'Google Kalendář', 'ps.p1': '1 osobu', 'ps.p2': '2 osoby',
    'ft.line': 'Signál přijat. Uvidíme se na stejné frekvenci.', 'ft.demo': 'Fiktivní akce · ukázka designu',
  },
};
let lang = 'en', decrypted = false, holdP = 0, lastPass = null;
try { const s = localStorage.getItem('signal-lang'); if (s && T[s]) lang = s; } catch (e) {}
const t = (k) => T[lang][k] ?? T.en[k] ?? k;

function applyLang() {
  document.documentElement.lang = lang === 'cs' ? 'cs' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-lang]').forEach((b) => b.classList.toggle('on', b.dataset.lang === lang));
  document.querySelectorAll('time[data-t]').forEach((el) => {
    const [h, m] = el.dataset.t.split(':').map(Number);
    el.textContent = lang === 'cs' ? el.dataset.t : `${((h + 11) % 12) + 1}:${String(m).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
  });
  if (decrypted) document.getElementById('cipherRole').textContent = t('sec.role');
  if (lastPass) fillPass(lastPass);
}
document.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => {
  lang = b.dataset.lang; try { localStorage.setItem('signal-lang', lang); } catch (e) {}
  applyLang();
}));

/* ---------------- intro ---------------- */
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
if (!introApi) {
  const fb = document.getElementById('fallback'); fb.hidden = false;
  fb.addEventListener('click', () => enterSite(false));
}
const openIntro = () => { intro.classList.add('leaving'); introApi ? introApi.open() : enterSite(false); };
document.getElementById('openBtn').addEventListener('click', openIntro);
document.getElementById('gl').addEventListener('click', () => intro.classList.add('leaving'));
document.getElementById('skipBtn').addEventListener('click', () => enterSite(false));
window.addEventListener('keydown', (e) => { if (!entered && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openIntro(); } });
applyLang();

/* ---------------- web pozvánky ---------------- */
let siteReady = false;
function initSite() {
  if (siteReady) return; siteReady = true;
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = (el.closest('.hero') ? i * 0.12 : 0) + 's'; io.observe(el); });
  heroWave(); lensHud(); countdown(); map(); decrypt();
}

/* hero: živá vlna signálu */
function heroWave() {
  const cv = document.getElementById('wave'), ctx = cv.getContext('2d');
  let w, h, dpr, mx = 0.5, amp = 0;
  const fit = () => { dpr = Math.min(devicePixelRatio || 1, 2); w = cv.clientWidth; h = cv.clientHeight; cv.width = w * dpr; cv.height = h * dpr; };
  fit(); addEventListener('resize', fit);
  addEventListener('pointermove', (e) => { mx = e.clientX / innerWidth; amp = 1; });
  const lines = 7;
  (function draw(ts) {
    const tt = ts / 1000; amp *= 0.985;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, w, h);
    const cy = h * 0.5;
    for (let l = 0; l < lines; l++) {
      const k = l / (lines - 1), off = (k - 0.5) * h * 0.12;
      ctx.beginPath();
      for (let x = 0; x <= w; x += 4) {
        const u = x / w, env = Math.exp(-Math.pow((u - 0.5) * 2.2, 2));
        const near = Math.exp(-Math.pow((u - mx) * 6, 2)) * amp;
        const beat = Math.pow(0.5 + 0.5 * Math.sin(tt * 2.1), 4);
        let y = Math.sin(u * 18 + tt * (1.2 + k) + l) * 10 * env + Math.sin(u * 41 - tt * 2.3) * 4 * env;
        y += (Math.exp(-Math.pow((u - 0.5) * 30, 2)) - 0.7 * Math.exp(-Math.pow((u - 0.47) * 34, 2))) * 90 * beat * (1 - k * 0.6);
        y += Math.sin(u * 60 + tt * 6) * 14 * near;
        x ? ctx.lineTo(x, cy + off + y) : ctx.moveTo(x, cy + off + y);
      }
      const g = ctx.createLinearGradient(0, 0, w, 0);
      g.addColorStop(0, 'rgba(26,163,255,0)'); g.addColorStop(0.5, `rgba(26,163,255,${0.55 - k * 0.35})`); g.addColorStop(1, 'rgba(26,163,255,0)');
      ctx.strokeStyle = g; ctx.lineWidth = l === 0 ? 1.6 : 1; ctx.stroke();
    }
    requestAnimationFrame(draw);
  })(0);
}

/* malá čočka u tajného hosta */
function lensHud() {
  const cv = document.getElementById('lensCv'), ctx = cv.getContext('2d');
  let s = 0, run = false;
  const fit = () => { const dpr = Math.min(devicePixelRatio || 1, 2); s = cv.clientWidth; cv.width = cv.height = s * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
  fit(); addEventListener('resize', fit);
  new IntersectionObserver((es) => { run = es[0].isIntersecting; if (run) requestAnimationFrame(draw); }).observe(cv);
  function draw(ts) {
    if (!run) return;
    const tt = ts / 1000, c = s / 2, R = s / 2;
    ctx.clearRect(0, 0, s, s);
    const bg = ctx.createRadialGradient(c, c, 0, c, c, R); bg.addColorStop(0, '#0b2a44'); bg.addColorStop(1, '#030a12');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, s, s);
    ctx.lineCap = 'round';
    for (let i = 0; i < 6; i++) {
      const r = R * (0.22 + i * 0.13), n = 8 + i * 5, dir = i % 2 ? -1 : 1;
      ctx.strokeStyle = `rgba(95,216,255,${0.35 + (i % 3) * 0.15})`; ctx.lineWidth = 1.2 + (i % 2);
      for (let j = 0; j < n; j++) {
        const a = (j / n) * Math.PI * 2 + tt * 0.25 * dir * (1 + i * 0.2) + (decrypted ? 0 : holdP * 6);
        ctx.beginPath(); ctx.arc(c, c, r, a, a + (Math.PI * 2 / n) * 0.55); ctx.stroke();
      }
    }
    const sw = (tt * 0.9) % (Math.PI * 2);
    const g = ctx.createConicGradient ? ctx.createConicGradient(sw, c, c) : null;
    if (g) { g.addColorStop(0, 'rgba(95,216,255,.35)'); g.addColorStop(0.12, 'rgba(95,216,255,0)'); g.addColorStop(1, 'rgba(95,216,255,0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(c, c, R * 0.95, 0, Math.PI * 2); ctx.fill(); }
    ctx.beginPath();
    const beat = Math.pow(0.5 + 0.5 * Math.sin(tt * 2.1), 4) * (1 + holdP * 2);
    for (let x = -R; x <= R; x += 2) {
      const u = x / R, env = Math.exp(-u * u * 2.6);
      const y = (Math.sin(u * 13 + tt * 3) * 0.07 * env + (Math.exp(-Math.pow((u - 0.02) * 9, 2)) - 0.75 * Math.exp(-Math.pow((u + 0.09) * 10, 2))) * 0.3 * beat) * R;
      x === -R ? ctx.moveTo(c + x, c - y) : ctx.lineTo(c + x, c - y);
    }
    ctx.shadowColor = '#5fd8ff'; ctx.shadowBlur = 14; ctx.strokeStyle = '#bff0ff'; ctx.lineWidth = 2; ctx.stroke(); ctx.shadowBlur = 0;
    const hl = ctx.createRadialGradient(c * 0.6, c * 0.55, 0, c * 0.6, c * 0.55, R * 0.5);
    hl.addColorStop(0, 'rgba(255,255,255,.22)'); hl.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = hl; ctx.fillRect(0, 0, s, s);
    requestAnimationFrame(draw);
  }
}

/* odšifrování tajného hosta */
function decrypt() {
  const btn = document.getElementById('holdBtn'), prog = btn.querySelector('.prog');
  const nameEl = document.getElementById('cipherName'), roleEl = document.getElementById('cipherRole');
  const NAME = 'Dr. Imogen Hale', G = '▒░▓█<>/\\#*+=01';
  const C = 119.4; let holding = false, last = 0;
  const rnd = (n) => Array.from({ length: n }, (_, i) => NAME[i] === ' ' ? ' ' : G[(Math.random() * G.length) | 0]).join('');
  const idle = setInterval(() => { if (!decrypted) nameEl.textContent = rnd(NAME.length); }, 140);
  const down = (e) => { e.preventDefault(); holding = true; };
  const up = () => { holding = false; };
  btn.addEventListener('pointerdown', down); addEventListener('pointerup', up); btn.addEventListener('pointerleave', up);
  btn.addEventListener('keydown', (e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); holding = true; } });
  btn.addEventListener('keyup', up);
  btn.addEventListener('contextmenu', (e) => e.preventDefault());
  (function loop(ts) {
    const dt = Math.min((ts - last) / 1000, 0.05) || 0; last = ts;
    if (decrypted) return;
    holdP = Math.max(0, Math.min(1, holdP + (holding ? dt / 1.3 : -dt / 0.6)));
    prog.style.strokeDashoffset = C * (1 - holdP);
    if (holdP >= 1) { decrypted = true; clearInterval(idle); btn.classList.add('done'); reveal(); return; }
    requestAnimationFrame(loop);
  })(0);
  function reveal() {
    const start = performance.now(), dur = 1300;
    (function step(now) {
      const k = Math.min(1, (now - start) / dur), n = Math.floor(k * NAME.length);
      nameEl.textContent = NAME.slice(0, n) + rnd(NAME.length).slice(n);
      if (k < 1) requestAnimationFrame(step); else { nameEl.textContent = NAME; roleEl.textContent = t('sec.role'); }
    })(start);
  }
}

/* odpočet */
const EVENT_START = Date.UTC(2027, 8, 16, 22, 30); // 6:30 PM EDT
const EVENT_END = Date.UTC(2027, 8, 17, 4, 0);
function countdown() {
  const el = (u) => document.querySelector(`#countdown [data-u="${u}"]`);
  const tick = () => {
    let d = Math.max(0, EVENT_START - Date.now()) / 1000;
    const D = Math.floor(d / 86400); d -= D * 86400;
    const H = Math.floor(d / 3600); d -= H * 3600;
    const M = Math.floor(d / 60), Sx = Math.floor(d - M * 60);
    el('d').textContent = String(D).padStart(3, '0'); el('h').textContent = String(H).padStart(2, '0');
    el('m').textContent = String(M).padStart(2, '0'); el('s').textContent = String(Sx).padStart(2, '0');
  };
  tick(); setInterval(tick, 1000);
}

/* mapa */
const VENUE = { lat: 35.2107, lng: -80.8607, name: 'Hangar 9, South End, Charlotte, NC' };
function map() {
  document.getElementById('mapsLink').href = `https://www.google.com/maps/search/?api=1&query=${VENUE.lat},${VENUE.lng}`;
  if (!window.L) return;
  const m = L.map('map', { zoomControl: false, scrollWheelZoom: false, attributionControl: true }).setView([VENUE.lat, VENUE.lng], 15);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19, attribution: '&copy; OpenStreetMap contributors',
  }).addTo(m);
  L.control.zoom({ position: 'bottomright' }).addTo(m);
  L.marker([VENUE.lat, VENUE.lng], { icon: L.divIcon({ className: '', html: '<div class="pin"></div>', iconSize: [22, 22], iconAnchor: [11, 11] }) }).addTo(m);
}

/* RSVP -> vstupenka s QR */
const form = document.getElementById('rsvpForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const f = new FormData(form);
  const name = (f.get('name') || '').trim(), email = (f.get('email') || '').trim();
  const ok = name.length > 1 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  document.getElementById('formErr').hidden = ok;
  if (!ok) return;
  const id = 'SG27-' + Math.random().toString(36).slice(2, 6).toUpperCase();
  lastPass = { id, name, company: (f.get('company') || '').trim(), guests: f.get('guests'), menu: f.get('menu') };
  fillPass(lastPass);
  form.hidden = true;
  const pw = document.getElementById('passWrap'); pw.hidden = false;
  pw.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
function fillPass(p) {
  document.getElementById('passId').textContent = p.id;
  document.getElementById('passName').textContent = p.name;
  document.getElementById('passCo').textContent = p.company;
  document.getElementById('passAdmits').textContent = t(p.guests === '2' ? 'ps.p2' : 'ps.p1');
  const q = qrcode(0, 'M');
  q.addData(`SIGNAL27|${p.id}|${p.name}|${p.guests}|${p.menu}`); q.make();
  document.getElementById('qr').innerHTML = q.createSvgTag({ cellSize: 4, margin: 0, scalable: true });
  const title = "SIGNAL '27 — Veyra Labs";
  const details = `Private launch night. Pass ${p.id}. Dress code: White & Chrome.`;
  const fmt = (ms) => new Date(ms).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  document.getElementById('gcalBtn').href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${fmt(EVENT_START)}/${fmt(EVENT_END)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(VENUE.name)}`;
  document.getElementById('icsBtn').onclick = () => {
    const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Veyra Labs//SIGNAL 27//EN', 'BEGIN:VEVENT',
      `UID:${p.id}@signal27`, `DTSTAMP:${fmt(Date.now())}`, `DTSTART:${fmt(EVENT_START)}`, `DTEND:${fmt(EVENT_END)}`,
      `SUMMARY:${title}`, `DESCRIPTION:${details}`, `LOCATION:${VENUE.name.replace(/,/g, '\\,')}`,
      'BEGIN:VALARM', 'TRIGGER:-P1D', 'ACTION:DISPLAY', 'DESCRIPTION:SIGNAL tomorrow', 'END:VALARM',
      'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
    a.download = 'signal-27.ics'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  };
}
