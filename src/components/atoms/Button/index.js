import React from "react";
import "./styles.css";
/**
 * Reusable button
 */
const Button = ({ onPress, children }) => {
  return (
    <div onClick={onPress} className="button-default">
      {children}
    </div>
  );
};

export default Button;
