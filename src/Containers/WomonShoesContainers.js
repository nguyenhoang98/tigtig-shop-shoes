import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import WomonShoes from "../Pages/WomonShoes/WomonShoes";
import { connect } from "react-redux";
import { compose } from "redux";
import { fetch_api_shoes_womon } from "../Redux/Actions/Actions";
import qs from "query-string";
import { add_to_cart } from "../Redux/Actions/ProductsCartAction";
import { close_menu_mobile } from "../Redux/Actions/Menu";
WomonShoesContainers.propTypes = {};

function WomonShoesContainers(props) {
  const {
    fetchApiShoesWomon,
    shoesWomon,
    onAddProductsToCart,
    onCloseMenuMobile,
  } = props;
  const [filter, setFilter] = useState({
    q: "",
  });
  useEffect(() => {
    const queryString = qs.stringify(filter);
    const url = `https://q9vjn.sse.codesandbox.io/women?${queryString}`;
    fetchApiShoesWomon(url);
  }, [filter]);
  useEffect(() => {
    onCloseMenuMobile();
  }, []);
  function filterRating(rating) {
    setFilter({
      rating: rating,
    });
  }
  function filterColor(color) {
    setFilter({
      color: color,
    });
  }
  return (
    <WomonShoes
      shoesWomon={shoesWomon}
      filterRating={filterRating}
      filterColor={filterColor}
      onAddProductsToCart={onAddProductsToCart}
    />
  );
}
const mapStateToProps = (state) => {
  return {
    shoesWomon: state.ShoesWomon,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchApiShoesWomon: (url) => {
      return dispatch(fetch_api_shoes_womon(url));
    },
    onAddProductsToCart: (value, quantity) => {
      return dispatch(add_to_cart(value, quantity));
    },
    onCloseMenuMobile: () => {
      return dispatch(close_menu_mobile());
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  WomonShoesContainers
);
