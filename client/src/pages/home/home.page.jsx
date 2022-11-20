import "./home.css";
import React from "react";
import Header from "../../components/header/header.component";
import ProductItem from "../../components/products/productItem.component";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="home">
        <img
          src="/images/ecommerce-768x278.jpg"
          alt="hero__img"
          className="hero__section__image"
        />
        <div className="show__case__section">
          <ProductItem
            id="1"
            title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
            price={11.96}
            rating={5}
            image="/images/product-1.jpg"
          />
          <ProductItem
            id="2"
            title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
            price={239.0}
            rating={4}
            image="/images/product-2.jpg"
          />
        </div>

        <div className="show__case__section">
          <ProductItem
            id="3"
            title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback"
            price={199.99}
            rating={3}
            image="/images/product-3.jpg"
          />
          <ProductItem
            id="4"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={239.0}
            rating={4}
            image="/images/product-4.jpg"
          />
          <ProductItem
            id="5"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="/images/product-5.jpg"
          />
        </div>

        <div className="show__case__section">
          <ProductItem
            id="6"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="/images/product-6.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
