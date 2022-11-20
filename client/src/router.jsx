import "./router.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckOutPage from "./pages/checkout/checkout.page";
import HomePage from "./pages/home/home.page";
import SignInPage from "./pages/signin/sign-in.page";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
