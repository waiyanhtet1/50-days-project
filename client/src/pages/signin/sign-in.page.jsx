import "./sign-in.css";
import React from "react";
import { BiStoreAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import Form from "../../components/form/form.component";

const SignInPage = () => {
  return (
    <div className="sign-in">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="sign-in__logo">
          <BiStoreAlt className="sign-in__logo__icon" />
          <h2 className="sign-in__logo__title">eSHop</h2>
        </div>
      </Link>

      <Form />
    </div>
  );
};

export default SignInPage;
