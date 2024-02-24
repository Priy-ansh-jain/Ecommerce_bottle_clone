import React from "react";
import "./footer.css";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import country from "../../../assets/country.png";

const Footer = () => {
  return (
    <footer>
      <div className="foot">
        <div className="foot__one">
          <h1>Become an Insider</h1>
          <h3>
            Receive exclusive offers, hydration news, and more when you
            subscribe.
          </h3>
          <div className="email__input">
            <input type="email" id=""  placeholder="Email address" />
            <b> <FaArrowRight/></b>
           
          </div>

          <div className="footer__icon">
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              {" "}
              <FaYoutube />
            </a>
            <a href="">
              {" "}
              <FaTwitter />
            </a>
          </div>
          <div className="fuut__img">
            <button id="us">
              <img src={country} alt="" /> UnitedStates
            </button>
            <p>Term & Services</p>
            <p>Accessibilty</p>
          </div>
        </div>
        <div className="foot__two">
          <ul>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Reviews</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Find a retailer</a>
            </li>
            <li>
              <a href="">Corporate gifting</a>
            </li>
          </ul>
        </div>
        <div className="foot__two">
          <ul>
            <li>
              <a href="">basq magazine</a>
            </li>
            <li>
              <a href="">Press</a>
            </li>
            <li>
              <a href="">Our story</a>
            </li>
            <li>
              <a href="">Affiliate program</a>
            </li>
            <li>
              <a href="">Ambassador program</a>
            </li>
          </ul>
        </div>
        <div className="foot__three">
          <img
            src={
              "https://res.cloudinary.com/larq/image/upload/e_replace_color:f5f9fc:100:white/v1682247434/v3-images/footer/bicycle-animation.gif"
            }
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
