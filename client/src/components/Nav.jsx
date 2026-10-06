import React, {useState, useEffect, useRef} from 'react';

import st from 'ryscott-st';

import {IoMenu} from "react-icons/io5";

const pages = ['home', 'manufacturers', 'services', 'about', 'contact'];

const Nav = function() {
  const [isOpen, setIsOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(window.innerWidth < 1024 ? 80 : 140);
  const [logoLimit, setLogoLimit] = useState(window.innerWidth < 1024 ? 60 : 80);
  const toggle = useRef(null);

  const handleClick = function(page) {
    st.setPage(page);
    setIsOpen(false);

    if (st.isMobile) {
      toggle.current?.focus();
    }
  };

  const handleKeyDown = function(event) {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false);
      toggle.current?.focus();
    }
  };

  useEffect(()=>{
    const updateNavHeight = function() {
      const scrollTop = Math.max(0, window.scrollY);
      const maxHeight = window.innerWidth < 1024 ? 80 : 140;
      setNavHeight(Math.max(48, maxHeight - scrollTop));
    };

    updateNavHeight();
    window.addEventListener('scroll', updateNavHeight, {passive: true});
    window.addEventListener('resize', updateNavHeight);

    return () => {
      window.removeEventListener('scroll', updateNavHeight);
      window.removeEventListener('resize', updateNavHeight);
    };
  }, []);

  useEffect(()=>{
    setIsOpen(false);
  }, [st.page, st.isMobile]);

  return (
    <header className='head h' style={{height: `${navHeight}px`}} onKeyDown={handleKeyDown}>
      <button type='button' className='homeLogo' aria-label='Diversified Spec. Sales home' onClick={()=>{handleClick('home')}}>
        <img className='logoDropSvg' src='images/logo_drop.svg' alt=''/>
        <img className={`logoTextSvg ${navHeight > logoLimit ? 'visible' : 'hidden'}`} src='images/logo_text.svg' alt=''/>
      </button>
      <button
        type='button'
        className='menuToggle'
        ref={toggle}
        aria-label='Toggle navigation menu'
        aria-expanded={isOpen}
        aria-controls='primary-navigation'
        onClick={()=>{setIsOpen(!isOpen)}}
      >
        <IoMenu size={28} aria-hidden='true'/>
      </button>
      <nav id='primary-navigation' aria-label='Main navigation' className={`links h${isOpen ? ' isOpen' : ''}`}>
        {pages.map((page) => {
          return (
            <button
              type='button'
              key={page}
              aria-current={st.page === page ? 'page' : undefined}
              onClick={()=>{handleClick(page)}}
            >
              {page.toUpperCase()}
            </button>
          );
        })}
      </nav>
    </header>
  );
};

export default Nav;
