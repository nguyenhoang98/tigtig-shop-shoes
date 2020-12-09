import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Home from "../Pages/Home/Home";
import { connect } from "react-redux";
import { compose } from "redux";
import { fetch_api_home_products } from "../Redux/Actions/Actions";
import { add_to_cart } from "../Redux/Actions/ProductsCartAction";
import { close_menu_mobile } from "../Redux/Actions/Menu";
HomeContainers.propTypes = {};

function HomeContainers(props) {
  const {
    fetchApiHomeProducts,
    homeProducts,
    onAddProductToCart,
    onCloseMenuMobile,
  } = props;
  useEffect(() => {
    fetchApiHomeProducts();
  }, []);
  useEffect(() => {
    onCloseMenuMobile();
  }, []);
  return (
    <Home homeProducts={homeProducts} onAddProductToCart={onAddProductToCart} />
  );
}
const mapStateToProps = (state) => {
  return {
    homeProducts: state.HomeProducts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchApiHomeProducts: () => {
      return dispatch(fetch_api_home_products());
    },
    onAddProductToCart: (product, quantity) => {
      return dispatch(add_to_cart(product, quantity));
    },
    onCloseMenuMobile: () => {
      return dispatch(close_menu_mobile());
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  HomeContainers
);
