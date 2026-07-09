import React from 'react';

const Button = ({ children, backgroundColor, color, padding, borderRadius, onClick }) => {
  return (
    <button
      style={{ backgroundColor, color, padding, borderRadius }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;