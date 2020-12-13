import React, { useState } from "react";
import "./SearchMobie.scss";
import search from "../../acssets/image/search04.png";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

SearchMobie.propTypes = {};

function SearchMobie(props) {
  const { searchMobile, closeSearchMobile } = props;
  const [keySearch, setkeySearch] = useState("");
  const [queryString, setqueryString] = useState({
    q: "",
  });
  function handleOnchange(e) {
    setkeySearch(e.target.value);
  }
  function handleOnsubmit(e) {
    e.preventDefault();
    setqueryString({
      q: keySearch,
    });
    closeSearchMobile();
  }
  if (queryString.q) {
    return (
      <div>
        <Redirect
          to={{
            pathname: `/tigtig-shop-shoes/result-search-products/${queryString.q}`,
            state: queryString,
          }}
        />
        {searchMobile && (
          <div className="searchmobile">
            <div className="searchmobile__close" onClick={closeSearchMobile}>
              &times;
            </div>
            <div className="searchmobile__content">
              <form onSubmit={handleOnsubmit}>
                <input
                  type="text"
                  value={keySearch}
                  onChange={handleOnchange}
                  className="searchmobile__content__input"
                  placeholder="Tìm Kiếm ..."
                />
                <img src={search} className="searchmobile__content__search" />
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
  if (searchMobile) {
    return (
      <div className="searchmobile">
        <div className="searchmobile__close" onClick={closeSearchMobile}>
          &times;
        </div>
        <div className="searchmobile__content">
          <form onSubmit={handleOnsubmit}>
            <input
              type="text"
              value={keySearch}
              onChange={handleOnchange}
              className="searchmobile__content__input"
              placeholder="Tìm Kiếm ..."
            />
            <img src={search} className="searchmobile__content__search" />
          </form>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default SearchMobie;
