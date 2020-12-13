import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";
import NikeShoesPage from "../Pages/NikeShoesPage/NikeShoesPage";
import { fetch_api_nike_page } from "../Redux/Actions/Actions";
import { add_to_cart } from "../Redux/Actions/ProductsCartAction";
NikeShoesContainer.propTypes = {};

function NikeShoesContainer(props) {
  const { fetchApiNikePage, nikeData, onAddProductToCart } = props;
  useEffect(() => {
    const url = "https://0yd7f.sse.codesandbox.io/nike";
    fetchApiNikePage(url);
  }, []);
  return (
    <NikeShoesPage
      nikeData={nikeData}
      onAddProductToCart={onAddProductToCart}
    />
  );
}
const mapStateToProps = (state) => {
  return {
    nikeData: state.NikeData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchApiNikePage: (url) => {
      return dispatch(fetch_api_nike_page(url));
    },
    onAddProductToCart: (value, quantity) => {
      return dispatch(add_to_cart(value, quantity));
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  NikeShoesContainer
);
