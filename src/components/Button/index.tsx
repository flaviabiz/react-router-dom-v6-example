import React from "react";

interface IButton {
  buttonCTA: string;
}

const Button: React.FC<IButton> = ({ buttonCTA }) => {
  return <button>{buttonCTA}</button>;
};

export default Button;
