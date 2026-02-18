'use client';

import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = ['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Blog', 'Contact'];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <HiX /> : <HiMenuAlt3 />}
      </button>

      <div className={`mobile-menu-overlay ${open ? 'active' : ''}`} onClick={() => setOpen(false)} />

      <nav className={`mobile-menu ${open ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            {link}
          </a>
        ))}
      </nav>
    </>
  );
}
