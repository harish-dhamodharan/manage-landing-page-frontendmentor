interface ButtonProps {
  type: "primary" | "secondary";
  name: string;
  onClick: () => void;
  shadow?: boolean;
}

export default ButtonProps;
