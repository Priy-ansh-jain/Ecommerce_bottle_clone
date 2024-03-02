import React, { useState } from 'react'
import "./slid.css"
import { imageImg1, imageImg2, imageImg3 } from './slidedata'

const Slide = () => {



  return (
    <section>

      <div className="cardsss">

        {imageImg1.map((item, index) => (
          <div key={index} className="card">
            <div className="info__containerrr">
              <div>
                <img
                  src={item.techImage}
                  alt=''
                />
                <h1>{item.subHeading}</h1>
                <p>{item.Text}</p>
              </div>
              <div className='small__images'>
                <div className='small'>
                  <p>{item.svg}</p>
                  <p>{item.detail}</p>
                </div>
              </div>
            </div>
            {/* ... other card content */}
          </div>
        ))}

        <div className='card'>
          <div className="card1">
            <div className='info__containerrr'>
              <img src={"https://res.cloudinary.com/larq/image/upload/q_auto/v1657116048/assets/spa/v2/tech-page/filters-tech-image.png"} alt="" />
              <div className='hydrate'>
                <h1>Nano Zero</h1>
                <p>A new age of filtration is here. Enjoy crisp drinking water at home and on the go.</p>
              </div>
            </div>
            <div className='img__contain'>
              {imageImg2.map((item, index) => (
                <div className='small__images' key={index}>
                  <div className='small'>

                    <p>{item.svg}</p>
                    <p>{item.detail}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='card'>
          <div className="card1">
            <div className='info__containerrr'>
              <img src={"https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1656348090/assets/spa/v2/tech-page/mobile-app.png"} alt="" />
              <div className='hydrate'>
                <h1>Smart Hydration
                </h1>
                <p>Track your household water consumption, filter life, and more.
                </p>
              </div>
            </div>
            <div className='img__contain'>
              {imageImg3.map((item, index) => (
                <div className='small__images' key={index}>
                  <div className='small'>
                    <p>{item.svg}</p>
                    <p>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Slide


