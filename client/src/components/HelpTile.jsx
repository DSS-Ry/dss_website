import React, {useState, useEffect} from 'react';

import st from 'ryscott-st';

const HelpTile = function() {
  return (
    <div className='helpTile blueTile v c'>
      <div className='v c' style={{width: '80%'}}>
        <h1>Need Help?</h1>
        <h2>Please reach out to us with any inquiries you have and we'll promptly respond.</h2>
        <button type='button' className='whiteButton' onClick={()=>{st.setPage('contact')}}>CONTACT US!</button>
      </div>
    </div>
  );
};

export default HelpTile;