import "./subtotal.css";
import React from "react";
import CButton from "../CButton/cbutton.component";
import { useSelector } from "react-redux";

const SubTotal = () => {
  const cart = useSelector((state) => state.cart);

  const totalAmount = cart?.items.reduce((initial, current) => {
    return initial + (current ? current?.price : 0);
  }, 0);

  console.log(totalAmount);

  return (
    <div className="subtotal">
      <p>
        SubTotal ({cart.items.length} items): <strong>$ {totalAmount}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <CButton>Proceed To Checkout</CButton>
    </div>
  );
};

export default SubTotal;
