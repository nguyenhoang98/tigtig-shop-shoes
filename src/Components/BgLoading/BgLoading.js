import React from "react";
import "./BgLoading.scss";
import Loading from "../../acssets/image/loading_2.gif";
import PropTypes from "prop-types";

BgLoading.propTypes = {};

function BgLoading(props) {
  const { loading } = props;
  if (loading) {
    return (
      <div className="bgloading">
        <img src={Loading} className="bgloading__image" alt="loading" />
      </div>
    );
  } else {
    return null;
  }
}

export default BgLoading;
