import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className='plans-container'>
        <div className='plan-header'>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITHUS</span>
        </div>

        <div className='plans'>
            {plansData.map((value) => {
                return (
                    <>
                    <div className='plan'>
                        {value.icon}
                        <span>{value.name}</span>
                        <span>{value.price}</span>

                        <div className='features'>
                            {value.features.map((invalue) => {
                                return(
                                    <>
                                    <div className='feature'>
                                        <img src={whiteTick} alt="/" />
                                        <span>{invalue}</span>
                                    </div>
                                    </>
                                )
                            })}
                        </div>

                        <div>
                            <span>See more benefits --> </span>
                        </div>
                        <div>
                            <button className='btn'> Join now</button>
                        </div>

                    </div>
                    </>
                )
            })}
        </div>

    </div>
  )
}

export default Plans