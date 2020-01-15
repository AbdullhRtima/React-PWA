import React from 'react';
import rt from './rt.jpg';
import facebook from './facebook.png';
import insta from './insta.png';
import linkedin from './linkedin.png';
import twitter from './twitter.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rt} className="App-logo" alt="logo" />
        <p className="info">
          this PWA using react  <code>  <a className="App-link" href="https://github.com/AbdullhRtima/React-PWA" target="_blank"> visit github repo for more </a> </code>
        </p>
        <p className="info">
          follow me
        </p>
         <ul className="social-media">
           <li> <a href="https://www.facebook.com/abdullahrt97"> <img src={facebook} className="icons" alt="socialmedia"/> </a>  </li> 
           <li> <a href="https://www.instagram.com/abdullahrt97/"> <img src={insta} className="icons" alt="socialmedia"/></a>  </li> 
           <li> <a href="https://www.linkedin.com/in/abdullh-rtima-ab606211b/"> <img src={linkedin} className="icons" alt="socialmedia"/></a>  </li> 
           <li> <a href="https://twitter.com/abdullahrt97"> <img src={twitter} className="icons" alt="socialmedia"/></a>  </li> 
         </ul>
      </header>
    </div>
  );
}

export default App;
