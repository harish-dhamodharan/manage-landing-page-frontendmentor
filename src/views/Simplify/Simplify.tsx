import { useCallback } from "react";
import Button from "../../atoms/Button/Button";
import "./Simplify.css";

const GET_STARTED_BUTTON = "Get Started";
const Simplify = () => {
  const handleOnClickGetStarted = useCallback(
    () => console.log(`${GET_STARTED_BUTTON} is clicked !!!`),
    []
  );
  return (
    <div className="Simplify-Wrapper">
      <div className="bg"></div>
      <section className="Simplify">
        <h1 className="Hero-Simplify">Simplify how your team works today.</h1>
        <Button
          name={GET_STARTED_BUTTON}
          type="secondary"
          onClick={handleOnClickGetStarted}
        />
      </section>
    </div>
  );
};

export default Simplify;
