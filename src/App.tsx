import { useEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import './App.scss';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';

const App = () => {
  const currentTheme = useSelector((state: RootStateOrAny) => state?.themes?.selected);
  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  return (
    <div className={currentTheme + ' neu-frame'}>
      {currentTheme === 'starwarsmode' ? <div className="stars"></div> : null}
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
