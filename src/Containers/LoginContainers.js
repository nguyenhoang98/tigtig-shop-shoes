import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Login from "../Pages/Login/Login";
import { close_menu_mobile } from "../Redux/Actions/Menu";
LoginContainers.propTypes = {};

function LoginContainers(props) {
  const { onCloseMenuMobile } = props;
  useEffect(() => {
    onCloseMenuMobile();
  }, []);
  return <Login />;
}
const mapDispatchToProps = (dispatch) => {
  return {
    onCloseMenuMobile: () => {
      return dispatch(close_menu_mobile());
    },
  };
};
export default compose(connect(null, mapDispatchToProps))(LoginContainers);
