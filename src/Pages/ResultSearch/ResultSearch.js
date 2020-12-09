import React from "react";
import "./ResultSearch.scss";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

ResultSearch.propTypes = {};

function ResultSearch(props) {
  const { products, onAddProductsToCart } = props;
  function onShowRating(rating) {
    const result = [];
    for (var i = 1; i <= rating; i++) {
      result.push(<i className="fa fa-star" aria-hidden="true"></i>);
    }
    for (var j = 1; j <= 5 - rating; j++) {
      result.push(<i className="fa fa-star-o" aria-hidden="true"></i>);
    }
    return result;
  }
  if (products.length > 0) {
    return (
      <div className="resultSearch m-auto w-8">
        <div className="resultSearch__title">
          <h2>Kết Quả tìm Kiếm</h2>
        </div>
        <div className="resultSearch__products row">
          {products.map((value, index) => {
            return (
              <div className="resultSearch__card col-3 col-s-6">
                <div
                  className="resultSearch__card__animation"
                  style={{
                    padding: 10,
                  }}
                >
                  <Link
                    to={{
                      pathname: `/products-detailt/${value.name}`,
                      state: value,
                    }}
                  >
                    <img
                      src={value.src}
                      className="resultSearch__card__image"
                      alt="image"
                    />
                    <div className="resultSearch__card__body">
                      <div className="resultSearch__card__body__rating">
                        {onShowRating(value.rating)}
                      </div>
                      <div className="resultSearch__card__body__name">
                        {value.name}
                      </div>
                      <div className="resultSearch__card__body__label">
                        {" "}
                        {value.label}{" "}
                      </div>
                      <div className="resultSearch__card__body__price">
                        {value.price}
                        <sup>đ</sup>
                      </div>
                    </div>
                  </Link>
                </div>
                <div
                  className="resultSearch__card__overflow__cart overflow-icon-top"
                  onClick={() => onAddProductsToCart(value, 1)}
                >
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
                <div className="resultSearch__card__overflow__heart overflow-icon-bottom">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  if (products.length === 0) {
    return <h2>Không Tìm Thấy Sản Phẩm Nào</h2>;
  }
}

export default withRouter(ResultSearch);
