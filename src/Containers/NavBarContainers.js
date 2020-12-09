import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import NavBar from "../Components/NavBar/NavBar";
import { toggle_menu_mobile } from "../Redux/Actions/Menu";

NavBarContainers.propTypes = {};

function NavBarContainers(props) {
  const { onToggleMenuMobile, productsCart } = props;
  return (
    <NavBar
      onToggleMenuMobile={onToggleMenuMobile}
      productsCart={productsCart}
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
    onToggleMenuMobile: () => {
      return dispatch(toggle_menu_mobile());
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  NavBarContainers
);
