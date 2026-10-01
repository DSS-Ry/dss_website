import React, {useState, useEffect} from 'react';

import '../../styles/manufacturers.css';

const Manufacturers = function() {
  return (
    <div className='manufacturers page v'>
      <div className='blueTile manTile introTile v'>
        <div style={{width: '80%'}}>
          <h1>MANUFACTURERS</h1>
          <h3>We represent leading manufacturers recognized for their quality, reliability, and innovation, across every area of plumbing, behind the wall and in front of it.
          From toilets, urinals, and sinks to faucets, valves, piping, drains, carriers, bottle fillers, showers, 
          and more, our brands deliver products engineered for performance, efficiency, and water conservation.</h3>
        </div>
        <img className='manufacturersLogos' src='./images/manufacturer_logos.png'/>
      </div>
      <div className='brandsTile noTile h c'>
        {brands.map((brand, i)=>{
          return (
            <div className='brandTile v c' key={i}>
              <a href={brand.link}>{brand.title}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const brands = [
  {
    title: 'Acorn Engineering Co.®',
    link: 'https://www.acorneng.com/'
  },
  {
    title: 'AcornVac, Inc.®',
    link: 'https://www.acornvac.com/'
  },
  {
    title: 'American Gas Safety®',
    link: 'https://americangassafety.com/'
  },
  {
    title: 'Anaco Husky®',
    link: 'https://anaco-husky.com/'
  },
  {
    title: 'Advance Products & Systems®',
    link: 'https://apsonline.com/'
  },
  {
    title: 'Aquatherm®',
    link: 'https://aquatherm.com/'
  },
  {
    title: 'Bocchi®',
    link: 'https://www.bocchiusa.com/'
  },
  {
    title: 'Cash Acme®',
    link: 'https://www.cashacme.com/'
  },
  {
    title: 'Centoco®',
    link: 'https://centoco.com/'
  },
  {
    title: 'ConTrols®',
    link: 'https://www.acorn-controls.com/'
  },
  {
    title: 'Dundee Manufacturing®',
    link: 'https://www.dundeemfg.com/'
  },
  {
    title: 'Duravit®',
    link: 'https://www.duravit.com/en-us/'
  },
  {
    title: 'Eaton B-Line®',
    link: 'https://www.eaton.com/us/en-us.html'
  },
  {
    title: 'Elmdor Stoneman®',
    link: 'https://www.elmdor.com/'
  },
  {
    title: 'E.L. Mustee®',
    link: 'https://mustee.com/'
  },
  {
    title: 'EZ-Flo™ Eastman™',
    link: 'https://www.ez-flo.net/'
  },
  {
    title: 'Flushmate®',
    link: 'https://www.flushmate.com/'
  },
  {
    title: 'Foster®',
    link: 'https://www.foster-us.com/'
  },
  {
    title: 'HoldRite, Inc.®',
    link: 'https://www.holdrite.com/'
  },
  {
    title: 'IPEX USA, LLC®',
    link: 'https://www.ipexna.com/'
  },
  {
    title: 'Jay R. Smith®',
    link: 'https://www.jrsmith.com/'
  },
  {
    title: 'John Guest®',
    link: 'https://www.johnguest.com/'
  },
  {
    title: 'Jomar Valve®',
    link: 'https://www.jomarvalve.com/'
  },
  {
    title: 'McGuire Manufacturing®',
    link: 'https://www.mcguiremfg.com/'
  },
  {
    title: 'Midland Industries®',
    link: 'https://www.midlandindustries.com/'
  },
  {
    title: 'Murdock Manufacturing®',
    link: 'https://www.murdockmfg.com/'
  },
  {
    title: 'Neo-Metro®',
    link: 'https://www.neo-metro.com/'
  },
  {
    title: 'Peerless, Inc.®',
    link: 'https://www.peerlesswater.com/'
  },
  {
    title: 'Rainwater Management Solutions®',
    link: 'https://rainwatermanagement.com/'
  },
  {
    title: 'Safety Manufacturing®',
    link: 'https://safetymfg.com/'
  },
  {
    title: 'SharkBite®',
    link: 'https://www.sharkbite.com/us/en'
  },
  {
    title: 'Sloan®',
    link: 'https://www.sloan.com/'
  },
  {
    title: 'StreamLabs®',
    link: 'https://streamlabswater.com/'
  },
  {
    title: 'Symmons®',
    link: 'https://www.symmons.com/'
  },
  {
    title: 'T&S Brass®',
    link: 'https://www.tsbrass.com/'
  },
  {
    title: 'Tyler Pipe®',
    link: 'https://www.tylerpipe.com/'
  },
  {
    title: 'Whitehall Manufacturing®',
    link: 'https://www.whitehallmfg.com/'
  },
  {
    title: 'Wholesale Products Group®',
    link: 'https://www.go-wpg.com/'
  }
];

export default Manufacturers;