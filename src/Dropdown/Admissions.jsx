import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import {
  FaUser, FaBullhorn, FaCog, FaBuilding, FaCalendarAlt,
  FaChartBar, FaTools
} from 'react-icons/fa';
import './Program.css';
import { IoChevronDown } from 'react-icons/io5'; // Chevron icon

const ProgramDropdown = () => {
  const [show, setShow] = useState(false);

  const toggleDropdown = () => setShow(!show);

  return (
    <Dropdown
      show={show}
      onToggle={() => setShow(!show)}
      className="position-static"
    >
      {/* About + Chevron Icon */}
      <Dropdown.Toggle
  variant="link"
  className="nav-link d-flex align-items-center gap-1 custom-toggle"
  onClick={toggleDropdown}
  style={{ textDecoration: 'none' }}
>
  <span className={`about-text ${show ? 'active-about' : ''}`}>Admissions</span>
  <IoChevronDown
    size={18}
    color='lightgray'
    className={`transition-transform ${show ? 'rotate-180' : ''}`}
    style={{ transition: 'transform 0.3s ease' }}
  />
</Dropdown.Toggle>


      {/* Mega Dropdown */}
      <Dropdown.Menu
        className="border-0 shadow-sm mt-0 pt-4 pb-4 px-4 mega-dropdown"
        style={{
          backgroundColor: "#fff",
          top: '102%',
          width: '90%',
          left: '5%',
          zIndex: 1000
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="row">
          {/* Column 1 - About Us */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">About Us</h6>
            <div className="d-flex mb-3">
              <div className="me-3 text-primary fs-4"><FaUser /></div>
              <div>
                <div className="fw-bold">Founder</div>
                <div className="text-muted small">Lorem ipsum dolor sit amet</div>
                <a href="#" className="text-danger small">Call to action →</a>
              </div>
            </div>
            <div className="d-flex mb-3">
              <div className="me-3 text-warning fs-4"><FaBullhorn /></div>
              <div>
                <div className="fw-bold">Vision and Mission</div>
                <div className="text-muted small">Consectetur adipiscing elit</div>
                <a href="#" className="text-danger small">Call to action →</a>
              </div>
            </div>
            <div className="d-flex">
              <div className="me-3 text-secondary fs-4"><FaCog /></div>
              <div>
                <div className="fw-bold">CRM</div>
                <div className="text-muted small">Dolor sit amet</div>
                <a href="#" className="text-danger small">Call to action →</a>
              </div>
            </div>
          </div>

          {/* Column 2 - Accreditation */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Accreditation</h6>
            <ul className="list-unstyled small text-muted">
              <li className="mb-2"><FaBuilding className="me-2" /> IB Continuum</li>
              <li className="mb-2"><FaCalendarAlt className="me-2" /> MSA</li>
              <li className="mb-2"><FaUser className="me-2" /> CollegeBoard Center</li>
              <li><FaBuilding className="me-2" /> International ACAC</li>
            </ul>
          </div>

          {/* Column 3 - Campus */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Campus</h6>
            <ul className="list-unstyled small text-muted">
              <li className="mb-2"><FaUser className="me-2" /> Channel Manager</li>
              <li className="mb-2"><FaChartBar className="me-2" /> Analytics</li>
              <li><FaTools className="me-2" /> Settings</li>
            </ul>
          </div>

          {/* Column 4 - App */}
          <div className="col-md-3 mb-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Mobile App"
              className="img-fluid rounded mb-2"
            />
            <div className="fw-bold">
              Check the new app <span className="badge bg-light text-dark border ms-1">Featured</span>
            </div>
            <div className="text-muted small mb-2">Lorem ipsum dolor sit amet</div>
            <a href="#" className="text-danger small fw-semibold">Call to action →</a>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProgramDropdown;
