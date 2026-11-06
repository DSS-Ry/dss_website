import React, {useState, useEffect} from 'react';

import PageLink from './PageLink.jsx';

const HelpTile = function() {
  return (
    <div className='helpTile blueTile v c'>
      <div className='v c' style={{width: '80%'}}>
        <h1>Need Help?</h1>
        <h2>Please reach out to us with any inquiries you have and we'll promptly respond.</h2>
        <PageLink page='contact' className='whiteButton'>CONTACT US!</PageLink>
      </div>
    </div>
  );
};

export default HelpTile;