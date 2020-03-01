import React, { useState, useEffect } from 'react';
import './App.css';
import desktopImage from './desktop-image2.jpg';
import mobileImage from './mobile-image.jpg';
import PostContainer from './containers/PostContainer.js';

const App = () => {
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);
    const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
      window.addEventListener('resize', handleWindowResize);

      return () => {
          window.removeEventListener('resize', handleWindowResize);
      }
  });

    return (
        <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
          <img className="logo" src="../images/betasoft-logo.png" alt="Betasoft Logo"/>
            <div className="App-content">
                <h1>BetaBuddy</h1>
                <p>Stay connected</p>
            </div>
            <div className="post-container">
              <PostContainer />
            </div>
        </div>
    );
};

export default App;
