import { FC, useMemo } from "react";
import ButtonProps from "./Button.interface";
import "./Button.css";

const Button: FC<ButtonProps> = ({ type, name, onClick }) => {
  const buttonClass = useMemo(() => `btn btn-${type}`, [type]);

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
