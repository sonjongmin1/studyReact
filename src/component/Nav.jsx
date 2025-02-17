import React from "react";
import { Link } from "react-router-dom";
import "../style/main.scss";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/Top">상의</Link>
        </li>
        <li>
          <Link to="/Bottom">하의</Link>
        </li>
        <li>
          <Link to="/Accessories">액세사리</Link>
        </li>
        <li>
          <Link to="/Shoes">신발</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
