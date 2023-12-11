import React from 'react';
import './about.css';

const AboutUs = () => {
  return (
    <div className='about-full' style={{backgroundColor:'#2695c0', marginTop:'120px' }}>
      <div className="about-container" style={{color:'white', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.8)', borderRadius:'40px'}}>
        <h1 className="about-title">About Us</h1>

        <div className="about-content">
          <div className="about-image"></div>
          <div className="about-description">
            <h2 className="about-heading">Who We Are</h2>
            <p className="about-text">
              We are a dedicated team passionate about electronics and technology. Our mission is to provide high-quality electronic products and services to our customers, ensuring their satisfaction and convenience.
            </p>
            <h2 className="about-heading">What We Offer</h2>
            <p className="about-text">
              At our Ecommerce web app, we offer a wide range of electronic devices, repair services, and advanced projects. Our products are sourced from trusted manufacturers, and our team of experts ensures that each item meets our quality standards.
            </p>
            <h2 className="about-heading">Why Choose Us</h2>
            <p className="about-text">
              With years of experience in the industry, we have gained a reputation for excellence. We prioritize customer satisfaction and strive to provide exceptional products and services. Our team is knowledgeable, friendly, and always ready to assist you with your electronic needs.
            </p>
          </div>
        </div>
      </div>

      <div className='cards' style={{marginLeft: '7%', color:'black', }}>
        <div class="container" >
          <div class="wrapper">
            <div class="banner-image"> </div>
            <h1>Atta-un-Nabi</h1>
            <p>Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit.</p>
          </div>
        </div>

        <div class="container" >
          <div class="wrapper">
            <div class="banner-image"> </div>
            <h1>Syed Muneeb</h1>
            <p>name123@gmail.com <br />
              FA21-BSCYS-2130-0000</p>
          </div>
        </div>

        <div class="container" >
          <div class="wrapper">
            <div class="banner-image"> </div>
            <h1>Syed Aoun Shah</h1>
            <p>name123@gmail.com <br />
              FA21-BSCYS-2130-0000</p>
          </div>
        </div>

        <div class="container" >
          <div class="wrapper">
            <div class="banner-image"> </div>
            <h1>Muhammad hassan</h1>
            <p>name123@gmail.com <br />
              FA21-BSCYS-2130-0000</p>
          </div>
        </div>

        <div class="container" >
          <div class="wrapper">
            <div class="banner-image"> </div>
            <h1>Muhammad Panah</h1>
            <p>name123@gmail.com <br />
              FA21-BSCYS-2130-0000</p>
          </div>
        </div>

        <div class="container" >
          <div class="wrapper">
            <div class="banner-image"> </div>
            <h1>Areeba Zafar</h1>
            <p>name123@gmail.com <br />
              FA21-BSCYS-2130-0000</p>
          </div>
        </div>

        <div class="container" >
          <div class="wrapper">
            <div class="banner-image"> </div>
            <h1>Abdul malik</h1>
            <p>name123@gmail.com <br />
              FA21-BSCYS-2130-0000</p>
          </div>
        </div>

        <div class="container" >
          <div class="wrapper">
            <div class="banner-image"> </div>
            <h1>Muhammad Zubair</h1>
            <p>name123@gmail.com <br />
              FA21-BSCYS-2130-0000</p>
          </div>
        </div>

      </div>

    </div>

  );
};

export default AboutUs;
