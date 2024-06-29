import React from "react";

const Button = ({ btnText, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {btnText}
    </button>
  );
};

export default Button;
