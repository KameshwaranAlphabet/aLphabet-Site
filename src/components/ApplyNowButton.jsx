// components/ApplyNowButton.jsx
import React from 'react';
import { Button } from 'react-bootstrap';
import '../index.css'; // Optional if styles like .custom-apply-btn are defined there

const ApplyNowButton = () => {
  return (
    <Button
      as="a"
      href="https://alphabet.myschoolone.com/cloud/Admission/ApplicationFormV3.php"
      target="_blank"
      rel="noopener noreferrer"
      className="custom-apply-btn  px-3 py-2 text-nowrap"
      style={{
        fontSize: '18px',
        fontWeight: '400',
        borderRadius: '8px',
        whiteSpace: 'nowrap', // Keeps the text in one lin
      }}
    >
      Apply Now
    </Button>
  );
};

export default ApplyNowButton;
