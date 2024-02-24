import React from "react";
import "./magazine.css";
import { FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Magazine = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 slides at once
    slidesToScroll: 1,
    responsive: [
    
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="mag__page">
      <div className="mag__container">
        <div className="mag_heading">
          <h1>basq magazine</h1>
          <p>
            Take a peek at our online magazine where we cover everything from
            water to travel and wellness.
          </p>
        </div>
        <div className="mag__button">
          <button>
            Explore basq <FaAngleRight style={{ paddingTop: "3px" }} />
          </button>
        </div>
      </div>
      <Slider {...settings}>
        
        <div className="mag__img">
          <img
            src={
              "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1684876841/Homepage-v3/larq_pitcher_on_table.png"
            }
            alt=""
          />
          <div className="mag__text">
            <p>
              I’m a nutritionist, and I only use filtered water. Here’s why.
            </p>
            <a href="">Read More</a>
          </div>
        </div>
        <div className="mag__img">
          <img
            src={
              "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1684876902/Homepage-v3/environment_plastic.png"
            }
            alt=""
          />
          <div className="mag__text">
            <p>This is how plastic you're eating per week</p>
            <a href="">Read More</a>
          </div>
        </div>
        <div className="mag__img">
          <img
            src={
              "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1684876924/Homepage-v3/New_york_view.png"
            }
            alt=""
          />
          <div className="mag__text">
          <p>How Clean is new York tap water</p>
          <a href="">Read More</a>
          </div>
        </div>
        <div className="mag__img">
          <img
            src={
              "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1684876988/Homepage-v3/dished_with_food.png"
            }
            alt=""
          />
          <div className="mag__text">
            <p>How to remove PFAS PFOA PFOS from tap Water</p>
            <a href="">Read More</a>
          </div>
        </div>
        <div className="mag__img">
          <img
            src={
              "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1685304669/Homepage-v3/london_bridge.jpg"
            }
            alt=""
          />
          <div className="mag__text">
            <p>How clean is Landon Tap water</p>
            <a href="">Read More</a>
          </div>
        </div>
        <div className="mag__img">
          <img
            src={
              "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1685304702/Homepage-v3/larq_bottle_on_the_water.jpg"
            }
            alt=""
          />
          <div className="mag__text">
            <p>
              How to clean your reusable water bottle if you don’t have a
              self-cleaning one
            </p>
            <a href="">Read More</a>
          </div>
        </div>
        <div className="mag__img">
          <img
            src={
              "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1685304729/Homepage-v3/interior_design.jpg"
            }
            alt=""
          />
          <div className="mag__text">
            <p>What is Japandi Interior Design?</p>
            <a href="">Read More</a>
          </div>
        </div>
        
        </Slider>
     
      
    </section>
  );
};

export default Magazine;
