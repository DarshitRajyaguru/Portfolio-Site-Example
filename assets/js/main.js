/* ============================================================
   Darshit Rajyaguru — Portfolio JS
   GSAP + ScrollTrigger + Custom Cursor + Popup + Parallax
   ============================================================ */

/* ==================== PROJECT DATA ==================== */
const PROJECTS = [
  {
    id: 'nplus',
    emoji: '🌐',
    name: 'N+ Marketing Site',
    url: 'nplus.global',
    liveUrl: 'https://nplus.global',
    category: 'Marketing / SaaS',
    categoryColor: 'blue',
    desc: 'Modern marketing website emphasizing conversion-focused UI, dynamic content sections, and performance-driven WordPress development with IP-based visibility management.',
    tech: ['WordPress', 'Elementor', 'SCF', 'GitHub', 'Custom PHP', 'JavaScript'],
    features: [
      'IP-based content visibility management',
      'Country-wise pricing display',
      'Dynamic animated content sections',
      'Conversion-focused landing pages',
      'GitHub version-controlled deployment',
      'Performance-optimized build'
    ],
    bg: 'linear-gradient(135deg, rgba(37,99,235,0.12), rgba(6,182,212,0.08))'
  },
  {
    id: 'aicerts',
    emoji: '🏅',
    name: 'AiCerts Store',
    url: 'store.aicerts.ai',
    liveUrl: 'https://store.aicerts.ai',
    category: 'E-Commerce / Certification',
    categoryColor: 'violet',
    desc: 'WooCommerce-powered certification store with structured product flow, secure checkout, IP-based pricing, and multiple payment gateway integrations for global reach.',
    tech: ['WooCommerce', 'Elementor', 'Payment APIs', 'Custom PHP', 'IP Detection'],
    features: [
      'Multi-payment gateway integration',
      'IP-based visibility & country pricing',
      'Structured certification product architecture',
      'Secure checkout optimization',
      'Dynamic pricing management',
      'Mobile-first responsive design'
    ],
    bg: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(37,99,235,0.08))'
  },
  {
    id: 'cfapi',
    emoji: '🔌',
    name: 'ContactForm to API',
    url: 'contactformtoapi.com',
    liveUrl: 'https://contactformtoapi.com',
    category: 'Plugin / SaaS',
    categoryColor: 'cyan',
    desc: 'API-driven plugin workflow connecting Contact Form 7 submissions to custom REST API endpoints, with WooCommerce plans, documentation portal, and dashboard functionality.',
    tech: ['WordPress', 'REST API', 'Contact Form 7', 'WooCommerce', 'Custom CPTs', 'Elementor'],
    features: [
      'Custom REST API endpoint management',
      'CF7 to API integration bridge',
      'Dynamic pricing table (WooCommerce plans)',
      'Developer documentation portal',
      'Admin dashboard functionality',
      'Plugin architecture with hooks'
    ],
    bg: 'linear-gradient(135deg, rgba(6,182,212,0.12), rgba(16,185,129,0.06))'
  },
  {
    id: 'idalko',
    emoji: '🏢',
    name: 'iDalko',
    url: 'idalko.com',
    liveUrl: 'https://idalko.com',
    category: 'Enterprise / SaaS',
    categoryColor: 'blue',
    desc: 'Enterprise-grade website rebuild for a Jira integration solutions company — mega menu architecture, SEO improvements, reusable templates, and WooCommerce integration.',
    tech: ['Elementor Pro', 'WooCommerce', 'ACF', 'Custom CPTs', 'Mega Menu', 'PHP'],
    features: [
      'Responsive multi-level mega menu',
      'Enterprise-scale page architecture',
      'On-page SEO improvements',
      'Reusable Elementor template library',
      'Performance optimization',
      'WooCommerce product management'
    ],
    bg: 'linear-gradient(135deg, rgba(37,99,235,0.1), rgba(124,58,237,0.08))'
  },
  {
    id: 'standby24',
    emoji: '🏥',
    name: 'Standby24',
    url: 'standby24.co.uk',
    liveUrl: 'https://standby24.co.uk',
    category: 'Healthcare Staffing',
    categoryColor: 'emerald',
    desc: 'Custom healthcare staffing recruitment platform with CPT-based job listings, ACF-powered admin content, Microsoft Outlook SMTP form delivery, and dashboard data logging.',
    tech: ['Elementor', 'Ultimate Addons', 'ACF', 'Custom CPTs', 'CF7', 'Outlook SMTP'],
    features: [
      'Job listings via Custom Post Types',
      'ACF-powered structured content',
      'Microsoft Outlook SMTP integration',
      'Form submission data logging dashboard',
      'Mobile-optimized recruitment UX',
      'Professional branded header/footer'
    ],
    bg: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.06))'
  },
  {
    id: 'onecall24health',
    emoji: '⚕️',
    name: 'OneCall24 Healthcare',
    url: 'onecall24healthcare.co.uk',
    liveUrl: 'https://onecall24healthcare.co.uk',
    category: 'Healthcare Staffing',
    categoryColor: 'emerald',
    desc: 'Healthcare staffing site with strong conversion paths, structured admin content, secure form routing via Outlook SMTP, and dynamic form tracking with dashboard logging.',
    tech: ['Elementor Pro', 'Ultimate Addons', 'ACF', 'Custom CPTs', 'CF7', 'SMTP'],
    features: [
      'Conversion-optimized page design',
      'Dynamic form submission tracking',
      'Secure SMTP form routing',
      'Admin dashboard data logging',
      'Mobile-first accessibility',
      'Structured CPT content architecture'
    ],
    bg: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(37,99,235,0.06))'
  },
  {
    id: 'imsnhance',
    emoji: '💼',
    name: 'IMS Nhance',
    url: 'imsnhance.com',
    liveUrl: 'https://imsnhance.com',
    category: 'Digital Services',
    categoryColor: 'violet',
    desc: 'Digital transformation services website with custom interactive sections, filterable content areas, CPT-based backend, form database logging, and custom JS/CSS enhancements.',
    tech: ['Elementor Pro', 'Ultimate Addons', 'ACF', 'Custom CPTs', 'CF7', 'Custom JS/CSS'],
    features: [
      'Dynamic content tabs & filters',
      'Interactive animated sections',
      'Form data stored in WordPress database',
      'Custom HTML/CSS/JS enhancements',
      'CPT-based flexible content structure',
      'Filterable portfolio/services sections'
    ],
    bg: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(245,158,11,0.06))'
  },
  {
    id: 'onecall24',
    emoji: '👥',
    name: 'OneCall24',
    url: 'onecall24.co.uk',
    liveUrl: 'https://onecall24.co.uk',
    category: 'Medical Staffing',
    categoryColor: 'blue',
    desc: "UK's leading medical staffing agency website — high-traffic optimized build using WP Bakery, WPForms with conditional logic, live Google Reviews API, and custom JS interactions.",
    tech: ['WP Bakery', 'WPForms', 'Google Reviews API', 'Custom CSS/JS', 'PHP'],
    features: [
      'High-traffic performance optimization',
      'Conditional WPForms logic',
      'Live Google Reviews integration',
      'Sticky header scroll interactions',
      'Scalable page template structure',
      'Cross-browser responsive design'
    ],
    bg: 'linear-gradient(135deg, rgba(37,99,235,0.1), rgba(6,182,212,0.06))'
  },
  {
    id: 'onecall24edu',
    emoji: '🎓',
    name: 'OneCall24 Education',
    url: 'onecall24education.co.uk',
    liveUrl: 'https://onecall24education.co.uk',
    category: 'Education Staffing',
    categoryColor: 'amber',
    desc: 'Education staffing platform connecting institutions with teaching professionals via Gravity Forms applications, candidate registrations, coverage maps, and animated sections.',
    tech: ['Elementor Pro', 'Premium Addons', 'Ultimate Addons', 'Gravity Forms', 'PHP'],
    features: [
      'Job application forms via Gravity Forms',
      'Candidate registration workflows',
      'Interactive coverage map',
      'Testimonials section with animations',
      'Mobile-accessible recruitment portal',
      'SEO-optimized content structure'
    ],
    bg: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(37,99,235,0.06))'
  },
  {
    id: 'aurastaffing',
    emoji: '✨',
    name: 'Aura Staffing',
    url: 'imsnhance.in/aurastaffing',
    liveUrl: 'https://imsnhance.in/aurastaffing',
    category: 'Healthcare Recruitment',
    categoryColor: 'rose',
    desc: 'National healthcare recruitment platform built on a child theme to connect medical professionals with opportunities across India — featuring multi-step forms and custom templates.',
    tech: ['Elementor Pro', 'Premium Addons', 'CF7', 'Ninja Forms', 'Child Theme', 'PHP'],
    features: [
      'Multi-step recruitment forms',
      'Custom WordPress child theme',
      'Ninja Forms & CF7 integration',
      'National coverage recruitment portal',
      'Custom page template overrides',
      'Fully responsive mobile design'
    ],
    bg: 'linear-gradient(135deg, rgba(244,63,94,0.08), rgba(124,58,237,0.06))'
  }
];

