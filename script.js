'use strict';

/* ==========================================================
   Content (ES / EN)
   ========================================================== */
const IMG = 'assets/img/';

const content = {
  es: {
    ui: {
      skip: 'Saltar al contenido',
      navAbout: 'Sobre mí', navProjects: 'Proyectos', navCerts: 'Certificaciones',
      heroRole: 'Ingeniería Mecatrónica',
      ctaProjects: 'Ver proyectos', ctaCerts: 'Ver certificaciones',
      themeLabel: 'Cambiar tema', menuLabel: 'Menú', prev: 'Anterior', next: 'Siguiente', close: 'Cerrar',
      langButton: 'EN', badgeAchievement: 'Logro'
    },
    tagline: 'Estudiante de Ingeniería Mecatrónica enfocado en Sistemas Embebidos, Automatización y Robótica.',
    aboutTitle: 'Sobre mí',
    aboutDesc: 'Soy un estudiante de Ingeniería en Mecatrónica (4to año) con experiencia práctica en manufactura, ensamblaje, pruebas y validación de sistemas mecánicos. He coordinado equipos multidisciplinarios, gestionando recursos y dado seguimiento a requerimientos y actividades de ingeniería. Destaco por mi capacidad de resolver problemas, trabajar en equipo y aprender en entornos prácticos. Cuento con experiencia académica internacional e inglés C1.',
    projectsTitle: 'Proyectos destacados',
    certTitle: 'Certificaciones y logros',
    filters: { all: 'Todos', robotics: 'Robótica', courses: 'Cursos', projects: 'Proyectos', achievements: 'Logros' },
    stats: [
      { value: '$13K+', label: 'USD en patrocinio gestionados' },
      { value: '96.94%', label: 'Precisión, redes neuronales (CNN)' },
      { value: '92.11%', label: 'Precisión, detección de grietas' },
      { value: '{certs}', label: 'Certificaciones' }
    ],
    certificates: [
      { text: true, title: 'IELTS Academic C1', issuer: 'IELTS Official', category: 'achievements',
        detail: 'Acreditación de dominio avanzado de idioma inglés en ámbito profesional e ingenieril.' },
      { text: true, title: 'Diploma de Bachillerato Internacional', issuer: 'International Baccalaureate (IB)', category: 'achievements',
        detail: 'Programa académico de alto rigor internacional con enfoque analítico global.' },
      { text: true, title: 'Premio Crash and Burn 2025 NASA', issuer: 'NASA Human Exploration Rover Challenge', category: 'achievements',
        detail: 'Reconocimiento otorgado a la perseverancia y superación técnica del equipo.' },
      { text: true, title: 'Reconocimiento Inspira', issuer: 'UDEM', category: 'achievements',
        detail: 'Reconocimiento otorgado por la Universidad de Monterrey (UDEM).' },
      { title: 'Certificación Universal Robots', issuer: 'Universal Robots', category: 'robotics', image: 'cert-ur.webp' },
      { title: 'Programación UR20 / UR30', issuer: 'Universal Robots', category: 'robotics', image: 'cert-ur.webp' },
      { title: 'Evaluación de Riesgos Robóticos', issuer: 'Universal Robots', category: 'robotics', image: 'cert-evaluacion-riesgos.webp' },
      { title: 'Controlador CB3 Universal Robots', issuer: 'Universal Robots', category: 'robotics', image: 'cert-cb3.webp' },
      { title: 'Itinerario de Aplicaciones', issuer: 'Universal Robots', category: 'robotics', image: 'cert-itinerario-aplicaciones.webp' },
      { title: 'Itinerario Profesional', issuer: 'Universal Robots', category: 'robotics', image: 'cert-itinerario-profesional.webp' },
      { title: 'Itinerario Básico de Robótica', issuer: 'Universal Robots', category: 'robotics', image: 'cert-itinerario-basico.webp' },
      { title: 'Supervised Machine Learning', issuer: 'Coursera / DeepLearning.AI', category: 'courses', image: 'cert-supervised-ml.webp' },
      { title: 'Neural Networks and Deep Learning', issuer: 'Coursera / DeepLearning.AI', category: 'courses', image: 'cert-neural-networks.webp' },
      { title: 'MATLAB Onramp', issuer: 'MathWorks', category: 'courses', image: 'cert-matlab-onramp.webp' },
      { title: 'Introduction to Linear Algebra', issuer: 'MathWorks', category: 'courses', image: 'cert-matlab-linear-algebra.webp' },
      { title: 'Symbolic Math with MATLAB', issuer: 'MathWorks', category: 'courses', image: 'cert-matlab-symbolic-math.webp' },
      { title: 'Drone Testing Platform', issuer: 'Proyecto de Ingeniería', category: 'projects', image: 'cert-drone-testing.webp' },
      { title: 'Computational Fluid Dynamics (CFD)', issuer: 'Simulación de Spoiler', category: 'projects', image: 'cert-cfd-spoiler.webp' }
    ],
    projects: [
      { title: 'Liderazgo y Manufactura de Rover (NASA)', image: 'foto-rover-26.webp',
        bullets: [
          'Rover mecánico desarrollado bajo restricciones ingenieriles reales.',
          'Lideré equipo multidisciplinario a través de diseño, manufactura y validación.',
          'Dirigí toma de decisiones sobre diseño mecánico e integración de sistemas.',
          'Gestión de $13,000+ USD en patrocinio y recursos.'
        ],
        tags: ['Liderazgo', 'Diseño Mecánico', 'Manufactura', 'Validación'] },
      { title: 'Diseño de Fuente de Voltaje Regulable DC', image: 'fotos-fuente-de-voltaje.webp',
        bullets: [
          'Fuente de voltaje DC funcional con salida constante de 5V y regulable de 0-12V.',
          'Diseño de circuito electrónico, PCB y ensamblaje físico.',
          'Salida de voltaje estable y diseño resistente a cargas inductivas.'
        ],
        tags: ['Circuitos electrónicos', 'PCB', 'Integración'] },
      { title: 'Detección de Grietas por Machine Learning', image: 'fotos-deteccion-de-grietas.webp', badge: 'Accuracy: 92.11%',
        bullets: [
          'Modelo de visión computacional para clasificar grietas estructurales en concreto.',
          'Implementación de pipeline de imagen y clasificador Random Forest.'
        ],
        tags: ['Machine Learning', 'Visión Computacional'] },
      { title: 'Gestión de Operaciones y Logística de Rover', image: 'foto-crash-and-burn.webp',
        bullets: [
          'Coordinación de logística, compras y viajes para despliegue del rover.',
          'Elaboración de presupuestos y seguimiento financiero.',
          "Premio 'Crash and Burn' (2025)."
        ],
        tags: ['Logística', 'Compras', 'Operaciones'] },
      { title: 'Reconocimiento de Dígitos Manuscritos', image: 'foto-deteccion-de-numeros.webp', badge: 'Accuracy: 96.94%',
        bullets: [
          'Sistema de reconocimiento mediante Redes Neuronales Convolucionales (CNN).',
          'Clasificación y procesamiento de imágenes en tiempo real.'
        ],
        tags: ['Deep Learning', 'Python', 'IA'] }
    ]
  },

  en: {
    ui: {
      skip: 'Skip to content',
      navAbout: 'About', navProjects: 'Projects', navCerts: 'Certifications',
      heroRole: 'Mechatronics Engineering',
      ctaProjects: 'View projects', ctaCerts: 'View certifications',
      themeLabel: 'Toggle theme', menuLabel: 'Menu', prev: 'Previous', next: 'Next', close: 'Close',
      langButton: 'ES', badgeAchievement: 'Achievement'
    },
    tagline: 'Mechatronics Engineering Student focused on Embedded Systems, Automation, and Robotics.',
    aboutTitle: 'About me',
    aboutDesc: "I'm a Mechatronics Engineering (4th year) student driven by a passion for building systems that integrate hardware and software. My projects explore embedded systems, artificial intelligence, and electronic design, with a growing focus on aerospace, robotics, and intelligent automation.",
    projectsTitle: 'Featured projects',
    certTitle: 'Certifications & achievements',
    filters: { all: 'All', robotics: 'Robotics', courses: 'Courses', projects: 'Projects', achievements: 'Achievements' },
    stats: [
      { value: '$13K+', label: 'USD in sponsorship managed' },
      { value: '96.94%', label: 'CNN digit recognition accuracy' },
      { value: '92.11%', label: 'Crack detection accuracy' },
      { value: '{certs}', label: 'Certifications' }
    ],
    certificates: [
      { text: true, title: 'IELTS Academic C1', issuer: 'IELTS Official', category: 'achievements',
        detail: 'Accredited C1 advanced English proficiency in professional and engineering domains.' },
      { text: true, title: 'International Baccalaureate Diploma', issuer: 'International Baccalaureate (IB)', category: 'achievements',
        detail: 'Rigorous global academic diploma focusing on analytical problem-solving.' },
      { text: true, title: 'Crash and Burn Award 2025 NASA', issuer: 'NASA Human Exploration Rover Challenge', category: 'achievements',
        detail: 'Awarded for team technical resilience and perseverance under constraints.' },
      { text: true, title: 'Reconocimiento Inspira', issuer: 'UDEM', category: 'achievements',
        detail: 'Recognition awarded by Universidad de Monterrey (UDEM).' },
      { title: 'Universal Robots Certification', issuer: 'Universal Robots', category: 'robotics', image: 'cert-ur.webp' },
      { title: 'UR20 / UR30 Programming', issuer: 'Universal Robots', category: 'robotics', image: 'cert-ur.webp' },
      { title: 'Robotic Risk Assessment', issuer: 'Universal Robots', category: 'robotics', image: 'cert-evaluacion-riesgos.webp' },
      { title: 'CB3 Universal Robots Controller', issuer: 'Universal Robots', category: 'robotics', image: 'cert-cb3.webp' },
      { title: 'Applications Path', issuer: 'Universal Robots', category: 'robotics', image: 'cert-itinerario-aplicaciones.webp' },
      { title: 'Professional Path', issuer: 'Universal Robots', category: 'robotics', image: 'cert-itinerario-profesional.webp' },
      { title: 'Basic Robotics Path', issuer: 'Universal Robots', category: 'robotics', image: 'cert-itinerario-basico.webp' },
      { title: 'Supervised Machine Learning', issuer: 'Coursera / DeepLearning.AI', category: 'courses', image: 'cert-supervised-ml.webp' },
      { title: 'Neural Networks and Deep Learning', issuer: 'Coursera / DeepLearning.AI', category: 'courses', image: 'cert-neural-networks.webp' },
      { title: 'MATLAB Onramp', issuer: 'MathWorks', category: 'courses', image: 'cert-matlab-onramp.webp' },
      { title: 'Introduction to Linear Algebra', issuer: 'MathWorks', category: 'courses', image: 'cert-matlab-linear-algebra.webp' },
      { title: 'Symbolic Math with MATLAB', issuer: 'MathWorks', category: 'courses', image: 'cert-matlab-symbolic-math.webp' },
      { title: 'Drone Testing Platform', issuer: 'Engineering Project', category: 'projects', image: 'cert-drone-testing.webp' },
      { title: 'Computational Fluid Dynamics (CFD)', issuer: 'Spoiler Airflow Simulation', category: 'projects', image: 'cert-cfd-spoiler.webp' }
    ],
    projects: [
      { title: 'Human-Powered Rover Design & Leadership', image: 'foto-rover-26.webp',
        bullets: [
          'Human-powered rover developed under real-world competition constraints.',
          'Led a multidisciplinary team across design, manufacturing, and validation.',
          'Managed $13,000+ USD in sponsorship and project resources.'
        ],
        tags: ['Leadership', 'Mechanical Design', 'Manufacturing', 'Validation'] },
      { title: 'Robust Adjustable DC Power Supply Design', image: 'fotos-fuente-de-voltaje.webp',
        bullets: [
          'Fully functional 0-12V adjustable and 5V constant DC power supply system.',
          'Designed electronic circuit and PCB layout.',
          'Verified system performance through experimental testing.'
        ],
        tags: ['Circuit Design', 'PCB Design', 'Testing'] },
      { title: 'Concrete Crack Detection by Machine Learning', image: 'fotos-deteccion-de-grietas.webp', badge: 'Accuracy: 92.11%',
        bullets: [
          'Computer vision model capable of detecting structural cracks in concrete.',
          'Developed image processing pipeline and Random Forest classifier.'
        ],
        tags: ['Machine Learning', 'Computer Vision'] },
      { title: 'Rover Logistics & Operations Management', image: 'foto-crash-and-burn.webp',
        bullets: [
          'Supported development and deployment through logistics coordination.',
          'Managed procurement and travel logistics.',
          "Earned the 'Crash and Burn' award (2025)."
        ],
        tags: ['Logistics', 'Procurement', 'Operations'] },
      { title: 'Handwritten Digit Recognition with CNN', image: 'foto-deteccion-de-numeros.webp', badge: 'Accuracy: 96.94%',
        bullets: [
          'High-accuracy digit recognition system achieving 96.94% accuracy.',
          'Designed and trained a Convolutional Neural Network (CNN).'
        ],
        tags: ['Deep Learning', 'Python', 'AI'] }
    ]
  }
};

/* ==========================================================
   State & helpers
   ========================================================== */
const root = document.documentElement;
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const store = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, val) { try { localStorage.setItem(key, val); } catch { /* storage unavailable */ } }
};

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const state = {
  lang: content[store.get('lang')] ? store.get('lang') : (root.lang === 'en' ? 'en' : 'es'),
  category: 'all'
};

/* ==========================================================
   Rendering
   ========================================================== */
function renderStatic() {
  const d = content[state.lang];
  root.lang = state.lang;

  $$('[data-i18n]').forEach((el) => { el.textContent = d.ui[el.dataset.i18n]; });
  $$('[data-i18n-aria]').forEach((el) => { el.setAttribute('aria-label', d.ui[el.dataset.i18nAria]); });

  $('#lang-toggle').textContent = d.ui.langButton;
  $('#hero-tagline').textContent = d.tagline;
  $('#about-title').textContent = d.aboutTitle;
  $('#about-desc').textContent = d.aboutDesc;
  $('#projects-title').textContent = d.projectsTitle;
  $('#cert-title').textContent = d.certTitle;

  const certCount = d.certificates.filter((c) => !c.text).length;
  $('#stats').innerHTML = d.stats
    .map((s) => `<div><dt>${esc(s.label)}</dt><dd>${esc(s.value.replace('{certs}', certCount))}</dd></div>`)
    .join('');
}

