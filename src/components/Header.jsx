import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleNavClick = (e, targetId) => {
    // If we are not on the homepage, navigate to home first, then scroll
    if (location.pathname !== '/') {
      return; // Let the standard link behavior take over or handle via state
    }
    
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setMenuActive(false);
    }
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="topbar">
        <div className="container">
          <div className="topbar-info">
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-map-marker-alt"></i>
              Hiranandani Business Park, Powai, Mumbai - 400071
            </a>
            <a href="tel:+918828495202">
              <i className="fas fa-phone"></i>
              +91 8828495202
            </a>
            <a href="mailto:info@cyberaries.com">
              <i className="fas fa-envelope"></i>
              info@cyberaries.com
            </a>
          </div>
          <div className="topbar-social">
            <a href="/" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="/" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="/" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="/" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img src="/cyberaries-logo.png" alt="Cyber Aries Logo" />
          </Link>
        </div>
        <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setMenuActive(false)}>Home</Link></li>
          <li><a href="/#about" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
          <li><a href="/#services" onClick={(e) => handleNavClick(e, '#services')}>Services</a></li>
          <li><Link to="/careers" className={location.pathname === '/careers' ? 'active' : ''} onClick={() => setMenuActive(false)}>Career</Link></li>
          <li><a href="/#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
        </ul>
        <a href="/appointment" className="cta-button">
          Book Free Consultation
        </a>
        <button 
          className="menu-toggle" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation menu"
          style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
        >
          <i className="fas fa-bars"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;