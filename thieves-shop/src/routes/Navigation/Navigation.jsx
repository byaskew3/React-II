import { Outlet, Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <div className="nav">
        <Link className="logo" to={"/"}>
          <img
            src={require("../../assets/thievesbglogotransparentgray.png")}
            alt={"logo"}
            width={120}
          />
        </Link>
        <div className="links-container">
          <Link className="link" to={"/shop"}>
            SHOP
          </Link>
          <Link className="link" to={"/sign-in"}>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
