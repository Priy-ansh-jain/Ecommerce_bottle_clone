import React from "react";
import { useCart } from "../context/Context";
import "./checkout.css";
import {
  FaPlus,
  FaTrash,
  FaMinus,
  FaAmazonPay,
  FaGoogle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const { cart, deleteFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  // const calculateTotalPrice = () => {
  //   return cart.reduce((total, item) => {
  //     return total + parseFloat(item.sellingPrice) * item.quantity;
  //   }, 0);
  // };
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      const sellingPrice = parseFloat(item.sellingPrice);
      const quantity = parseInt(item.quantity, 10); // Assuming quantity is a whole number

      // Check if sellingPrice and quantity are valid numbers
      if (!isNaN(sellingPrice) && !isNaN(quantity)) {
        return total + sellingPrice * quantity;
      } else {
        // Handle invalid values here, you can log an error or take appropriate action
        console.error(
          `Invalid sellingPrice or quantity for item: ${JSON.stringify(item)}`
        );
        return total;
      }
    }, 0);
  };
  // const calculateTotalSavings = () => {
  //   return cart.reduce((totalSavings, item) => {
  //     const saving = parseFloat(item.save);
  //     const quantity = parseInt(item.quantity, 10); // Get the quantity of the item

  //     if (!isNaN(saving) && !isNaN(quantity)) {
  //       return totalSavings + saving * quantity; // Multiply saving by quantity
  //     } else {
  //       console.error(`Invalid save amount or quantity for item: ${JSON.stringify(item)}`);
  //       return totalSavings;
  //     }
  //   }, 0);
  // };
  return (
    <div className="checkout__page">
      <div className="checkout__payment">
        <h1>Customer</h1>
        <div className="field">
          <fieldset>
            <legend>Express Checkout With</legend>
            <div className="pay">
              <div className="pay__button">
              <button className="paypal__button">
                Pay<span>Pal</span>
                <span>chekout</span>
              </button>
              </div>
              <div className="pay__button">
                <button className="paypal__button1">
                  <span>Amazon</span>
                  <span>
                    <FaAmazonPay />
                  </span>
                </button>
              </div>
              <div className="pay__button">
                <button className="paypal__button2">
                  <span>
                    <FaGoogle />
                  </span>
                  Pay
                </button>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="Email__checkout">
          <form action="">
            <input type="Email" placeholder="Email Address" />
            <label htmlFor="email" className="continue">
              <button>Continue</button>
            </label>
          </form>
        </div>
        <div className="newspaper">
          <form action="">
            <input className="big" type="checkbox" />
            <label htmlFor="">Subscribe to our Newslatter</label>
          </form>
        </div>
        <div className="have__account">
          <p>Already have an account? </p>
          <Link to="/signin">
            <p>Sign in now</p>
          </Link>
        </div>
        <hr />
        <div className="Shipping">
          <h1>Shipping</h1>
        </div>
        <hr />
        <div className="Billing">
          <h1>Billing</h1>
        </div>
        <hr />
        <div className="Payment">
          <h1>Payment</h1>
        </div>
      </div>

      <div className="checkout">
        <div className="Checkout__page">
          <div>
            <h1>Order Summary</h1>
            <hr />
          </div>
          <ul className="checkout_ul">
            {cart.map((item, index) => (
              <li key={index}>
                <div className="first__checkout-content">
                  <div className="product__Checkout-image">
                    <img src={item.image} alt={`item ${index}`} />
                  </div>
                  <div className="Bottle__checkout-name">
                    <div className="bottle_checkout_heading">
                      {item.heading}
                    </div>
                    <div className="Oz_size">
                      {item.Insulated}
                      {item.textName} {item.title}
                    </div>
                    <div className="cart_checkout_quantity">
                      <div className="minus">
                        <a onClick={() => decreaseQuantity(index)}>
                          <FaMinus
                            style={{ color: "grey", fontSize: "10px" }}
                          />
                        </a>
                      </div>
                      <span>|</span>
                      <div className="minus">
                        {item.quantity} <span>|</span>
                      </div>
                      <div className="minus">
                        <a onClick={() => increaseQuantity(index)}>
                          <FaPlus style={{ fontSize: "10px" }} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="second__checkout-content">
                    <div className="cart__item-detail">
                      <div className="cart_delete-cost-price">
                        <div className="trash__icon">
                          <a onClick={() => deleteFromCart(index)}>
                            <FaTrash style={{ color: "#cdcdcd" }} />
                          </a>
                        </div>
                        <div className="sp_cp">
                          <span> {item.costPrice}</span>${item.sellingPrice}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="checkout__price-save">
                  <span>You are saving</span>
                  <b>${item.save}</b>
                </div> */}
                <hr />
              </li>
            ))}
          </ul>

          <div className="total">
            <div className="For__total">
              <span>Sub Total</span>
              <b> ${calculateTotalPrice().toFixed(2)}</b>
            </div>
            <div className="For__savings">
              <p>Shipping</p>
              <b>--</b>
            </div>
            <div className="For__savings">
              <span>Tax</span>
              <b> $0</b>
            </div>
            <div className="promo">
              <a href="">Promo/Gift Certificate?</a>
            </div>
            <hr />
            <div className="Grand__total">
              <span>Total (USD)</span>
              <b> ${calculateTotalPrice().toFixed(2)}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
