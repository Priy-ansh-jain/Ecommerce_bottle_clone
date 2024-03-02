import React from 'react'
import Slider from "../slider/Slider"
import "./tecnolo.css"



const Technology = () => {


  return (
    <div>
      <div className='technology__page'>
        <div className='tech__menu'>
          <ul>
            <li><a href="">Discover</a></li>
            <li><a href="">NanoZero</a></li>
            <li><a href="">PureVis™</a></li>
            <li><a href="">Smart hydration</a></li>
            <li><a href="">Refrences</a></li>
          </ul>


        </div>
        <hr />
        <div className='science'>
          <h1>We've done the science to help you drink brilliantly</h1>
        </div>
     
          <div>
            <Slider />
          </div>
      </div>
    </div>
  )
}

export default Technology
