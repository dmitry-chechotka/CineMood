// index_script.js
// Dinamiskās daļiņas izveide
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Nejaušs izmērs un pozīcija
    const size = Math.random() * 4 + 1;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = Math.random() * 10 + 10 + 's';

    particlesContainer.appendChild(particle);
  }
}

// Gludas navigācijas ritināšana
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Navigācijas fona maiņa ritinot
let lastScrollTop = 0;
window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  const currentScrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > 100) {
    nav.style.background = 'rgba(15, 15, 35, 0.95)';
    nav.style.backdropFilter = 'blur(20px)';
  } else {
    nav.style.background = 'rgba(255, 255, 255, 0.1)';
    nav.style.backdropFilter = 'blur(10px)';
  }

  lastScrollTop = currentScrollTop;
});

// Paralaksa efekts hero sadaļai
window.addEventListener('scroll', function () {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  const background = document.querySelector('.background');

  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }

  if (background) {
    background.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// Intersection Observer animācijām
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Novēro visus feature card elementus
document.querySelectorAll('.feature-card').forEach((card) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'all 0.6s ease';
  observer.observe(card);
});

// Palaižam daļiņu izveidi, kad lapa ir ielādēta
window.addEventListener('load', function () {
  createParticles();

  // Pievienojam hover efektu pogām
  document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-5px) scale(1.05)';
    });

    btn.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// Kursora sekošanas efekts
document.addEventListener('mousemove', function (e) {
  const cursor = document.querySelector('.cursor');
  if (!cursor) {
    const newCursor = document.createElement('div');
    newCursor.className = 'cursor';
    newCursor.style.cssText = `
          position: fixed;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, rgba(255,107,107,0.8) 0%, rgba(255,107,107,0) 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.1s ease;
      `;
    document.body.appendChild(newCursor);
  }

  const cursorElement = document.querySelector('.cursor');
  if (cursorElement) {
    cursorElement.style.left = e.clientX - 10 + 'px';
    cursorElement.style.top = e.clientY - 10 + 'px';
  }
});
