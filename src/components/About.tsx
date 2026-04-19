import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1 space-y-4 text-lg">
          <p className="text-[#2F4F2F] leading-relaxed">
            At Bean & Brew, we believe that every cup of coffee tells a story. 
            Since 2020, we've been passionately roasting and brewing the finest 
            beans sourced from sustainable farms around the world.
          </p>
          <p className="text-[#2F4F2F] leading-relaxed">
            Our baristas are artisans, trained to bring out the unique flavors 
            in every blend. Whether you're stopping by for your morning espresso 
            or relaxing with a cold brew on a Sunday afternoon, we're here to 
            make your moment special.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Coffee shop interior"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default About;