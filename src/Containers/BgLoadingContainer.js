import React from "react";
import PropTypes from "prop-types";
import BgLoading from "../Components/BgLoading/BgLoading";
import { connect } from "react-redux";
import { compose } from "redux";
BgLoadingContainer.propTypes = {};

function BgLoadingContainer(props) {
  const { loading } = props;
  return <BgLoading loading={loading} />;
}
const mapStateToProps = (state) => {
  return {
    loading: state.Loading,
  };
};
export default compose(connect(mapStateToProps, null))(BgLoadingContainer);
