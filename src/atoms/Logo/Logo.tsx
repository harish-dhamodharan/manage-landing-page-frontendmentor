import "./Logo.css";
import logo from "./../../assets/logo.svg";

const Logo = () => {
  return (
    <div className="Logo">
      <img itemType="svg" src={logo} alt="Logo" color={"hsl(0, 0%, 98%)"} />
    </div>
  );
};

export default Logo;
