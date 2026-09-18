import React, {useState, useEffect} from 'react';

import st from 'ryscott-st';

const Home = function() {
  return (
    <div className='home v'>
      <div className='heroTile tile h'>
        <img className='heroImage fade' src='/images/dss_hero.jpg'/>
        <div className='heroInfo'>
          <h2>The Plumbing Manufacturer's Rep Agency <br/>that works for YOU!</h2>
          <h3>We help you <b>specify, procure, install,</b> and <b>maintain</b> the best plumbing products on the market.</h3>
        </div>
      </div>
      <div className='tile h'>
        
      </div>
    </div>
  );
};

export default Home;