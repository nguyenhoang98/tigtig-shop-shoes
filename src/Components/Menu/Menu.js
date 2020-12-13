import React from "react";
import "./Menu.scss";
import PropTypes from "prop-types";
import { NavLink, Route } from "react-router-dom";

Menu.propTypes = {};
const MenuLink = ({ label, to, actionOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={actionOnlyWhenExact}
      children={(props) => {
        return (
          <li className={props.match ? "red" : ""}>
            <NavLink to={to}>{label}</NavLink>
          </li>
        );
      }}
    />
  );
};
const menus = [
  {
    label: "Trang Chủ",
    to: "/tigtig-shop-shoes",
    exact: true,
  },
  {
    label: "Giày Nam",
    to: "/tigtig-shop-shoes/MenShoes",
    exact: false,
  },
  {
    label: "Giày Nữ",
    to: "/tigtig-shop-shoes/WomonShoes",
    exact: false,
  },
  {
    label: "Giày Thể Thao",
    to: "/tigtig-shop-shoes/SportShoes",
    exact: false,
  },
];
function Menu(props) {
  return (
    <div className="menu clear">
      <ul>
        {menus.map((value, index) => {
          return (
            <MenuLink
              label={value.label}
              to={value.to}
              actionOnlyWhenExact={value.exact}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Menu;
