import "./cbutton.css";
import React from "react";

const CButton = ({ variant, size, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${variant === "secondary" ? "secondary" : "primary"} ${
        size === "small" ? "small" : size === "large" ? "large" : "normal"
      }`}
    >
      {children}
    </button>
  );
};

export default CButton;
