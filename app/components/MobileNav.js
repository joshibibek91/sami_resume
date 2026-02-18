'use client';

import { useState, useEffect, useRef } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = ['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Blog', 'Contact'];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const handleClick = (e) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target) &&
        btnRef.current && !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [open]);

  return (
    <>
      <button
        ref={btnRef}
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <HiX /> : <HiMenuAlt3 />}
      </button>

      <nav ref={menuRef} className={`mobile-menu ${open ? 'active' : ''}`}>
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
