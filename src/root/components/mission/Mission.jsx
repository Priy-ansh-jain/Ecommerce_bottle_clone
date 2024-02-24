import React , {useState} from "react";
import "./mission.css";
import { FaArrowRight } from "react-icons/fa";
import OverlayComponent from "../overlay/OverlayComponent";
const Mission = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleLearnMoreClick = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <section className="miss__cont">
      <div className="mission__page">
      {/* <div className="blur"> */}
        <div className="miss__one">
          <p>Our Mission</p>
          <h1><span>D</span>rink <span>B</span>rilliantly</h1>
          <p>
            we Make its easy to opt for healthier and morwe sustainable
            hydration choice, anyhtime and anywhere
          </p>
          <button  onClick={handleLearnMoreClick}>
        
            Learn More <FaArrowRight />{" "}
          </button>
        </div>
        <div className="miss__two">
          <div className="drink__img">
            <img
              src={
                "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_500/v1685436273/Homepage-v3/our-mission/mission-1.jpg"
              }
              alt=""
            />
            <div className="overlay-text2">
              Award winning design
              <br /> <br />
              When it comes to form and function, we’ve got it down.
            </div>
          </div>
          <div className="drink__img">
            <img
              src={
                "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_500/v1685436273/Homepage-v3/our-mission/mission-2.jpg"
              }
              alt=""
            />
            <div className="overlay-text2">
              The future of hydration
              <br /> <br />
              PureVis™ and Nano Zero technology improves water quality for a
              brilliant hydration experience.
            </div>
          </div>
          <div className="drink__img">
            <img
              src={
                "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_500/v1685436273/Homepage-v3/our-mission/mission-3.jpg"
              }
              alt=""
            />
            <div className="overlay-text2">
              Better for you and the planet
              <br /> <br />A portion of every purchase helps restore our oceans
              and brings clean water to communities in need.
            </div>
          </div>
        </div>
        {showOverlay && <OverlayComponent onClose={handleCloseOverlay} />}
      </div>
      
    </section>
  );
};

export default Mission;
