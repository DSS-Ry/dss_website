import React, {useState, useEffect} from 'react';

import '../styles/style.css';
import st from 'ryscott-st';

import Head from './Head.jsx';
import Foot from './Foot.jsx';

const mobile_break = 769;

const App = function() {
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
    <div id='app' className='app v'>
      <Head/>
      <Foot/>
    </div>
  );
};

export default App;

