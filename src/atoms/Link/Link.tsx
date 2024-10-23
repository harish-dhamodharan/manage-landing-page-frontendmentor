import { FC } from "react";
import LinkProps from "./Link.interface";
import "./Link.css";

const Link: FC<LinkProps> = ({ display, href = "./" }) => {
  return (
    <a className="Link" href={href}>
      {display}
    </a>
  );
};

export default Link;
