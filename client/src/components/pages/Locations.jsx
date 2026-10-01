import React from 'react';

import '../../styles/locations.css';

import Location from './Location.jsx';

const locations = [
  {
    title: 'Western',
    region: 'Michigan',
    address: ['317 32nd St., SW,', 'Grand Rapids, Michigan 49548'],
    phone: '616-785-9000'
  },
  {
    title: 'Eastern',
    region: 'Michigan',
    address: ['13261 Northend Ave,', 'Oak Park, Michigan 48237'],
    phone: '248-398-2400'
  },
  {
    title: 'Cleveland',
    region: 'Ohio',
    address: ['2057 East Aurora Rd, Suite D', 'Twinsburg, Ohio 44087'],
    phone: '216-202-0240'
  }
];

const Locations = function() {
  return (
    <div className='locations h'>
      {locations.map((location) => {
        return (
          <Location location={location} key={location.phone}/>
        );
      })}
    </div>
  );
};

export default Locations;