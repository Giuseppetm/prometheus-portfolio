import React from 'react';
import App from './App';
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import { hydrate, render } from "react-dom";
import './index.scss';

MouseFollower.registerGSAP(gsap);

// eslint-disable-next-line no-unused-vars
const cursor = new MouseFollower({
  stateDetection: {
    '-pointer': 'a,button,.square'
  }
});

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}