/* ==================== GSAP INIT ==================== */
gsap.registerPlugin(ScrollTrigger);

/* ==================== CUSTOM CURSOR ==================== */
const dot  = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.left = mx + 'px'; dot.style.top = my + 'px';
});
(function animRing() {
  rx += (mx - rx) * 0.11;
  ry += (my - ry) * 0.11;
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(animRing);
})();

document.querySelectorAll('a, button, .btn, .project-card, .f-btn, .glass-hover, .popup-close-btn, .faq-question').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
});
document.addEventListener('mousedown', () => ring.classList.add('clicking'));
document.addEventListener('mouseup',   () => ring.classList.remove('clicking'));

/* ==================== HEADER SCROLL ==================== */
const header = document.querySelector('.header');
window.addEventListener('scroll', () => header?.classList.toggle('scrolled', window.scrollY > 60), { passive: true });

/* ==================== MOBILE MENU ==================== */
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');
navToggle?.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('mobile-open');
  document.body.style.overflow = navLinks.classList.contains('mobile-open') ? 'hidden' : '';
});
document.querySelectorAll('.nav-links a').forEach(l => l.addEventListener('click', () => {
  navToggle?.classList.remove('open');
  navLinks?.classList.remove('mobile-open');
  document.body.style.overflow = '';
}));

