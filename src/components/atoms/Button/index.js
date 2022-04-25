import React from "react";
import "./styles.css";

/**
 * Reusable button
 */
const Button = ({
  onClick,
  children,
  type = "button",
  styleType = "primary",
}) => {
  return (
    <button
      type={type}
      className={`btn button-default button-custom-${styleType}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
