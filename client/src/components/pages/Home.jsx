import React, {useState, useEffect} from 'react';

import st from 'ryscott-st';

import Carousel from './Carousel.jsx';

const images = [
  {src: '/images/sloan/sloan1.jpeg', alt: 'Sloan'},
  {src: '/images/sloan/sloan2.jpg', alt: 'Sloan'},
  {src: '/images/sloan/sloan3.jpg', alt: 'Sloan'},
  {src: '/images/sloan/sloan4.jpg', alt: 'Sloan'}
];

const Home = function() {
  const handleClick = function() {
    st.setPage('services');
  };

  return (
    <div className='home page v'>
      <div className='heroTile tile h'>
        <img className='heroImage fade' src='/images/dss_hero.jpg'/>
        <div className='heroInfo'>
          <h2>The Plumbing Manufacturer's Rep Agency <br/>that works for YOU!</h2>
          <h3>We help you <b>specify, procure, install,</b> and <b>maintain</b> the best plumbing products on the market.</h3>
          <div className='linkButton v' onClick={handleClick}>
            LEARN MORE!
          </div>
        </div>
      </div>
      <div className='blueTile h c'>
        <div className='introInfo'>
          <h2>Innovative, Reliable Brands</h2>
          <h3>We represent the best plumbing manufacturers in the industry, and we are committed to helping you find the right products for your project.</h3>
          <br/>
          <h3>We serve <b>Architects, Contractors, Designers, Engineers, and Wholesalers</b> across Michigan and Ohio, on park projects, schools, businesses of all sizes, sports and entertainment arenas, and more.</h3>
          <div className='whiteButton v' onClick={()=>{st.setPage('manufacturers')}}>
            OUR MANUFACTURERS
          </div>
        </div>
        <Carousel images={images}/>
      </div>
      <div className='noTile v' style={{textAlign: 'center', height: '360px'}}>
        <h1>"We know our market. <br/>We know our manufacturers. We know our customers."</h1>
        <h3>Matt Johnson, Principal</h3>
      </div>
    </div>
  );
};

export default Home;