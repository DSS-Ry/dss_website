import React, {useState, useEffect} from 'react';

import '../styles/style.css';
import st from 'ryscott-st';

import Nav from './Nav.jsx';
import Foot from './Foot.jsx';

import Home from './pages/Home.jsx';
import Manufacturers from './pages/Manufacturers.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

const mobile_break = 769;

const pages = {
  home: <Home/>,
  manufacturers: <Manufacturers/>,
  services: <Services/>,
  about: <About/>,
  contact: <Contact/>
};

const App = function() {
  const [page, setPage] = st.newState('page', useState('home'));
  const [isMobile, setIsMobile] = st.newState('isMobile', useState(window.innerWidth < mobile_break));

  useEffect(()=>{
    const handleResize = function() {
      if (window.innerWidth < mobile_break) {
        setIsMobile(true);
      } 
      
      if (window.innerWidth >= mobile_break) {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div id='app' className='app'>
      <Nav/>
      {pages[page]}
      <Foot/>
    </div>
  );
};

export default App;

