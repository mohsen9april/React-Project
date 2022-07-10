import React from 'react'
import Header from '../Header/Header'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">

        <div className="left-h">
            <Header/>

            <div className='the-best-ad'>
                <div></div>
                <span>The best fitness club i the town</span>
            </div>

            <div className="hero-text">
                <div>
                  <span className='stroke-text'>Shape </span>
                  <span> Your</span>
                </div>
                <div>
                  <span>Ideal Body</span>
                </div>
                <div className='span-hero-text'>
                  <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>
            </div>

            <div className='figures'>
              <div>
                <span>+140</span>
                <span>expert coachs</span>
              </div>
              <div>
                <span>+978</span>
                <span>members joined</span>
              </div>
              <div>
                <span>+50</span>
                <span>fitness programs</span>
              </div>
            </div>

            <div className='hero-buttons'>
              <button className='btn'>Get Started</button>
              <button className='btn'>Learn More</button>
            </div>
        

        </div>
        <div className="right-h">right-side</div>
    </div>
  );
};

export default Hero