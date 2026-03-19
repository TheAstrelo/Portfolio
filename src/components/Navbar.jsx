import { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { personalInfo, navLinks } from '../data/content';
import { useScrollTo, useBodyScrollLock } from '../hooks';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = useScrollTo();

  useBodyScrollLock(menuOpen);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollTo(href.slice(1));
  }, [scrollTo]);

  return (
    <nav className="navbar">
      <a href="#" className="nav-name">
        {personalInfo.name}
      </a>

      <div className="nav-right">
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {personalInfo.available && (
          <div className="nav-badge">
            <span className="badge-dot" />
            Available
          </div>
        )}

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {createPortal(
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <ul className="mobile-menu-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>,
        document.body
      )}
    </nav>
  );
};

export default Navbar;
