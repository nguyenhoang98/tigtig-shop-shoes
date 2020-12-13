import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";
import AdidasShoesPage from "../Pages/AdidasShoesPage/AdidasShoesPage";
import { fetch_api_adidas_page } from "../Redux/Actions/Actions";
import { add_to_cart } from "../Redux/Actions/ProductsCartAction";
AdidasContainers.propTypes = {};

function AdidasContainers(props) {
  const { fetchApiNikePage, adidasData, onAddProductToCart } = props;
  useEffect(() => {
    const url = "https://0yd7f.sse.codesandbox.io/adidas";
    fetchApiNikePage(url);
  }, []);
  return (
    <AdidasShoesPage
      adidasData={adidasData}
      onAddProductToCart={onAddProductToCart}
    />
  );
}
const mapStateToProps = (state) => {
  return {
    adidasData: state.AdidasData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchApiNikePage: (url) => {
      return dispatch(fetch_api_adidas_page(url));
    },
    onAddProductToCart: (value, quantity) => {
      return dispatch(add_to_cart(value, quantity));
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  AdidasContainers
);
