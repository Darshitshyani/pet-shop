import "./cart.scss";
import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Cart = () => {
  return (
    <>
      <div className="cart-header-title">
        <h1>Your Cart</h1>
      </div>
      <div className="container">
        <div className="cart-body">
          <table className="cart-item-table">
            <tr>
              <th>Product</th>
              <th>Prize</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
            <tr>
              <td>Wild Earth Dog Food </td>
              <td>₹ 200.00</td>
              <td>1 Kg</td>
              <td>
                {" "}
                <button>+</button>1 <button>-</button>
              </td>
              <td>
                200.00 <HighlightOffIcon className="close-btn" />
              </td>
            </tr>
            <tr>
              <td>Wild Earth Dog Food </td>
              <td>₹ 200.00</td>
              <td>1 Kg</td>
              <td>1 </td>
              <td>
                200.00 <HighlightOffIcon className="close-btn" />
              </td>
            </tr>
            <tr>
              <td className="promo-sec">
                <input type="text" placeholder="Enter Coupon Code" />
                <button>Apply Coupon</button>
              </td>
            </tr>
          </table>

          <table className="cart-summary">
            <tr>
              <th>Cart Summary</th>
              <th colSpan='3'></th>
           
            </tr>
            <tr>
              <td>Shipping</td>
              <td rowSpan="2" className="address-summery">No.2, KK Road, T Nagar, Chennai 600026
              <p>Change Address</p></td>
              <td>Subtotal</td>
              <td>₹ 1120.00</td>
            </tr>
            <tr className="shipping-row">
                <td colSpan='2'></td>
              <td>Shipping Charge</td>
              <td>₹ 50.00</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cart;
