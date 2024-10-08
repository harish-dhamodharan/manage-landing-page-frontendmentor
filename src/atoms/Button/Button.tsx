import { FC, useMemo } from "react";
import ButtonProps from "./Button.interface";
import "./Button.css";

const Button: FC<ButtonProps> = ({ type, name, onClick, shadow = true }) => {
  const buttonClass = useMemo(
    () => (shadow ? `btn btn-${type} btn-${type}-shadow` : `btn btn-${type}`),
    [type]
  );

  return (
    <input
      className={buttonClass}
      name={name}
      type="button"
      value={name}
      onClick={onClick}
    />
  );
};

export default Button;
