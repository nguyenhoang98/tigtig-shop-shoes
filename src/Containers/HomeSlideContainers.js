import React, { useEffect } from "react";
import PropTypes from "prop-types";
import HomeSlide from "../Components/HomeSlide/HomeSlide";
import { connect } from "react-redux";
import { compose } from "redux";
import { fetch_api_home_slide } from "../Redux/Actions/Actions";
HomeSlideContainers.propTypes = {};

function HomeSlideContainers(props) {
  const { fetchApiHomeSlide, homeSlide } = props;
  useEffect(() => {
    fetchApiHomeSlide();
  }, []);
  return <HomeSlide homeSlide={homeSlide} />;
}
const mapStateToProps = (state) => {
  return {
    homeSlide: state.HomeSlide,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchApiHomeSlide: () => {
      return dispatch(fetch_api_home_slide());
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  HomeSlideContainers
);
