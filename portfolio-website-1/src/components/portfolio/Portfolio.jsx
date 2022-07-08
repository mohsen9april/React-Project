import React from 'react'
import data from './data'
import { useState } from 'react'

const Portfolio = () => {

  const [item, setItem] = useState(data)

  const filterItem = (cateItem) => {
    const updatedItme = data.filter((curElem) => {
      return curElem.category === cateItem
    })
    setItem(updatedItme)
  }

  return (
    <>
      <section className='portfolio mtop'>
        <div className='container'>
          <div className='head flexSB'>
            <div className='left'>
              <span className='baget'> Portfolio</span>
              <h1 className='title'>Creative Portfolio</h1>
            </div>

            <div className='links'>
              <ul className='flexSB'>

                {/* <li className='active'>All</li> */}
                <li className='active' onClick={() => setItem(data)}>All</li>

                {/* <li>Design</li>
                <li>Brandibg</li>
                <li>Photography</li> */}
                <li onClick={() => filterItem("Design")}>Design </li>
                <li onClick={() => filterItem("Branding")}>Branding</li>
                <li onClick={() => filterItem("Photography")}>Photography</li>
              </ul>
              
            </div>
          </div>

          <div className='content grid mtop'>
            {/* {data.map((elem) => { */}
            {item.map((elem) => {
            
            const { cover, title, category } = elem

              return (
                <div className='box'>
                  <div className='img'>
                    <img src={cover} alt='' />
                  </div>
                  <div className='overlay'>
                    <h1>{title}</h1>
                    <p>{category}</p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>
    </>
  )
}

export default Portfolio
