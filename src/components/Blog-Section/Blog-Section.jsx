import React from 'react';

// Main App component to demonstrate the BlogSection
const App = () => {
  // Placeholder data for recent blog posts
  const recentPosts = [
    {
      id: 1,
      title: 'How Technology Grow in Machine Learning',
      author: 'John Smith in Design',
      date: 'April 13, 2025',
      image: 'https://placehold.co/150x150/dbeafe/1e40af?text=Image+3', // Placeholder image
    },
    {
      id: 2,
      title: 'How Technology Grow in Machine Learning',
      author: 'John Smith in Design',
      date: 'April 13, 2025',
      image: 'https://placehold.co/150x150/dbeafe/1e40af?text=Image+4', // Placeholder image
    },
    {
      id: 3,
      title: 'How Technology Grow in Machine Learning',
      author: 'John Smith in Design',
      date: 'April 13, 2025',
      image: 'https://placehold.co/150x150/dbeafe/1e40af?text=Image+5', // Placeholder image
    },
  ];

  return (
    // The main container for the entire page, ensuring it takes up full width/height
    // and centers content.
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center font-inter py-10 sm:py-16 lg:py-20">
      {/* Blog Section Title */}
      <div className="text-center mb-10 sm:mb-14 lg:mb-20 px-4">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-800 relative inline-block pb-3">
          Blog
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-2 bg-indigo-600 rounded-full"></span>
        </h1>
      </div>

      {/* Main Blog Content Area */}
      <div className="w-full max-w-7xl px-4 flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20 items-start">

        {/* Featured Blog Post (Left Column) */}
        <div className="flex-1 w-full lg:w-auto bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
          <img
            src="https://placehold.co/900x500/dbeafe/1e40af?text=Featured+Blog+Image" // Placeholder image for featured post
            alt="Classroom setting with students and teacher"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/900x500/cccccc/333333?text=Image+Not+Found'; }}
          />
          <div className="p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
              How Technology Grow in Machine Learning
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6">
              John Smith in Design <span className="mx-1">•</span> Today, 2025
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform duration-200 ease-in-out transform hover:translate-x-1 active:translate-x-0">
              Read all Blogs
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Recent Blog Posts (Right Column) */}
        <div className="flex-1 w-full lg:w-auto flex flex-col gap-6">
          {recentPosts.map(post => (
            <MiniBlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Mini Blog Post Card Component for the right column
const MiniBlogPostCard = ({ post }) => {
  return (
    <div className="flex bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.01] hover:shadow-xl cursor-pointer">
      <img
        src={post.image}
        alt={`Image for ${post.title}`}
        className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 object-cover rounded-l-2xl"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/cccccc/333333?text=Image'; }}
      />
      <div className="p-4 flex flex-col justify-center">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 leading-tight">
          {post.title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm">
          {post.author} <span className="mx-1">•</span> {post.date}
        </p>
      </div>
    </div>
  );
};

export default App;
