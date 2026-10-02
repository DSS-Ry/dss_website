import React, {useState, useEffect} from 'react';

import st from 'ryscott-st';

const Nav = function() {
  const maxHeight = st.isMobile ? 100 : 140;
  const [navHeight, setNavHeight] = useState(maxHeight);

  const handleClick = function(page) {
    st.setPage(page);
  };

  useEffect(() => {
    const app = document.querySelector('#app');
    const handleScroll = function() {
        setNavHeight(Math.max(40, maxHeight - app.scrollTop));
    };

    app.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='head anchor h' style={{height: `${navHeight}px`}}>
      <img className='logoDropSvg' src='images/logo_drop.svg'/>
      <img className={`logoTextSvg ${navHeight > 80 ? 'visible' : 'hidden'}`} src='images/logo_text.svg'/>
      {!st.isMobile && <Links/>}
    </div>
  );
};

const Links = function() {
  return (
    <div className='links h'>
      <div onClick={()=>{handleClick('home')}}>HOME</div>
      <div onClick={()=>{handleClick('manufacturers')}}>MANUFACTURERS</div>
      <div onClick={()=>{handleClick('services')}}>SERVICES</div>
      <div onClick={()=>{handleClick('about')}}>ABOUT</div>
      {/* <div>BLOG</div> */}
      <div onClick={()=>{handleClick('contact')}}>CONTACT</div>
    </div>
  )
};

export default Nav;
