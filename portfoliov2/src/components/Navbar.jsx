import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/LOGOPNG.png'
import '../styles/Navbar.scss';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar bg-violet-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-4xl font-bold logoimg">
          <img src={Logo} alt="Logo" />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button className="md:hidden block text-white" onClick={toggleMenu}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Desktop Links */}
        <div className={`navbar-links md:flex space-x-4 ${menuOpen ? 'block' : 'hidden'}`}>
          <Link to="/resume" className="text-white">Currículo</Link>
          <Link to="/projects" className="text-white">Projetos</Link>
          <Link to="/about" className="text-white">Sobre Mim</Link>
          <Link to="/contact" className="text-white">Contato</Link>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu md:hidden">
            <Link to="/resume" className="block text-white">Currículo</Link>
            <Link to="/projects" className="block text-white">Projetos</Link>
            <Link to="/about" className="block text-white">Sobre Mim</Link>
            <Link to="/contact" className="block text-white">Contato</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
