import React, { useState, useEffect } from "react";
import {
  FaAngleRight,
  FaArrowRight,
  FaTimes,
  FaCartPlus,
  FaUser,
  FaBlackTie,
} from "react-icons/fa";
import "./header.css";
import purification from "../../../assets/purification.webp";
import jug from "../../../assets/jug.jpg";
import trav from "../../../assets/trav.jpg";
import { Link } from "react-router-dom";
import CartIcon from "../cart/CartIcon";
import { useCart } from "../context/Context";
import Cart from "../cart/Cart";
import { Account, Client } from "appwrite"; // Import Account and Client from appwrite

import { useNavigate } from "react-router-dom";

const Header = () => {
  const { cart } = useCart();
  const cartCount = cart.length;

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleMouseEnterDropdown = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    setIsDropdownOpen(false);
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredOne, setIsHoveredOne] = useState(false);
  const [isHoveredTwo, setIsHoveredTwo] = useState(false);
  const [isHoveredThree, setIsHoveredThree] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseEnterOne = () => {
    setIsHoveredOne(true);
  };
  const handleMouseLeaveOne = () => {
    setIsHoveredOne(false);
  };
  const handleMouseEnterTwo = () => {
    setIsHoveredTwo(true);
  };
  const handleMouseLeaveTwo = () => {
    setIsHoveredTwo(false);
  };

  const handleMouseEnterThree = () => {
    setIsHoveredThree(true);
  };
  const handleMouseLeaveThree = () => {
    setIsHoveredThree(false);
  };
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };
  // const handleSignOut = () => {

  //   setIsLoggedIn(false); };

  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false); // State to track authentication status

  // Initialize Appwrite client and account
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("659e92e6eb1b45d3c54c");
  const account = new Account(client);

  useEffect(() => {
    // Check if the user is authenticated when the component mounts
    checkAuthentication();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Function to check if the user is authenticated
  const checkAuthentication = async () => {
    try {
      await account.get(); // If successful, the user is authenticated
      setAuthenticated(true);
    } catch (error) {
      setAuthenticated(false);
    }
  };
  const { clearCartData } = useCart();
  const handleLogout = async () => {

    try {
      await account.deleteSession("current"); // Delete the current session
      setAuthenticated(false); // Update authentication status
      clearCartData();
      navigate("/signin"); // Redirect to the sign-in page
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <header>
      <div className="navbar">
        <div className="container nav-container">
          <input className="checkbox" type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <div className="page__one">
            <div className="first">
              <ul>
                {/* /////////////////////////////////////////      1st li */}
                <li>
                  <div className="cont_background">
                    <a
                      className="hover-text"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      href=""
                    >
                      SHOP ALL
                    </a>
                    {isHovered && (
                      <div
                        className="hovered-element"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="sub_element">
                          <div className="butt__sub ">
                            <button>
                              {" "}
                              Explore <FaAngleRight />
                            </button>

                            <button>
                              {" "}
                              Holiday-Sets <FaAngleRight />
                            </button>
                          </div>

                          <div className="sub__links">
                            <a href="">Filters & Accessories</a>
                            <a href="">Corporate gifting</a>
                          </div>
                          <div className="diff__link">
                            <a
                              style={{
                                color: "lightblue",
                                fontSize: 10,
                                marginBottom: 10,
                                paddingLeft: 12,
                                position: "relative",
                              }}
                              href=""
                            >
                              LEARN MORE
                            </a>
                            <a
                              style={{ color: "lightblue", paddingLeft: 12 }}
                              href=""
                            >
                              PureVis™ technology
                            </a>
                            <a
                              style={{ color: "lightblue", paddingLeft: 12 }}
                              href=""
                            >
                              Nano Zero technology
                            </a>
                          </div>
                        </div>
                        <div className="shop__image">
                          <div>
                            <img
                              src={
                                "https://res.cloudinary.com/larq/image/upload/w_790/v1692781791/Homepage-v3/Navigation/update/purification-big.jpg"
                              }
                              alt=""
                            />
                            <div className="overlay-text1">
                              PURIFICATION
                              <br /> <br />
                              filter or purity water on the go
                            </div>
                          </div>
                          <div className="inner__home-img">
                            {" "}
                            <img
                              src={
                                "https://res.cloudinary.com/larq/image/upload/w_790/v1692781790/Homepage-v3/Navigation/update/home-big.jpg"
                              }
                              alt=""
                            />
                            <div className="overlay-text1">
                              HOME <br />
                              <br />
                              Equip Your home with Nano <br />
                              Zero Filtration
                            </div>
                          </div>
                          <div>
                            <img
                              src={
                                "https://res.cloudinary.com/larq/image/upload/w_790/v1692781790/Homepage-v3/Navigation/update/drinkware-big-us.jpg"
                              }
                              alt=""
                            />
                            <div className="overlay-text1">
                              DRINKWARE <br /> <br />
                              Hydrate Effortlessly on the go
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </li>

                {/* //////////////////////////////////    2nd li */}
                <li>
                  <div className="cont_background">
                    <a
                      className="hover-text"
                      onMouseEnter={handleMouseEnterOne}
                      onMouseLeave={handleMouseLeaveOne}
                      href=""
                    >
                      PURIFICATION
                    </a>
                    {isHoveredOne && (
                      <div
                        className="hovered-element"
                        onMouseEnter={handleMouseEnterOne}
                        onMouseLeave={handleMouseLeaveOne}
                      >
                        <div className="sub_element">
                          <div className="butt__sub ">
                            <button>
                              {" "}
                              Explore <FaAngleRight />
                            </button>

                            <button>
                              {" "}
                              Holiday-Sets <FaAngleRight />
                            </button>
                          </div>

                          <div className="sub__links">
                            <a href="">Filters & Accessories</a>
                            <a href="">Corporate gifting</a>
                          </div>
                          <div className="diff__link">
                            <a
                              style={{
                                color: "lightblue",
                                fontSize: 10,
                                marginBottom: 10,
                                paddingLeft: 12,
                                position: "relative",
                              }}
                              href=""
                            >
                              LEARN MORE
                            </a>
                            <a
                              style={{ color: "lightblue", paddingLeft: 12 }}
                              href=""
                            >
                              PureVis™ technology
                            </a>
                            <a
                              style={{ color: "lightblue", paddingLeft: 12 }}
                              href=""
                            >
                              Nano Zero technology
                            </a>
                          </div>
                        </div>
                        <div className="shop__imageOne">
                          <div>
                            <img
                              src={
                                "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BDMB050A.png"
                              }
                              alt=""
                            />
                            <div className="overlay-text3">
                              <a href="">
                                {" "}
                                LARQ Bottle PureVis™ From $99
                                <br />
                                Starting From $99
                              </a>
                            </div>
                          </div>
                          <div>
                            {" "}
                            <img
                              src={
                                "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BSBO071A.png"
                              }
                              alt=""
                            />
                            <div className="overlay-text3">
                              <a href="">
                                LARQ Bottle Movement PureVis™
                                <br />
                                Starting From $89.00
                              </a>
                            </div>
                          </div>
                          <div>
                            <img
                              src={
                                "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BFDOB050A.png"
                              }
                              alt=""
                            />
                            <div className="overlay-text3">
                              <a href="">
                                {" "}
                                LARQ Bottle Filtered
                                <br />
                                Starting at $49.95 instead of $58.00
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </li>

                {/* /////////////////////////////////////   3rd Li */}

                <li>
                  <div className="cont_background">
                    <a
                      className="hover-text"
                      onMouseEnter={handleMouseEnterTwo}
                      onMouseLeave={handleMouseLeaveTwo}
                      href=""
                    >
                      HOME
                    </a>
                    {isHoveredTwo && (
                      <div
                        className="hovered-element"
                        onMouseEnter={handleMouseEnterTwo}
                        onMouseLeave={handleMouseLeaveTwo}
                      >
                        <div className="sub_element">
                          <div className="butt__sub ">
                            <button>
                              {" "}
                              Explore <FaAngleRight />
                            </button>

                            <button>
                              {" "}
                              Holiday-Sets <FaAngleRight />
                            </button>
                          </div>

                          <div className="sub__links">
                            <a href="">Filters & Accessories</a>
                            <a href="">Corporate gifting</a>
                          </div>
                          <div className="diff__link">
                            <a
                              style={{
                                color: "lightblue",
                                fontSize: 10,
                                marginBottom: 10,
                                paddingLeft: 12,
                                position: "relative",
                              }}
                              href=""
                            >
                              LEARN MORE
                            </a>
                            <a
                              style={{ color: "lightblue", paddingLeft: 12 }}
                              href=""
                            >
                              PureVis™ technology
                            </a>
                            <a
                              style={{ color: "lightblue", paddingLeft: 12 }}
                              href=""
                            >
                              Nano Zero technology
                            </a>
                          </div>
                        </div>
                        <div className="shop__imageTwo">
                          <div>
                            <img
                              src={
                                "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/PAMB190A.png"
                              }
                              alt=""
                            />
                            <div className="overlay-text3">
                              <a href="">
                                LARQ Pitcher PureVis™ Monaco Blue
                                <br /> <br />
                                Starting at $158.00 instead of $168.00
                              </a>
                            </div>
                          </div>
                          <div>
                            {" "}
                            <img
                              src={
                                "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/PAPW190A.png"
                              }
                              alt=""
                            />
                            <div className="overlay-text3">
                              <a href="">
                                {" "}
                                LARQ Pitcher PureVis™ Pure White
                                <br />
                                <br />
                                Starting at $158.00 instead of $168.00
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </li>

                {/* ////////////////////////////////////////////////  4th Li */}
                <li>
                  <div className="cont_background">
                    <a
                      className="hover-text"
                      onMouseEnter={handleMouseEnterThree}
                      onMouseLeave={handleMouseLeaveThree}
                      href=""
                    >
                      DRINKWARE
                    </a>
                    {isHoveredThree && (
                      <div
                        className="hovered-element"
                        onMouseEnter={handleMouseEnterThree}
                        onMouseLeave={handleMouseLeaveThree}
                      >
                        <div className="sub_element">
                          <div className="butt__sub ">
                            <button>
                              {" "}
                              Explore <FaAngleRight />
                            </button>

                            <button>
                              {" "}
                              Holiday-Sets <FaAngleRight />
                            </button>
                          </div>

                          <div className="sub__links">
                            <a href="">Filters & Accessories</a>
                            <a href="">Corporate gifting</a>
                          </div>
                          <div className="diff__link">
                            <a
                              style={{
                                color: "lightblue",
                                fontSize: 10,
                                marginBottom: 10,
                                paddingLeft: 12,
                                position: "relative",
                              }}
                              href=""
                            >
                              LEARN MORE
                            </a>
                            <a
                              style={{ color: "lightblue", paddingLeft: 12 }}
                              href=""
                            >
                              PureVis™ technology
                            </a>
                            <a
                              style={{ color: "lightblue", paddingLeft: 12 }}
                              href=""
                            >
                              Nano Zero technology
                            </a>
                          </div>
                        </div>
                        <div className="shop__imageFour">
                          <div>
                            <img
                              src={
                                "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNWOB068A.png"
                              }
                              alt=""
                            />
                            <div className="overlay-text4">
                              <a id="money" href="">
                                {" "}
                                LARQ Bottle Swig Top
                                <br /> <br />
                                Starting From $39.95
                              </a>
                            </div>
                          </div>
                          <div>
                            {" "}
                            <img
                              src={
                                "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNSOB050A.png"
                              }
                              alt=""
                            />
                            <div className="overlay-text4">
                              <a id="money" href="">
                                LARQ Bottle Flip Top
                                <br />
                                <br />
                                Starting From $39.95
                              </a>
                            </div>
                          </div>
                          <div>
                            <img
                              src={
                                "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1701177839/SKU/SPA/v3/BNDMB050A.png"
                              }
                              alt=""
                            />
                            <div className="overlay-text4">
                              <a id="money" href="">
                                {" "}
                                LARQ Bottle Twist Top
                                <br /> <br />
                                Starting From $29.95
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </div>

            <div className="second">
              <li>
                <a aria-label="LARQ Homepage" href="/">
                  <svg
                    width="85"
                    height="20"
                    viewBox="0 0 85 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M74.7998 16.9523C71.0144 16.9523 67.8164 13.6743 67.8164 9.79426C67.8164 5.91404 71.0144 2.63602 74.7998 2.63602C78.5852 2.63602 81.7831 5.91404 81.7831 9.79426C81.7831 11.2661 81.3218 12.6507 80.5439 13.8033L78.4165 11.642L76.6477 13.4391L78.7948 15.6206C77.654 16.4549 76.272 16.9523 74.7998 16.9523ZM84.7023 18.0283L82.5766 15.8685C83.9015 14.2143 84.6865 12.1116 84.6865 9.79426C84.6865 4.33536 80.3436 0.0597534 74.7998 0.0597534C69.2556 0.0597534 64.9127 4.33536 64.9127 9.79426C64.9127 15.2529 69.2556 19.5288 74.7998 19.5288C77.0548 19.5288 79.1111 18.8211 80.7572 17.6143L82.9335 19.8255L84.7023 18.0283Z"
                      fill="#153A5B"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.669189 19.1244V0.462435H3.3895V16.5479H14.4834V19.1244H0.669189Z"
                      fill="#153A5B"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M46.914 10.3998H52.6442C55.633 10.3998 56.6933 8.41762 56.6933 6.7196C56.6933 5.0218 55.633 3.0396 52.6442 3.0396H46.914V10.3998ZM55.8915 19.1244L51.8878 12.977H46.914V19.1244H44.1937V0.462457H52.9192C56.8037 0.462457 59.4137 2.97674 59.4137 6.7196C59.4137 9.23828 57.7643 11.3851 55.2114 12.188L54.6711 12.3583L59.339 19.1244H55.8915Z"
                      fill="#153A5B"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.5083 19.1244L29.222 4.86485L34.8847 19.1244H37.9185L30.7063 1.82419C30.3621 0.998699 29.5655 0.462435 28.6831 0.462435H22.8782V0.945072C22.8782 1.99892 23.719 2.8532 24.7565 2.8532H27.4969L20.4986 19.1244H23.5083Z"
                      fill="#153A5B"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.669189 19.1244V0.462435H3.3895V16.5479H14.4834V19.1244H0.669189Z"
                      fill="#153A5B"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M46.914 10.3998H52.6442C55.633 10.3998 56.6933 8.41762 56.6933 6.7196C56.6933 5.0218 55.633 3.0396 52.6442 3.0396H46.914V10.3998ZM55.8915 19.1244L51.8878 12.977H46.914V19.1244H44.1937V0.462457H52.9192C56.8037 0.462457 59.4137 2.97674 59.4137 6.7196C59.4137 9.23828 57.7643 11.3851 55.2114 12.188L54.6711 12.3583L59.339 19.1244H55.8915Z"
                      fill="#153A5B"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.5083 19.1244L29.222 4.86485L34.8847 19.1244H37.9185L30.7063 1.82419C30.3621 0.998699 29.5655 0.462435 28.6831 0.462435H22.8782V0.945072C22.8782 1.99892 23.719 2.8532 24.7565 2.8532H27.4969L20.4986 19.1244H23.5083Z"
                      fill="#153A5B"
                    ></path>
                  </svg>
                </a>
              </li>
            </div>
            <div className="third">
              <div className="three">
                <ul>
                  <li>
                    <a href="">TECHNOLOGY</a>
                  </li>
                  <li>
                    <a href="">FAQ</a>
                  </li>
                </ul>
              </div>

              {authenticated ? ( // If authenticated, show logout button

                <div className="log__butt"><button onClick={handleLogout}>Logout</button></div>
              ) : (
                <div className="fa__icon-user">
                  <li>
                    <Link to="/signin">
                      <FaUser

                        className="faUser"
                      />
                    </Link>
                  </li>
                </div>
              )}
              <div className="cart-icon-wrapper" onClick={toggleCart}>
                <CartIcon cartCount={cartCount} />
                {cartCount > 0 && (
                  <span className="cart-count">{cartCount}</span>
                )}
              </div>

              <div className={`cart-slider ${isCartOpen ? "open" : ""}`}>
                <div className="cart_content">
                  <h6>Your Cart</h6>
                  <p>$10 credit</p>
                  <div className="progress__bar1">
                    <div className="progress__bar"></div>
                    <div
                      className="empty"
                      onMouseEnter={handleMouseEnterDropdown}
                      onMouseLeave={handleMouseLeaveDropdown}
                    >
                      {isDropdownOpen && (
                        <div className="credit__discount">
                          order of $150 & up You will <br /> recive $10 in score
                          credit for
                          <br /> use on a future purchase.
                        </div>
                      )}
                    </div>
                    <div>
                      <Cart />
                    </div>
                  </div>
                </div>

                <button className="close-cart" onClick={closeCart}>
                  <FaTimes />
                </button>
              </div>
            </div>
          </div>

          <div className="menu-items">
            <ul>
              <div className="image-with-text">
                <a href="#">
                  <img className="heo" src={purification} alt="" />{" "}
                  <img
                    className="hi"
                    src={
                      "https://res.cloudinary.com/larq/image/upload/w_300/v1692781791/Homepage-v3/Navigation/update/purification-small.png"
                    }
                    alt=""
                  />
                </a>

                <div className="overlay-text">
                  PURIFICATION
                  <br /> <br />
                  filter or purity water on the go
                </div>
              </div>
              <div className="image-with-text">
                <a href="#">
                  <img className="heo" src={jug} alt="" />{" "}
                  <img
                    className="hi"
                    src={
                      "https://res.cloudinary.com/larq/image/upload/w_300/v1692781790/Homepage-v3/Navigation/update/home-small.png"
                    }
                    alt=""
                  />
                </a>

                <div className="overlay-text">
                  HOME <br />
                  <br />
                  Equip Your home with Nano <br />
                  Zero Filtration
                </div>
              </div>
              <div className="image-with-text">
                <a href="#">
                  <img className="heo" src={trav} alt="" />{" "}
                  <img
                    className="hi"
                    src={
                      "https://res.cloudinary.com/larq/image/upload/w_300/v1692781790/Homepage-v3/Navigation/update/drinkware-small-us.png"
                    }
                    alt=""
                  />
                </a>

                <div className="overlay-text">
                  DRINKWARE <br /> <br />
                  Hydrate Effortlessly on the go
                </div>
              </div>
            </ul>

            <button className="butt__owesome">
              {" "}
              Explore <FaAngleRight />
            </button>

            <button className="butt__owesome1">
              {" "}
              Holiday-Sets <FaAngleRight />
            </button>
            <div className="menu__links">
              <a href="">Filters & Accessories</a>
              <a href="">Corporate gifting</a>
              <a href="">Technology</a>
              <a href="">FAQ</a>
            </div>
            <div className="login__text">
              {" "}
              <Link to="/signin">
                <p>Login</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
