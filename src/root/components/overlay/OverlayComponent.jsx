import React, { useState, useEffect } from "react";
import "./overlay.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const OverlayComponent = ({ onClose }) => {
  const handleGoBack = () => {
    onClose();
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="prev-arrow" onClick={onClick}>
        <div id="m_left">
          <FaAngleLeft />
        </div>
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="next-arrow" onClick={onClick}>
        <div id="m_left">
          <FaAngleRight />
        </div>
      </button>
    );
  };

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const [showSlider, setShowSlider] = useState(window.innerWidth < 960);

  useEffect(() => {
    const handleResize = () => {
      setShowSlider(window.innerWidth < 1060);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="overlay__page">
          <div className="miss__one">
            <button onClick={handleGoBack}>Go Back</button>
          </div>
          <div className="container__slider">
            {showSlider ? (
              <div className="sliderrr">
                <Slider {...settings}>
                  <div>
                    <img
                      src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_500/v1685436273/Homepage-v3/our-mission/mission-1.jpg"
                      alt=""
                    />
                    <div className="overlay-text2">
                      Award winning design
                      <br /> <br />
                      When it comes to form and function, we’ve got it down.
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_500/v1685436273/Homepage-v3/our-mission/mission-2.jpg"
                      alt=""
                    />
                    <div className="overlay-text2">
                      The future of hydration
                      <br /> <br />
                      PureVis™ and Nano Zero technology improves water quality
                      for a brilliant hydration experience.
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_500/v1685436273/Homepage-v3/our-mission/mission-3.jpg"
                      alt=""
                    />
                    <div className="overlay-text2">
                      Better for you and the planet
                      <br /> <br />A portion of every purchase helps restore our
                      oceans and brings clean water to communities in need.
                    </div>
                  </div>
                </Slider>
              </div>
            ) : (
              <div className="simple__images">
                <div>
                  <img
                    src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_500/v1685436273/Homepage-v3/our-mission/mission-1.jpg"
                    alt=""
                  />
                  <div className="overlay-text2">
                    Award winning design
                    <br /> <br />
                    When it comes to form and function, we’ve got it down.
                  </div>
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_500/v1685436273/Homepage-v3/our-mission/mission-2.jpg"
                    alt=""
                  />
                  <div className="overlay-text2">
                    The future of hydration
                    <br /> <br />
                    PureVis™ and Nano Zero technology improves water quality for
                    a brilliant hydration experience.
                  </div>
                </div>

                <div>
                  <img
                    src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_500/v1685436273/Homepage-v3/our-mission/mission-3.jpg"
                    alt=""
                  />
                  <div className="overlay-text2">
                    Better for you and the planet
                    <br /> <br />A portion of every purchase helps restore our
                    oceans and brings clean water to communities in need.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayComponent;