function renderProjects() {
  const d = content[state.lang];
  $('#projects-grid').innerHTML = d.projects.map((p) => `
    <article class="project">
      <div class="project__media">
        <img src="${IMG}${p.image}" alt="${esc(p.title)}" loading="lazy" decoding="async">
      </div>
      <div class="project__body">
        <h3 class="project__title">${esc(p.title)}</h3>
        ${p.badge ? `<span class="project__metric">${esc(p.badge)}</span>` : ''}
        <ul class="project__list">${p.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
        <ul class="tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      </div>
    </article>`).join('');
}

function renderFilters() {
  const d = content[state.lang];
  const counts = { all: d.certificates.length };
  d.certificates.forEach((c) => { counts[c.category] = (counts[c.category] || 0) + 1; });

  $('#cert-filters').innerHTML = Object.entries(d.filters).map(([key, label]) => `
    <button type="button" class="filter" data-filter="${key}" aria-pressed="${key === state.category}">
      ${esc(label)} <small>${counts[key] || 0}</small>
    </button>`).join('');
}

function renderCertificates() {
  const d = content[state.lang];
  const list = state.category === 'all' ? d.certificates : d.certificates.filter((c) => c.category === state.category);

  $('#carousel-track').innerHTML = list.map((c) => {
    if (c.text) {
      return `<li><div class="cert cert--text">
        <span class="cert__badge">${esc(d.ui.badgeAchievement)}</span>
        <h3 class="cert__title">${esc(c.title)}</h3>
        <p class="cert__issuer">${esc(c.issuer)}</p>
        <p class="cert__detail">${esc(c.detail)}</p>
      </div></li>`;
    }
    return `<li><button type="button" class="cert" data-img="${IMG}${c.image}" data-title="${esc(c.title)} · ${esc(c.issuer)}">
      <div class="cert__img"><img src="${IMG}${c.image}" alt="${esc(c.title)}" loading="lazy" decoding="async"></div>
      <h3 class="cert__title">${esc(c.title)}</h3>
      <p class="cert__issuer">${esc(c.issuer)}</p>
    </button></li>`;
  }).join('');

  $('#carousel-track').scrollTo({ left: 0 });
}

