import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ApplyNowButton from '../../components/ApplyNowButton';
import LogoCarousel from '../LogoCarousel/LogoCarousel';
import Programs from '../Programs/Programs';
import EventCard from '../EventCard/EventCard';
import { motion } from 'framer-motion';


// Helper to extract first image URL from post content
const extractImageUrl = (htmlContent) => {
  const doc = new DOMParser().parseFromString(htmlContent, 'text/html');
  const img = doc.querySelector('img');
  return img ? img.src : null;
};

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost/wordpress/wordpress/wp-json/wp/v2/posts?_embed')
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching blog posts:', error);
      });
  }, []);

  return (
    <div className='home-page'>
      {/* Hero Section */}
      
     <header className='h-100 min-vh-100 d-flex align-items-center text-light bg-dark'>
      <div className='container d-flex flex-column' style={{ margin: '10%' }}>
        
        <motion.h1
          className='text-left fw-semibold mb-3'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          A World-Class Education Rooted in Inquiry and Innovation
        </motion.h1>

        <motion.p
          className="mb-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <ApplyNowButton />
        </motion.div>

      </div>
    </header>

      {/* Choose Section */}
      <div className="py-5">
        <ChooseSection />
      </div>
 <div className="">
        <LogoCarousel/>
      </div>
      <div className="">
        <Programs/>
      </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <EventCard />
    </div> 
      {/* Courses Highlight Section */}
      <div className='py-5 bg-light courses'>
        <div className="container">
          <div className='row d-flex align-items-center justify-content-around'>
            <div className='col-lg-5'>
              <h2 className='text-capitalize'>2024 start courses</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, placeat.</p>
              <Link to="/courses">
                <button type='button' className='btn btn-danger btn-lg'>Learn More</button>
              </Link>
            </div>
            <div className='col-lg-5 mt-5 mt-lg-0'>
              <img src={StartCoursesImg} className='img-fluid' alt="Start Courses" />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-5">
        <FaqAccordion />
      </div>

      {/* Blog Section */}
      <div className='blog-section text-light py-5'>
        <div className='container d-flex flex-column align-items-center'>
          <h2 className='text-center text-capitalize mb-5'>Latest on the blog</h2>
          <div className='row g-4'>
            {blogs.map((blog) => {
              const imageUrl = extractImageUrl(blog.content.rendered);

              return (
                <div key={blog.id} className='col-md-6 col-lg-4'>
                  <Link to={`/blog/${blog.id}`} className='text-decoration-none'>
                    <Card className='h-100 shadow scale-hover-effect'>
                      <Card.Img
                        variant="top"
                        src={imageUrl || "https://via.placeholder.com/600x300?text=No+Image"}
                        alt={blog.title.rendered}
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <Card.Body className='p-md-4'>
                        <Card.Title dangerouslySetInnerHTML={{ __html: blog.title.rendered }} />
                        <Card.Text dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }} />
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              );
            })}
          </div>
          <Link to="/blog">
            <button type='button' className='btn btn-danger btn-lg mt-5'>Read More Blogs</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
