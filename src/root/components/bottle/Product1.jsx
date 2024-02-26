// import React, { useState } from "react";
// import "./product1.css";
// import {
//   FaAngleDown,
//   FaArrowAltCircleLeft,
//   FaCheck,
//   FaCheckCircle,
//   FaInfoCircle,
//   FaShieldAlt,
//   FaStar,
//   FaStarHalf,
// } from "react-icons/fa";
// import { useCart } from "../context/Context";



// const Product1 = () => {
//   const { addToCart } = useCart();

//   const cart1 = [
//     "https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1702483496/SET-3XSWIG-M_405524819/SET-3XSWIG-M_405524819.png?_i=AA",
//     "https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1702483490/SET-3XSWIG-L_4056c9d82/SET-3XSWIG-L_4056c9d82.png?_i=AA",
//   ];

//   const costPrice1 = ["$119.85", "$149.85"];
//   const sellingPrice1 = ["99.00", "$119.00"]
//   const save = ["save $20.85", "save $30.85"];
//   const toCart = ["Add to cart-$99.00", "Add to cart 119.00"];
//   const textPrice1 = ["$24.75", "29.75"];



//   const [currentBuyImageIndex, setCurrentBuyImageIndex] = useState(cart1[0]);
//   const [currentCostPrice1, setCurrentCostPrice1] = useState(costPrice1[0]);
//   const [currentSellingPrice1, setCurrentSellingPrice1] = useState(sellingPrice1[0])
//   const [CurrentCartButton, setCurrentCartButton] = useState(toCart[0]);
//   const [currentSave, setCurrentSave] = useState(save[0]);

//   const [currentTextprice1, setCurrentTextPrice1] = useState(textPrice1[0]);

//   const handleButtonClick8 = (x) => {
//     const selectedProduct = {
//       image: cart1[x],
//       costPrice: costPrice1[x],
//       sellingPrice: sellingPrice1[x],
//       save: save[x],
//       cartButton: toCart[x],
//       textPrice: textPrice1[x],
//     };
//     addToCart(selectedProduct);
//     console.log(currentBuyImageIndex[0]);
//     setCurrentBuyImageIndex(cart1[x]);
//     console.log(currentCostPrice1[0]);
//     setCurrentCostPrice1(costPrice1[x]);
//     console.log(currentSellingPrice1[0]);
//     setCurrentSellingPrice1(sellingPrice1[x])
//     console.log(CurrentCartButton[0]);
//     setCurrentCartButton(toCart[x]);
//     console.log(currentSave[0]);
//     setCurrentSave(save[x]);
//     console.log(currentTextprice1[0]);
//     setCurrentTextPrice1(textPrice1[x]);
//   };

//   return (
//     <section className="first_bootle-buy-page" id="bottle1">
//       <div className="buy-page_content">
//         <div className="image_cont">
//           <div className="img1_one">
//             <img
//               src={currentBuyImageIndex}
//               alt={`image ${currentBuyImageIndex}`}
//             />
//           </div>
//           <div></div>
//         </div>
//         <div className="buy_content">
//           <h1>Jolly Good Swing</h1>
//           <div className="money_text">
//             <p id="cp">
//               <span>{currentCostPrice1}</span> {currentSellingPrice1}
//             </p>
//             <p id="sp">
//               {" "}
//               <span>{currentSave}</span>
//             </p>
//           </div>
//           <div className="money__star">
//             <a href="">
//               <FaStar />
//             </a>
//             <a href="">
//               <FaStar />
//             </a>
//             <a href="">
//               <FaStar />
//             </a>
//             <a href="">
//               <FaStar />
//             </a>
//             <a href="">
//               <FaStarHalf />
//             </a>
//             <p>33 reviews</p>
//           </div>
//           <p id="size">size</p>
//           <div className="buy_page_butt">
//             <button className=""
//               onClick={() => {
//                 handleButtonClick8(0);
//               }}
//             >
//               23 Oz
//             </button>
//             <button
//               onClick={() => {
//                 handleButtonClick8(1);
//               }}
//             >
//               34 Oz
//             </button>
//           </div>
//           <div className="add-to__cart">
//             <button
//               onClick={() => {
//                 handleButtonClick8(0);
//               }}
//             >
//               {CurrentCartButton}
//             </button>
//           </div>
//           {/* pop window content */}
//           <div className="loan_text">
//             <p>
//               Or 4 interest-free installments of <span>{currentTextprice1}</span>
//               <a className="button" href="#popup_flight_travlDil1">
//                 <FaInfoCircle />
//               </a>
//             </p>

