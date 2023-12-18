import React from 'react';
import './services.css';

// import image from '../../Pics/services.jpg'
import image2 from '../../Pics/Internal.gif'
// import image3 from '../../Pics/cpu.jpg';
// import image4 from '../../Pics/wall1.jpg';
// import image5 from '../../Pics/wall2.jpg';
// import image6 from '../../Pics/wall3.jpg';
// import image7 from '../../Pics/wall4.jpg';
import image7 from '../../Pics/lucy-computer.gif';
import image8 from '../../Pics/skeleton-typing.gif';
import image9 from '../../Pics/explode.gif';
// import product from '../product';

// import { Link } from 'react-router-dom';
const Services = () => {

  return (
    <>
      <div className="services-container">
        <h1 className="services">Our Services</h1>

        <div className="service-card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div className="service-left">
            <img src={image7} alt="Service" className="service-image" />
          </div>
          <div className="service-right">
            <h2 className="service-title" >
              Advanced Level Electronic Projects
            </h2>
            <p className="service-description">
              We specialize in taking on advanced level electronic projects, including those involving AI codes and technologies. Our team of experts can assist students in developing and implementing their ambitious electronic projects, providing guidance and support along the way.
            </p>
          </div>
        </div>

        <div className="service-card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div className="service-left">
            <img src={image2} alt="Service" className="service-image" />
          </div>
          <div className="service-right">
            <h2 className="service-title">Electronic Repairing</h2>
            <p className="service-description">
              We provide professional electronic repairing services for a wide range of devices. Our experienced technicians can diagnose and fix various electronic issues, ensuring your devices are up and running smoothly.
            </p>
          </div>
        </div>

        <div className="service-card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div className="service-left">
            <img src={image8} alt="Service" className="service-image" />
          </div>
          <div className="service-right">
            <h2 className="service-title">Household Electronics for Sale</h2>
            <p className="service-description">
              Explore our collection of high-quality household electronics available for sale. From appliances to entertainment systems, we offer a wide range of products that are reliable, durable, and designed to enhance your home experience.
            </p>
          </div>
        </div>

        <div className="service-card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div className="service-left">
            <img src={image9} alt="Service" className="service-image" />
          </div>
          <div className="service-right">
            <h2 className="service-title">Scientific Electronics for Workers and Students</h2>
            <p className="service-description">
              Discover our selection of scientific electronics tailored for workers and students. Whether you need equipment for research, experiments, or educational purposes, we have a range of advanced tools and devices to meet your needs.
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default Services;
