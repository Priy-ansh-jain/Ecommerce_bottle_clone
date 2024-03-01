import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./purification.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Purification = () => {
  const images3 = [
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDMB050A.png",
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDOB050A.png",
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDSM050A.png",
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDGW050A.png",
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDHP050A.png",
  ];
  const text3 = [
    "Moaco Blue",
    "Obsisdian Black",
    "Seaside Mint",
    "granite White",
    "Himaliyan Pink",
  ];
  const handleButtonClick3 = (x) => {
    console.log(images3[0]);
    setCurrentImageIndex3(images3[x]);
    console.log(texty3[0]);
    setText3(text3[x]);
  };
  const [currentImageIndex3, setCurrentImageIndex3] = useState(images3[0]);
  const [texty3, setText3] = useState(text3[0]);

  const images6 = [
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BFDOB050A.png",
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BFDGW050A.png",
  ];
  const text6 = ["Obsidian Black", "Granite White"];
  const [currentImageIndex6, setCurrentImageIndex6] = useState(images6[0]);
  const [texty6, setText6] = useState(text6[0]);
  const handleButtonClick6 = (x) => {
    console.log(images6[0]);
    setCurrentImageIndex6(images6[x]);
    console.log(texty6[0]);
    setText6(text6[x]);
  };

  const images10 = [
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BSBO071A.png",
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BSWD071A.png",
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BSWP071A.png",
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BSBP071A.png",
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BSWC071A.png",
  ];
  const text10 = [
    "Blck / Onyx",
    "White / dune",
    "White / pebble",
    " Black / pine",
    "White / Coral",
  ];
  const handleButtonClick12 = (x) => {
    console.log(images10[0]);
    setCurrentImageIndex10(images10[x]);
    console.log(texty10[0]);
    setText10(text10[x]);
  };
  const [currentImageIndex10, setCurrentImageIndex10] = useState(images10[0]);
  const [texty10, setText10] = useState(text10[0]);


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <div className="purification_section">
      <div className="Shop__puri">
        <h1> Purification</h1>
        <p>
          PureVis™ and Nano Zero Filter technology improve the quality of your
          water at home and on the go.
        </p>
      </div>

      <div className="purification__container">
        <div
          className={
            texty3 !== undefined
              ? texty3.includes("Blue")
                ? "img-33 bg-blue  "
                : texty3.includes("Green")
                  ? "img-33 bg-green "
                  : texty3.includes("White")
                    ? "img-33 bg-white "
                    : texty3.includes("Black")
                      ? "img-33 bg-black "
                      : texty3.includes("Mint")
                        ? "img-33 bg-mint "
                        : texty3.includes("Pink")
                          ? "img-33 bg-pink "
                          : "img-33 bg-default "
              : "img-33 bg-default "
          }
        >
          {" "}
          <Link to="/bottle3">
            <img src={currentImageIndex3} alt="" />
          </Link>
          <div className="bott_item">
            <h6>
              LARQ Bottle PureVis <span>Tm</span>
            </h6>
            <p>{texty3}</p>
            <button
              className={
                currentImageIndex3 ===
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDMB050A.png"
                  ? "bottle__button"
                  : null
              }
              onClick={() => {
                handleButtonClick3(0);
              }}
            >
              {" "}
              <img
                src={
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDMB050A.png"
                }
                alt=""
              />
            </button>
            <button
              className={
                currentImageIndex3 ===
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDOB050A.png"
                  ? "bottle__button"
                  : null
              }
              onClick={() => {
                handleButtonClick3(1);
              }}
            >
              {" "}
              <img
                src={
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDOB050A.png"
                }
                alt=""
              />
            </button>
            <button
              className={
                currentImageIndex3 ===
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDSM050A.png"
                  ? "bottle__button"
                  : null
              }
              onClick={() => {
                handleButtonClick3(2);
              }}
            >
              {" "}
              <img
                src={
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDSM050A.png"
                }
                alt=""
              />
            </button>
            <button
              className={
                currentImageIndex3 ===
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDGW050A.png"
                  ? "bottle__button"
                  : null
              }
              onClick={() => {
                handleButtonClick3(3);
              }}
            >
              {" "}
              <img
                src={
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDGW050A.png"
                }
                alt=""
              />
            </button>
            <button
              className={
                currentImageIndex3 ===
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDHP050A.png"
                  ? "bottle__button"
                  : null
              }
              onClick={() => {
                handleButtonClick3(4);
              }}
            >
              {" "}
              <img
                src={
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDHP050A.png"
                }
                alt=""
              />
            </button>
            <p>From $99</p>
          </div>
        </div>

        <div
          className={
            texty10 !== undefined
              ? texty10.includes("Blue")
                ? "img-33 bg-blue  "
                : texty10.includes("Green")
                  ? "img-33 bg-green "
                  : texty10.includes("White")
                    ? "img-33 bg-white "
                    : texty10.includes("Black")
                      ? "img-33 bg-black "
                      : texty10.includes("Mint")
                        ? "img-33 bg-mint "
                        : texty10.includes("Pink")
                          ? "img-33 bg-pink "
                          : "img-33 bg-default "
              : "img-33 bg-default "
          }
        >
          {" "}
          <Link to="/bottle3">
            <img src={currentImageIndex10} alt="" />
          </Link>
          <div className="bott_item">
            <h6>
              LARQ Bottle PureVis <span>Tm</span>
            </h6>
            <p>{texty10}</p>
            <button
              className={
                currentImageIndex10 ===
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BSBO071A.png"
                  ? "bottle__button"
                  : null
              }
              onClick={() => {
                handleButtonClick12(0);
              }}
            >
              {" "}
              <img
                src={
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BSBO071A.png"
                }
                alt=""
              />
            </button>
            <button
              className={
                currentImageIndex10 ===
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BSWD071A.png"
                  ? "bottle__button"
                  : null
              }
              onClick={() => {
                handleButtonClick12(1);
              }}
            >
              {" "}
              <img
                src={
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BSWD071A.png"
                }
                alt=""
              />
            </button>
            <button
              className={
                currentImageIndex10 ===
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BSWP071A.png"
                  ? "bottle__button"
                  : null
              }
              onClick={() => {
                handleButtonClick12(2);
              }}
            >
              {" "}
              <img
                src={
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BSWP071A.png"
                }
                alt=""
              />
            </button>
            <button
              className={
                currentImageIndex10 ===
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BSBP071A.png"
                  ? "bottle__button"
                  : null
              }
              onClick={() => {
                handleButtonClick12(3);
              }}
            >
              {" "}
              <img
                src={
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BSBP071A.png"
                }
                alt=""
              />
            </button>
            <button
              className={
                currentImageIndex10 ===
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BSWC071A.png"
                  ? "bottle__button"
                  : null
              }
              onClick={() => {
                handleButtonClick12(4);
              }}
            >
              {" "}
              <img
                src={
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BSWC071A.png"
                }
                alt=""
              />
            </button>
            <p>From $99</p>
          </div>
        </div>
        <div
          className={
            texty6 !== undefined
              ? texty6.includes("Blue")
                ? "img-66 bg-blue  "
                : texty6.includes("Green")
                  ? "img-66 bg-green "
                  : texty6.includes("White")
                    ? "img-66 bg-white "
                    : texty6.includes("Black")
                      ? "img-66 bg-black "
                      : texty6.includes("Mint")
                        ? "img-66 bg-mint "
                        : texty6.includes("Pink")
                          ? "img-66 bg-pink "
                          : "img-66 bg-default "
              : "img-66 bg-default "
          }
        >
          {" "}
          <Link to="bottle6">
            <img src={currentImageIndex6} alt="" />
          </Link>
          <div className="bott_item">
            <h6>LARQ Bottle Filtered</h6>
            <p>{texty6}</p>
            <button
              className={
                currentImageIndex6 ===
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BFDOB050A.png"
                  ? "bottle__button"
                  : null
              }
              onClick={() => handleButtonClick6(0)}
            >
              {" "}
              <img
                src={
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BFDOB050A.png"
                }
                alt=""
              />
            </button>
            <button
              className={
                currentImageIndex6 ===
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BFDGW050A.png"
                  ? "bottle__button"
                  : null
              }
              onClick={() => handleButtonClick6(1)}
            >
              {" "}
              <img
                src={
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BFDGW050A.png"
                }
                alt=""
              />
            </button>
            <p>
              From <span>$58</span> $49.95
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Purification;
