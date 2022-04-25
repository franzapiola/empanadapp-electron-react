import React from "react";
import "./styles.css";

/**
 * Reusable button
 */
const Button = ({
  onClick,
  className,
  children,
  type = "button",
  styleType = "primary",
}) => {
  return (
    <button
      type={type}
      className={`btn button-default button-custom-${styleType} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
