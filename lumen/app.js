import { startIntro } from './intro.js';

/* ---------------- texty EN / CZ ---------------- */
const T = {
  en: {
    'intro.top': 'Private · 1 sealed invitation', 'intro.cta': 'Tap the seal to open', 'intro.skip': 'Skip intro', 'intro.t': 'A private invitation',
    'hero.kicker': 'You are invited to', 'hero.sub': 'An Evening of Light', 'hero.rsvp': 'RSVP',
    'meta.when': 'When', 'meta.where': 'Where', 'meta.date': 'Friday, May 14, 2027', 'meta.time': 'From 6:30 PM',
    'meta.dateShort': 'May 14, 2027 · 6:30 PM',
    'inv.kicker': 'I · The invitation', 'inv.title': 'One night. One room. Made of light.',
    'inv.body': 'On the evening of May 14 the Ivory Hall goes dark — and then, piece by piece, it begins to glow. A new light installation, unveiled for one night only, for a small circle of guests. We would be honoured if you were one of them.',
    'inv.sign': 'With warmest regards, your hosts',
    'sec.kicker': 'II · Guest of the evening', 'sec.title': 'Scratch the gold to reveal', 'sec.label': 'Special guest',
    'sec.role': 'Light artist · live performance at 9:00 PM', 'sec.hint': 'Scratch here',
    'cd.kicker': 'III · Countdown', 'cd.title': 'The lights go on in', 'cd.d': 'days', 'cd.h': 'hours', 'cd.m': 'minutes', 'cd.s': 'seconds',
    'pr.kicker': 'IV · The evening', 'pr.title': 'Program',
    'pr.1t': 'Welcome drinks', 'pr.1p': 'Champagne in the candlelit foyer.',
    'pr.2t': 'Unveiling of the installation', 'pr.2p': 'The hall goes dark. Then the first light.',
    'pr.3t': 'Light show', 'pr.3p': 'Light, sound and a live performance by our special guest.',
    'pr.4t': 'Afterparty', 'pr.4p': 'DJ set under the installation, until late.',
    've.kicker': 'V · The place', 've.body': 'A 1920s ballroom with ivory columns and a forty-foot ceiling, in the heart of Uptown Charlotte.',
    've.park': 'Arrival', 've.parkv': 'Valet parking at the main entrance', 've.door': 'Entry', 've.doorv': 'Please bring your digital ticket',
    've.open': 'Open in Maps',
    'dr.kicker': 'VI · Dress code', 'dr.body': 'Black tie, evening black — and a touch of gold. Let the room do the shining.',
    'dr.c1': 'Black', 'dr.c2': 'Gold', 'dr.c3': 'Rose copper',
    'rs.kicker': 'VII · RSVP', 'rs.title': 'Will you join us?', 'rs.by': 'Kindly reply by April 20, 2027.',
    'rs.name': 'Full name', 'rs.guests': 'Number of guests', 'rs.menu': 'Menu', 'rs.m1': 'Classic', 'rs.m2': 'Vegetarian', 'rs.m3': 'Vegan',
    'rs.note': 'A note for the hosts', 'rs.err': 'Please enter your name.', 'rs.send': 'Confirm attendance',
    'ps.kicker': 'See you in the light', 'ps.guest': 'Guest', 'ps.admits': 'Admits', 'ps.show': 'Show this ticket at the entrance.',
    'ps.ics': 'Add to calendar (.ics)', 'ps.gcal': 'Google Calendar', 'ps.p1': '1 guest', 'ps.p2': '2 guests',
    'ft.line': 'We’ll keep a light on for you.', 'ft.demo': 'Fictional event · design demo',
  },
  cs: {
    'intro.top': 'Soukromé · 1 zapečetěná pozvánka', 'intro.cta': 'Klepni na pečeť a otevři', 'intro.skip': 'Přeskočit intro', 'intro.t': 'Soukromá pozvánka',
    'hero.kicker': 'Jste zváni na', 'hero.sub': 'Večer světla', 'hero.rsvp': 'Potvrdit účast',
    'meta.when': 'Kdy', 'meta.where': 'Kde', 'meta.date': 'pátek 14. května 2027', 'meta.time': 'Od 18:30',
    'meta.dateShort': '14. 5. 2027 · 18:30',
    'inv.kicker': 'I · Pozvání', 'inv.title': 'Jedna noc. Jeden sál. Ze světla.',
    'inv.body': 'Večer 14. května se Ivory Hall ponoří do tmy — a pak se kousek po kousku rozzáří. Nová světelná instalace, odhalená jen na jednu noc a jen pro malý okruh hostů. Budeme poctěni, pokud mezi nimi budete i vy.',
    'inv.sign': 'Se srdečným pozdravem, vaši hostitelé',
    'sec.kicker': 'II · Host večera', 'sec.title': 'Setřete zlato a uvidíte', 'sec.label': 'Speciální host',
    'sec.role': 'Světelná umělkyně · živé vystoupení ve 21:00', 'sec.hint': 'Setřete zde',
    'cd.kicker': 'III · Odpočet', 'cd.title': 'Světla se rozsvítí za', 'cd.d': 'dní', 'cd.h': 'hodin', 'cd.m': 'minut', 'cd.s': 'sekund',
    'pr.kicker': 'IV · Večer', 'pr.title': 'Program',
    'pr.1t': 'Welcome drink', 'pr.1p': 'Šampaňské ve foyer při svíčkách.',
    'pr.2t': 'Odhalení instalace', 'pr.2p': 'Sál se ponoří do tmy. Pak přijde první světlo.',
    'pr.3t': 'Světelná show', 'pr.3p': 'Světlo, zvuk a živé vystoupení našeho speciálního hosta.',
    'pr.4t': 'Afterparty', 'pr.4p': 'DJ set pod instalací, dlouho do noci.',
    've.kicker': 'V · Místo', 've.body': 'Taneční sál z 20. let se slonovinovými sloupy a dvanáctimetrovým stropem v srdci Uptown Charlotte.',
    've.park': 'Příjezd', 've.parkv': 'Parkování s obsluhou u hlavního vchodu', 've.door': 'Vstup', 've.doorv': 'Vezměte si s sebou digitální vstupenku',
    've.open': 'Otevřít v mapách',
    'dr.kicker': 'VI · Dress code', 'dr.body': 'Black tie, večerní černá — a dotek zlata. Ať září sál.',
    'dr.c1': 'Černá', 'dr.c2': 'Zlatá', 'dr.c3': 'Růžová měď',
    'rs.kicker': 'VII · Účast', 'rs.title': 'Přijdete?', 'rs.by': 'Odpovězte prosím do 20. dubna 2027.',
    'rs.name': 'Jméno a příjmení', 'rs.guests': 'Počet hostů', 'rs.menu': 'Menu', 'rs.m1': 'Klasické', 'rs.m2': 'Vegetariánské', 'rs.m3': 'Veganské',
    'rs.note': 'Vzkaz pro hostitele', 'rs.err': 'Vyplňte prosím své jméno.', 'rs.send': 'Potvrdit účast',
    'ps.kicker': 'Uvidíme se ve světle', 'ps.guest': 'Host', 'ps.admits': 'Vstup pro', 'ps.show': 'Vstupenku ukažte u vchodu.',
    'ps.ics': 'Přidat do kalendáře (.ics)', 'ps.gcal': 'Google Kalendář', 'ps.p1': '1 osobu', 'ps.p2': '2 osoby',
    'ft.line': 'Necháme pro vás rozsvíceno.', 'ft.demo': 'Fiktivní akce · ukázka designu',
  },
};
let lang = 'en', lastPass = null;
try { const s = localStorage.getItem('lumen-lang'); if (s && T[s]) lang = s; } catch (e) {}
const t = (k) => T[lang][k] ?? T.en[k] ?? k;

