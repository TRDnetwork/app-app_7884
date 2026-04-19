import React from 'react';

const Hero: React.FC = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section text-center bg-[#2F4F2F] text-white flex flex-col items-center justify-center py-24 md:py-32">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Bean & Brew</h1>
      <p className="text-lg md:text-xl mb-8 opacity-90">Hand-crafted coffee since 2020</p>
      <button onClick={scrollToMenu} className="btn-primary text-lg">
        View Menu
      </button>
    </section>
  );
};

export default Hero;