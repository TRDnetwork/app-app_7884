import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Hours from './components/Hours';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <About />
      <Menu />
      <Hours />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;