import React, { useState } from 'react';


const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
 
  const handleLinkClick = (link: React.SetStateAction<string>) => {
    setActiveLink(link);
  };
const show =(a:string)=>{
   console.log(a);
}
  return (
    <div className="Navbar">
      <ul className="flex space-x-4 text-gray-300">
        <li className={`nav-link ${activeLink === '#home' ? 'active' : ''}`}
            onClick={() => handleLinkClick('#home')}>
            <button
            type="button"
          
            onClick={() => show('a')}
          >
            All News
          </button>
        </li>
        <li className={`nav-link ${activeLink === '#b' ? 'active' : ''}`}
            onClick={() => handleLinkClick('#b')}>
            <button
            type="button"
            className={`nav-button ${activeLink === '#b' ? 'active' : ''}`}
            onClick={() => show('b')}
          >
            All News
          </button>
        </li>
        <li className={`nav-link ${activeLink === '#c' ? 'active' : ''}`}
            onClick={() => handleLinkClick('#c')}>
            <button
            type="button"
            className={`nav-button ${activeLink === '#c' ? 'active' : ''}`}
            onClick={() => show('c')}
          >
            All News
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
