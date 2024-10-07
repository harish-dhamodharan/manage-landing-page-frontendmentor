import { useCallback } from "react";
import Button from "../../atoms/Button/Button";
import Logo from "../../atoms/Logo/Logo";
import "./NavBar.css";

const MenuList = ["Pricing", "Product", "About Us", "Careers", "Community"];
const GET_STARTED_BUTTON = "Get Started";

const NavBar = () => {
  const handleGetStartedOnClick = useCallback(
    () => console.log(`${GET_STARTED_BUTTON} is clicked !!!`),
    []
  );

  return (
    <nav className="Navbar">
      <Logo />
      <div className="Menu">
        {MenuList.map((menuItem, index) => (
          <div key={index}>{menuItem}</div>
        ))}
      </div>
      <Button
        name={GET_STARTED_BUTTON}
        type="primary"
        onClick={handleGetStartedOnClick}
      />
    </nav>
  );
};

export default NavBar;
