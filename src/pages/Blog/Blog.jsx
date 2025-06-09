import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import './Blog.css';

// Helper function to extract image URL from HTML content
const extractImageUrl = (html) => {
  const imgRegex = /<img[^>]+src="([^">]+)"/;
  const match = html.match(imgRegex);
  return match ? match[1] : null;
};

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost/wordpress/wordpress/wp-json/wp/v2/posts";

  useEffect(() => {
    axios.get(API_URL)
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch posts:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className='blog-page'>
      <header className='height-75'>
        <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='text-center fw-semibold'>Blog</h1>
          <p className='text-center w-75 mb-5'>
            Explore our latest articles and updates from the team.
          </p>
        </div>
      </header>

      <div className='bg-body-tertiary py-5'>
        <div className="container">
          {loading ? (
            <div className="text-center text-muted">Loading...</div>
          ) : (
            <div className="row g-4">
              {blogs.map((blog) => {
                const imageUrl = extractImageUrl(blog.content.rendered);

                return (
                  <div key={blog.id} className='col-md-6 col-lg-4'>
                    <Link to={`/blog/${blog.slug}`} className='text-decoration-none'>
                      <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                        {/* Image */}
                        <Card.Img
                        variant="top"
                        src={imageUrl || "https://via.placeholder.com/600x300?text=No+Image"}
                        alt={blog.title.rendered}
                        style={{ height: '200px', objectFit: 'cover' }} // <== Adjust height here
                        />

                        <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                          <Card.Title
                            className='fs-2 mb-4'
                            dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
                          />
                          <Card.Text className='text-center'>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: blog.excerpt?.rendered || blog.content.rendered.slice(0, 100) + "...",
                              }}
                            />
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blog;
