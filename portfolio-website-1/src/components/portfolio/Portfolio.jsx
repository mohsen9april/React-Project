import React from 'react'
import data from './data'

const Portfolio = () => {
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
                <li className='active'>All</li>
                <li>Design</li>
                <li>Brandibg</li>
                <li>Photography</li>
              </ul>
            </div>
          </div>

          <div className='content grid mtop'>
            {data.map((elem) => {
              // const { cover, title, category } = elem

              return (
                <div className='box'>
                  <div className='img'>
                    <img src={elem.cover} alt='' />
                  </div>
                  <div className='overlay'>
                    <h1>{elem.title}</h1>
                    <p>{elem.category}</p>
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
