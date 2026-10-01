import React, {useState, useEffect} from 'react';

import '../../styles/services.css';

import {FaChalkboardTeacher} from "react-icons/fa";
import {FaCalculator} from "react-icons/fa6";
import {FaSearchLocation} from "react-icons/fa";
import {BiSupport} from "react-icons/bi";
import {IoNewspaper} from "react-icons/io5";
import {FaFileDownload} from "react-icons/fa";

const services = [
  {icon: <FaChalkboardTeacher size={48}/>, title: 'Education and Training', info: "Our staff is always happy to help you learn the ins and outs of our products and how they can help you achieve your design and engineering goals. From an informal phone conversation to factory tours, we do it all."},
  {icon: <FaCalculator size={48}/>, title: 'Quotations', info: "We provide quotes that are accurate and completed in a timely fashion. Our experienced and dedicated team can also answer any cross-referencing product questions when you are seeking alternates to a specified item."},
  {icon: <FaSearchLocation size={48}/>, title: 'Order Tracking', info: "We provide quotes that are accurate and completed in a timely fashion. Our experienced and dedicated team can also answer any cross-referencing product questions when you are seeking alternates to a specified item."},
  {icon: <BiSupport size={48}/>, title: 'Product Support', info: "Having excellent product support is as essential as having a great product itself. If you have any technical issues or questions relating to products, we are here to give you the assistance you need promptly."},
  {icon: <IoNewspaper size={48}/>, title: 'Manufacturer News', info: "The companies we represent continually generate innovative ideas and products — let Diversified keep you up-to-date with our manufacturers’ latest news and products announcements."},
  {icon: <FaFileDownload size={48}/>, title: 'Technical Downloads', info: "In need of CAD drawings, BIM files, Submittal Sheets, Installation instructions? Our team is happy to provide the information you need in your required format."}
];

const Services = function() {
  return (
    <div className='services page v'>
      <div className='servicesTile blueTile introTile v'>
        <div style={{width: '80%'}}>
          <h1>SERVICES</h1>
          <h3>Diversified Spec. Sales, Inc. is here to  help you find what you need when you need it.
            Whether you're an architect or an engineer looking for product information, a wholesaling professional inquiring about order status, or a contractor on the job
            site with an installation question, we are here to assist you every step of the way.
          </h3>
        </div>
      </div>
      <div className='noTile v' style={{height: 'unset'}}>
        <div className='servicesInfo h'>
          {services.map((service, i) => {
            return (
              <div className='serviceTile v' key={i}>
                <div className='serviceTitle v'>
                  <div className='serviceIconContainer v'>{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
                <br/>
                {service.info}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;