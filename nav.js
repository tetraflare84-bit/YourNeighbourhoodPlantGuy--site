// Mobile Navigation & Header Scroll Behavior
function toggleMobileNav() {
  const menu = document.getElementById('navMenu');
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  if (menu) {
    const isOpen = menu.classList.toggle('open');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      }
    }
  }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
  const menu = document.getElementById('navMenu');
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  if (menu && menu.classList.contains('open')) {
    if (!menu.contains(e.target) && !toggleBtn.contains(e.target)) {
      menu.classList.remove('open');
      if (toggleBtn) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        const icon = toggleBtn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      }
    }
  }
});

// Add subtle glass shadow on scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('.site-header');
  if (header) {
    if (window.scrollY > 15) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
}, { passive: true });
