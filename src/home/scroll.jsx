// npm install lucide-react    // need to install this

import "./scroll.css"

import React, { useState, useEffect } from 'react';
import { ArrowUpCircle } from 'lucide-react'; // Optional icon


const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 1500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 730,
      behavior: 'smooth',
    });
  };

  return (
    visible && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        <ArrowUpCircle size={32} color="white" />
      </button>
    )
  );
};

export default ScrollToTopButton;
