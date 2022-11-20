import "./product.css";
import React from "react";
import CButton from "../CButton/cbutton.component";

import { cartActions } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const ProductItem = ({ variant, id, title, price, rating, image, onClick }) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(
      cartActions.add({
        id,
        title,
        price,
        rating,
        image,
      })
    );
  };

  const removeItemFromCart = () => {
    dispatch(cartActions.remove(id));
  };

  const gridItem = () => {
    return (
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <small>{price}</small>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>⭐</p>
              ))}
          </div>
        </div>
        <img src={image} />
        <CButton onClick={addItemToCart} size="small">
          Add to Cart
        </CButton>
      </div>
    );
  };

  const listItem = () => {
    return (
      <div className="list">
        <img src={image} alt="" className="lit__image" />
        <div className="list__info">
          <p className="list__title">{title}</p>
          <p className="list__price">
            <small>$</small>
            <small>{price}</small>
          </p>
          <div className="list__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>⭐</p>
              ))}
          </div>
          <CButton onClick={removeItemFromCart} size="small">
            Remove From Cart
          </CButton>
        </div>
      </div>
    );
  };

  return <>{variant === "list" ? listItem() : gridItem()}</>;
};

export default ProductItem;
