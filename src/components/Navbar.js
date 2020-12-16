import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <a href='#' className='nav-links' onClick={closeMobileMenu} >
              LE CÔTÉ LUMINEUX
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-links' onClick={closeMobileMenu} >
              LE CÔTÉ OBSCUR
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-links' onClick={closeMobileMenu} >
              L'EMPIRE
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-links' onClick={closeMobileMenu} >
              LES DROÏDES
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-links' onClick={closeMobileMenu} >
              LES EWOKS
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-links' onClick={closeMobileMenu} >
              JABBA LE HUTT
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

