import React from 'react';
import './Hero.css';
import HeroVedio from "../../Pics/Hero.mp4";
import TypographyAnimation from './TypographyAnimation';

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-content hero-PB">
          {/* <h1>Welcome to our E-commerce Store</h1> */}
          <TypographyAnimation text="Welcome to our E-commerce Store  '" />

          <div className="hero-PB">
            <p>Discover amazing products at great prices.</p>
            <button className="hero-button">Shop Now</button>
          </div>
        </div>
        <div className="hero-video">
          <video src={HeroVedio} autoPlay={"true"} muted width={"100%"} height={"100%"} loop></video>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#032F40" fill-opacity="1" d="M0,0L48,16C96,32,192,64,288,90.7C384,117,480,139,576,133.3C672,128,768,96,864,74.7C960,53,1056,43,1152,85.3C1248,128,1344,224,1392,272L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
        </path>
      </svg>
    </>
  );
}

export default HeroSection;
