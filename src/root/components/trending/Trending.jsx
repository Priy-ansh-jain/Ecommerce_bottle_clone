import React, { useState } from "react";
import "./trending.css";
import { Link } from "react-router-dom";

const Trending = () => {
  const images1 = [
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/SET-3XSWIGM.png",
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_910/v1701177839/SKU/SPA/v3/SET-3XSWIGL.png",
  ];
  const text1 = ["23 oz", "34 Oz"];

  const images2 = [
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/SET-FLIP-UVC-STRAW-M-OB.png",
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/SET-FLIP-UVC-STRAW-M-GW.png",
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/SET-FLIP-UVC-STRAW-M-SM.png",
  ];
  const text2 = ["Obsidian Black", "Seaside Mint", "Granite White"];
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
  const images4 = [
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/PAMB190A.png",
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/PAPW190A.png",
  ];
  const text4 = ["Monaco Blue", "Pure White"];
  const images5 = [
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNWOB068A.png",
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNWGW068A.png",
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNWEG068A.png",
  ];
  const text5 = ["Obsidian Black", "Granite White", "Ecalyptus Green"];
  const images6 = [
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BFDOB050A.png",
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BFDGW050A.png",
  ];
  const text6 = ["Obsidian Black", "Granite White"];
  const images7 = [
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNSOB050A.png",
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNSSM050A.png",
    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNSGW050A.png",
  ];
  const text7 = ["Obsidian Black", "Sesisde Mint", "Granite White"];

  const [currentImageIndex, setCurrentImageIndex] = useState(images1[0]);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(images2[0]);
  const [currentImageIndex3, setCurrentImageIndex3] = useState(images3[0]);
  const [currentImageIndex4, setCurrentImageIndex4] = useState(images4[0]);
  const [currentImageIndex5, setCurrentImageIndex5] = useState(images5[0]);
  const [currentImageIndex6, setCurrentImageIndex6] = useState(images6[0]);
  const [currentImageIndex7, setCurrentImageIndex7] = useState(images7[0]);
  const [texty, setText] = useState(text1[0]);
  const [texty1, setText2] = useState(text2[0]);
  const [texty3, setText3] = useState(text3[0]);
  const [texty4, setText4] = useState(text4[0]);
  const [texty5, setText5] = useState(text5[0]);
  const [texty6, setText6] = useState(text6[0]);
  const [texty7, setText7] = useState(text7[0]);

  const handleButtonClick = (x) => {
    console.log(images1[x]);
    setCurrentImageIndex(images1[x]);
    console.log(texty[0]);
    setText(text1[x]);
  };
  const handleButtonClick2 = (x) => {
    console.log(images2[0]);
    setCurrentImageIndex2(images2[x]);
    console.log(texty1[0]);
    setText2(text2[x]);
  };

  const handleButtonClick3 = (x) => {
    console.log(images3[0]);
    setCurrentImageIndex3(images3[x]);
    console.log(texty3[0]);
    setText3(text3[x]);
  };

  const handleButtonClick4 = (x) => {
    console.log(images4[0]);
    setCurrentImageIndex4(images4[x]);
    console.log(texty4[0]);
    setText4(text4[x]);
  };

  const handleButtonClick5 = (x) => {
    console.log(images5[0]);
    setCurrentImageIndex5(images5[x]);
    console.log(texty5[0]);
    setText5(text5[x]);
  };
  const handleButtonClick6 = (x) => {
    console.log(images6[0]);
    setCurrentImageIndex6(images6[x]);
    console.log(texty6[0]);
    setText6(text6[x]);
  };
  const handleButtonClick7 = (x) => {
    console.log(images7[0]);
    setCurrentImageIndex7(images7[x]);
    console.log(text7[0]);
    setText7(text7[x]);
  };

  return (
    <section className="boottt">
      <div className="trending__content">
        <h1>Trending</h1>
        <div className="trending_one">
          {/* ///1st img */}
          <div className="img-1">
            {" "}
            <Link to="/bottle1">
              <img src={currentImageIndex} alt=""/>
            </Link>
            <h6>Jolly Good Swing</h6>
            <p>{texty}</p>
            <div className="bott_item">
              <button
                className={
                  currentImageIndex ===
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/SET-3XSWIGM.png"
                    ? "bottle__button"
                    : null
                }
                onClick={() => {
                  handleButtonClick(0);
                }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/SET-3XSWIGM.png"
                  }
                  alt=""
                />
              </button>
              <button
                className={
                  currentImageIndex !==
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/SET-3XSWIGM.png"
                    ? "bottle__button"
                    : null
                }
                onClick={() => {
                  handleButtonClick(1);
                }}
              >
                {" "}
                <img
                  src={
                    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_910/v1701177839/SKU/SPA/v3/SET-3XSWIGM.png"
                  }
                  alt=""
                />
              </button>
              <p>
                From <span>$119.85</span> $99
              </p>
            </div>
          </div>
          {/* 2nd image */}
          <div className="img-2">
            {" "}
            <Link to="/bottle2">
            <img src={currentImageIndex2} alt=""/>
            </Link>
            <div className="bott_item">
              <h6>Pure Vibes</h6>
              <p>{texty1}</p>
              <button
                className={
                  currentImageIndex2 ===
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/SET-FLIP-UVC-STRAW-M-OB.png"
                    ? "bottle__button"
                    : null
                }
                onClick={() => {
                  handleButtonClick2(0);
                }}
              >
                {" "}
                <img
                  src={
                    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/SET-FLIP-UVC-STRAW-M-OB.png"
                  }
                  alt=""
                />
              </button>
              <button
                className={
                  currentImageIndex2 ===
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/SET-FLIP-UVC-STRAW-M-GW.png"
                    ? "bottle__button"
                    : null
                }
                onClick={() => {
                  handleButtonClick2(1);
                }}
              >
                {" "}
                <img
                  src={
                    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/SET-FLIP-UVC-STRAW-M-GW.png"
                  }
                  alt=""
                />
              </button>
              <button
                className={
                  currentImageIndex2 ===
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/SET-FLIP-UVC-STRAW-M-SM.png"
                    ? "bottle__button"
                    : null
                }
                onClick={() => {
                  handleButtonClick2(2);
                }}
              >
                <img
                  src={
                    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/SET-FLIP-UVC-STRAW-M-SM.png"
                  }
                  alt=""
                />
              </button>
              <p>
                From <span>$129.85</span> $109
              </p>
            </div>
          </div>
          {/*   3rd Image */}
          <div className="img-3">
            {" "}
            <Link to="/bottle3">
            <img src={currentImageIndex3} alt=""/>
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

          {/* 4th Image */}
          <div className="img-4">
            {" "}
            <Link to="bottle4">
            <img src={currentImageIndex4} alt=""/>
            </Link>
            <div className="bott_item">
              <h6>
                LARQ Pitcher PureVis <span>Tm</span>
              </h6>
              <p>{texty4}</p>
              <button
                className={
                  currentImageIndex4 ===
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/PAMB190A.png"
                    ? "bottle__button"
                    : null
                }
                onClick={() => handleButtonClick4(0)}
              >
                {" "}
                <img
                  src={
                    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/PAMB190A.png"
                  }
                  alt=""
                />
              </button>
              <button
               className={
                currentImageIndex4 ===
                "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/PAPW190A.png"
                  ? "bottle__button"
                  : null
              }
                onClick={() => handleButtonClick4(1)}
              >
                {" "}
                <img
                  src={
                    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/PAPW190A.png"
                  }
                  alt=""
                />
              </button>
              <p>
                From <span>$168</span> $139
              </p>
            </div>
          </div>

          {/* 5th Image */}
          <div className="img-5">
           <Link to="bottle5">
            <img src={currentImageIndex5} alt="" />
            </Link>
            <div className="bott_item">
              <h6>LARQ Bottle Swig Top</h6>
              <p>{texty5}</p>
              <button
               className={
                currentImageIndex5 ===
                "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNWOB068A.png"
                  ? "bottle__button"
                  : null
              }
              onClick={() => handleButtonClick5(0)}
            >
                {" "}
                <img
                  src={
                    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNWOB068A.png"
                  }
                  alt=""
                />
              </button>
              <button
              className={
                currentImageIndex5 ===
                "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNWGW068A.png"
                  ? "bottle__button"
                  : null
              }
              onClick={() => handleButtonClick5(1)}
            >
                {" "}
                <img
                  src={
                    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNWGW068A.png"
                  }
                  alt=""
                />
              </button>
              <button
              className={
                currentImageIndex5 ===
                "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNWEG068A.png"
                  ? "bottle__button"
                  : null
              }
              onClick={() => handleButtonClick5(2)}
            >
                {" "}
                <img
                  src={
                    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNWEG068A.png"
                  }
                  alt=""
                />
              </button>
              <p>From $$39.95</p>
            </div>
          </div>

          {/* 6th Img */}
          <div className="img-6">
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
                onClick={() => handleButtonClick6(0)}
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

          {/* 7th image */}
          <div className="img-7">
            {" "}
            <Link to="bottle7">
            <img src={currentImageIndex7} alt="" />
            </Link>
            <div className="bott_item">
              <h6>LARQ Bottle Flip top</h6>
              <p>{texty7}</p>
              <button
                className={
                  currentImageIndex7 ===
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNSOB050A.png"
                    ? "bottle__button"
                    : null
                }
                onClick={() => handleButtonClick7(0)}
              >
             
                <img
                  src={
                    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNSOB050A.png"
                  }
                  alt=""
                />
              </button>
              <button
                 className={
                  currentImageIndex7 ===
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNSSM050A.png"
                    ? "bottle__button"
                    : null
                }
                onClick={() => handleButtonClick7(1)}
              >
                {" "}
                <img
                  src={
                    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNSSM050A.png"
                  }
                  alt=""
                />
              </button>
              <button
                className={
                  currentImageIndex7 ===
                  "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNSGW050A.png"
                    ? "bottle__button"
                    : null
                }
                onClick={() => handleButtonClick7(2)}
              >
                {" "}
                <img
                  src={
                    "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNSGW050A.png"
                  }
                  alt=""
                />
              </button>
              <p>From $39.95</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
