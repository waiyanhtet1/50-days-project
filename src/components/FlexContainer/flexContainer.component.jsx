import "./flexContainer.css";
import React from "react";

const FlexContainer = ({ scrolling, justify, gap, children }) => {
  return (
    <div
      className={`flex-container 
      ${scrolling && "flex-container--scrolling"} 
      ${
        justify === "spaceBetween"
          ? "flex-container--spaceBetween"
          : "flex-container--start"
      }
      ${gap === "sm" ? "flex-container--sm" : ""} 
     `}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
