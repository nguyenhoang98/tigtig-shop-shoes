import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";
import { add_to_cart } from "../Redux/Actions/ProductsCartAction";
import ProductsDetailt from "../Pages/ProductsDetailt/ProductsDetailt";

ProductsDetailtContainers.propTypes = {};

function ProductsDetailtContainers(props) {
  const { onAddProductsToCart } = props;
  return <ProductsDetailt onAddProductsToCart={onAddProductsToCart} />;
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddProductsToCart: (value, quantity) => {
      return dispatch(add_to_cart(value, quantity));
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  ProductsDetailtContainers
);
