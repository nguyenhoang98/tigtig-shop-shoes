import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import qs from "query-string";
import PropTypes from "prop-types";
import ResultSearch from "../Pages/ResultSearch/ResultSearch";
import { fetch_api_search_products } from "../Redux/Actions/Actions";
import { add_to_cart } from "../Redux/Actions/ProductsCartAction";

ResultSearchContainers.propTypes = {};

function ResultSearchContainers(props) {
  const {
    location,
    fetchApiSearchProducts,
    products,
    onAddProductsToCart,
  } = props;
  const { state } = location;
  const { q } = state;
  useEffect(() => {
    const endpoint = qs.stringify(state);
    const url = `https://0yd7f.sse.codesandbox.io/ALL?${endpoint}`;
    fetchApiSearchProducts(url);
  }, [state]);
  return (
    <ResultSearch
      keySearch={q}
      products={products}
      onAddProductsToCart={onAddProductsToCart}
    />
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.ResultSearchProducts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchApiSearchProducts: (url) => {
      return dispatch(fetch_api_search_products(url));
    },
    onAddProductsToCart: (value, quantity) => {
      return dispatch(add_to_cart(value, quantity));
    },
  };
};
export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ResultSearchContainers);