/* ==================== ACTIVE NAV ==================== */
const cur = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(l => {
  if (l.getAttribute('href') === cur || (cur === '' && l.getAttribute('href') === 'index.html'))
    l.classList.add('active');
});

/* ==================== CANVAS PARTICLES ==================== */
function initCanvas(id) {
  const canvas = document.getElementById(id);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = canvas.width = canvas.offsetWidth;
  let H = canvas.height = canvas.offsetHeight;
  const COUNT = Math.min(80, Math.floor((W * H) / 14000));
  const PALETTE = ['#2563eb', '#06b6d4', '#7c3aed', '#3b82f6'];
  const particles = [];

  class P {
    constructor(init = false) {
      this.x = Math.random() * W;
      this.y = init ? Math.random() * H : H + 10;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = -(Math.random() * 0.5 + 0.15);
      this.r = Math.random() * 1.6 + 0.4;
      this.a = Math.random() * 0.6 + 0.2;
      this.color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      this.life = 0; this.max = Math.random() * 200 + 80;
    }
    update() {
      this.x += this.vx; this.y += this.vy; this.life++;
      if (this.life > this.max || this.y < -10) Object.assign(this, new P());
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.a * (1 - this.life / this.max);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 6; ctx.shadowColor = this.color;
      ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < COUNT; i++) particles.push(new P(true));

  function connections() {
    for (let i = 0; i < particles.length - 1; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 110) {
          ctx.save();
          ctx.globalAlpha = (1 - d / 110) * 0.1;
          ctx.strokeStyle = '#2563eb'; ctx.lineWidth = 0.5;
          ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke(); ctx.restore();
        }
      }
    }
  }

  let lightningPath = [], lightningA = 0, lightTick = 0;
  function newLightning() {
    lightningPath = []; let x = Math.random() * W, y = 0;
    while (y < H) { lightningPath.push({ x, y }); x += (Math.random() - 0.5) * 55; y += Math.random() * 28 + 18; }
    lightningA = 0.6;
  }
  function drawLightning() {
    if (!lightningPath.length || lightningA <= 0) return;
    ctx.save(); ctx.globalAlpha = lightningA;
    ctx.strokeStyle = '#06b6d4'; ctx.lineWidth = 1; ctx.shadowBlur = 16; ctx.shadowColor = '#06b6d4';
    ctx.beginPath(); ctx.moveTo(lightningPath[0].x, lightningPath[0].y);
    lightningPath.forEach(p => ctx.lineTo(p.x, p.y)); ctx.stroke(); ctx.restore();
    lightningA -= 0.02;
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    connections();
    lightTick++;
    if (lightTick % 200 === 0) newLightning();
    drawLightning();
    requestAnimationFrame(loop);
  }
  loop();

  const ro = new ResizeObserver(() => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; });
  ro.observe(canvas.parentElement);
}

