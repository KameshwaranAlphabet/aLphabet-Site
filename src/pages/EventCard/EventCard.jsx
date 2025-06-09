import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';
import axios from 'axios';
import './EventCard.css';

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
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Cards Grid */}
      <div className='bg-body-tertiary py-5'>
        <div className="container">
            {/* Heading */}
        <h2 className="text-center mb-5 fw-bold" style={{ fontSize: '2rem', color:' #3A3A3A'}}>
          Students Achievement
        </h2>

          {loading ? (
            <div className="text-center text-muted">Loading...</div>
          ) : (
            <div className="row g-4">
              {blogs.map((blog) => {
                const imageUrl = extractImageUrl(blog.content.rendered);

                return (
                  <div key={blog.id} className='col-md-6 col-lg-4'>
                    <Link to={`/blog/${blog.slug}`} className='text-decoration-none'>
                  <Card className="custom-card">
  <div className="custom-card-image-wrapper">
    {imageUrl ? (
      <img src={imageUrl} alt={blog.title.rendered} className="custom-card-img" />
    ) : (
      <div className="custom-card-img placeholder-img d-flex justify-content-center align-items-center text-muted">
        No Image
      </div>
    )}
  </div>

  <div className="custom-card-body">
    <h5 className="custom-card-name">Albert Einstein</h5>
    <p className="custom-card-grade">Grade 10</p>

    <div className="custom-card-title-wrapper">
      <h6
        className="custom-card-title"
        dangerouslySetInnerHTML={{ __html: blog.title?.rendered || '' }}
      />
    </div>

    <div className="custom-card-desc-wrapper">
      <p
        className="custom-card-desc"
        dangerouslySetInnerHTML={{
          __html: blog.excerpt?.rendered || '',
        }}
      />
    </div>
  </div>
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
