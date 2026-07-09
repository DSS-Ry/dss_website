import React, {useState, useEffect} from 'react';

const Tile = function({content}) {
  const [isOpen, setIsOpen] = useState(false);

  setTimeout(() => {
    setIsOpen(true);
  }, 1000);

  return (
    <div className={`tile logo ${!isOpen && 'closed'} v` }>

    </div>
  );
};

export default Tile;