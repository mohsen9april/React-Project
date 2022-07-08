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

            <div className="hero-text"></div>
        

        </div>



        <div className="right-h">right-side</div>
    </div>
  )
}

export default Hero