import React, {useState, useEffect} from 'react';

import st from 'ryscott-st';

const Tile = function({content}) {
  return (
    <div className='tile h'>
      {content}
    </div>
  );
};

export default Tile;