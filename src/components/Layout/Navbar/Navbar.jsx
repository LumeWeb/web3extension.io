import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import logo from '/src/assets/lume-logo.png';

function Navbar({ view }) {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    if(nav) {
      document.body.classList.remove("scroll-lock");
      setNav(false);
    } else {
      document.body.classList.add("scroll-lock");
      setNav(true);
    }
  }

  const onMenuClick = function(event) {
    if(!nav) {
      return;
    }

    if(event.pageX < event.target.offsetLeft) {
      // click outside of menu
      toggleNav();
    }
  }

  useEffect(() => {
    let resizeTimeout;
    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if(nav && window.innerWidth >= 768) {
          toggleNav();
        }
      }, 25);
    };

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [nav]);

  return (
    <nav>
      <div className="logo">
        <a href="/">
          <img src={logo.src} alt="Lume" />
        </a>
      </div>
      <menu className={nav ? 'active' : undefined} onClick={onMenuClick}>
        <li>
          <a href="/" className={view === 'home' ? 'current' : undefined} aria-current={view === 'home' ? 'page' : undefined}>Home</a>
        </li>
        <li>
          <a href="/donate" className={view === 'donate' ? 'current' : undefined} aria-current={view === 'donate' ? 'page' : undefined}>Donate</a>
        </li>
        <li>
          <a href="https://lumeweb.com" className="lume">
            LumeWeb
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </li>
      </menu>
      <button className="hamburger" onClick={toggleNav}>☰</button>
    </nav>
  )
}

export default Navbar
