import Point from "../../molecules/Point/Point";
import { IPoint } from "../../molecules/Point/Point.interface";
import { HERO, HERO_DESCRIPTION, POINTS } from "./What.constants";
import "./What.css";

const What = () => {
  return (
    <section className="What">
      <div className="left">
        <h1 className="Hero">{HERO}</h1>
        <p className="Hero-description">{HERO_DESCRIPTION}</p>
      </div>
      <div className="leftImageBackground"></div>
      <div className="right">
        {POINTS.map(({ point, heading, description }: IPoint) => (
          <Point
            key={point}
            point={point}
            heading={heading}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default What;
