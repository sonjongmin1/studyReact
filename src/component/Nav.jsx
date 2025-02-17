import React from "react";
import { Link } from "react-router-dom";
import "../style/main.scss";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/studyReact/">홈</Link>
        </li>
        <li>
          <Link to="/studyReact/Top">상의</Link>
        </li>
        <li>
          <Link to="/studyReact/Bottom">하의</Link>
        </li>
        <li>
          <Link to="/studyReact/Accessories">액세사리</Link>
        </li>
        <li>
          <Link to="/studyReact/Shoes">신발</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
