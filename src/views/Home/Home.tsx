import "./Home.css";
import illustrationImage from "./../../assets/illustration-intro.svg";
import Button from "../../atoms/Button/Button";
import { useCallback } from "react";

const GET_STARTED_BUTTON = "Get Started";

const Home = () => {
  const handleGetStartedOnClick = useCallback(
    () => console.log(`${GET_STARTED_BUTTON} is clicked !!!`),
    []
  );
  return (
    <section className="Home">
      <div>
        <h1 className="Hero">
          Bring everyone together to build better products.
        </h1>
        <p className="Hero-description">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button
          name={GET_STARTED_BUTTON}
          type="primary"
          onClick={handleGetStartedOnClick}
        />
      </div>
      <div className="Illustration">
        <img
          height="620px"
          width="680px"
          src={illustrationImage}
          alt="Illustration image"
        />
      </div>
    </section>
  );
};

export default Home;
