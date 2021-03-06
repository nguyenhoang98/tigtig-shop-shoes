import React, { useState } from "react";
import "./NavBar.scss";
import search from "../../acssets/image/search04.png";
import PropTypes from "prop-types";
import ModalProductsContainers from "../../Containers/ModalProductsContainers";
import { Link, Redirect } from "react-router-dom";
NavBar.propTypes = {};

function NavBar(props) {
  const [keySearch, setkeySearch] = useState("");
  const [queryString, setqueryString] = useState({
    q: "",
  });
  const { onToggleMenuMobile, productsCart } = props;
  const [isOpenCart, setisOpenCart] = useState(false);
  function hoverOpenCart() {
    setisOpenCart(true);
  }
  function outCloseCart() {
    setisOpenCart(false);
  }
  function handleOnchange(e) {
    setkeySearch(e.target.value);
  }
  function handleOnsubmit(e) {
    e.preventDefault();
    setqueryString({
      q: keySearch,
    });
    handleOnResetForm();
  }
  function handleOnResetForm() {
    setkeySearch("");
  }
  if (queryString.q) {
    return (
      <div>
        <Redirect
          to={{
            pathname: `/tigtig-shop-shoes/result-search-products/${queryString.q}`,
            state: queryString,
          }}
        />
        <div className="navbar row">
          <div className="navbar__menu col-md-2">
            <button
              className="btn btn-toggle-menu"
              onClick={onToggleMenuMobile}
            >
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
          </div>
          <div className="navbar__logo col-2 col-md-8 p-10">
            <img
              src="https://bshoes.herokuapp.com/static/media/Shoes_logo.ea2a5c2e.png"
              className="navbar__logo__img"
              alt="Ảnh"
            />
            <Link to="/tigtig-shop-shoes" className="navbar__logo__text">
              BEYL
            </Link>
          </div>
          <div className="navbar__control col-9 p-10">
            <form onSubmit={handleOnsubmit}>
              <input
                type="text"
                className="navbar__control__input b-radius"
                placeholder="Search Your Shoes ..."
                value={keySearch}
                onChange={handleOnchange}
              />
            </form>
            <img src={search} className="navbar__control__search" alt="ảnh" />
          </div>
          <div className="navbar__action col-1 col-md-2 p-10">
            <ul>
              <li className="user">
                <Link to="/tigtig-shop-shoes/login">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  &nbsp; <span>Login</span>
                </Link>
              </li>
              <li
                onMouseEnter={hoverOpenCart}
                onMouseLeave={outCloseCart}
                onMouseUp={outCloseCart}
              >
                <Link
                  to="/tigtig-shop-shoes/products-cart"
                  className="navbar__action__cart"
                >
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  &nbsp;{" "}
                  <span className="navbar__action__cart__badge">
                    {" "}
                    {productsCart.length}
                  </span>
                </Link>
                {isOpenCart && <ModalProductsContainers />}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="navbar row">
        <div className="navbar__menu col-md-2">
          <button className="btn btn-toggle-menu" onClick={onToggleMenuMobile}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
        </div>
        <div className="navbar__logo col-2 col-md-8 p-10">
          <img
            src="https://bshoes.herokuapp.com/static/media/Shoes_logo.ea2a5c2e.png"
            className="navbar__logo__img"
            alt="Ảnh"
          />
          <Link to="/tigtig-shop-shoes" className="navbar__logo__text">
            BEYL
          </Link>
        </div>
        <div className="navbar__control col-8 p-10">
          <form onSubmit={handleOnsubmit}>
            <input
              type="text"
              className="navbar__control__input b-radius"
              placeholder="Search Your Shoes ..."
              value={keySearch}
              onChange={handleOnchange}
            />
          </form>
          <img src={search} className="navbar__control__search" alt="Ảnh" />
        </div>
        <div className="navbar__action col-2 col-md-2 p-10">
          <ul>
            <li className="user">
              <Link to="/tigtig-shop-shoes/login">
                <i className="fa fa-user" aria-hidden="true"></i>
                &nbsp; <span>Login</span>
              </Link>
            </li>
            <li
              onMouseOver={hoverOpenCart}
              onMouseLeave={outCloseCart}
              onMouseUp={outCloseCart}
            >
              <Link
                to="/tigtig-shop-shoes/products-cart"
                className="navbar__action__cart"
              >
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                &nbsp;{" "}
                <span className="navbar__action__cart__badge">
                  {" "}
                  {productsCart.length}
                </span>
              </Link>
              {isOpenCart && <ModalProductsContainers />}
            </li>
          </ul>
        </div>
      </div>
    );
}

export default NavBar;
