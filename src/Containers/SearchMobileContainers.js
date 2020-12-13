import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import SearchMobie from "../Components/SearchMobie/SearchMobie";
import { close_search_mobile } from "../Redux/Actions/Menu";

SearchMobileContainers.propTypes = {};

function SearchMobileContainers(props) {
  const { searchMobile, closeSearchMobile } = props;
  return (
    <SearchMobie
      searchMobile={searchMobile}
      closeSearchMobile={closeSearchMobile}
    />
  );
}
const mapStateToProps = (state) => {
  return {
    searchMobile: state.SearchMobile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    closeSearchMobile: () => {
      return dispatch(close_search_mobile());
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  SearchMobileContainers
);
