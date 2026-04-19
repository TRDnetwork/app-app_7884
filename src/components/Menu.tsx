import React from 'react';

const menuItems = [
  { name: 'Espresso', description: 'Rich, bold shot of pure coffee essence.', price: '$3.00' },
  { name: 'Latte', description: 'Espresso with steamed milk and a light foam.', price: '$4.50' },
  { name: 'Cappuccino', description: 'Equal parts espresso, steamed milk, and foam.', price: '$4.75' },
  { name: 'Americano', description: 'Espresso diluted with hot water for a smooth taste.', price: '$3.50' },
  { name: 'Mocha', description: 'Espresso with chocolate and steamed milk.', price: '$5.00' },
  { name: 'Cold Brew', description: 'Smooth, slow-steeped coffee served over ice.', price: '$4.25' },
];

const Menu: React.FC = () => {
  return (
    <section id="menu" className="section">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#2F4F2F]">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <div key={index} className="card">
            <h3 className="text-xl font-bold text-[#2F4F2F] mb-2">{item.name}</h3>
            <p className="text-[#6B5E50] text-sm mb-3 leading-relaxed">{item.description}</p>
            <p className="text-[#8B4513] font-semibold">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;