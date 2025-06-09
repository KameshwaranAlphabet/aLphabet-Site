import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./Programs.css";
import StartCoursesImg from '../../utils/images/blog1-img.jpg';

// Dummy static data
const staticBlogs = [
  {
    id: 1,
    slug: "Primary Years",
    title: { rendered: "Relativity Explained" },
    excerpt: { rendered: "Through inquiry-based learning and meaningful action, we nurture students who think and meaningful action Through inquiry-based learning and  Through inquiry-based learning and  Through inquiry-based learning and " },
    imageUrl: "https://picsum.photos/id/1/200/300"
  },
  {      
    slug: "Primary Years",
    title: { rendered: "Radioactivity and You" },
    excerpt: { rendered: "Through inquiry-based learning and meaningful action, we nurture students who think and meaningful action Through inquiry-based learning and  Through inquiry-based learning and  Through inquiry-based learning and " },
    imageUrl:"https://picsum.photos/id/1/200/300"
  },
  {
    id: 3,
    slug: "Primary Years",
    title: { rendered: "Gravity: The Invisible Force" },
    excerpt: { rendered: "Through inquiry-based learning and meaningful action, we nurture students who think and meaningful action Through inquiry-based learning and  Through inquiry-based learning and  Through inquiry-based learning and  " },
    imageUrl: "" // No image to trigger placeholder
  }
];

function Blog() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="bg-body-tertiary py-5">
        <div className="container">
          {/* Heading */}
          <h2 className="text-center mb-5 fw-bold" style={{ fontSize: '2rem', color: '#3A3A3A' }}>
            Our Programs
          </h2>

          <div className="row g-4">
            {staticBlogs.map((blog) => (
              <div key={blog.id} className="col-md-6 col-lg-4 d-flex">
                <Link to={`/blog/${blog.slug}`} className="text-decoration-none w-100">
                  <Card className="custom-card h-100">
                    <div className="custom-card-image-wrapper">
                      {blog.imageUrl ? (
                        <img src={blog.imageUrl} alt={blog.title.rendered} className="custom-card-img" />
                      ) : (
                        <div className="custom-card-img placeholder-img d-flex justify-content-center align-items-center text-muted">
                          No Image
                        </div>
                      )}
                    </div>

                    <div className="custom-card-body">
                      {/* <h5 className="custom-card-name" dangerouslySetInnerHTML={{ __html: blog.slug.rendered }}></h5> */}
                      {/* <p className="custom-card-grade">Grade 10</p> */}

                      <div className="custom-card-title-wrapper">
                        <h6 className="custom-card-title" dangerouslySetInnerHTML={{ __html: blog.slug }} />
                      </div>

                      <div className="custom-card-desc-wrapper">
                        <p className="custom-card-desc" dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }} />
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
