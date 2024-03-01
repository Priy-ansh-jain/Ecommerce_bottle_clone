import React from "react";
import "./shopAll.css";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Purification from "../purification/Purification";

const ShopAll = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    horizontal: true, // Enable vertical scrolling
    horizontalSwipping: true, // Enable vertical swiping
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="shop__all_page">
      <div className="shop_all_sub_heading">
        <h1>Shop All</h1>
        <p>Discover a world of brilliant hydration</p>
      </div>
      <Slider {...settings}>
        <div className="shopify">
          <div className="shpy_img">
            <a href="">
              <img
                src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1685535123/assets/spa/v3/shop/navigation/purification_v3.png"
                alt=""
              />
            </a>
          </div>
          <p>Purification</p>
        </div>
        <div className="shopify">
          <div className="shpy_img">
            <a href="">
              <img
                src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1685535123/assets/spa/v3/shop/navigation/home_v3.png"
                alt=""
              />
            </a>
          </div>
          <p>Home</p>
        </div>
        <div className="shopify">
          <div className="shpy_img">
            <a href="">
              <img
                src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1685535123/assets/spa/v3/shop/navigation/drinkware_v3.png"
                alt=""
              />
            </a>
          </div>
          <p>Drinkware</p>
        </div>
        <div className="shopify">
          <div className="shpy_img">
            <a href="">
              <img
                src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1685535123/assets/spa/v3/shop/navigation/gift-sets_v3.png"
                alt=""
              />
            </a>
          </div>
          <p>Gift Sets</p>
        </div>
      </Slider>

      <div className="limited_drop">
        <div className="limited_drop-left">
          <h1>Limited drop: Larq x Nomatic</h1>
          <p>
            The LARQ Bottle & Nomatic Sling is the necessary upgrade to your
            everyday carry.
          </p>
          <div className="limited__butt">
            <button id="limited">
              Shop Now <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="limited_drop-right">
          <img
            src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1702983138/assets/spa/v3/shop/banner/nomatic_sling-promo.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="Shop__all_sub_Page">
        <div><Purification /></div>
        <div></div>
      </div>
    </section>
  );
};

export default ShopAll;
