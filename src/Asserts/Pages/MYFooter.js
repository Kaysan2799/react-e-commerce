import React from 'react';
import './footer.css';
import call from '../Pics/Call Center.gif';
import Loc from '../Pics/map.gif';
const MYFooter = () => {
  return (
    <footer className="footer-container">
      <div className="contact-info">
        <h3 className="footer-heading">Contact Us</h3>
        <img src={call} alt="Call-here" className="footer-image" style={{borderRadius:'45%'}} />
        <p className="footer-text">Phone: +92-340-5210941</p>
        <p className="footer-text">Email: info@smarttech.com</p>
      </div>

      <div className="location-info">
        <h3 className="footer-heading">Location</h3>
        <img src={Loc} alt="location" className="footer-image" />
        <p className="footer-text">123 Main Street, City, Country</p>
      </div>

      <form className="review-form">
        <h3 className="footer-heading">Leave a Review</h3>
        <input type="text" placeholder="Your Name" className="review-input" />
        <textarea placeholder="Your Review" className="review-input"></textarea>
        <button type="submit" className="review-submit">Submit</button>
      </form>
    </footer>
  );
};

export default MYFooter;
