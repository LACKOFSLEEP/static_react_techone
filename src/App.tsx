import React from 'react';
import './App.css';
import Header from './component/Header';
import Title from './component/Title';
import Logo from './component/Logo';
import AustralianMadeBanner from './component/AustralianMadeBanner';
import DigitalRevolutionBanner from './component/DigitalRevolutionBanner';
import Gallery from './component/Gallery';
import Blocks from './component/Blocks';
import AskUs from './component/AskUs';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <Logo />
      <AustralianMadeBanner />
      <DigitalRevolutionBanner />
      <Gallery  />
      <Blocks />
      <AskUs />
      <Footer />
    </div>
  );
}

export default App;
