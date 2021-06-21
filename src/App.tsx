import { Component } from 'react';
import './App.scss';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
const App = () => {
  return (
    <div className="neu-frame">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
