document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  if (!toggleButton || !navList) {
    return;
  }

  toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
    toggleButton.setAttribute('aria-expanded', navList.classList.contains('active'));
  });
});
