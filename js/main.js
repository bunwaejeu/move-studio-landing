/* =====================================================================
   MOVE STUDIO — Landing Page interactions
   Form UX and price → form linking are implemented in Step 4/5.
   ===================================================================== */

// Enable reveal hidden-state only when JS runs (progressive enhancement:
// no-JS visitors still see all content).
document.documentElement.classList.add('js-reveal');

/* ---------------------------------------------------------------------
   Nav scroll state — background/blur once page scrolls past hero top
   --------------------------------------------------------------------- */
const nav = document.getElementById('nav');
function updateNavScroll(){
  if (window.scrollY > 40) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
}
updateNavScroll();
window.addEventListener('scroll', updateNavScroll, { passive: true });

/* ---------------------------------------------------------------------
   Mobile menu (hamburger drawer)
   --------------------------------------------------------------------- */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

function closeMobileMenu(){
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
function openMobileMenu(){
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  mobileMenu.classList.add('open');
  mobileMenu.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
hamburger.addEventListener('click', () => {
  hamburger.classList.contains('open') ? closeMobileMenu() : openMobileMenu();
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileMenu));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMobileMenu();
});

/* ---------------------------------------------------------------------
   Scroll reveal — fade+translateY blocks into view via IntersectionObserver.
   Elements already visible on load are marked `.in` immediately so the
   page never looks empty on first paint; a failsafe timeout forces all
   `.reveal` blocks visible if the observer never fires.
   --------------------------------------------------------------------- */
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });

  revealEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('in');
    } else {
      io.observe(el);
    }
  });

  setTimeout(() => revealEls.forEach((el) => el.classList.add('in')), 1200);
}
