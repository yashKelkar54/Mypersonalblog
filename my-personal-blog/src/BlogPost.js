import React from 'react';
import './BlogPost.css';

const BlogPost = ({ title, date, author, image, content }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p className="meta">
        <span>{date}</span> | <span>{author}</span>
      </p>
      <img src={image} alt={title} className="post-image" />
      
      <p className="content" dangerouslySetInnerHTML={{ __html: content }}></p>
      <hr />
    </div>
  );
};

export default BlogPost;
