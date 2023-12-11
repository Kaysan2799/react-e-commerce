import React from 'react';
import './TypographyAnimation.css';

const TypographyAnimation = ({ text }) => {
  return (
    <div className="typography-container">
      <span className="text">{text}</span>
      <span className="hover-text">{text}</span>
    </div>
  );
};

export default TypographyAnimation;
