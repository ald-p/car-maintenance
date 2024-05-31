import React from 'react';

const Button = ({ colorClass, text }) => {
  return (
    <button className={`btn ${colorClass} my-10 w-34 mx-auto`}>{text}</button>
  );
};

export default Button;
