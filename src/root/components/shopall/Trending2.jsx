import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./trending2.css"

const Trending2 = () => {
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


  const [currentImageIndex3, setCurrentImageIndex3] = useState(images3[0]);
  const [texty3, setText3] = useState(text3[0]);
  const handleButtonClick3 = (x) => {
    console.log(images3[0]);
    setCurrentImageIndex3(images3[x]);
    console.log(texty3[0]);
    setText3(text3[x]);
  };
  return (
    <section >
      <div className="Shop__page">
        <h1>Shop</h1>
        <div className="shop__content1">
          {/*   3rd Image */}
          <div className="img-3 ">
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
          
          {/*   3rd Image */}
          <div className="img-3">
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
          {/*   3rd Image */}
          <div className="img-3">
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
        </div>
      </div>
    </section>
  )
}

export default Trending2
