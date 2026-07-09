import React, {useState, useEffect} from 'react';

const Tile = function({content, num}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  setTimeout(() => {
    setIsOpen(true);
  }, 1000 + (num * 200));

  setTimeout(() => {
    setIsLoaded(true);
  }, 2200 + (num * 200));

  return (
    <div className={`tile ${!isOpen ? 'closed v' : 'v'}`}>
      <div className={`tileContentContainer ${isLoaded ? 'visible' : 'hidden'} h`}>
        {isLoaded && content ? content : 'This is a test tile.'}
      </div>
    </div>
  );
};

export default Tile;