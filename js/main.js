/* =====================================================================
   MOVE STUDIO — Landing Page interactions
   Full logic (nav scroll, mobile menu, scroll-reveal, form UX,
   price → form linking) is implemented in Step 5.
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
