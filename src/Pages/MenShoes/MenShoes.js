import React from "react";
import "./MenShoes.scss";
import PropTypes from "prop-types";
import FilterProducts from "../../Components/FilterProducts/FilterProducts";
import { Link } from "react-router-dom";

MenShoes.propTypes = {};

function MenShoes(props) {
  const { shoesMen, filterRating, filterColor, onAddProductsToCart } = props;
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
  return (
    <div className="menshoes row w-8 m-auto">
      <div className="menshoes__filter col-2 col-md-12">
        <div
          style={{
            background: "black",
            color: "white",
            fontSize: 20,
            padding: 10,
          }}
        >
          {" "}
          Giày Nam{" "}
        </div>
        <FilterProducts filterRating={filterRating} filterColor={filterColor} />
      </div>
      <div className="menshoes__products row col-10 col-md-12">
        {shoesMen.map((value) => {
          return (
            <div className="menshoes__card col-3 col-md-6">
              <div
                className="menshoes__card__animation"
                style={{
                  padding: 10,
                }}
              >
                <Link
                  to={{
                    pathname: `products-detailt/${value.name}`,
                    state: value,
                  }}
                >
                  <img
                    src={value.src}
                    className="menshoes__card__image responsive-image"
                    alt="image"
                  />
                  <div className="menshoes__card__body">
                    <div className="menshoes__card__body__rating">
                      {onShowRating(value.rating)}
                    </div>
                    <div className="menshoes__card__body__name">
                      {value.name}
                    </div>
                    <div className="menshoes__card__body__label">
                      {" "}
                      {value.label}{" "}
                    </div>
                    <div className="menshoes__card__body__price">
                      {value.price}
                      <sup>đ</sup>
                    </div>
                  </div>
                </Link>
              </div>
              <div
                className="menshoes__card__overflow__cart overflow-icon-top"
                onClick={() => onAddProductsToCart(value, 1)}
              >
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </div>
              <div className="menshoes__card__overflow__heart overflow-icon-bottom">
                <i className="fa fa-heart" aria-hidden="true"></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MenShoes;
