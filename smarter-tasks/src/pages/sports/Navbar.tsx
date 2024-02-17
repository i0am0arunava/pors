import React, { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link: React.SetStateAction<string>) => {
    setActiveLink(link);
  };

  return (
    <div className="Navbar">
      <ul className="flex space-x-4 text-gray-300">
        <li>
          <a
            href="#home"
            className={`nav-link ${activeLink === '#home' ? 'active' : ''}`}
            onClick={() => handleLinkClick('#home')}
          >
            All News
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={`nav-link ${activeLink === '#about' ? 'active' : ''}`}
            onClick={() => handleLinkClick('#about')}
          >
            Basket Ball
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`nav-link ${activeLink === '#contact' ? 'active' : ''}`}
            onClick={() => handleLinkClick('#contact')}
          >
            American
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
