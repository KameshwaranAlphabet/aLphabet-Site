import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import footerlogo from './utils/images/aLphabet-International-School.png';
import socialmedia1 from './utils/images/1.png';
import socialmedia2 from './utils/images/2 (1).png';
import socialmedia3 from './utils/images/3 (1).png';
import socialmedia4 from './utils/images/4.png';
import socialmedia5 from './utils/images/5 (1).png';
import MainNavbar from './Header/MainNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import EventCard from '../src/pages/EventCard/EventCard';
import ProgramSection from './components/ProgramSection';

function App() {
  return (
    <div>
     
      <MainNavbar/>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>


         <ProgramSection/>

  <footer className="bg-light stripes border-top d-flex justify-content-center align-items-start"
        style={{
          width: '100%',
          paddingTop: '83px',
          flexShrink: 0,
          flexDirection: 'column'
        }}
    >
  {/* Main Container */}
  <div  className="container d-flex flex-column align-items-center"
    style={{
      gap: '43px',
      flexShrink: 0
    }}
  >
    {/* Footer Navigation Links */}
    <div
      className="row d-flex align-items-start w-100"
      style={{ columnGap: '100px' }}
    >
      <div className="col-md d-flex flex-column align-items-center" style={{ width: '180px', rowGap: '26px' }}>
      <h6 className="section-heading text-center fw-medium"> About aLp.habet</h6>

        <ul className="list-unstyled footer-list">
          <li>Tour</li>
          <li>Vision and Mission</li>
          <li>Accreditation</li>
          <li>Campus</li>
          <li>Learning Spaces</li>
        </ul>
      </div>
      <div className="col-md d-flex flex-column align-items-center" style={{ width: '180px', rowGap: '26px' }}>
        <h6 className="section-heading text-center fw-medium" >Programs</h6>
        <ul className="list-unstyled footer-list">
          <li>About IB</li>
          <li>Pre-Primary</li>
          <li>Kindergarten</li>
          <li>Primary School</li>
          <li>Middle School Space</li>
          <li>High School</li>
          <li>After School Program</li>
        </ul>
      </div>
      <div className="col-md d-flex flex-column align-items-center" style={{ width: '180px', rowGap: '26px' }}>
        <h6 className="section-heading text-center fw-medium">@aLp.habet</h6>
        <ul className="list-unstyled footer-list">
          <li>The alphabet Way</li>
          <li>PYP</li>
          <li>MYP</li>
          <li>DP</li>
          <li>Service & Action</li>
          <li>Student Life at AIS</li>
          <li>Parent life at AIS</li>
          <li>School Policies</li>
        </ul>
      </div>
      <div className="col-md d-flex flex-column align-items-center" style={{ width: '180px', rowGap: '26px' }}>
        <h6 className="section-heading text-center fw-medium">Admissions</h6>
        <ul className="list-unstyled footer-list">
          <li>Apply Now</li>
          <li>Admission Process</li>
          <li>Book a Campus Tour</li>
          <li>FAQs</li>
        </ul>
      </div>
     <div className="col-md d-flex flex-column align-items-center" style={{ width: '180px', rowGap: '26px' }}>
        <h6 className="section-heading text-center fw-medium">Explore</h6>
        <ul className="list-unstyled footer-list">
          <li>Career Counselling</li>
          <li>SAT and AP Exams</li>
          <li>Blogs</li>
          <li>Gallery</li>
          <li>Events Calendar</li>
          <li>Cafeteria Menu</li>
        </ul>
      </div>
    </div>

    {/* Social Icons */}
    <div className="text-center mt-4">
      <a href="#" className="me-3">
        <img src={socialmedia1} alt="Facebook" className="social-icon" />
      </a>
      <a href="#" className="me-3">
        <img src={socialmedia2} alt="Twitter" className="social-icon-facebook" />
      </a>
      <a href="#" className="me-3">
        <img src={socialmedia3} alt="YouTube" className="social-icon-youtube" />
      </a>
      <a href="#" className="me-3">
        <img src={socialmedia4} alt="LinkedIn" className="social-icon-linkedin" />
      </a>
      <a href="#" className="me-3">
        <img src={socialmedia5} alt="Instagram" className="social-icon-linkedin" />
      </a>
    </div>


    {/* Legal Links */}
    <div className="text-center footer-legal ">
      <small className="text-muted">
        Privacy Policy | Terms & Conditions | Refund Policy | Cookie Policy | Sitemap
      </small>
    </div>
  </div>

  {/* Branding Section */}
  <div
    className="mt-5 text-white d-flex flex-column align-items-center justify-content-center w-100"
    style={{
      height: '134px',
      padding: '33px 0',
      gap: '18px',
      background: 'linear-gradient(0deg, rgba(11, 13, 31, 0.90) 92.31%, rgba(243, 245, 249, 0.90) 100%)'
    }}
  >
    <small>
      <img
        src={footerlogo}
        alt="Logo"
        style={{
          height: '34px',
          width: '134px',
          aspectRatio: '67/17',
          verticalAlign: 'middle'
        }}
      />
    </small>

    <div className="text-center mt-2">
      <small>&copy; 2025 aLphabet International School. All Rights Reserved.</small>
    </div>
  </div>
</footer>
  
    </div>
  );
}

export default App;
