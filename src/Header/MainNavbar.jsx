import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Offcanvas, Button } from 'react-bootstrap';
import { FaGlobe, FaSearch } from 'react-icons/fa';
import { IoSearchOutline } from "react-icons/io5";
import logo from '../utils/images/alphabet-logo.png'; // replace with actual logo path
import AboutDropdown from '../pages/About/AboutDropdown'
import ProgramDropdown from '../Dropdown/ProgramDropDown';
import IBaLphabet from '../Dropdown/IBaLphabet';
import Admissions from '../Dropdown/Admissions';
import Explore from '../Dropdown/Explore';
import '../index.css'; 
import ApplyNowButton from '../components/ApplyNowButton'; // adjust path if needed
const NavDropdowns = ({ title, children }) => {
  const [show, setShow] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);

  return (
    <NavDropdown
      title={
        <span>
          {title} <span style={{ transform: toggleIcon ? 'rotate(180deg)' : 'rotate(0deg)', display: 'inline-block', transition: '0.3s' }}>▼</span>
        </span>
      }
      show={show}
      onMouseEnter={() => {
        setShow(true);
        setToggleIcon(true);
      }}
      onMouseLeave={() => {
        setShow(false);
        setToggleIcon(false);
      }}
      className="px-2"
    >
      {children}
    </NavDropdown>
  );
};

const MainNavbar = () => {
  return (
  <Navbar
  key="lg"
  expand="lg"
  className="bg-white shadow-sm sticky-top"
  style={{
    display: 'flex',
    gap: '97px',
    flexWrap: 'wrap'
  }}
>
      <Container fluid className="px-5">
        {/* Logo */}
       <Navbar.Brand href="/">
      <img
        src={logo}
        alt="Alphabet International School"
        className="img-fluid"
        style={{ maxWidth: '212.677px', height: 'auto' }}
      />
      </Navbar.Brand>


        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />

        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
              {/* Dropdowns */}
               <Nav className="flex-grow-1 pe-3" style={{ marginTop: '5px'}}>

                  <AboutDropdown />

                  <ProgramDropdown/>

                <IBaLphabet/>
                <Admissions/>
                <Explore/>
              </Nav>
                   {/* Right Side Icons */}
              <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0 custom-dark-group">
              <IoSearchOutline className="custom-icon" />
              {/* <FaGlobe className="custom-icon" />
              <span className="custom-text">EN</span>  */}
                <a href="https://myschoolone.com/alphabet" className="text-primary custom-hover-link"  style={{ fontSize: '18px', fontWeight: '400' }}>Log in</a>
             <ApplyNowButton />
              </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
