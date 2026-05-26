import { useEffect } from 'react';

const PATH_MAP = {
  '/': '/pages/LandingPage.html',
  '/about': '/pages/AboutPage.html',
  '/portfolio': '/pages/PortfolioPage.html'
};

const PageRouter = () => {
  useEffect(() => {
    const currentPath = window.location.pathname.replace(/\/$/, '');
    const targetPath = PATH_MAP[currentPath] || '/pages/LandingPage.html';
    if (window.location.pathname !== targetPath) {
      window.location.replace(targetPath);
    }
  }, []);

  return null;
};

export default PageRouter;
