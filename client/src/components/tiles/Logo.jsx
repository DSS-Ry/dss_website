import React, {useState, useEffect} from 'react';

import st from 'ryscott-st';

const Logo = function({content}) {
  const [isOpen, setIsOpen] = useState(st.isMobile ? true : false);
  const [isLoaded, setIsLoaded] = useState(st.isMobile ? true : false);

  useEffect(() => {
    const openTimer = setTimeout(() => {
      setIsOpen(true);
    }, 1000 + 200);

    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 2200 + 200);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  return (
    <div className={`tile logo ${!isOpen && 'closed'} v`}>
      <img src='images/logo.svg' className={`logoSvg ${isLoaded ? 'visible' : 'hidden'}`}/>
    </div>
  );
};

export default Logo;