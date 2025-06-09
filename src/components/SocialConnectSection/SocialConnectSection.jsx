import React from 'react';
import './SocialConnectSection.css'; // We'll create this CSS file

// Import your social media icons
// You might use a library like 'react-icons' or SVG files directly
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import logo from '../aLphabet-International-School.png';
import insta1 from '../Rectangle 55.png';
import insta2 from '../Rectangle 56.png';

const SocialConnectSection = () => {
  return (
    <section className="social-connect-section">
      <div className="container">
        {/* Left Content Area */}
        <div className="left-content">
          <h2 className="section-title">Stay Connected</h2>
          <p className="section-description">
            Through inquiry-based learning and meaningful action, we nurture students through inquiry-based learning and meaningful action.
          </p>
          <div className="social-icons">
            <a href="https://twitter.com/your_school" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/your_school" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.youtube.com/your_school" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/your_school" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/your_school" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Right Instagram Feed Card */}
        <div className="right-content">
          <div className="instagram-card">
            <div className="card-header">
              <div className="school-logo-wrapper">
                {/* Replace with your school logo image */}
                <img src={logo} alt="Alphabet School Logo" className="school-logo" />
              </div>
              <div className="school-info">
                <span className="instagram-handle">@alphabet.school</span>
                <span className="school-name">The official Alphabet International School, Chennai.</span>
              </div>
            </div>
            <div className="card-images">
              {/* Replace with your Instagram image URLs */}
              <img src={insta1} alt="Instagram Post 1" className="instagram-image" />
              <img src={insta2} alt="Instagram Post 2" className="instagram-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialConnectSection;