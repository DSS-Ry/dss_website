import React, {useState, useEffect} from 'react';

import st from 'ryscott-st';

import '../../styles/contact.css';

import {FaLinkedin} from "react-icons/fa6";
import {AiFillInstagram} from "react-icons/ai";
import {FaFacebook} from "react-icons/fa6";

import Locations from './Locations.jsx';

const Contact = function() {
  return (
    <div className='contact page v'>
      <div className='introTile blueTile v'>
        <div style={{width: '80%'}}>
          <h1>Contact Us</h1>
          <h3>We’re interested in your feedback, questions, and comments. Please drop us a line and let us know how we can be of further assistance to you. 
            Our staff will respond to you within one business day.
          </h3>
        </div>
      </div>
      <div className='contactTile h'>
        <div className='quoteTile v'>
          <div className='quoteInfo v'>
            <h2>Looking for Pricing?</h2>
            <h3>Contact our quote team and forward your project documents.</h3>
          </div>
          <a href='mailto:quotes@dsshowley.com'><div className='whiteButton v c'>REQUEST A QUOTE!</div></a>
        </div>
        <div className='socialTile v'>
          <h3>Connect with us on social media to stay informed!</h3>
          <div className='socialLinks h'>
            <a href='https://www.linkedin.com/company/diversified-spec-sales/'><FaLinkedin className='inSvg' size={72}/></a>
            <a href='https://www.instagram.com/diversifiedspecsales/'><AiFillInstagram className='igSvg' size={78}/></a>
            <a href='https://www.facebook.com/profile.php?id=100068991712387'><FaFacebook className='fbSvg' size={68}/></a>
          </div>
        </div>
      </div>
      <Locations/>
    </div>
  );
};

export default Contact;