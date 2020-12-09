import React from "react";
import "./ShoesNike.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

ShoesNike.propTypes = {};

function ShoesNike(props) {
  const { onAddProductToCart } = props;
  function onShowRating(rating) {
    const result = [];
    for (var i = 1; i <= rating; i++) {
      result.push(
        <i
          className="fa fa-star"
          aria-hidden="true"
          style={{
            color: "tomato",
          }}
        ></i>
      );
    }
    for (var j = 1; j <= 5 - rating; j++) {
      result.push(<i HomeProducts="fa fa-star-o" aria-hidden="true"></i>);
    }
    return result;
  }
  const { nike } = props;
  return (
    <div className="shoesnike w-8 m-auto">
      <div className="shoesnike__title text-center">
        <h2>Giày nike</h2>
        <hr />
        <Link to="">Xem Thêm</Link>
      </div>
      <div className="row">
        {nike.map((value, index) => {
          return (
            <div className="shoesnike__card col-3 col-md-6">
              <div
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
                  <img src={value.src} className="shoesnike__card__image" />
                  <div className="shoesnike__card__body">
                    <div className="shoesnike__card__body__rating">
                      {onShowRating(value.rating)}
                    </div>
                    <div className="shoesnike__card__body__name">
                      {value.name}
                    </div>
                    <div className="shoesnike__card__body__price">
                      {value.price}
                    </div>
                  </div>
                </Link>
              </div>
              <div
                className="shoesnike__card__overflow__cart overflow-icon-top"
                onClick={() => onAddProductToCart(value, 1)}
              >
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </div>
              <div className="shoesnike__card__overflow__heart overflow-icon-bottom">
                <i className="fa fa-heart" aria-hidden="true"></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShoesNike;
