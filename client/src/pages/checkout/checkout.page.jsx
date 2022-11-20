import "./checkout.css";
import React from "react";
import Header from "../../components/header/header.component";
import SubTotal from "../../components/subtotal/subtotal.component";
import data from "../../data.json";
import ProductItem from "../../components/products/productItem.component";
import { useSelector } from "react-redux";

const CheckOutPage = () => {
  const { items } = useSelector((state) => state.cart);
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            src="/images/OCC_Amazon1._CB423492668_.jpg"
            alt=""
            className="checkout__ads"
          />
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {items.map((d, i) => (
            <ProductItem
              key={i}
              id={d.id}
              title={d.title}
              price={d.price}
              rating={d.rating}
              image={d.image}
              variant="list"
            />
          ))}
        </div>

        <div className="checkout__right">
          <SubTotal />
        </div>
      </div>
    </>
  );
};

export default CheckOutPage;
