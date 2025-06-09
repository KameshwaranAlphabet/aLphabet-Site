import React from 'react';
import { Card } from 'react-bootstrap';
import './ChooseSection.css';
import defaultImg from '../blog2-img.jpg';
import ApplyNowButton from '../ApplyNowButton';

function ChooseSection() {
  return (
    <div className="info-section">
      <div className="info-left">
        <img src={defaultImg} alt="Left" className="left-image" />
        <div className="yellow-svg">
         <svg xmlns="http://www.w3.org/2000/svg" width="707" height="57" viewBox="0 0 707 57" fill="none">
<path d="M-24.2035 0.244053L706.386 62.7871L-25.7933 59.7228L-24.2035 0.244053Z" fill="#FBED21"/>
</svg>
        </div>
      </div>

   <div className="info-right">
  <div className="info-content">
    <h2>Rooted in Inquiry and Innovation</h2>
    <p>
      Through inquiry-based learning and meaningful action, we nurture students who think deeply,
      care globally, and grow purposefully. Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
      book.
    </p>
    <div className="info-buttons">
      <ApplyNowButton/>
      <button className="tour-button">Learn More</button>
    </div>
  </div>
</div>
    
    </div>
  );
}

export default ChooseSection;