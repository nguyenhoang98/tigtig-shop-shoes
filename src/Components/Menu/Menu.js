import React from "react";
import "./Menu.scss";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

Menu.propTypes = {};
function Menu(props) {
  return (
    <div className="menu clear">
      <ul>
        <li>
          <NavLink
            to="/"
            activeStyle={{
              borderBottom: "2px solid green",
            }}
          >
            Trang Chủ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/MenShoes"
            activeStyle={{
              borderBottom: "2px solid red",
            }}
          >
            Giày Nam
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/WomonShoes"
            activeStyle={{
              borderBottom: "2px solid red",
            }}
          >
            Giày Nữ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/SportShoes"
            activeStyle={{
              borderBottom: "2px solid red",
            }}
          >
            Giày Thể Thao
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
