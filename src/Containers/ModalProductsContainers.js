import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ModalProductsCart from "../Components/ModalProductsCart/ModalProductsCart";

ModalProductsContainers.propTypes = {};

function ModalProductsContainers(props) {
  const { productscart } = props;
  return <ModalProductsCart productscart={productscart} />;
}

const mapSTateToProps = (state) => {
  return {
    productscart: state.ProductsCart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default compose(connect(mapSTateToProps, mapDispatchToProps))(
  ModalProductsContainers
);
