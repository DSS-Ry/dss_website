import React, {useState, useEffect} from 'react';

const Tile = function({content, num}) {
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
    <div className={`tile ${!isOpen ? 'closed v' : 'v'}`}>
      <div className={`tileContentContainer ${isLoaded ? 'visible' : 'hidden'} h`}>
        {isLoaded && content ? content : 'This is a test tile.'}
      </div>
    </div>
  );
};

export default Tile;