/* ==================== TYPEWRITER ==================== */
function typeWriter(el, words, speed = 90, pause = 2200) {
  let wi = 0, ci = 0, del = false;
  function step() {
    const w = words[wi];
    el.textContent = del ? w.substring(0, ci - 1) : w.substring(0, ci + 1);
    if (!del) { ci++; if (ci === w.length) { del = true; setTimeout(step, pause); return; } }
    else { ci--; if (ci === 0) { del = false; wi = (wi + 1) % words.length; } }
    setTimeout(step, del ? speed / 2 : speed);
  }
  step();
}

/* ==================== COUNTERS ==================== */
const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting && !e.target.dataset.done) {
      e.target.dataset.done = 1;
      const target = +e.target.dataset.target;
      const suf = e.target.dataset.suffix || '';
      let cur = 0; const dur = 1800; const step = 16;
      const inc = target / (dur / step);
      const t = setInterval(() => {
        cur += inc;
        if (cur >= target) { cur = target; clearInterval(t); }
        e.target.textContent = Math.floor(cur) + suf;
      }, step);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-counter]').forEach(el => counterObs.observe(el));

/* ==================== SKILL BARS ==================== */
const skillObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(b => {
        setTimeout(() => { b.style.width = b.dataset.width + '%'; }, 120);
      });
      skillObs.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.skill-bars').forEach(el => skillObs.observe(el));

/* ==================== SCROLL REVEAL ==================== */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.1, rootMargin: '0px 0px -70px 0px' });
document.querySelectorAll('.reveal, .reveal-l, .reveal-r, .reveal-s').forEach(el => revObs.observe(el));

