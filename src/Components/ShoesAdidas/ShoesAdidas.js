import React from "react";
import "./ShoesAdidas.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

ShoesAdidas.propTypes = {};

function ShoesAdidas(props) {
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
  const { adidas } = props;
  return (
    <div className="shoesadidas w-8 m-auto">
      <div className="shoesadidas__title text-center">
        <h2>Giày adidas</h2>
        <hr />
        <Link to="">Xem Thêm</Link>
      </div>
      <div className="row">
        {adidas.map((value, index) => {
          return (
            <div className="shoesadidas__card col-3 col-md-6" key={index}>
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
                  <img src={value.src} className="shoesadidas__card__image" />
                  <div className="shoesadidas__card__body">
                    <div className="shoesadidas__card__body__rating">
                      {onShowRating(value.rating)}
                    </div>
                    <div className="shoesadidas__card__body__name">
                      {value.name}
                    </div>
                    <div className="shoesadidas__card__body__price">
                      {value.price}
                    </div>
                  </div>
                </Link>
              </div>
              <div
                className="shoesadidas__card__overflow__cart overflow-icon-top"
                onClick={() => onAddProductToCart(value, 1)}
              >
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </div>
              <div className="shoesadidas__card__overflow__heart overflow-icon-bottom">
                <i className="fa fa-heart" aria-hidden="true"></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShoesAdidas;
