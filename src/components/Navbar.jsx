import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target) && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close menu on resize if mobile menu is open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Toggle menu function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`} 
      onKeyDown={handleKeyDown}
      aria-label="Main navigation"
    >
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink to="/" aria-label="Homepage">
            <span className="logo-text">Dr. Nadeem Irfan Bukhari</span>
          </NavLink>
        </div>
        
        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          ref={navRef}
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <span className="menu-toggle-bar"></span>
          <span className="menu-toggle-bar"></span>
          <span className="menu-toggle-bar"></span>
        </button>
        
        <div 
          id="nav-menu" 
          ref={menuRef}
          className={`nav-menu-wrapper ${isOpen ? 'active' : ''}`}
          aria-hidden={!isOpen}
        >
          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} 
                onClick={() => setIsOpen(false)}
                aria-current={({isActive}) => isActive ? 'page' : undefined}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/research-interests" 
                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} 
                onClick={() => setIsOpen(false)}
                aria-current={({isActive}) => isActive ? 'page' : undefined}
              >
                Research Interests
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/academics" 
                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} 
                onClick={() => setIsOpen(false)}
                aria-current={({isActive}) => isActive ? 'page' : undefined}
              >
                Academics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/professional-experience" 
                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} 
                onClick={() => setIsOpen(false)}
                aria-current={({isActive}) => isActive ? 'page' : undefined}
              >
                Professional Experience
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/publications-projects" 
                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} 
                onClick={() => setIsOpen(false)}
                aria-current={({isActive}) => isActive ? 'page' : undefined}
              >
                Publications & Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/conferences-workshops" 
                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} 
                onClick={() => setIsOpen(false)}
                aria-current={({isActive}) => isActive ? 'page' : undefined}
              >
                Conferences & Workshops
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/contact" 
                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} 
                onClick={() => setIsOpen(false)}
                aria-current={({isActive}) => isActive ? 'page' : undefined}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 