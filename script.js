// Aasaan Landing Page Interactions
// - Mobile nav toggle
// - Reveal on scroll animations
// - Simple email and demo forms (client-side only)

(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // Year in footer
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav
  const navToggle = $('.nav-toggle');
  const navMenu = $('#nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('show');
    });
  }

  // Reveal on scroll
  const revealEls = $$('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('revealed'));
  }

  // Simple form handlers (mock)
  function handleForm(formId) {
    const form = $(formId);
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]');
      if (email && email.validity.valid) {
        alert('Thanks! We\'ll keep you posted.');
        form.reset();
      } else {
        alert('Please enter a valid email.');
        email && email.focus();
      }
    });
  }

  handleForm('#signupForm');
  handleForm('#footerSignup');
  handleForm('#demoForm');

  // Prevent unexpected auto-scroll on load/refresh
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.addEventListener('load', () => {
    // If URL has a hash, keep at top unless user navigated intentionally
    if (location.hash === '') {
      window.scrollTo(0, 0);
    }
  });
})();
