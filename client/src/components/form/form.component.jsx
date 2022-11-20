import "./form.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CButton from "../CButton/cbutton.component";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="form">
      <h1>Sign-In</h1>

      <form>
        <h5>E-mail</h5>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <h5>Password</h5>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="buttons">
          <CButton onClick={loginHandler} size="large">
            Sign In
          </CButton>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            consectetur, eligendi incidunt, quod aspernatur accusamus recusandae
            ab praesentium molestiae ipsum error nobis quaerat impedit officia
            odio, dolorum repellendus mollitia amet.
          </p>
          <CButton variant="secondary" size="large">
            Create Account
          </CButton>
        </div>
      </form>
    </div>
  );
};

export default Form;
