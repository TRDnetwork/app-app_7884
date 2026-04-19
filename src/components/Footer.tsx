import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2F4F2F] text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Bean & Brew. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#E8DCC5] transition-colors duration-200"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#E8DCC5] transition-colors duration-200"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#E8DCC5] transition-colors duration-200"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;