function render() {
  renderStatic();
  renderProjects();
  renderFilters();
  renderCertificates();
}

/* ==========================================================
   Interactions
   ========================================================== */
function setTheme(theme) {
  root.dataset.theme = theme;
  store.set('theme', theme);
  $('meta[name="theme-color"]').content = theme === 'dark' ? '#121315' : '#f5eedd';
}

function bindEvents() {
  $('#theme-toggle').addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

  $('#lang-toggle').addEventListener('click', () => {
    state.lang = state.lang === 'es' ? 'en' : 'es';
    store.set('lang', state.lang);
    render();
  });

  // Mobile menu
  const menuBtn = $('#menu-toggle');
  const links = $('#nav-links');
  const setMenu = (open) => {
    links.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
  };
  menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
  links.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  // Certificate filters (event delegation)
  $('#cert-filters').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-filter]');
    if (!btn) return;
    state.category = btn.dataset.filter;
    renderFilters();
    renderCertificates();
    $(`[data-filter="${state.category}"]`).focus();
  });

  // Carousel arrows
  const track = $('#carousel-track');
  const scrollTrack = (dir) => track.scrollBy({ left: dir * track.clientWidth * 0.8, behavior: 'smooth' });
  $('#cert-prev').addEventListener('click', () => scrollTrack(-1));
  $('#cert-next').addEventListener('click', () => scrollTrack(1));
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); scrollTrack(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); scrollTrack(-1); }
  });

  // Lightbox
  const box = $('#lightbox');
  track.addEventListener('click', (e) => {
    const card = e.target.closest('[data-img]');
    if (!card) return;
    $('#lightbox-img').src = card.dataset.img;
    $('#lightbox-img').alt = card.dataset.title;
    $('#lightbox-caption').textContent = card.dataset.title;
    box.showModal();
  });
  $('#lightbox-close').addEventListener('click', () => box.close());
  box.addEventListener('click', (e) => { if (e.target === box) box.close(); });
}

function setupNavState() {
  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const linkFor = new Map($$('.nav__links a').map((a) => [a.getAttribute('href').slice(1), a]));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      linkFor.forEach((a) => a.classList.remove('is-active'));
      linkFor.get(entry.target.id)?.classList.add('is-active');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  linkFor.forEach((_, id) => { const s = document.getElementById(id); if (s) observer.observe(s); });
}

document.addEventListener('DOMContentLoaded', () => {
  $('#year').textContent = new Date().getFullYear();
  render();
  bindEvents();
  setupNavState();
});
