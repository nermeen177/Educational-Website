import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./nav.css";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navigation">
      <h1 className="font-bold text-3xl navigation__logo">ACADEMIA</h1>
      <ul
        className={ click? "navigation__list navigation__list--active" : "navigation__list" }>
        <li>
          <Link
            to="/"
            className="navigation__list-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/AllCourses" className="navigation__list-item">
            Courses
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="navigation__list-item">
            Contact
          </Link>
        </li>
      </ul>
      <div className="lg:hidden cursor-pointer z-50" onClick={handleClick}>
        <FaBars size={22} />
      </div>
    </div>
  );
};
export default Nav;