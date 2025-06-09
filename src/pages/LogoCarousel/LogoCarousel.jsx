import React from 'react';
import './LogoCarousel.css';
import brand1 from '../../utils/images/24.png';
import brand2 from '../../utils/images/26.png';
import brand3 from '../../utils/images/28.png';
import brand4 from '../../utils/images/30.png';
import brand5 from '../../utils/images/32.png';
import brand6 from '../../utils/images/34.png';
import brand7 from '../../utils/images/38.png';
import brand8 from '../../utils/images/40.png';

const logos = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8
];

const LogoCarousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-track">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt="Logo" className="logo" />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
