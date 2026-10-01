import React from 'react';

const Location = function({location}) {
  const address = encodeURIComponent(location.address.join(' '));
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${address}`;
  const mapEmbed = `https://www.google.com/maps?q=${address}&output=embed`;

  return (
    <div className='location'>
      <h2 className='locationTitle'>
        {location.title}
        <br/>
        {location.region}
      </h2>

      <div className='locationInfo'>
        {location.address.map((line, i) => {
          return (
            <h3 key={i}><span>{line}</span></h3>
          );
        })}

        <a
          className='locationPhone'
          href={`tel:+1${location.phone.replaceAll('-', '')}`}
        >
          {location.phone}
        </a>
      </div>

      <iframe
        className='locationMap'
        title={`${location.title} ${location.region} office map`}
        src={mapEmbed}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        allowFullScreen
      />
    </div>
  );
};

export default Location;