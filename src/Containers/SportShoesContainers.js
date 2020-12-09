import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SportShoes from "../Pages/SportShoes/SportShoes";
import { compose } from "redux";
import { connect } from "react-redux";
import { fetch_api_shoes_sport } from "../Redux/Actions/Actions";
import qs from "query-string";
import { add_to_cart } from "../Redux/Actions/ProductsCartAction";
import { close_menu_mobile } from "../Redux/Actions/Menu";
SportShoesContainers.propTypes = {};

function SportShoesContainers(props) {
  const {
    fetchApiShoesSport,
    shoesSport,
    onAddProductsToCart,
    onCloseMenuMobile,
  } = props;
  const [filter, setFilter] = useState({
    q: "",
  });
  useEffect(() => {
    const queryString = qs.stringify(filter);
    const url = `https://q9vjn.sse.codesandbox.io/Sport?${queryString}`;
    fetchApiShoesSport(url);
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
    <SportShoes
      shoesSport={shoesSport}
      filterRating={filterRating}
      filterColor={filterColor}
      onAddProductsToCart={onAddProductsToCart}
    />
  );
}
const mapStateToProps = (state) => {
  return {
    shoesSport: state.ShoesSport,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchApiShoesSport: (url) => {
      return dispatch(fetch_api_shoes_sport(url));
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
  SportShoesContainers
);
