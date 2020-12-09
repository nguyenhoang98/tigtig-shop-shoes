import React from "react";
import PropTypes from "prop-types";
import Menu from "../Components/Menu/Menu";
import { connect } from "react-redux";
import { compose } from "redux";
MenuContainers.propTypes = {};

function MenuContainers(props) {
  const { isOpenMenu } = props;
  return <Menu isOpenMenu={isOpenMenu} />;
}
const mapStateToProps = (state) => {
  return {
    isOpenMenu: state.Menu,
  };
};
export default compose(connect(mapStateToProps, null))(MenuContainers);