function applyLang() {
  document.documentElement.lang = lang === 'cs' ? 'cs' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-lang]').forEach((b) => b.classList.toggle('on', b.dataset.lang === lang));
  document.querySelectorAll('time[data-t]').forEach((el) => {
    const [h, m] = el.dataset.t.split(':').map(Number);
    el.textContent = lang === 'cs' ? el.dataset.t : `${((h + 11) % 12) + 1}:${String(m).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
  });
  if (lastPass) fillPass(lastPass);
}
document.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => {
  lang = b.dataset.lang; try { localStorage.setItem('lumen-lang', lang); } catch (e) {}
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

/* ---------------- web ---------------- */
let siteReady = false;
function initSite() {
  if (siteReady) return; siteReady = true;
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = (el.closest('.hero') ? i * 0.14 : 0) + 's'; io.observe(el); });
  dust(); foil(); countdown(); map();
}

/* hero: zlatý prach a bokeh */
function dust() {
  const cv = document.getElementById('dust'), ctx = cv.getContext('2d');
  let w, h, dpr, px = 0, py = 0;
  const fit = () => { dpr = Math.min(devicePixelRatio || 1, 2); w = cv.clientWidth; h = cv.clientHeight; cv.width = w * dpr; cv.height = h * dpr; };
  fit(); addEventListener('resize', fit);
  addEventListener('pointermove', (e) => { px = e.clientX / innerWidth - 0.5; py = e.clientY / innerHeight - 0.5; });
  const P = Array.from({ length: 90 }, () => ({ x: Math.random(), y: Math.random(), z: 0.2 + Math.random() * 0.8, s: Math.random() * 6.28, r: Math.random() }));
  let run = true;
  new IntersectionObserver((es) => { run = es[0].isIntersecting; if (run) requestAnimationFrame(draw); }).observe(cv);
  function draw(ts) {
    if (!run) return;
    const tt = ts / 1000;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, w, h);
    const g = ctx.createRadialGradient(w / 2, h * 0.42, 0, w / 2, h * 0.42, Math.max(w, h) * 0.45);
    g.addColorStop(0, `rgba(243,213,140,${0.22 + 0.05 * Math.sin(tt * 0.8)})`); g.addColorStop(1, 'rgba(243,213,140,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';
    for (const p of P) {
      p.y -= 0.00012 * p.z * 16; if (p.y < -0.05) { p.y = 1.05; p.x = Math.random(); }
      const x = (p.x + Math.sin(tt * 0.3 + p.s) * 0.01 - px * 0.03 * p.z) * w;
      const y = (p.y - py * 0.03 * p.z) * h;
      const tw = 0.5 + 0.5 * Math.sin(tt * (1 + p.r * 2) + p.s);
      const big = p.r > 0.85, rad = big ? 6 + p.z * 14 : 0.8 + p.z * 2.2;
      const a = (big ? 0.10 : 0.55) * tw * p.z;
      const gr = ctx.createRadialGradient(x, y, 0, x, y, rad);
      gr.addColorStop(0, `rgba(222,178,96,${a})`); gr.addColorStop(1, 'rgba(222,178,96,0)');
      ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(x, y, rad, 0, 6.283); ctx.fill();
    }
    ctx.globalCompositeOperation = 'source-over';
    requestAnimationFrame(draw);
  }
}

/* stírací zlatá fólie */
function foil() {
  const box = document.getElementById('foil'), cv = document.getElementById('foilCv'), ctx = cv.getContext('2d');
  const hint = document.getElementById('foilHint');
  const mask = document.createElement('canvas'), mctx = mask.getContext('2d');
  const tex = document.createElement('canvas'), tctx = tex.getContext('2d');
  let w, h, dpr, done = false, drawing = false, last = null, strokes = 0;
  const sparks = [];
  function fit() {
    dpr = Math.min(devicePixelRatio || 1, 2); w = box.clientWidth; h = box.clientHeight;
    const old = mask.width ? mctx.getImageData(0, 0, mask.width, mask.height) : null;
    for (const c of [cv, mask, tex]) { c.width = w * dpr; c.height = h * dpr; }
    if (old) mctx.putImageData(old, 0, 0);
    buildTexture();
  }
  function buildTexture() {
    const W = tex.width, H = tex.height;
    const g = tctx.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, '#9a7432'); g.addColorStop(0.25, '#e6c477'); g.addColorStop(0.45, '#f8e3a6');
    g.addColorStop(0.6, '#c49a4e'); g.addColorStop(0.8, '#ecd08b'); g.addColorStop(1, '#a37b36');
    tctx.fillStyle = g; tctx.fillRect(0, 0, W, H);
    // jemné kartáčované linky + zrno
    tctx.globalAlpha = 0.09;
    for (let i = 0; i < 900; i++) {
      tctx.strokeStyle = Math.random() < 0.5 ? '#fff6d6' : '#6e4f1c';
      tctx.lineWidth = Math.random() * 1.2 * dpr;
      const y = Math.random() * H; tctx.beginPath(); tctx.moveTo(0, y); tctx.lineTo(W, y + (Math.random() - 0.5) * 30); tctx.stroke();
    }
    tctx.globalAlpha = 1;
    const img = tctx.getImageData(0, 0, W, H), d = img.data;
    for (let i = 0; i < d.length; i += 4) { const n = (Math.random() - 0.5) * 18; d[i] += n; d[i + 1] += n; d[i + 2] += n * 0.6; }
    tctx.putImageData(img, 0, 0);
    // ražené LUMEN
    tctx.font = `${Math.round(h * 0.2 * dpr)}px "Instrument Serif", Georgia, serif`;
    tctx.textAlign = 'center'; tctx.textBaseline = 'middle';
    const tx = W / 2, ty = H * 0.44, sp = (s) => s.split('').join(String.fromCharCode(8202));
    tctx.fillStyle = 'rgba(255,248,222,.55)'; tctx.fillText(sp('LUMEN'), tx - dpr, ty - dpr);
    tctx.fillStyle = 'rgba(92,64,20,.35)'; tctx.fillText(sp('LUMEN'), tx + dpr, ty + dpr);
  }
  fit(); addEventListener('resize', fit);
  const pos = (e) => { const r = cv.getBoundingClientRect(); return { x: (e.clientX - r.left) * dpr, y: (e.clientY - r.top) * dpr }; };
  function scratch(p) {
    mctx.lineCap = 'round'; mctx.lineJoin = 'round'; mctx.lineWidth = Math.max(38, w * 0.09) * dpr; mctx.strokeStyle = '#000';
    mctx.beginPath(); mctx.moveTo((last || p).x, (last || p).y); mctx.lineTo(p.x, p.y); mctx.stroke();
    last = p;
    for (let i = 0; i < 3; i++) sparks.push({ x: p.x, y: p.y, vx: (Math.random() - 0.5) * 6 * dpr, vy: (Math.random() - 0.8) * 6 * dpr, life: 1 });
    if (++strokes % 8 === 0) check();
    hint.style.opacity = 0;
  }
  function check() {
    const s = 24, small = document.createElement('canvas'); small.width = s; small.height = Math.round(s * h / w);
    const sc = small.getContext('2d'); sc.drawImage(mask, 0, 0, small.width, small.height);
    const d = sc.getImageData(0, 0, small.width, small.height).data;
    let c = 0; for (let i = 3; i < d.length; i += 4) if (d[i] > 128) c++;
    if (c / (d.length / 4) > 0.5) { done = true; cv.classList.add('gone'); hint.hidden = true; }
  }
  cv.addEventListener('pointerdown', (e) => { if (done) return; drawing = true; last = null; cv.setPointerCapture(e.pointerId); scratch(pos(e)); });
  cv.addEventListener('pointermove', (e) => { if (drawing && !done) scratch(pos(e)); });
  const stop = () => { drawing = false; last = null; };
  cv.addEventListener('pointerup', stop); cv.addEventListener('pointercancel', stop);
  let run = false;
  new IntersectionObserver((es) => { run = es[0].isIntersecting; if (run) requestAnimationFrame(draw); }).observe(box);
  function draw(ts) {
    if (!run) return;
    const W = cv.width, H = cv.height;
    ctx.globalCompositeOperation = 'source-over'; ctx.clearRect(0, 0, W, H);
    ctx.drawImage(tex, 0, 0);
    // pohyblivý lesk
    const x = ((ts / 2600) % 1.6 - 0.3) * W;
    const g = ctx.createLinearGradient(x - W * 0.2, 0, x + W * 0.2, H * 0.4);
    g.addColorStop(0, 'rgba(255,250,230,0)'); g.addColorStop(0.5, 'rgba(255,250,230,.45)'); g.addColorStop(1, 'rgba(255,250,230,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'destination-out'; ctx.drawImage(mask, 0, 0);
    ctx.globalCompositeOperation = 'lighter';
    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i]; s.x += s.vx; s.y += s.vy; s.vy += 0.35 * dpr; s.life -= 0.035;
      if (s.life <= 0) { sparks.splice(i, 1); continue; }
      ctx.fillStyle = `rgba(255,214,130,${s.life})`; ctx.beginPath(); ctx.arc(s.x, s.y, 2.2 * dpr * s.life, 0, 6.283); ctx.fill();
    }
    ctx.globalCompositeOperation = 'source-over';
    if (!done || sparks.length) requestAnimationFrame(draw);
  }
}

/* odpočet */
const EVENT_START = Date.UTC(2027, 4, 14, 22, 30); // 6:30 PM EDT
const EVENT_END = Date.UTC(2027, 4, 15, 6, 0);
function countdown() {
  const el = (u) => document.querySelector(`#countdown [data-u="${u}"]`);
  const tick = () => {
    let d = Math.max(0, EVENT_START - Date.now()) / 1000;
    const D = Math.floor(d / 86400); d -= D * 86400;
    const H = Math.floor(d / 3600); d -= H * 3600;
    const M = Math.floor(d / 60), S = Math.floor(d - M * 60);
    el('d').textContent = String(D).padStart(3, '0'); el('h').textContent = String(H).padStart(2, '0');
    el('m').textContent = String(M).padStart(2, '0'); el('s').textContent = String(S).padStart(2, '0');
  };
  tick(); setInterval(tick, 1000);
}

/* mapa */
const VENUE = { lat: 35.2269, lng: -80.8433, name: 'The Ivory Hall, Uptown, Charlotte, NC' };
function map() {
  document.getElementById('mapsLink').href = `https://www.google.com/maps/search/?api=1&query=${VENUE.lat},${VENUE.lng}`;
  if (!window.L) return;
  const m = L.map('map', { zoomControl: false, scrollWheelZoom: false }).setView([VENUE.lat, VENUE.lng], 15);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap contributors' }).addTo(m);
  L.control.zoom({ position: 'bottomright' }).addTo(m);
  L.marker([VENUE.lat, VENUE.lng], { icon: L.divIcon({ className: '', html: '<div class="pin"></div>', iconSize: [22, 22], iconAnchor: [11, 11] }) }).addTo(m);
}

/* RSVP -> vstupenka s QR */
const form = document.getElementById('rsvpForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const f = new FormData(form);
  const name = (f.get('name') || '').trim();
  document.getElementById('formErr').hidden = name.length > 1;
  if (name.length < 2) return;
  lastPass = { id: 'LM27-' + Math.random().toString(36).slice(2, 6).toUpperCase(), name, guests: f.get('guests'), menu: f.get('menu'), note: (f.get('note') || '').trim() };
  fillPass(lastPass);
  form.hidden = true;
  const pw = document.getElementById('passWrap'); pw.hidden = false;
  pw.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
function fillPass(p) {
  document.getElementById('passId').textContent = p.id;
  document.getElementById('passName').textContent = p.name;
  document.getElementById('passAdmits').textContent = t(p.guests === '2' ? 'ps.p2' : 'ps.p1');
  const q = qrcode(0, 'M'); q.addData(`LUMEN27|${p.id}|${p.name}|${p.guests}|${p.menu}`); q.make();
  document.getElementById('qr').innerHTML = q.createSvgTag({ cellSize: 4, margin: 0, scalable: true });
  const title = 'LUMEN — An Evening of Light';
  const details = `Ticket ${p.id}. Dress code: Black & Gold.`;
  const fmt = (ms) => new Date(ms).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  document.getElementById('gcalBtn').href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${fmt(EVENT_START)}/${fmt(EVENT_END)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(VENUE.name)}`;
  document.getElementById('icsBtn').onclick = () => {
    const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//LUMEN//Evening of Light//EN', 'BEGIN:VEVENT',
      `UID:${p.id}@lumen27`, `DTSTAMP:${fmt(Date.now())}`, `DTSTART:${fmt(EVENT_START)}`, `DTEND:${fmt(EVENT_END)}`,
      `SUMMARY:${title}`, `DESCRIPTION:${details}`, `LOCATION:${VENUE.name.replace(/,/g, '\\,')}`,
      'BEGIN:VALARM', 'TRIGGER:-P1D', 'ACTION:DISPLAY', 'DESCRIPTION:LUMEN tomorrow', 'END:VALARM',
      'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
    a.download = 'lumen-2027.ics'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  };
}
