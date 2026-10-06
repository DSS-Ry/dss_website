import React, {useState, useEffect} from 'react';

import '../../styles/home.css';
import st from 'ryscott-st';

import Carousel from './Carousel.jsx';
import CountUp from '../CountUp.jsx';

import {IoMegaphone} from "react-icons/io5";
import {IoLibrary} from "react-icons/io5";
import {IoPeople} from "react-icons/io5";
import {IoBagCheck} from "react-icons/io5";
import {FaMoneyBill1} from "react-icons/fa6";
import {AiFillSchedule} from "react-icons/ai";
import {FaThumbsUp} from "react-icons/fa";
import {HiMiniUserGroup} from "react-icons/hi2";
import {FaCakeCandles} from "react-icons/fa6";
import {FaLocationDot} from "react-icons/fa6";

const images = [
  {src: './images/sloan/sloan1.jpeg', alt: 'Sloan'},
  {src: './images/sloan/sloan2.jpg', alt: 'Sloan'},
  {src: './images/sloan/sloan3.jpg', alt: 'Sloan'},
  {src: './images/sloan/sloan4.jpg', alt: 'Sloan'}
];

const benefits = [
  {icon: <IoMegaphone size={48}/>, title: 'Stay Up to Date', info: "The plumbing industry is always changing. We’ll keep you up-to-date on the latest products and industry trends."},
  {icon: <IoLibrary size={48}/>, title: 'Expand Your Knowledge', info: "Receive free and in-depth training on any of our product lines. On-location factory tours and classes are also available."},
  {icon: <IoPeople size={48}/>, title: 'Grow Your Network', info: "Enjoy our industry events that connect you with your peers and the brands we represent in a fun and friendly atmosphere."},
  {icon: <IoBagCheck size={48}/>, title: 'Specify with Confidence', info: "Tap into our knowledge base so you can confidently specify, purchase, and install products from the brands we represent."},
  {icon: <FaMoneyBill1 size={48}/>, title: 'Stay on Budget', info: "Choose from thousands of budget-friendly products from our trusted brands. Get what you need without having to sacrifice quality."},
  {icon: <AiFillSchedule size={48}/>, title: 'Stay on Schedule', info: "Many brands we represent have quick-ship capabilities. Additionally, we have two stocking warehouses to ensure you can get what you need faster. "},
  {icon: <FaThumbsUp size={40}/>, title: 'Skip the Hassle', info: "Get timely and accurate responses to your questions. No call menus. No long hold times. Just friendly people who are happy to help you."}
];

const Home = function() {
  return (
    <div className='home page v'>
      <div className='heroTile tile h'>
        {!st.isMobile && <img className='heroImage fade' src='./images/dss_hero.jpg'/>}
        <div className='heroInfo'>
          <h2>The Plumbing Manufacturer's Rep Agency <br/>that works for YOU!</h2>
          <h3>We help you <b>specify, procure, install,</b> and <b>maintain</b> the best plumbing products on the market.</h3>
          <button type='button' className='linkButton v' onClick={()=>{st.setPage('services')}}>
            LEARN MORE!
          </button>
        </div>
      </div>
      <div className='blueTile h c'>
        <div className='introInfo'>
          <h2>Innovative, Reliable Brands</h2>
          <h3>We represent the best plumbing manufacturers in the industry, and we are committed to helping you find the right products for your project.</h3>
          <br/>
          <h3>We serve <b>Architects, Contractors, Designers, Engineers, and Wholesalers</b> across Michigan and Ohio, on park projects, schools, businesses of all sizes, sports and entertainment arenas, and more.</h3>
          <button type='button' className='whiteButton v' onClick={()=>{st.setPage('manufacturers')}}>
            OUR MANUFACTURERS
          </button>
        </div>
        <Carousel images={images}/>
      </div>
      <div className='noTile v' style={{textAlign: 'center', height: '360px'}}>
        <h1>"We know our market. <br/>We know our manufacturers. We know our customers."</h1>
        <h3>Matt Johnson, Principal</h3>
      </div>
      <div className='blueTile v'>
        <h2 style={{padding: '18px', paddingBottom: '30px'}}>Benefits of Working with Us</h2>
        <div className='benefits h'>
          {benefits.map((benefit, i) => {
            return (
              <div className='benefitTile v' key={i}>
                <div className='benefitTitle v'>
                  <div className='benefitIconContainer v'>{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                </div>
                <br/>
                {benefit.info}
              </div>
            );
          })}
        </div>
      </div>
      <div className='noTile h' style={{justifyContent: 'center', height: '360px'}}>
        <div className='countTile v'>
          <div className='countIconContainer v'><FaCakeCandles size={40}/></div>
          <h1><CountUp n={63}/></h1>
          <h2>Years in Business</h2>
        </div>
        <div className='countTile v'>
          <div className='countIconContainer v'><HiMiniUserGroup size={48}/></div>
          <h1><CountUp n={28}/></h1>
          <h2>Employees</h2>
        </div>
        <div className='countTile v'>
          <div className='countIconContainer v'><FaLocationDot size={40}/></div>
          <h1><CountUp n={3}/></h1>
          <h2>Locations</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;