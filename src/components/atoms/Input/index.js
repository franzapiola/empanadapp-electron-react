import React from "react";

const Input = ({ className, placeholder, onChange, value = "", autoFocus }) => {
  return (
    <input
      autoFocus={autoFocus}
      onChange={onChange}
      className={`form-control ${className}`}
      placeholder={placeholder}
      value={value}
    ></input>
  );
};

export default Input;
