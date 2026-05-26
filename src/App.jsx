import { useEffect } from 'react';
import PageRouter from './components/PageRouter.jsx';

const App = () => {
  useEffect(() => {
    document.title = 'Portfolio App';
  }, []);

  return <PageRouter />;
};

export default App;
