import React from "react";
import "./YouMayLike.scss";
import "../../slick/slick-theme.scss";
import "../../slick/slick.scss";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

YouMayLike.propTypes = {};
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToScroll: 4,
  slidesToShow: 4,
};
function YouMayLike(props) {
  const { youMayLikeData, onAddProductToCart } = props;
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
          key={i}
        ></i>
      );
    }
    for (var j = 1; j <= 5 - rating; j++) {
      result.push(
        <i className="fa fa-star-o" aria-hidden="true" key={i + j}></i>
      );
    }
    return result;
  }
  return (
    <div className="youmaylike w-8 m-auto">
      <div className="youmaylike__caption">
        <h2>
          <i
            className="fa fa-thumbs-up"
            aria-hidden="true"
            style={{
              color: "blue",
            }}
          ></i>
          &nbsp; You May Like
        </h2>
      </div>
      <Slider {...settings}>
        {youMayLikeData.map((value) => {
          return (
            <div className="youmaylike__card" key={value.id}>
              <Link
                to={{
                  pathname: `/tigtig-shop-shoes/products-detailt/${value.name}`,
                  state: value,
                }}
              >
                <img
                  src={value.src}
                  className="youmaylike__card__image responsive-image"
                  alt="Ảnh"
                />
                <div className="youmaylike__card__body">
                  <div className="youmaylike__card__body__rating">
                    {onShowRating(value.rating)}
                  </div>
                  <div className="youmaylike__card__body__name">
                    {" "}
                    {value.name}{" "}
                  </div>
                  <div className="youmaylike__card__body__price">
                    {" "}
                    {value.price}
                    <sup>đ</sup>
                  </div>
                </div>
              </Link>
              <div
                className="youmaylike__card__overflow__cart overflow-icon-top"
                onClick={() => onAddProductToCart(value, 1)}
              >
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </div>
              <div className="youmaylike__card__overflow__heart overflow-icon-bottom">
                <i className="fa fa-heart" aria-hidden="true"></i>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default YouMayLike;
