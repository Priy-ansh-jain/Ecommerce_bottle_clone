import React, { useState, useEffect } from "react";
import "./product6.css";
import {
  FaAngleDown,
  FaArrowAltCircleLeft,
  FaCheck,
  FaCheckCircle,
  FaInfoCircle,
  FaShieldAlt,
  FaStar,
  FaStarHalf,
} from "react-icons/fa";
import { useCart } from "../context/Context";
import { productData6 } from "../data/Data";
import { subProductData6 } from "../data/Data";
import Dropdown from "./dropdown/Dropdown";
import { replaceProductData6 } from "../data/Data"
import { subSecondProductData6 } from "../data/Data";

const Product6 = () => {
  const { addToCart } = useCart();
  const [currentProduct, setCurrentProduct] = useState(productData6[0]);
  const [selectedSize, setSelectedSize] = useState(0); // Store selected size separately
  const [subCurrentProduct, setSubCurrentProduct] = useState(
    subProductData6[0]
  );

  const handleButtonClick9 = (x) => {
    if (insulationType === 0) {
      const selectedProduct = productData6[x];
      setCurrentProduct((prevProduct) => ({
        ...prevProduct,
        textName: selectedProduct.textName,
        image: selectedProduct.image,
        heading: selectedProduct.heading,
      }));
    } else {
      const selectedProduct = replaceProductData6[x];
      setCurrentProduct((prevProduct) => ({
        ...prevProduct,
        textName: selectedProduct.textName,
        image: selectedProduct.image,
        heading: selectedProduct.heading,
      }));
    }

  };

  const handleSubProductClick = (x) => {
    const subSelectedProduct = subProductData6[x];
    const updatedProduct = {
      ...currentProduct,
      costPrice: subSelectedProduct.costPrice,
      sellingPrice: subSelectedProduct.sellingPrice,
      toCart: subSelectedProduct.toCart,
      textPrice: subSelectedProduct.textPrice,
      save: subSelectedProduct.save,
      title: subCurrentProduct.title,
    };
    setCurrentProduct(updatedProduct);
    // Apply image scale for 25oz
    if (x === 1) {
      setSelectedSize(1); // Update selected size only when a new size is selected
    } else {
      setSelectedSize(0);
    }
  };

  const [insulationType, setInsulationType] = useState(0);
  const handleInsulateClick = (type) => {
    setInsulationType(type);
    if (type === 0) {
      // If insulation type is not 0, set subCurrentProduct to subProductData3
      setSubCurrentProduct(subProductData6[selectedSize]);
      // Update current product image when switching to "Insulated"
      setCurrentProduct((prevProduct) => ({
        ...prevProduct,
        image: productData6[0].image, // Update image to the first product in productData3
      }));
    } else {
      // If insulation type is 0 (not insulated), set subCurrentProduct to subSecondProductData3
      setSubCurrentProduct(subSecondProductData6[selectedSize]);
      // Update current product image when switching to "Not Insulated"
      setCurrentProduct((prevProduct) => ({
        ...prevProduct,
        image: replaceProductData6[0].image, // Update image to the first product in replaceProductData3
      }));
    }
  };

  //   const handleInsulatedButtonClick = (x) => {};

  const handleAddToCartClick = () => {
    addToCart(currentProduct);
  };

  return (
    <section className="first_bootle-buy-page" id="bottle6">
      <div className="buy-page_content6">
        <div className={`image_cont6 ${selectedSize === 1 ? "scaled" : ""}`}>
          <div className="img1_one">
            <img
              src={currentProduct.image}
              alt={`image ${currentProduct.image}`}
            />
          </div>
        </div>
        <div className="buy_content6">
          <h1>{currentProduct.heading}</h1>
          <div className="money_text">
            <p id="cp">
              <span>{currentProduct.costPrice}</span> $
              {currentProduct.sellingPrice}
            </p>
            <p id="spp">
              {" "}
              {/* <span>{currentProduct.save}</span> */}
            </p>
          </div>
          <div className="money__star">
            <a href="">
              <FaStar />
            </a>
            <a href="">
              <FaStar />
            </a>
            <a href="">
              <FaStar />
            </a>
            <a href="">
              <FaStar />
            </a>
            <a href="">
              <FaStarHalf />
            </a>
            <p>6636 reviews</p>
          </div>
          {/* Insulated /////////////////////////// */}
          <div className="Insulated_bottle6">
            <input
              onClick={() => {
                handleInsulateClick(0);
              }}
              type="radio"
              id="insulated"
              className="insulated_one"
              name="insulation"
            />
            <label htmlFor="insulated" className="insulated_label">
              <div className="insulated_image">
                <svg
                  height="100%"
                  width="100%"
                  className="css-82n8sf expsv8r0"
                  focusable="false"
                  viewBox="0 0 12 37"
                  color="text.default"
                  aria-hidden="true"
                >
                  <path
                    stroke="#153A5B"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6V1H2v5m8 0H2m8 0c0 2 1 2 1 4v4M2 6c0 2-1 2-1 4v4m0 0v20.172a2 2 0 0 0 .586 1.414l.121.121a1 1 0 0 0 .707.293h7.172a1 1 0 0 0 .707-.293l.121-.121A2 2 0 0 0 11 34.172V14M1 14h10"
                  ></path>
                </svg>
              </div>
              <div className="insulated_text">
                <p>Insulated</p>
                <p>24 hours cold</p>
              </div>
              <div>
                <span>
                  <FaInfoCircle />
                </span>
              </div>
            </label>

            <input
              onClick={() => {
                handleInsulateClick(1);
              }}
              type="radio"
              id="notInsulated"
              className="insulated_two"
              name="insulation"
            />

            <label htmlFor="notInsulated" className="insulated_label">
              <div className="insulated_image">
                <svg
                  height="100%"
                  width="100%"
                  className="css-82n8sf expsv8r0"
                  focusable="false"
                  viewBox="0 0 12 37"
                  color="text.default"
                  aria-hidden="true"
                >
                  <path
                    stroke="#153A5B"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6V1H2v5m8 0H2m8 0c0 2 1 6 1 9v2M2 6c0 2-1 6-1 9v7m0 0v12.172a2 2 0 0 0 .586 1.414l.121.121a1 1 0 0 0 .707.293h7.172a1 1 0 0 0 .707-.293l.121-.121A2 2 0 0 0 11 34.172V17M1 22l10-5"
                  ></path>
                </svg>
              </div>
              <div className="insulated_text">
                <p>Not insulated</p>
                <p>Light as Air</p>
              </div>
              <div>
                <span>
                  <FaInfoCircle />
                </span>
              </div>
            </label>
          </div>


          {/* Insulated/////////////////////////////// */}
          <p id="size">size</p>
          {insulationType === 0 ? (
            <>
              <div className="buy_page_butt">
                <div className="radio__in_button6">
                  <input
                    onClick={() => {
                      handleSubProductClick(0);
                    }}
                    type="radio"
                    id="a17"
                    name="check-substitution-2"
                  />
                  <label
                    className="btn btn-default radio__in_buttonlabel"
                    htmlFor="a17"
                  >
                    17 Oz
                  </label>
                </div>
                <div className="radio__in_button6">
                  <input
                    onClick={() => {
                      handleSubProductClick(1);
                    }}
                    type="radio"
                    id="a25"
                    name="check-substitution-2"
                  />
                  <label
                    className="btn btn-default radio__in_buttonlabel"
                    htmlFor="a25"
                  >
                    25 Oz
                  </label>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="buy_page_butt">
                <div className="radio__in_button6">
                  <input
                    onClick={() => {
                      handleSubProductClick(0);
                    }}
                    type="radio"
                    id="a17"
                    name="check-substitution-2"
                  />
                  <label
                    className="btn btn-default radio__in_buttonlabel"
                    htmlFor="a17"
                  >
                    24 Oz
                  </label>
                </div>
                <div className="radio__in_button6">
                  <input
                    onClick={() => {
                      handleSubProductClick(1);
                    }}
                    type="radio"
                    id="a25"
                    name="check-substitution-2"
                  />
                  <label
                    className="btn btn-default radio__in_buttonlabel"
                    htmlFor="a25"
                  >
                    32 Oz
                  </label>
                </div>
              </div>
            </>
          )}

          <div className="bottle_color_change6">
            <fieldset>
              <legend>{currentProduct.textName}</legend>

              {insulationType === 0 ? (
                <>


                  <div className="raddio__one">
                    <input
                      style={{
                        backgroundColor: "#0c0c0c",
                        borderWidth: "rgb(156, 196, 206)",
                        borderColor: "#D1D1D0",
                      }}
                      onClick={() => {
                        handleButtonClick9(0);
                      }}
                      type="radio"
                      id="bottt1"
                      name="flavor"
                      value="vanilla"
                    />
                  </div>

                  <div className="raddio__two">
                    <input
                      style={{
                        backgroundColor: "#F6EDDE",
                        borderWidth: "rgb(156, 196, 206)",
                        borderColor: "#e6e6e6",
                      }}
                      onClick={() => {
                        handleButtonClick9(1);
                      }}
                      type="radio"
                      id="bottt2"
                      name="flavor"
                      value="chocolate"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="raddioo__one">
                    <input
                      // style={{
                      //   backgroundColor: "#9B5633",
                      //   borderWidth: "rgb(156, 196, 206)",
                      //   borderColor: "#D1D1D0",
                      // }}
                      onClick={() => {
                        handleButtonClick9(0);
                      }}
                      type="radio"
                      id="bottt1"
                      name="flavor"
                      value="vanilla"
                    />
                  </div>
                  <div className="raddioo__two">
                    <input
                      // style={{
                      //   backgroundColor: "#361D14",
                      //   borderWidth: "rgb(156, 196, 206)",
                      //   borderColor: "#e6e6e6",
                      // }}
                      onClick={() => {
                        handleButtonClick9(1);
                      }}
                      type="radio"
                      id="bottt2"
                      name="flavor"
                      value="chocolate"
                    />
                  </div>
                </>
              )}
            </fieldset>
          </div>

          <div className="sixth__bottle">
            <div className="sixth__container">
              <p>Replacment filter plan</p>
              <a href="">Do i need a plan?</a>

            </div>
            <div>
              <Dropdown />
            </div>
          </div>
          <div className="add-to__cart">
            <button onClick={handleAddToCartClick}>
              {currentProduct.toCart}
            </button>
          </div>
          {/* pop window content */}
          <div className="loan_text">
            <p>
              Or 4 interest-free installments of{" "}
              <span>{currentProduct.textPrice}</span>
              <a className="button" href="#popup_flight_travlDil1">
                <FaInfoCircle />
              </a>
            </p>

            <div
              id="popup_flight_travlDil1"
              className="overlay_flight_traveldil"
            >
              <div className="popup_flight_travlDil">
                <h2>Klarna.</h2>
                <a className="close_flight_travelDl" href="#">
                  &times;
                </a>
                <div className="content_flightht_travel_dil">
                  <h1> Pay 4 installments of $24.75</h1>
                  <div className="terms">
                    <p>
                      See payment <a href="">terms</a>. A higher initial payment
                      may be required for some consumers. CA resident loans made
                      or arranged pursuant to a California Financing Law
                      license.
                    </p>
                  </div>
                  <div>
                    <div className="outer">
                      <div className="progress">
                        <div className="right">
                          <div>Add item(s) to your cart</div>
                        </div>
                        <div className="right">
                          <div>Go to checkout and choose klarna</div>
                        </div>
                        <div className="right">
                          <div>Enter your debit or credit card information</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="condition_text">
                    <p>
                      The first payment is taken when the order is processed and
                      the next 3 payments are automatically made every 2 weeks
                      after your Initial Payment (first Installment Payment due
                      at least 15 days after Initial Payment for California
                      residents).
                    </p>
                  </div>
                  <div className="here">
                    <p>
                      For more info about the conditions for Pay in 4, click{" "}
                      <br />
                      <a href="here">here</a>
                    </p>
                  </div>
                  <div className="close_popup">
                    <button>Close</button>
                  </div>
                </div>
              </div>
            </div>
            <p>Free shipping within the contiguous U.S. on orders over $80.</p>
          </div>
          {/* pop window content */}
          <div className="warranty-icon">
            <p className="warranty">
              <span>
                <FaCheckCircle />
              </span>
              <br />1 year warranty
            </p>
            <p className="warranty">
              <span>
                {" "}
                <FaArrowAltCircleLeft />
              </span>
              <br />
              Free Returns
            </p>
            <p className="warranty">
              <span>
                <FaShieldAlt />
              </span>
              <br />
              Secure checkout
            </p>
          </div>
          <hr />
          <div className="hydro">
            <p>
              Be a hydro homie and gift these to your friends (or keep them to
              yourself). LARQ Bottle Swig Top is perfect for large capacity
              drinking on the go. Its wide-mouth design is an ice-lover's dream.
            </p>
          </div>
          <hr />
          <div className="select_butt">
            <button>warranty </button>
            <span>
              <FaAngleDown />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product6;
