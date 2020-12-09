import React from "react";
import PropTypes from "prop-types";
import MenuMobile from "../Components/MenuMobile/MenuMobile";
import { connect } from "react-redux";
import { compose } from "redux";
import { close_menu_mobile, open_search_mobile } from "../Redux/Actions/Menu";
MenuMobileContainers.propTypes = {};

function MenuMobileContainers(props) {
  const { isOpenMenuMobile, onCloseMenuMobile, onOpenSearchMobile } = props;
  function handleOpenSearchMobile() {
    onCloseMenuMobile();
    onOpenSearchMobile();
  }
  return (
    <MenuMobile
      isOpenMenuMobile={isOpenMenuMobile}
      onCloseMenuMobile={onCloseMenuMobile}
      onOpenSearchMobile={handleOpenSearchMobile}
    />
  );
}
const mapStateToProps = (state) => {
  return {
    isOpenMenuMobile: state.Menu,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onCloseMenuMobile: () => {
      return dispatch(close_menu_mobile());
    },
    onOpenSearchMobile: () => {
      return dispatch(open_search_mobile());
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  MenuMobileContainers
);
