import React, {useState, useEffect} from 'react';

const content = {
  intro: (
    <div className='tileContent v'>
      <b>We are Mercury Technologies.</b>
      <br/>
      We build and maintain modern software and provide IT services for businesses that need websites, custom applications, automation, AI integration. 
      Fast, clean, and engineered to last.
    </div>
  ),
  services: (
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
  )
};

export default content;