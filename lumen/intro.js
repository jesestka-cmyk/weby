// SIGNAL '27 — živá pečeť a otevření obálky (Three.js, vše v kódu)
import * as THREE from './vendor/three.module.min.js';

const IMG_W = 2576, IMG_H = 1438;              // rozměr podkladu
const S = 1 / 1000;                              // px -> world
const CX = 1288, CY = 719;                       // střed obrázku
const HINGE_Y = 128;                             // horní hrana obálky (pant klopy)
const L_A = 0.51933, L_B = 159.39;               // levá hrana klopy  y = a x + b
const R_A = -0.52170, R_B = 1499.47;             // pravá hrana klopy
const TIP = { x: (R_B - L_B) / (L_A - R_A), y: 0 }; TIP.y = L_A * TIP.x + L_B;
const SEAL = { x: 1290, y: 725 };

const toW = (px, py) => new THREE.Vector3((px - CX) * S, (CY - py) * S, 0);

export function startIntro({ canvas, onDone, onReady, cfg = {} }) {
  const C = Object.assign({
    img: 'assets/envelope.jpg', traces: 'assets/traces.png', video: null, wax: false,
    seal: { x: 1298, y: 736, r: 184 }, light: { x: 1288, y: 360 }, bg: 0x1d2026, env: { w: 2.086, h: 1.176 },
  }, cfg);
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  } catch (e) { return null; }
  renderer.setClearColor(C.bg, 1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.01, 50);
  const group = new THREE.Group(); scene.add(group);

  const loader = new THREE.TextureLoader();
  const imgTex = loader.load(C.img, () => { loaded++; check(); });
  imgTex.colorSpace = THREE.NoColorSpace;
  imgTex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const trTex = loader.load(C.traces || C.img, () => { loaded++; check(); });
  trTex.generateMipmaps = true; trTex.minFilter = THREE.LinearMipmapLinearFilter;
  let loaded = 0;
  function check() { if (loaded === 2 && onReady) onReady(); }

  const U = {
    uImg: { value: imgTex }, uTr: { value: trTex },
    uTime: { value: 0 }, uCharge: { value: 0 }, uShock: { value: 0 }, uGone: { value: 0 },
    uBg: { value: new THREE.Color(C.bg) }, uVidTex: { value: null }, uVid: { value: 0 }, uWax: { value: C.wax ? 1 : 0 }, uCodeFlap: { value: C.video ? 0 : 1 },
    uSealR: { value: C.seal.r }, uSealC: { value: new THREE.Vector2(C.seal.x, C.seal.y) },
    uOpen: { value: 0 }, uScar: { value: 1 }, uFlap: { value: 0 }, uHover: { value: 0 }, uTilt: { value: new THREE.Vector2() },
  };

  // video otevření (jeden souvislý záběr z Higgsfieldu)
  let video = null, vidReady = false;
  if (C.video) {
    video = document.createElement('video');
    Object.assign(video, { src: C.video, muted: true, playsInline: true, preload: 'auto', loop: false });
    video.setAttribute('playsinline', ''); video.setAttribute('muted', '');
    video.addEventListener('canplaythrough', () => { vidReady = true; }, { once: true });
    video.load();
    const vt = new THREE.VideoTexture(video);
    vt.colorSpace = THREE.NoColorSpace; vt.minFilter = THREE.LinearFilter; vt.generateMipmaps = false;
    U.uVidTex.value = vt;
  } else {
    U.uVidTex.value = imgTex;
  }

  const vert = /* glsl */`
    varying vec2 vUv;
    void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`;

  const frag = /* glsl */`
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D uImg, uTr, uVidTex;
    uniform float uVid, uWax, uCodeFlap, uSealR;
    uniform vec2 uSealC;
    uniform float uTime, uCharge, uShock, uGone, uOpen, uScar, uFlap, uHover;
    uniform vec2 uTilt;
    const vec2 RES = vec2(${IMG_W}.0, ${IMG_H}.0);
    const vec2 SC = vec2(1290.0, 725.0);
    const vec2 LC = vec2(1298.0, 736.0);
    const float LR = 182.0;
    const float RR = 247.0;
    const vec3 CY = vec3(0.30, 0.80, 1.0);
    uniform vec3 uBg;
    #define BG uBg

    float hash(float n){ return fract(sin(n*12.9898)*43758.5453); }
    float lum(vec3 c){ return dot(c, vec3(0.299,0.587,0.114)); }

    vec3 hud(vec2 q, float t, float e){
      float r = length(q); float a = atan(q.y, q.x);
      vec3 c = vec3(0.0);
      for(int i=0;i<6;i++){
        float fi = float(i);
        float rad = 0.22 + fi*0.135;
        float w = 0.005 + 0.006*hash(fi+1.0);
        float ring = smoothstep(w, 0.0, abs(r-rad));
        float dir = mod(fi,2.0) < 0.5 ? 1.0 : -1.0;
        float sp = dir*(0.04 + 0.10*hash(fi+3.0))*(1.0 + e*9.0 + uHover*0.8);
        float n = 6.0 + floor(hash(fi+7.0)*30.0);
        float dash = smoothstep(0.02, 0.0, abs(fract((a/6.28318)*n + t*sp) - 0.5) - (0.18+0.25*hash(fi+11.0)));
        c += CY * ring * dash * (0.45 + 0.55*hash(fi+5.0));
      }
      // jemné tečkované datové kruhy
      for(int j=0;j<2;j++){
        float fj = float(j);
        float rr = 0.5 + fj*0.38;
        float dr = smoothstep(0.010, 0.0, abs(r - rr));
        float dots = smoothstep(0.25, 0.0, abs(fract(a/6.28318*(90.0+fj*60.0) + t*(0.03 - fj*0.05)) - 0.5) - 0.15);
        c += CY * dr * dots * 0.55;
      }
      // radarový paprsek
      float sw = fract(a/6.28318 - t*0.16*(1.0 + e*4.0));
      c += CY * pow(sw, 14.0) * 0.45 * smoothstep(0.98, 0.15, r);
      // vlna (waveform) se srdečním pulzem uprostřed
      float x = q.x;
      float env = exp(-x*x*2.6);
      float beat = 0.35 + 0.65*pow(0.5 + 0.5*sin(t*2.1), 4.0);
      float y = 0.07*sin(x*13.0 + t*3.0)*env + 0.035*sin(x*29.0 - t*5.0)*env;
      y += (0.30 + e*0.25)*beat*(exp(-pow((x-0.02)*9.0,2.0)) - 0.75*exp(-pow((x+0.09)*10.0,2.0)) - 0.45*exp(-pow((x-0.16)*11.0,2.0)));
      y *= 1.0 + e*1.5;
      float d = abs(q.y - y);
      float edge = smoothstep(0.98, 0.80, abs(x));
      c += mix(CY, vec3(0.85,0.97,1.0), 0.6) * smoothstep(0.016, 0.0, d) * edge * 1.4;
      c += CY * exp(-d*22.0) * edge * 0.55;
      // svislé datové sloupce pod vlnou
      float col = step(0.55, fract(x*38.0));
      float hgt = abs(y) * 1.4 + 0.02;
      c += CY * col * smoothstep(hgt, hgt-0.02, abs(q.y)) * edge * 0.18;
      return c * (1.0 + e*1.8);
    }

    void main(){
      vec2 p = vec2(vUv.x*RES.x, (1.0 - vUv.y)*RES.y);
      float t = uTime;
      if (uWax > 0.5) {
        vec3 c = texture2D(uImg, vUv).rgb;
        vec2 dv = p - uSealC; float dd = length(dv);
        float sm = smoothstep(uSealR + 4.0, uSealR - 6.0, dd);
        float l = dot(c, vec3(0.299,0.587,0.114));
        vec2 gdir = normalize(vec2(1.0, -0.55) + uTilt * 0.6);
        float pos = mod(t * 230.0, 1500.0) - 750.0 - uTilt.x * 120.0;
        float g = exp(-pow((dot(dv, gdir) - pos) / 38.0, 2.0));
        c += vec3(1.0, 0.82, 0.66) * g * pow(l, 1.6) * (1.3 + uHover) * sm;
        float breath = 0.55 + 0.45 * sin(t * 1.4);
        vec3 GOLD = vec3(1.0, 0.68, 0.32);
        c += GOLD * exp(-max(dd - uSealR, 0.0) / 55.0) * step(uSealR - 4.0, dd) * (0.07 + 0.05*breath + uHover*0.06 + uCharge*0.5);
        float sy = mod(t * 140.0, RES.y + 400.0) - 200.0;
        c += vec3(0.75, 0.82, 0.9) * exp(-pow((p.y - sy) / 2.5, 2.0)) * 0.05 + vec3(0.6,0.7,0.8) * exp(-pow((p.y - sy) / 60.0, 2.0)) * 0.015;
        c += GOLD * sm * uCharge * 0.35 * pow(l, 1.2);
        vec3 vid = texture2D(uVidTex, vUv).rgb;
        c = mix(c, vid, uVid);
        float ef = smoothstep(0.0, 0.035, min(vUv.x, 1.0 - vUv.x)) * smoothstep(0.0, 0.06, min(vUv.y, 1.0 - vUv.y));
        gl_FragColor = vec4(mix(BG, c, ef), 1.0);
        return;
      }
      float e = uCharge;
      vec2 ds = p - SC;
      float d = length(ds);

      // rázová vlna po rozbití čočky
      float R = uShock * 2600.0;
      float band = exp(-pow((d - R)/55.0, 2.0)) * (1.0 - uShock) * step(0.001, uShock);
      vec2 pp = p + normalize(ds + 1e-4) * band * 14.0;
      vec2 uv = vec2(pp.x/RES.x, 1.0 - pp.y/RES.y);

      // drobné chvění při nabíjení
      uv += vec2(sin(t*90.0), cos(t*77.0)) * 0.0006 * e * e;

      vec3 col = texture2D(uImg, uv).rgb;

      // vnitřek obálky pod klopou (jen základní deska)
      bool inEnv = p.x > 243.0 && p.x < 2329.0 && p.y > ${HINGE_Y}.0 && p.y < 1304.0;
      bool inFlap = inEnv && p.y < min(${L_A}*p.x + ${L_B}, ${R_A}*p.x + ${R_B});
      if (uFlap < 0.5 && inFlap && uCodeFlap > 0.5) {
        float yy = (p.y - ${HINGE_Y}.0) / 700.0;
        vec3 inner = mix(vec3(0.20,0.22,0.27), vec3(0.08,0.09,0.12), yy);
        vec2 lc = vec2(1288.0, 330.0);
        float ld = length((p - lc) * vec2(0.55, 1.0));
        float light = exp(-ld/260.0);
        float slit = exp(-pow((p.y - 250.0)/40.0, 2.0)) * smoothstep(900.0, 300.0, abs(p.x - 1288.0));
        inner += (CY*0.9 + 0.3) * (light*1.6 + slit*1.2) * uOpen;
        inner += vec3(0.9,0.97,1.0) * pow(light, 3.0) * uOpen * 1.2;
        gl_FragColor = vec4(inner, 1.0);
        return;
      }

      // svítící obvodové dráhy — světlo teče k pečeti
      float tr = texture2D(uTr, uv).r;
      float trBlur = texture2D(uTr, uv, 3.5).r;
      float ang = atan(ds.y, ds.x);
      float sec = floor((ang + 3.14159)/6.28318 * 28.0);
      float ph = hash(sec) * 6.28318;
      float spd = 1.6 + e*14.0 + uHover*0.8;
      float wave = pow(0.5 + 0.5*sin(d*0.016 + t*spd + ph), 16.0);
      float wave2 = pow(0.5 + 0.5*sin(d*0.009 + t*spd*0.6 + ph*1.7), 24.0);
      float flow = 0.12 + (wave + wave2*0.7)*(1.0 + e*2.5) + e*0.6;
      col = mix(col, col*0.92, tr*0.3);
      col += CY * tr * flow * 0.95;
      col += CY * trBlur * (wave + wave2) * (0.9 + e*2.0) * 0.9;

      // čočka s živým HUD
      vec2 lq = (p - LC) / LR + uTilt * 0.035;
      float lr = length((p - LC) / LR);
      float lensM = smoothstep(1.0, 0.95, lr);
      if (lensM > 0.0) {
        vec3 img = texture2D(uImg, uv).rgb;
        float l = lum(img);
        float sat = max(img.r, max(img.g, img.b)) - min(img.r, min(img.g, img.b));
        float hl = smoothstep(0.62, 0.92, l) * smoothstep(0.35, 0.05, sat);
        vec3 glass = img * vec3(0.18, 0.26, 0.36) + vec3(0.0, 0.025, 0.06);
        vec3 h = hud(lq, t, e);
        vec3 lens = glass + h;
        lens += CY * 0.10 * (1.0 - lr) * (0.7 + 0.3*sin(t*2.1));
        lens += img * hl * 0.9;                       // původní odlesk skla
        col = mix(col, lens, lensM);
      }

      // dýchající záře kolem pečetě
      float halo = exp(-max(d - RR, 0.0)/70.0) * step(RR - 6.0, d);
      col += CY * halo * (0.10 + 0.06*sin(t*2.1) + uHover*0.08 + e*0.7);

      // rázová vlna – světelný prstenec
      col += mix(CY, vec3(1.0), 0.5) * band * 0.9;

      // po rozbití: místo pečetě papír se světelnou jizvou
      if (uGone > 0.0) {
        float m = smoothstep(RR + 22.0, RR - 18.0, d) * uGone;
        vec2 dir = ds / max(d, 1.0);
        vec2 po = SC + dir * (RR + 40.0);
        vec3 paper = texture2D(uImg, vec2(po.x/RES.x, 1.0 - po.y/RES.y), 2.0).rgb;
        float trO = texture2D(uTr, vec2(po.x/RES.x, 1.0 - po.y/RES.y), 1.0).r;
        paper += CY * trO * smoothstep(0.0, RR, d) * 0.8;
        vec3 scar = (CY + 0.25) * exp(-d/110.0) * 1.5 * uScar + CY * exp(-d/220.0) * 0.25;
        col = mix(col, paper + scar, m);
      }

      // rub klopy
      if (uFlap > 0.5 && !gl_FrontFacing) {
        float yy = (p.y - ${HINGE_Y}.0) / 700.0;
        col = mix(vec3(0.74,0.77,0.81), vec3(0.52,0.56,0.62), yy);
        col *= 0.75 + 0.25*sin(yy*3.14159);
        col += CY * uOpen * 0.18 * yy;
      }

      col = mix(col, texture2D(uVidTex, vUv).rgb, uVid);
      // okraje podkladu splynou s pozadím stránky
      float edgeF = smoothstep(0.0, 0.035, min(vUv.x, 1.0 - vUv.x)) * smoothstep(0.0, 0.06, min(vUv.y, 1.0 - vUv.y));
      col = mix(BG, col, edgeF);

      gl_FragColor = vec4(col, 1.0);
    }`;

  // základní deska
  const baseMat = new THREE.ShaderMaterial({ uniforms: U, vertexShader: vert, fragmentShader: frag });
  const base = new THREE.Mesh(new THREE.PlaneGeometry(IMG_W * S, IMG_H * S), baseMat);
  group.add(base);

  // klopa jako samostatný trojúhelník, který se otočí kolem pantu
  const pts = [
    [243, HINGE_Y], [2329, HINGE_Y], [2329, R_A * 2329 + R_B], [TIP.x, TIP.y], [243, L_A * 243 + L_B],
  ];
  const shape = new THREE.Shape();
  pts.forEach(([x, y], i) => {
    const v = toW(x, y); v.y -= (CY - HINGE_Y) * S;
    i ? shape.lineTo(v.x, v.y) : shape.moveTo(v.x, v.y);
  });
  const flapGeo = new THREE.ShapeGeometry(shape);
  const pos = flapGeo.attributes.position, uvA = flapGeo.attributes.uv;
  for (let i = 0; i < pos.count; i++) {
    const px = pos.getX(i) / S + CX;
    const py = CY - (pos.getY(i) + (CY - HINGE_Y) * S) / S;
    uvA.setXY(i, px / IMG_W, 1 - py / IMG_H);
  }
  const flapU = { ...U, uFlap: { value: 1 } };
  const flapMat = new THREE.ShaderMaterial({ uniforms: flapU, vertexShader: vert, fragmentShader: frag, side: THREE.DoubleSide });
  const pivot = new THREE.Group();
  pivot.position.set(0, (CY - HINGE_Y) * S, 0.0015);
  const flap = new THREE.Mesh(flapGeo, flapMat);
  pivot.add(flap); group.add(pivot);
  if (C.video || C.wax) pivot.visible = false;

  // střepy světla z čočky
  const N = 420;
  const pGeo = new THREE.BufferGeometry();
  const pPos = new Float32Array(N * 3), pVel = new Float32Array(N * 3), pSeed = new Float32Array(N);
  const sealW = toW(C.seal.x, C.seal.y);
  for (let i = 0; i < N; i++) {
    const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * 0.18;
    pPos[i * 3] = sealW.x + Math.cos(a) * r; pPos[i * 3 + 1] = sealW.y + Math.sin(a) * r; pPos[i * 3 + 2] = 0.01;
    const sp = 0.35 + Math.random() * 1.6;
    pVel[i * 3] = Math.cos(a) * sp; pVel[i * 3 + 1] = Math.sin(a) * sp; pVel[i * 3 + 2] = 0.4 + Math.random() * 2.2;
    pSeed[i] = Math.random();
  }
  const pStart = pPos.slice();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  pGeo.setAttribute('seed', new THREE.BufferAttribute(pSeed, 1));
  const pU = { uAge: { value: 0 }, uPx: { value: 1 } };
  const pMat = new THREE.ShaderMaterial({
    uniforms: pU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: `attribute float seed; uniform float uAge, uPx; varying float vS;
      void main(){ vS = seed; vec4 mv = modelViewMatrix*vec4(position,1.0);
        gl_PointSize = (1.5 + seed*seed*7.0) * uPx * (1.6 / -mv.z); gl_Position = projectionMatrix*mv; }`,
    fragmentShader: `uniform float uAge; varying float vS;
      void main(){ vec2 c = gl_PointCoord - 0.5; float d = length(c);
        float a = smoothstep(0.5, 0.0, d) * (1.0 - smoothstep(0.15 + vS*0.6, 1.0 + vS*0.4, uAge));
        vec3 col = mix(vec3(0.35,0.82,1.0), vec3(1.0), smoothstep(0.25, 0.0, d)*0.8);
        gl_FragColor = vec4(col * a * 1.4, a); }`,
  });
  const shards = new THREE.Points(pGeo, pMat); shards.visible = false; shards.frustumCulled = false;
  group.add(shards);

  // světelná vrstva přes celou obrazovku (záblesk, paprsky, bílý přechod)
  const oU = { uFog: { value: 0 }, uEnv: { value: new THREE.Vector2(0.3, 0.7) }, uWarm: { value: C.warm ? 1 : 0 }, uLight: { value: 0 }, uFlash: { value: 0 }, uC: { value: new THREE.Vector2(0.5, 0.5) }, uSeal: { value: new THREE.Vector2(0.5, 0.5) }, uAsp: { value: 1 }, uTime: U.uTime, uCharge: U.uCharge };
  const overlay = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({
    uniforms: oU, transparent: true, depthTest: false, depthWrite: false,
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
    fragmentShader: `precision highp float; varying vec2 vUv;
      uniform float uLight, uFlash, uAsp, uTime, uCharge, uWarm, uFog; uniform vec2 uC, uSeal, uEnv;
      float hh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7)))*43758.5453); }
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(hh(i), hh(i+vec2(1,0)), f.x), mix(hh(i+vec2(0,1)), hh(i+vec2(1,1)), f.x), f.y); }
      float fbm(vec2 p){ float a = 0.5, s = 0.0; for(int i=0;i<5;i++){ s += a*vn(p); p *= 2.03; a *= 0.5; } return s; }
      float h(float n){ return fract(sin(n)*43758.5453); }
      float n1(float x){ float i = floor(x), f = fract(x); return mix(h(i), h(i+1.0), f*f*(3.0-2.0*f)); }
      void main(){
        vec3 CY = mix(vec3(0.32, 0.80, 1.0), vec3(1.0, 0.74, 0.40), uWarm * smoothstep(0.1, 0.7, uLight));
        vec2 q = (vUv - uC) * vec2(uAsp, 1.0); float d = length(q); float a = atan(q.y, q.x);
        float rays = pow(n1(a*9.0 + uTime*0.6)*0.6 + n1(a*23.0 - uTime*0.9)*0.4, 3.0);
        vec3 c = (CY + 0.35) * (exp(-d*(6.0 - uLight*4.5)) * 1.3 + rays * exp(-d*2.2) * 1.1) * uLight;
        vec2 qs = (vUv - uSeal) * vec2(uAsp, 1.0); float ds = length(qs);
        c += (CY*0.8 + 0.4) * exp(-ds*14.0) * uCharge * 0.9;
        c += vec3(0.85, 0.96, 1.0) * exp(-ds*(3.0 + (1.0-uFlash)*10.0)) * uFlash * 1.6;
        if (uFog > 0.0) {
          // mobil na výšku: světelná mlha nad a pod obálkou
          float dOut = max(uEnv.x - vUv.y, vUv.y - uEnv.y);
          float m = smoothstep(-0.02, 0.10, dOut);
          vec2 fp = vec2(vUv.x * uAsp * 2.2, vUv.y * 2.6);
          float f = fbm(fp + vec2(uTime*0.035, -uTime*0.022)) * fbm(fp*1.7 - vec2(uTime*0.02, uTime*0.03) + 3.1);
          float near = exp(-max(dOut, 0.0) * 6.0);
          float beam = exp(-abs(vUv.x - uSeal.x) * uAsp * 9.0) * near * (0.6 + 0.4*sin(uTime*1.4));
          float sp = step(0.9965, hh(floor(vec2(vUv.x*uAsp, vUv.y - uTime*0.012) * 140.0))) * (0.5 + 0.5*sin(uTime*3.0 + vUv.x*40.0));
          vec3 fogC = mix(vec3(0.38, 0.62, 0.85), vec3(0.85, 0.72, 0.5), uWarm*0.25);
          c += (fogC * (f * 0.85 + near * 0.16) + CY * beam * 0.16 + CY * sp * 0.6) * m * uFog * (1.0 - uLight);
        }
        float white = smoothstep(0.62, 1.0, uLight);
        c = mix(c, mix(vec3(1.0), vec3(0.984, 0.969, 0.937), uWarm), white);
        float al = clamp(max(max(c.r, c.g), c.b), 0.0, 1.0);
        gl_FragColor = vec4(al > 0.001 ? c / al : c, al);
      }`,
  }));
  overlay.frustumCulled = false; overlay.renderOrder = 10;
  const oScene = new THREE.Scene(); oScene.add(overlay);
  const oCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  // rozvržení: celá obálka vždy vidět, na mobilu na šířku displeje
  let baseZ = 4, W = 1, H = 1;
  function resize() {
    W = canvas.clientWidth; H = canvas.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr); renderer.setSize(W, H, false);
    camera.aspect = W / H; camera.updateProjectionMatrix();
    const tan = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    // obálka vždy vyplní celou obrazovku (ořez na formát), žádné tmavé okraje
    // PC: celá obálka od kraje ke kraji; mobil na výšku: obálka cca 115 % šířky displeje
    const envW = C.env.w, envH = C.env.h;
    baseZ = (W / H < 1)
      ? (envW / 1.15) / camera.aspect / (2 * tan)
      : Math.min(envH * 0.965, envW * 0.965 / camera.aspect) / (2 * tan); // na šířku: obálka vyplní celé okno, bez černého pozadí
    oU.uFog.value = 0;
    pU.uPx.value = dpr * (H / 900) * 4;
    oU.uAsp.value = W / H;
  }
  resize(); window.addEventListener('resize', resize);

  // ovládání
  const mouse = new THREE.Vector2(), tilt = new THREE.Vector2();
  let hoverT = 0, nearSeal = false;
  const projX = 0; const proj = (v) => { const p = v.clone().applyMatrix4(group.matrixWorld).project(camera); return new THREE.Vector2(p.x * 0.5 + 0.5, p.y * 0.5 + 0.5); };
  function onMove(e) {
    const x = e.clientX / W, y = e.clientY / H;
    mouse.set(x * 2 - 1, -(y * 2 - 1));
    const s = proj(sealW);
    const sr = proj(toW(C.seal.x + C.seal.r * 1.3, C.seal.y)).x - s.x;
    const dx = (x - s.x) * W, dy = ((1 - y) - s.y) * H;
    nearSeal = Math.hypot(dx, dy) < sr * W * 1.15;
    canvas.style.cursor = nearSeal || state === 'idle' ? 'pointer' : 'default';
  }
  window.addEventListener('pointermove', onMove);

  let state = 'idle', t0 = 0, now = 0;
  let useVideo = false, vStart = 0;
  function open() {
    if (state !== 'idle') return; state = 'go'; t0 = now;
    if (video) { useVideo = true; video.currentTime = 0; const pr = video.play(); if (pr && pr.catch) pr.catch(() => { useVideo = false; }); }
  }
  canvas.addEventListener('click', open);

  const clamp01 = (x) => Math.min(1, Math.max(0, x));
  const eIO = (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  const eIn = (x) => x * x * x;
  const range = (t, a, b) => clamp01((t - a) / (b - a));

  // průběh s videem: krátké nabití v kódu -> video -> záře -> bílá -> web
  let vCamZ = 4; const vLook = new THREE.Vector3();
  function videoFlow(t) {
    const D = (video.duration && isFinite(video.duration)) ? video.duration : 5;
    const vt = Math.max(video.currentTime || 0, 0);
    U.uCharge.value = Math.pow(range(t, 0, 0.45), 2) * (1 - range(t, 0.45, 0.9));
    U.uVid.value = video.readyState >= 2 && vt > 0.02 ? Math.min(1, U.uVid.value + 0.06) : U.uVid.value;
    oU.uFlash.value = Math.exp(-Math.max(0, t - 0.35) * 5) * range(t, 0.2, 0.35) * 0.55;
    const end = D - 0.9;
    const li = range(vt, end, D - 0.05);
    oU.uLight.value = eIn(li) * (video.ended ? 1 : 1);
    if (video.ended) oU.uLight.value = Math.min(1, oU.uLight.value + 0.08);
    if (t > D + 2.5) oU.uLight.value = Math.min(1, oU.uLight.value + 0.03);
    vCamZ = THREE.MathUtils.lerp(baseZ, baseZ * 0.42, eIn(range(vt, end - 0.4, D)));
    vLook.lerpVectors(new THREE.Vector3(0, 0, 0), lightW, eIO(range(vt, end - 0.6, D)));
    group.rotation.y *= 0.9; group.rotation.x *= 0.9;
    if ((video.ended || vt >= D - 0.02 || t > D + 3) && oU.uLight.value >= 0.999 && !finished) { finished = true; onDone && onDone(); }
  }

  const clock = new THREE.Clock();
  let running = true, finished = false;
  const envTop = toW(1288, 128), envBot = toW(1288, 1304);
  const camTarget = new THREE.Vector3(), lightW = toW(C.light.x, C.light.y);

  function frame() {
    if (!running) return;
    const dt = Math.min(clock.getDelta(), 0.05);
    now += dt; U.uTime.value = now;

    hoverT += ((nearSeal ? 1 : 0) - hoverT) * Math.min(1, dt * 5);
    U.uHover.value = hoverT;
    tilt.lerp(mouse, Math.min(1, dt * 3));
    U.uTilt.value.copy(tilt);

    let camZ = baseZ, look = new THREE.Vector3(0, 0, 0);
    group.rotation.y = tilt.x * 0.012; group.rotation.x = -tilt.y * 0.01;

    if (state === 'idle') {
      const b = -Math.abs(Math.sin(now * 0.8)) * 0.004;
      group.position.z = b;
    } else if (useVideo) {
      videoFlow(now - t0);
    } else {
      const t = now - t0;
      U.uCharge.value = Math.pow(range(t, 0, 0.95), 2) * (1 - range(t, 1.0, 1.4));
      const ts = 0.95;
      if (t >= ts && !shards.visible) shards.visible = true;
      U.uShock.value = range(t, ts, ts + 1.5);
      U.uGone.value = range(t, ts, ts + 0.08);
      U.uScar.value = t >= ts ? Math.exp(-(t - ts) * 1.3) : 1;
      oU.uFlash.value = t >= ts ? Math.exp(-(t - ts) * 4.5) : 0;
      // střepy
      if (shards.visible) {
        const age = t - ts; pU.uAge.value = age / 1.6;
        const k = (1 - Math.exp(-age * 2.2)) / 2.2;
        for (let i = 0; i < N; i++) {
          pPos[i * 3] = pStart[i * 3] + pVel[i * 3] * k;
          pPos[i * 3 + 1] = pStart[i * 3 + 1] + pVel[i * 3 + 1] * k;
          pPos[i * 3 + 2] = pStart[i * 3 + 2] + pVel[i * 3 + 2] * k;
        }
        pGeo.attributes.position.needsUpdate = true;
      }
      // klopa
      const op = eIO(range(t, 1.15, 2.55));
      pivot.rotation.x = -op * Math.PI * 0.985;
      U.uOpen.value = op; flapU.uOpen.value = op;
      // světlo a let kamery do obálky
      const li = range(t, 1.7, 3.7);
      oU.uLight.value = eIn(li);
      const dolly = eIn(range(t, 1.9, 3.7));
      camZ = THREE.MathUtils.lerp(baseZ, 0.45, dolly);
      look.lerpVectors(new THREE.Vector3(0, 0, 0), lightW, eIO(range(t, 1.4, 3.0)));
      group.rotation.y *= 1 - range(t, 0, 1); group.rotation.x *= 1 - range(t, 0, 1);
      if (t > 3.75 && !finished) { finished = true; onDone && onDone(); }
    }

    if (useVideo) { camZ = vCamZ; look.copy(vLook); }
    camera.position.set(look.x, look.y, camZ);
    camera.lookAt(look);
    group.updateMatrixWorld();
    oU.uC.value.copy(proj(lightW));
    oU.uSeal.value.copy(proj(sealW));
    if (oU.uFog.value) oU.uEnv.value.set(proj(envBot).y, proj(envTop).y);
    flapU.uTime.value = now; flapU.uCharge.value = U.uCharge.value; flapU.uShock.value = U.uShock.value;
    flapU.uGone.value = U.uGone.value; flapU.uHover.value = U.uHover.value;

    renderer.autoClear = true;
    renderer.render(scene, camera);
    renderer.autoClear = false;
    renderer.render(oScene, oCam);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  return {
    open,
    destroy() {
      running = false;
      window.removeEventListener('resize', resize); window.removeEventListener('pointermove', onMove);
      renderer.dispose();
    },
  };
}