/* ==================== 3D TILT ==================== */
document.querySelectorAll('.tilt').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    card.style.transform = `perspective(1000px) rotateX(${y * -14}deg) rotateY(${x * 14}deg) translateZ(8px)`;
    const shine = card.querySelector('.tilt-shine');
    if (shine) shine.style.background = `radial-gradient(circle at ${(x+0.5)*100}% ${(y+0.5)*100}%, rgba(255,255,255,0.06) 0%, transparent 65%)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    const shine = card.querySelector('.tilt-shine');
    if (shine) shine.style.background = '';
  });
});

/* ==================== PROJECT FILTER ==================== */
document.querySelectorAll('.f-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      const show = filter === 'all' || card.dataset.cat === filter;
      gsap.to(card, {
        opacity: show ? 1 : 0.2, scale: show ? 1 : 0.94,
        duration: 0.4, ease: 'power2.out'
      });
      card.style.pointerEvents = show ? '' : 'none';
    });
  });
});

/* ==================== POPUP SYSTEM ==================== */
const overlay  = document.getElementById('projectPopup');

function fillPopup(project) {
  document.getElementById('popupIcon').textContent    = project.emoji;
  document.getElementById('popupCat').textContent     = project.category;
  document.getElementById('popupTitle').textContent   = project.name;
  document.getElementById('popupUrlText').textContent = project.url;
  document.getElementById('popupUrlLink').href        = project.liveUrl;
  document.getElementById('popupLiveBtn').href        = project.liveUrl;

  // Browser URL
  const urlBar = document.getElementById('popupBrowserUrl');
  if (urlBar) urlBar.textContent = project.url;

  // Screen bg
  const screen = document.getElementById('popupScreen');
  if (screen) {
    screen.style.background = project.bg;
    const emojiEl = screen.querySelector('.popup-screen-emoji');
    if (emojiEl) emojiEl.textContent = project.emoji;
  }

  // Description
  document.getElementById('popupDesc').textContent = project.desc;

  // Tech tags
  const techWrap = document.getElementById('popupTech');
  techWrap.innerHTML = project.tech.map(t => `<span class="popup-tech-tag">${t}</span>`).join('');

  // Features
  const featList = document.getElementById('popupFeatures');
  featList.innerHTML = project.features.map(f => `<li>${f}</li>`).join('');
}

function openPopup(projectId) {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project || !overlay) return;

  fillPopup(project);
  overlay.classList.remove('closing');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  // GSAP stagger inside popup after CSS transition
  gsap.from('#popupInfo > *', {
    opacity: 0, y: 18, duration: 0.5, stagger: 0.07, ease: 'power2.out', delay: 0.45
  });
}

function closePopup() {
  if (!overlay) return;
  overlay.classList.add('closing');
  setTimeout(() => {
    overlay.classList.remove('active', 'closing');
    document.body.style.overflow = '';
  }, 450);
}

// Expose globally for onclick
window.openPopup  = openPopup;
window.closePopup = closePopup;

// Keyboard & backdrop close
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePopup(); });
overlay?.querySelector('.popup-bg')?.addEventListener('click', closePopup);

/* ==================== GSAP SCROLL ANIMATIONS ==================== */
gsap.utils.toArray('.parallax-divider .pd-bg').forEach(bg => {
  gsap.to(bg, {
    yPercent: 25, ease: 'none',
    scrollTrigger: { trigger: bg.closest('.parallax-divider'), start: 'top bottom', end: 'bottom top', scrub: 1 }
  });
});

// Hero floating elements parallax
gsap.utils.toArray('.hero-glow-1, .hero-glow-2').forEach((el, i) => {
  gsap.to(el, {
    y: (i + 1) * -80, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.5 }
  });
});

// Stagger on sections
gsap.utils.toArray('.services-grid .srv-card, .projects-grid .project-card, .all-projects-grid .project-card').forEach((card, i) => {
  gsap.from(card, {
    opacity: 0, y: 50, duration: 0.8, ease: 'power3.out',
    scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' },
    delay: (i % 3) * 0.12
  });
});

// Stats band counter visual
gsap.from('.stat-num', {
  textContent: 0, snap: { textContent: 1 },
  duration: 1.5, ease: 'power1.out', stagger: 0.15,
  scrollTrigger: { trigger: '.stats-band', start: 'top 80%', toggleActions: 'play none none none' }
});

/* ==================== GSAP HERO ENTRANCE ==================== */
if (document.querySelector('.hero')) {
  const heroTL = gsap.timeline({ delay: 0.2 });
  heroTL
    .from('.hero-status',    { opacity: 0, y: -20, duration: 0.7, ease: 'power2.out' })
    .from('.hero-name',      { opacity: 0, y: 20,  duration: 0.6, ease: 'power2.out' }, '-=0.4')
    .from('.hero-title',     { opacity: 0, y: 30,  duration: 0.7, ease: 'power3.out' }, '-=0.4')
    .from('.hero-role-wrap', { opacity: 0, y: 20,  duration: 0.6, ease: 'power2.out' }, '-=0.4')
    .from('.hero-desc',      { opacity: 0, y: 20,  duration: 0.6, ease: 'power2.out' }, '-=0.3')
    .from('.hero-actions',   { opacity: 0, y: 20,  duration: 0.6, ease: 'power2.out' }, '-=0.3')
    .from('.hero-stats',     { opacity: 0, y: 20,  duration: 0.6, ease: 'power2.out' }, '-=0.2')
    .from('.terminal-card',  { opacity: 0, x: 60,  duration: 0.9, ease: 'power3.out' }, '-=0.8')
    .from('.float-badge',    { opacity: 0, scale: 0.7, duration: 0.6, stagger: 0.2, ease: 'back.out(2)' }, '-=0.4');
}

/* ==================== SMOOTH SCROLL ==================== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});

/* ==================== MAGNETIC BUTTONS ==================== */
document.querySelectorAll('.btn-primary').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width  / 2) * 0.22;
    const y = (e.clientY - r.top  - r.height / 2) * 0.22;
    btn.style.transform = `translate(${x}px,${y}px) translateY(-3px) scale(1.02)`;
  });
  btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
});

/* ==================== CONTACT FORM ==================== */
const form = document.querySelector('.contact-form');
form?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('.f-submit');
  const orig = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    btn.style.background = 'linear-gradient(135deg,#10b981,#059669)';
    setTimeout(() => { btn.innerHTML = orig; btn.disabled = false; btn.style.background = ''; form.reset(); }, 3200);
  }, 1800);
});

/* ==================== BACK TO TOP ==================== */
window.addEventListener('scroll', () => {
  const b = document.querySelector('.back-top');
  if (b) { b.style.opacity = window.scrollY > 500 ? '1' : '0'; b.style.transform = window.scrollY > 500 ? 'translateY(0)' : 'translateY(16px)'; }
}, { passive: true });

/* ==================== INIT ==================== */
window.addEventListener('DOMContentLoaded', () => {
  initCanvas('hero-canvas');
  initCanvas('page-hero-canvas');

  const typingEl = document.querySelector('.hero-role-type');
  if (typingEl) typeWriter(typingEl, ['WordPress Developer', 'WooCommerce Expert', 'Core Contributor', 'Plugin Developer', 'UI/UX Implementer']);
});
