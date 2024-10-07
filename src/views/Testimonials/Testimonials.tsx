import { useCallback } from "react";
import Button from "../../atoms/Button/Button";
import UserCard from "../../molecules/UserCard/UserCard";
import IUserCard from "../../molecules/UserCard/UserCard.interface";
import { TESTIMONIALS, HEADING, GET_STARTED } from "./Testimonials.constants";
import "./Testimonials.css";

const Testimonials = () => {
  const handleOnClickGetStarted = useCallback(
    () => console.log(`${GET_STARTED} button clicked !!!`),
    []
  );

  return (
    <div className="Wrapper-testimonials">
      <h1 className="Hero-Testimonials">{HEADING}</h1>
      <div className="Carousal-Wrapper">
        <div className="carousal">
          {TESTIMONIALS.map(
            ({ photo, name, testimonial }: IUserCard, index: number) => (
              <UserCard
                key={index}
                photo={photo}
                name={name}
                testimonial={testimonial}
              />
            )
          )}
        </div>
      </div>
      <div className="button">
        <Button
          name={GET_STARTED}
          type="primary"
          onClick={handleOnClickGetStarted}
        />
      </div>
    </div>
  );
};

export default Testimonials;
