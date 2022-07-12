import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import Heart from '../../assets/heart.png'
import Heroimage from '../../assets/hero_image.png'
import Heroimageback from '../../assets/hero_image_back.png'
import Calories from '../../assets/calories.png'


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

        <div className="right-h">
          <button className='btn'>Join Now</button>

          <div className='heart-rate'>
            <img src= {Heart} alt="/" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </div>

          <img className='hero-image' src={Heroimage} alt="/" />
          <img className='heroimageback' src={Heroimageback} alt="/" />

          <div className='calories'>
            <img src= {Calories} alt="/" />
            <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>

          </div>

        </div>
    </div>
  );
};

export default Hero