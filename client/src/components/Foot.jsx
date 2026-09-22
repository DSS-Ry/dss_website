import React from 'react';

import {FaLinkedin} from "react-icons/fa6";
import {FaFacebook} from "react-icons/fa6";
import {AiFillInstagram} from "react-icons/ai";

const Foot = function() {
  return (
    <div className='foot h c'>
      <a href='https://www.linkedin.com/company/diversified-spec-sales/'><FaLinkedin size={20}/></a>
      <a href='https://www.instagram.com/diversifiedspecsales/'><AiFillInstagram size={24}/></a>
      <a href='https://www.facebook.com/profile.php?id=100068991712387'><FaFacebook size={20}/></a>
    </div>
  );
};

export default Foot;
