import React, {useState, useEffect} from 'react';

const Services = function({num}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const openTimer = setTimeout(() => {
      setIsOpen(true);
    }, 1000 + (num * 200));

    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 2200 + (num * 200));

    return () => {
      clearTimeout(openTimer);
      clearTimeout(loadTimer);
    };
  }, [num]);

  return (
    <div className={`tile serviceTile ${!isOpen ? 'closed v' : 'v'}`}>
      <div className={`tileContentContainer ${isLoaded ? 'visible' : 'hidden'} h`}>
        <div className='tileContent services h'>
          <div className='service v'>
            Web Development
          </div>
          <div className='service v'>
            Software
          </div>
          <div className='service v'>
            Automation
          </div>
          <div className='service v'>
            AI Integration
          </div>
          <div className='service v'> 
            IT Services
          </div>    
        </div>
      </div>
    </div>
  );
};

export default Services;