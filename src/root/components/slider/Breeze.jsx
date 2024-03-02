import React from 'react'
import "./breeze.css"
const Breeze = () => {
  return (
    <div className='breeze__page'>
      <div className='breeze__conatiner'>
        <p>Portable Purification</p>
        <h1>Make refills a <br /> breeze</h1>
        <p>PureVis™ and Nano Zero technology improves water quality for a brilliant hydration experience on the go.</p>
      </div>
      <div className='breeze__image'>
        <img src={"https://res.cloudinary.com/larq/image/upload/q_auto,f_auto,w_860/v1692947738/assets/spa/v3/shop/content_section-purification.jpg"} alt="" />
      </div>
    </div>
  )
}

export default Breeze
