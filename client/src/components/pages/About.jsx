import React, {useState, useEffect} from 'react';

import '../../styles/about.css';

import {TbTargetArrow} from "react-icons/tb";
import {IoEye} from "react-icons/io5";
import {FaHandshakeSimple} from "react-icons/fa6";

const About = function() {
  return (
    <div className='about page v'>
      <div className='introTile blueTile v'>
        <div style={{width: '80%'}}>
          <h1>About Us</h1>
          <h3><b style={{padding: 'unset'}}>Diversified Spec. Sales, Inc.</b> is a premier manufacturers’ representative of plumbing products throughout Michigan. 
            We hold ourselves to the highest ethical and professional product representation standards as an agency, providing maximum long-term value to our partners.
          </h3>
        </div>
      </div>
      <div className='noTile h' style={{height: 'unset', justifyContent: 'space-around'}}>
        <div className='aboutTile v'>
          <div className='aboutTitle v'>
            <div className='aboutIconContainer v'><TbTargetArrow size={48}/></div>
            <h3>Our Mission</h3>
          </div>
          <br/>
          To provide our customers with the highest quality products and services, while maintaining the utmost integrity and professionalism.
        </div>
        <div className='aboutTile v'>
          <div className='aboutTitle v'>
            <div className='aboutIconContainer v'><IoEye size={48}/></div>
            <h3>Our Vision</h3>
          </div>
          <br/>
          To equip the world with advanced product solutions that raise health, wellness, and environmental sustainability standards.
        </div>
        <div className='aboutTile v'>
          <div className='aboutTitle v'>
            <div className='aboutIconContainer v'><FaHandshakeSimple size={48}/></div>
            <h3>Our Promise</h3>
          </div>
          <br/>
          To provide the best possible representation characterized by expert knowledge, empathetic listening, and collaboration with our partners.
        </div>
      </div>
      <div className='storyTile tile v' style={{height: 'unset'}}>
        <h1>Our Story</h1>
        <div className='storyText'>
          <h3>
            &emsp;&emsp;Our journey as a manufacturers representative began in 1963. In those days, we were known as The Ed DeYoung Company and had one location in Detroit, MI. 
            Jay R. Smith was almost exclusively represented these formative years, making them our oldest partner to date. 
            <br/>
            &emsp;&emsp;In 1972, Ron Wallace purchased the company and began to add multiple manufacturers to its line card, including noteworthy partners Acorn Engineering and Sloan.
            <br/>
            &emsp;&emsp;In 1997, Mike Burdette and Gerry Howley purchased the company and Diversified Spec. Sales, Inc. was born. 
            Their partnership resulted in further expansion, including a West Michigan office and the addition of many new product lines. 
            Gerry Howley retired in 2014, and Mike Burdette became the sole proprietor.
            <br/>
            &emsp;&emsp;In 2018, Matt Johnson, Nick VanderPlas, and Brendan Burdette purchased the company, and to the present time, they continue to expand the company’s product offerings and capabilities.
            <br/>
            &emsp;&emsp;In 2023, Diversified expanded further into Ohio, opening a third office located in the Greater Cleveland Metro and introducing several new product lines across the state.
            <br/>
            &emsp;&emsp;We now consist of 5 divisions: Commercial Plumbing, Architectural & Interiors, Residential Plumbing, PVF, and Plumbing Commodities. 
            Our footprint has grown to 28 employees covering five states (Michigan, Indiana, Ohio, West Virginia, and Western Pennsylvania).
            <br/>
            &emsp;&emsp;As consumer demands, technology, and supply chains evolve across the plumbing industry, we rest on the foundation of solid relationships, excellent service, and exceptional products. 
            These timeless values benefit our industry partners and confidently carry us forward into the future.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;