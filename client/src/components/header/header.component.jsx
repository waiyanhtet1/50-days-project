import "./header.css";
import React from "react";
import { Link } from "react-router-dom";
import { BiStoreAlt, BiSearchAlt2, BiCart } from "react-icons/bi";
import { useSelector } from "react-redux";

const Header = () => {
  const totalItem = useSelector((state) => state.cart.items.length);
  return (
    <div className="header__container">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <BiStoreAlt className="header__logo__icon" />
          <h2 className="header__logo__title">eShop</h2>
        </div>
      </Link>

      <div className="header__search">
        <input type="text" className="header__search__input" />
        <BiSearchAlt2 className="header__search__icon" />
      </div>

      <div className="header__nav">
        <Link to="/sign-in" style={{ textDecoration: "none" }}>
          <div className="nav__item">
            <span className="nav__item__one">Hello Guest</span>
            <span className="nav__item__two">Sign In</span>
          </div>
        </Link>
        <div className="nav__item">
          <span className="nav__item__one">Your</span>
          <span className="nav__item__two">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__item__cart">
            <BiCart />
            <span className="nav__cart__count">{totalItem}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
