import { Link } from "react-router";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="projectNameCont">
        <Link to="/">
          <h1>to-do</h1>
        </Link>
      </div>
      <div className="btnsCont">
        <div>
          <Link to="/user/signin">
            <button className="headerBtn">Sign-in</button>
          </Link>
        </div>
        <div>
          <Link to="/user/signup">
            <button className="headerBtn">Sign-up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
