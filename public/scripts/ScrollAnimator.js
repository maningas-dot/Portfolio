const observerOptions = {
  threshold: 0.2
};

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
};

const scrollObserver = new IntersectionObserver(handleIntersection, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach((element) => scrollObserver.observe(element));

  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  const navbar = document.querySelector('.navbar');
  const updateNavbar = () => {
    if (!navbar) {
      return;
    }
    navbar.classList.toggle('scrolled', window.scrollY > 16);
  };

  updateNavbar();
  window.addEventListener('scroll', updateNavbar, { passive: true });
});
