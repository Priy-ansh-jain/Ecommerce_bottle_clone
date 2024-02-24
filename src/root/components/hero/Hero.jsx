import React from "react";
import "./hero.css";
import { FaAngleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section>
      <div className="img__cont">
        <div className="home__image">
          <div className="home__items">
            <div className="Home__content">
              <p>Drink briliantly</p>
              <h5>
                Bet your bottle can’t <span>do this</span>
              </h5>
              <p>
                Discover the science of PureVis™ technology for a germ-free and
                stink-free bottle.
              </p>
              <button className="butt__owesomee">
                Shop Now <FaAngleRight className="greater" />
              </button>
            </div>
            <div id="card">
              <a href="">
                <img
                  src={
                    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDGW050A.png"
                  }
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
