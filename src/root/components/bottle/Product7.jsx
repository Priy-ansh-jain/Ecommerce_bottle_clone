import React, { useState, useEffect } from "react";
import "./product7.css";
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
import { productData7} from "../data/Data";
import { subProductData7 } from "../data/Data";

const Product7 = () => {
  const { addToCart } = useCart();
  const [currentProduct, setCurrentProduct] = useState(productData7[0]);
  const [selectedSize, setSelectedSize] = useState(0); // Store selected size separately

  const handleButtonClick9 = (x) => {
    const selectedProduct = productData7[x];
    setCurrentProduct((prevProduct) => ({
      ...prevProduct,
      textName: selectedProduct.textName,
      image: selectedProduct.image,
      heading: selectedProduct.heading,
    }));
  };

  const handleSubProductClick = (x) => {
    const subSelectedProduct = subProductData7[x];
    const updatedProduct = {
      ...currentProduct,
      costPrice: subSelectedProduct.costPrice,
      sellingPrice: subSelectedProduct.sellingPrice,
      toCart: subSelectedProduct.toCart,
      textPrice: subSelectedProduct.textPrice,
      save: subSelectedProduct.save,
      title: subSelectedProduct.title,
    };
    setCurrentProduct(updatedProduct);
    // Apply image scale for 25oz
    if (x === 1) {
      setSelectedSize(1); // Update selected size only when a new size is selected
    } else {
      setSelectedSize(0);
    }
  };

  const handleAddToCartClick = () => {
    addToCart(currentProduct);
  };

  return (
    <section className="first_bootle-buy-page" id="bottle7">
      <div className="buy-page_content7">
        <div className={`image_cont7 ${selectedSize === 1 ? "scaled" : ""}`}>
          <div className="img1_one">
            <img
              src={currentProduct.image}
              alt={`image ${currentProduct.image}`}
            />
          </div>
        </div>
        <div className="buy_content7">
          <h1>{currentProduct.heading}</h1>
          <div className="money_text">
            <p id="cp">
              <span>{currentProduct.costPrice}</span>{" "}$
              {currentProduct.sellingPrice}
            </p>
            <p id="spp"> <span>{currentProduct.save}</span></p>
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

         

          <p id="size">size</p>
          <div className="buy_page_butt">
            <div className="radio__in_button7">
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
                23 Oz
              </label>
            </div>
            <div className="radio__in_button7">
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
                34 Oz
              </label>
            </div>
          </div>
          <div className="bottle_color_change7">
            <fieldset>
              <legend>{currentProduct.textName}</legend>

              <div className="radio__three">
                <input style={{backgroundColor: "#0c0c0c" ,borderWidth: "rgb(156, 196, 206)", borderColor:"#D1D1D0"} }
                  onClick={() => {
                    handleButtonClick9(0);
                  }}
                  type="radio"
                  id="bottt1"
                  name="flavor"
                  value="vanilla"
                />
              </div>

              <div className="radio__four">
                <input style={{backgroundColor: "#40826D" ,borderWidth: "rgb(156, 196, 206)", borderColor:"#e6e6e6"} }
                  onClick={() => {
                    handleButtonClick9(1);
                  }}
                  type="radio"
                  id="bottt2"
                  name="flavor"
                  value="chocolate"
                />
              </div>

              <div className="radio__five">
                <input style={{backgroundColor: "rgb(253, 250, 236)" ,borderWidth: "rgb(156, 196, 206)", borderColor:"#e6e6e6"} }
                  onClick={() => {
                    handleButtonClick9(2);
                  }}
                  type="radio"
                  id="bottt3"
                  name="flavor"
                  value="strawberry"
                />
              </div>
            </fieldset>
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

export default Product7;
