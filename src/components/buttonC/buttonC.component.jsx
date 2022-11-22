import "./buttonc.css";
import React from "react";

const ButtonC = ({ children, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonC;
