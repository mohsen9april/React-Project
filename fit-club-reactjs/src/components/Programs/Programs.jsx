import React from 'react'
import './Programs.css'
import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className='Programs' id='programs'>

        <div className='programs-header'>
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        <div className='programs-categories'>
            {programsData.map((value) => {
                return(
                    <div className='category'>
                        {value.image}
                        <span>{value.heading}</span>
                        <span>{value.details}</span>
                        <div className='joinnow'>
                            <p>Join now</p>
                            <img src={RightArrow} alt="/" />
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Programs