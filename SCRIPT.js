/* ── Active nav link highlight ── */
(function () {
  /* ── Active nav link highlight ── */
  const page = location.pathname.split('/').pop() || 'INDEX.html';
  document.querySelectorAll('nav ul a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href.toLowerCase() === page.toLowerCase()) {
      a.classList.add('active');
    }
  });
})();

/* ── Smooth scroll for same-page anchors ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ── Contact form submission handler ── */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = form.querySelector('.btn-primary');
    btn.textContent = 'Sending…';
    setTimeout(() => {
      btn.textContent = '✓ Message Sent!';
      btn.style.background = '#3b2009';
      form.reset();
    }, 1200);
  });
}

/* ── Sign-out with page transition ── */
// FIX: was declared twice — now declared once, redirects to AUTH.html
const signOutBtn = document.getElementById('signOutBtn');
if (signOutBtn) {
  signOutBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const style = document.createElement('style');
    style.textContent = `@keyframes slideUp { 0%{transform:translateY(100%)} 100%{transform:translateY(0)} }`;
    document.head.appendChild(style);
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed; inset:0;
      background:#3b2009;
      z-index:1000;
      animation: slideUp 0.65s cubic-bezier(0.76,0,0.24,1) forwards;
    `;
    document.body.appendChild(overlay);
    setTimeout(() => window.location.href = 'AUTH.html', 650);
  });
}

/* ── Hamburger / mobile nav ── */
// FIX: was nested inside the signOutBtn if-block (missing closing brace) — now at top level
const toggle   = document.getElementById('navToggle');
const menu     = document.getElementById('navMenu');
const backdrop = document.getElementById('navBackdrop');

if (toggle && menu && backdrop) {
  function openMenu() {
    menu.classList.add('open');
    backdrop.classList.add('open');
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('open');
    backdrop.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () =>
    menu.classList.contains('open') ? closeMenu() : openMenu()
  );
  backdrop.addEventListener('click', closeMenu);
  menu.querySelectorAll('a').forEach(l => l.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
}