// <div id="popup_flight_travlDil1" class="overlay_flight_traveldil">
//   <div className="popup_flight_travlDil">
//     <h2>Klarna.</h2>
//     <a className="close_flight_travelDl" href="#">
//       &times;
//     </a>
//     <div className="content_flightht_travel_dil">
//       <h1> Pay 4 installments of $24.75</h1>
//       <div className="terms">
//         <p>
//           See payment <a href="">terms</a>. A higher initial payment
//           may be required for some consumers. CA resident loans made
//           or arranged pursuant to a California Financing Law
//           license.
//         </p>
//       </div>
//       <div>
//         <div className="outer">
//           <div className="progress">
//             <div className="right">
//               <div>Add item(s) to your cart</div>
//             </div>
//             <div className="right">
//               <div>Go to checkout and choose klarna</div>
//             </div>
//             <div className="right">
//               <div>Enter your debit or credit card information</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="condition_text">
//         <p>
//           The first payment is taken when the order is processed and
//           the next 3 payments are automatically made every 2 weeks
//           after your Initial Payment (first Installment Payment due
//           at least 15 days after Initial Payment for California
//           residents).
//         </p>
//       </div>
//       <div className="here">
//         <p>
//           For more info about the conditions for Pay in 4, click{" "}
//           <br />
//           <a href="here">here</a>
//         </p>
//       </div>
//       <div className="close_popup">
//         <button>Close</button>
//       </div>
//     </div>
//   </div>
// </div>
//             <p>Free shipping within the contiguous U.S. on orders over $80.</p>
//           </div>
//           {/* pop window content */}
// <div className="warranty-icon">
//   <p className="warranty">
//     <span>
//       <FaCheckCircle />
//     </span>
//     <br />1 year warranty
//   </p>
//   <p className="warranty">
//     <span>
//       {" "}
//       <FaArrowAltCircleLeft />
//     </span>
//     <br />
//     Free Returns
//   </p>
//   <p className="warranty">
//     <span>
//       <FaShieldAlt />
//     </span>
//     <br />
//     Secure checkout
//   </p>
// </div>
//           <hr />
//           <div className="hydro">
//             <p>
//               Be a hydro homie and gift these to your friends (or keep them to
//               yourself). LARQ Bottle Swig Top is perfect for large capacity
//               drinking on the go. Its wide-mouth design is an ice-lover's dream.
//             </p>
//           </div>
//           <hr />
//           <div className="select_butt">
//             <button>warranty </button>
//             <span>
//               <FaAngleDown />
//             </span>
//           </div>
//         </div>
//       </div>
//     </section >
//   );
// };

// export default Product1;




import React, { useState } from "react";
import "./product1.css";
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
import { productData1 } from "../data/Data";

const Product1 = () => {
  const { addToCart } = useCart();
  const [currentProduct, setCurrentProduct] = useState(productData1[0]);

  const handleButtonClick8 = (x) => {
    const selectedProduct = productData1[x];
    setCurrentProduct(selectedProduct);
  };

  const handleAddToCartClick = () => {
    addToCart(currentProduct);
  };

  return (
    <section className="first_bootle-buy-page" id="bottle1">
      <div className="buy-page_content">
        <div className="image_cont">
          <div className="img1_one">
            <img
              src={currentProduct.image}
              alt={`image ${currentProduct.image}`}
            />
          </div>
          <div></div>
        </div>
        <div className="buy_content">
          <h1>{currentProduct.heading}</h1>
          <div className="money_text">
            <p id="cp">
              <span>{currentProduct.costPrice}</span> {currentProduct.sellingPrice}
            </p>
            <p id="sp">
              {" "}
              <span>{currentProduct.save}</span>
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
            <p>33 reviews</p>
          </div>
          <p id="size">size</p>
          <div className="buy_page_butt">
            <button onClick={() => handleButtonClick8(0)}>25oz</button>
            <button onClick={() => handleButtonClick8(1)}>34oz</button>
          </div>
          <div className="add-to__cart">
            <button onClick={handleAddToCartClick}>
              {currentProduct.toCart}
            </button>
          </div>
          {/* pop window content */}
          <div className="loan_text">
            <p>
              Or 4 interest-free installments of <span>{currentProduct.textPrice}</span>
              <a className="button" href="#popup_flight_travlDil1">
                <FaInfoCircle />
              </a>
            </p>
            <div id="popup_flight_travlDil1" className="overlay_flight_traveldil">
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

export default Product1;
