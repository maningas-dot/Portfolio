import { useEffect } from 'react';

const basePath = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
const PATH_MAP = {
  '/': 'pages/LandingPage.html',
  '/about': 'pages/AboutPage.html',
  '/portfolio': 'pages/PortfolioPage.html'
};

Object.keys(PATH_MAP).forEach((path) => {
  if (basePath) {
    const normalizedPath = path === '/' ? basePath : `${basePath}${path}`;
    PATH_MAP[normalizedPath] = PATH_MAP[path];
  }
});

const PageRouter = () => {
  useEffect(() => {
    const currentPath = window.location.pathname.replace(/\/$/, '');
    const targetPath = PATH_MAP[currentPath] || `${basePath ? `${basePath}/` : '/'}pages/LandingPage.html`;
    if (window.location.pathname !== targetPath) {
      window.location.replace(targetPath);
    }
  }, []);

  return null;
};

export default PageRouter;
