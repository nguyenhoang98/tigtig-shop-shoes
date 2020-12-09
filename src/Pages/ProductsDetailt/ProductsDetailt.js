import React, { useState } from "react";
import "../../slick/slick-theme.scss";
import "../../slick/slick.scss";
import "./ProductsDetailt.scss";
import Slider from "react-slick";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import DetailInfor from "../../Components/DetailInfor/DetailInfor";

ProductsDetailt.propTypes = {};

function ProductsDetailt(props) {
  const { onAddProductsToCart } = props;
  const [count, setCount] = useState(1);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const { location } = props;
  const { state } = location;
  const { slideShow } = state;
  function onUpdateCount(x) {
    setCount(count + x);
  }
  return (
    <div className="products-detail">
      <div className="products-detail row w-8 m-auto">
        <div className="products-detail__left col-6">
          <Slider asNavFor={nav2} ref={(c) => setNav1(c)}>
            {slideShow.map((value, index) => {
              return (
                <div className="products-detail__left__slide-top">
                  <img src={value} className="image" />
                </div>
              );
            })}
          </Slider>
          <Slider
            asNavFor={nav1}
            ref={(c) => setNav2(c)}
            slidesToShow={5}
            swipeToSlide={true}
            focusOnSelect={true}
            arrows={false}
          >
            {slideShow.map((value, index) => {
              return (
                <div className="products-detail__right-bottom">
                  <img src={value} className="image" />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="products-detail__right col-6">
          <div className="products-detail__right__name">{state.name}</div>
          <div className="products-detail__right__label">{state.label}</div>
          <div className="products-detail__right__price">{state.price}VNĐ</div>
          <div className="products-detail__right__description">
            {state.description}
          </div>
          <div className="products-detail__right__quantity">
            <button
              className="btn btn-reduction"
              onClick={() => onUpdateCount(-1)}
              disabled={count === 1}
            >
              <i class="fa fa-minus" aria-hidden="true"></i>
            </button>
            <span> {count} </span>
            <button
              className="btn btn-increase"
              onClick={() => onUpdateCount(1)}
            >
              <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
          <div className="products-detail__right__control">
            <button
              className="btn btn-add-to-cart"
              onClick={() => onAddProductsToCart(state, count)}
            >
              Thêm vào giỏ hàng
            </button>
            <button className="btn btn-shop-product">Thanh Toán</button>
          </div>
          <DetailInfor />
        </div>
      </div>
    </div>
  );
}

export default withRouter(ProductsDetailt);
