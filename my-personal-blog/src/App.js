import React from 'react';
import TopBar from './TopBar';
import BlogPost from './BlogPost';
import './App.css';
import cbum from './image/cbum.jpg';
import ramon from './image/ramon.jpeg';

const App = () => {
  const blogPosts = [
    {
      title: "Chris Bumsted",
      date: "31 May 2024",
      author: "Yash Kelkar",
      image: cbum,
      content: "Mr olympia  winnner 5x. Visit his <a href='https://www.cbumfitness.com'>Cbumfitneess.com</a> for more information."
    },
    {
      title: "Ramon Dino",
      date: "31 May 2024",
      author: "Yash Kelkar",
      image: ramon,
      content: "Mr olympia 2nd runner up .... never won. Visit his <a href='https://en.wikipedia.org/wiki/Ramon_Dino'> wikipedia</a> for more information."
    }
  ];

  return (
    <div className="app">
      <TopBar />
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default App;
