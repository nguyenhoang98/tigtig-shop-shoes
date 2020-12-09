import React from "react";
import PropTypes from "prop-types";
import ProductsCart from "../Pages/ProductsCart/ProductsCart";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  delete_product_cart,
  update_to_cart,
} from "../Redux/Actions/ProductsCartAction";
ProductsCartContainers.propTypes = {};

function ProductsCartContainers(props) {
  const { productsCart, onReductionProductCart, onDeleteProductCart } = props;
  return (
    <ProductsCart
      productsCart={productsCart}
      onReductionProductCart={onReductionProductCart}
      onDeleteProductCart={onDeleteProductCart}
    />
  );
}
const mapStateToProps = (state) => {
  return {
    productsCart: state.ProductsCart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onReductionProductCart: (id, count) => {
      return dispatch(update_to_cart(id, count));
    },
    onDeleteProductCart: (id) => {
      return dispatch(delete_product_cart(id));
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  ProductsCartContainers
);
