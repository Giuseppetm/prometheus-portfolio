import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import './index.scss';

MouseFollower.registerGSAP(gsap);

// eslint-disable-next-line no-unused-vars
const cursor = new MouseFollower({
  stateDetection: {
    '-pointer': 'a,button'
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);