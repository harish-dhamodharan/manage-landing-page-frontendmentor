import "./Logo.css";
import logo from "./../../assets/logo.svg";

const Logo = () => {
  return (
    <div className="Logo">
      <img itemType="svg" src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
