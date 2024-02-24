import React from "react";
import "./shopAll.css";
import { FaArrowRight } from "react-icons/fa";
const ShopAll = () => {
  return (
    <section className="shop__all_page">
      <div className="shop_all_sub_heading">
        <h1>Shop All</h1>
        <p> Discover Discover a world of brilliant hydration</p>
      </div>
      <div className="bottle__links">
        <ul>
          <div className="shopify">
            <li>
              <a href="">
                <img
                  src={
                    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1685535123/assets/spa/v3/shop/navigation/purification_v3.png"
                  }
                  alt=""
                />
              </a>
            </li>
            <p>Purification</p>
          </div>
          <div className="shopify">
          <li>
            <a href="">
              <img
                src={
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1685535123/assets/spa/v3/shop/navigation/home_v3.png"
                }
                alt=""
              />
            </a>
          </li>
          <p>Home</p>
          </div>
          <div className="shopify">
          <li>
            <a href="">
              <img
                src={
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1685535123/assets/spa/v3/shop/navigation/drinkware_v3.png"
                }
                alt=""
              />
            </a>
          </li>
          <p>Drinkware</p>
          </div>
          <div className="shopify">
          <li>
            <a href="">
              <img
                src={
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1685535123/assets/spa/v3/shop/navigation/gift-sets_v3.png"
                }
                alt=""
              />
            </a>
          </li>
          <p>Gift Sets</p>
          </div>
        </ul>
      </div>

      <div className="limited_drop">
        <div className="limited_drop-left">
          <h1>Limited drop:Larq x Nomatic</h1>
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
          <img src={"https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1702983138/assets/spa/v3/shop/banner/nomatic_sling-promo.jpg"} alt="" />
        </div>
      </div>
      <div className="Shop__all_sub_Page">
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default ShopAll;
