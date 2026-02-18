'use client';

import { useEffect, useState } from 'react';
import { HiArrowUp } from 'react-icons/hi';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      className={`scroll-top ${visible ? 'visible' : ''}`}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        history.replaceState(null, '', window.location.pathname);
      }}
      aria-label="Scroll to top"
    >
      <HiArrowUp />
    </button>
  );
}
