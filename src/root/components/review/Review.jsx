import React from "react";
import "./review.css";
import { FaArrowRight, FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <section>
      <div className="review__page">
        {/* ////////// Review */}
        <div id="review">
          <div className="review__sub">
            <h1>Brilliant</h1>
            <a href="">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </a>
            <p>Based on 10693 reviews</p>
          </div>
          <div className="review__butt">
            <button id="reviews">
              Reviews <FaArrowRight />
            </button>
          </div>
        </div>
        {/* ////////// Review */}
        <div className="review_card">
          <div className="cards">
            <div className="one">
              What’s the Next Status Water Bottle? Three of our experts named
              the LARQ bottle as one to watch.
            </div>
            <div className="one">
              The result is that every glass of water tastes crisp and fresh.
            </div>
            <div className="one">
              LARQ's PureVis™ water pitcher erased my fears about drinking water
              from the tap.
            </div>
            <div className="one">
              You Should Ditch Your Old Water Dispenser For The High-Tech LARQ
              Pitcher PureVis™.
            </div>
          </div>
          <div className="img__style">
            <img
              src={
                "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_150/v1685705206/v3-images/media-block/blue/strategist.png"
              }
              alt=""
            />
            <img
              src={
                "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_150/v1685705206/v3-images/media-block/blue/oprah_Magazine.png"
              }
              alt=""
            />
            <img
              src={
                "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_150/v1685705206/v3-images/media-block/blue/digital_trends.png"
              }
              alt=""
            />
            <img
              src={
                "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_150/v1689147058/v3-images/media-block/BP-logo-black.png"
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
