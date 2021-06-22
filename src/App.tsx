import { RootStateOrAny, useSelector } from 'react-redux';
import './App.scss';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';

const App = () => {
  const currentTheme = useSelector((state: RootStateOrAny) => state.themes.selected);

  return (
    <div className={currentTheme + ' neu-frame'}>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
