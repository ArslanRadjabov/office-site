import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  let [width, setWidth] = useState(window.innerWidth);
  setInterval(() => {
    setWidth(window.innerWidth);
  }, 100);

  let [togle, setTogle] = useState(false);

  let navTogle = () => {
    setTogle(!togle);
  };

  return (
    // header is here
    <header
      className={
        width < 992
          ? togle
            ? "header-position flex align-center justify-center"
            : ""
          : "flex align-center justify-center"
      }
    >
      <div className="header_container flex align-center justify-between">
        <div onClick={width < 992 ? navTogle : ""} className="header_logo">
          <Link to={"/"}>Personal24</Link>
        </div>

        <nav>
          <div
            onClick={navTogle}
            className={width > 992 ? "header_lines-none" : "header_lines"}
          >
            <span className={togle ? "header-hidden-rotateLeft" : ""}></span>
            <span
              className={
                togle ? "header-hidden-line header-line" : "header-line"
              }
            ></span>
            <span className={togle ? "header-hidden-rotateRight" : ""}></span>
          </div>
          <ul
            className={
              width < 992
                ? togle
                  ? "header-responsive-open flex align-center justify-center flex-column"
                  : "header-responsive flex align-center justify-center flex-column"
                : "header_nav flex align-center justify-between"
            }
          >
            <li onClick={width < 992 ? navTogle : ""} className="header_nav-li">
              <Link to={"/"}>Bosh Sahifa</Link>
            </li>
            <li onClick={width < 992 ? navTogle : ""} className="header_nav-li">
              <Link to={"/about"}>Biz haqimizda</Link>
            </li>
            <li onClick={width < 992 ? navTogle : ""} className="header_nav-li">
              <Link to={"/projects"}>Bajarilgan Ishlar</Link>
            </li>
            <li onClick={width < 992 ? navTogle : ""} className="header_nav-li">
              <Link to={"/services"}>Xizmatlar </Link>
            </li>

            <li onClick={width < 992 ? navTogle : ""} className="header_nav-li">
              <Link to={"/plans"}>Xisob kitob</Link>
            </li>
            <li onClick={width < 992 ? navTogle : ""} className="header_nav-li">
              <Link to={"/tools"}>Talab & Taklif</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
