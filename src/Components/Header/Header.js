import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    // header is here
    <header className="flex align-center justify-center">
      <div className="header_container flex align-center justify-between">
        <div className="header_logo">
          <Link to={"/"}>Personal24</Link>
        </div>

        <nav>
          <ul className="header_nav flex align-center justify-between">
            <li className="header_nav-li">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="header_nav-li">
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li className="header_nav-li">
              <Link to={"/services"}>Services</Link>
            </li>

            <li className="header_nav-li">
              <Link to={"/plans"}>Plans & Pricing</Link>
            </li>
            <li className="header_nav-li">
              <Link to={"/tools"}>Tools & Tips</Link>
            </li>
            <li className="header_nav-li">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
