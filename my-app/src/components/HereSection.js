import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HereSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted></video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button className="btns" buttonSize="btn--large" buttonStyle="btn--outline">
          GET STARTED
        </Button>
        <Button className="btns" buttonSize="btn--large" buttonStyle="btn--primary">
          WATCH TRAILER <i className="fa fa-play-circle" aria-hidden="true"></i>
        </Button>
      </div>
    </div>
  )
}

export default HereSection
