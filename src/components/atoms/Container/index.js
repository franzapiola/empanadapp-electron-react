import React from "react";
import "./styles.css";

const Container = ({ children, className }) => {
  return (
    <div className={`screen-container-default ${className}`}>{children}</div>
  );
};

export default Container;
