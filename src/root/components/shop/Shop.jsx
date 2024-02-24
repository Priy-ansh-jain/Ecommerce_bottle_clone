import React from "react";
import "./shop.css";

const Shop = () => {
  return (
    <section>
      <div className="Shop__page">
        <h1>Shop</h1>
        <div className="shop__content">
          <div className="shopy">
            <img
              src={
              "https://res.cloudinary.com/larq/image/upload/w_790/v1692781791/Homepage-v3/Navigation/update/purification-big.jpg"
              }
              alt=""
            />
            <h3>purification</h3>
            <a href="">Shop Now</a>
          </div>
          <div className="shopy">
            <img
              src={
                "https://res.cloudinary.com/larq/image/upload/w_790/v1692781790/Homepage-v3/Navigation/update/home-big.jpg"
              }
              alt=""
            />
            <h3>Home</h3>
            <a href="">Shop Now</a>
          </div>
          <div className="shopy">
            <img
              src={
                "https://res.cloudinary.com/larq/image/upload/w_790/v1692781790/Homepage-v3/Navigation/update/drinkware-big-us.jpg"
              }
              alt=""
            />
            <h3>Drinkware</h3>
            <a href="">Shop Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
