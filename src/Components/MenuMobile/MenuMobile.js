import React from "react";
import "./MenuMobile.scss";
import { NavLink, Route } from "react-router-dom";
import PropTypes from "prop-types";

MenuMobile.propTypes = {};
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
    label: "Login",
    to: "/tigtig-shop-shoes/login",
    exact: false,
  },
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
function MenuMobile(props) {
  const { isOpenMenuMobile, onCloseMenuMobile, onOpenSearchMobile } = props;
  if (isOpenMenuMobile) {
    return (
      <div className="menumobile">
        <span className="menumobile__close" onClick={onCloseMenuMobile}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </span>
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
          <li>
            <button className="btn btn-search" onClick={onOpenSearchMobile}>
              Search
            </button>
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

export default MenuMobile;
