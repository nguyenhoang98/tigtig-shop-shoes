import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MenShoes from "../Pages/MenShoes/MenShoes";
import { connect } from "react-redux";
import { compose } from "redux";
import { fetch_api_shoes_men } from "../Redux/Actions/Actions";
import qs from "query-string";
import { add_to_cart } from "../Redux/Actions/ProductsCartAction";
import { close_menu_mobile } from "../Redux/Actions/Menu";
MenShoesContainers.propTypes = {};

function MenShoesContainers(props) {
  const {
    fetchApiShoesMen,
    shoesMen,
    onAddProductsToCart,
    onCloseMenuMobile,
  } = props;
  const [filter, setFilter] = useState({
    q: "",
  });
  useEffect(() => {
    const queryString = qs.stringify(filter);
    const url = `https://0yd7f.sse.codesandbox.io/Men?${queryString}`;
    fetchApiShoesMen(url);
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
    <MenShoes
      shoesMen={shoesMen}
      filterRating={filterRating}
      filterColor={filterColor}
      onAddProductsToCart={onAddProductsToCart}
    />
  );
}
const mapStateToProps = (state) => {
  return {
    shoesMen: state.ShoesMen,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchApiShoesMen: (url) => {
      return dispatch(fetch_api_shoes_men(url));
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
  MenShoesContainers
);
