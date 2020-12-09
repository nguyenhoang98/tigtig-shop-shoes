import React from "react";
import "./MenuMobile.scss";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

MenuMobile.propTypes = {};

function MenuMobile(props) {
  const { isOpenMenuMobile, onCloseMenuMobile, onOpenSearchMobile } = props;
  if (isOpenMenuMobile) {
    return (
      <div className="menumobile">
        <span className="menumobile__close" onClick={onCloseMenuMobile}>
          <i class="fa fa-times" aria-hidden="true"></i>
        </span>
        <ul>
          <li>
            <NavLink to="/">Login</NavLink>
          </li>
          <li>
            <NavLink to="/">Register</NavLink>
          </li>
          <li>
            <button className="btn btn-search" onClick={onOpenSearchMobile}>
              Search
            </button>
          </li>
          <li>
            <NavLink
              to="/tigtig-shop-shoes"
              activeStyle={{
                borderBottom: "2px solid green",
              }}
            >
              Trang Chủ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tigtig-shop-shoes/MenShoes"
              activeStyle={{
                borderBottom: "2px solid red",
              }}
            >
              Giày Nam
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tigtig-shop-shoes/WomonShoes"
              activeStyle={{
                borderBottom: "2px solid red",
              }}
            >
              Giày Nữ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tigtig-shop-shoes/SportShoes"
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
  } else {
    return null;
  }
}

export default MenuMobile;
