import { FC } from "react";
import { IPoint } from "./Point.interface";
import "./Point.css";

const Point: FC<IPoint> = ({ point, heading, description }) => {
  return (
    <div className="Wrapper">
      <div className="point-heading">
        <p className="point">{point}</p>
        <div>
          <h3>{heading}</h3>
        </div>
      </div>
      <div className="dummy"></div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Point;
