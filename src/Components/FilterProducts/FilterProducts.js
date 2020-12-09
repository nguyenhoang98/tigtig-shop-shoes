import React, { useState } from "react";
import "./FilterProducts.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

FilterProducts.propTypes = {};

function FilterProducts(props) {
  const { filterRating, filterColor } = props;
  const [valueColor, setValueColor] = useState("white");
  const [valueRating, setValueRating] = useState(3);
  function handleFilterColor(param) {
    filterColor(param);
    setValueColor(param);
  }
  function handleFilterRating(param) {
    filterRating(param);
    setValueRating(param);
  }
  return (
    <div className="filterproducts">
      <div className="filterproducts__title">Lọc sản phẩm</div>
      <div className="filterproducts__price">
        <div className="filterproducts__price__title">
          <h3>Chọn theo giá</h3>
        </div>
        <div
          style={{
            padding: 10,
          }}
        >
          <div className="filterproducts__1">100.000đ đến 500.000đ</div>
          <div className="filterproducts__2">500.000đ đến 1.000.000đ</div>
          <div className="filterproducts__3">1.000.000đ trở lên</div>
        </div>
      </div>
      <hr />
      <div className="filterproducts__color">
        <div className="filterproducts__color__title">
          <h3>Chọn Theo Màu</h3>
        </div>
        <div
          style={{
            padding: 10,
          }}
        >
          <div
            className={classNames("filterproducts__color__white", {
              LinkColor: valueColor === "white",
            })}
            onClick={() => handleFilterColor("white")}
          >
            Màu trắng
          </div>
          <div
            className={classNames("filterproducts__color__black", {
              LinkColor: valueColor === "black",
            })}
            onClick={() => handleFilterColor("black")}
          >
            Màu đen
          </div>
          <div
            className={classNames("filterproducts__color__grey", {
              LinkColor: valueColor === "blue",
            })}
            onClick={() => handleFilterColor("blue")}
          >
            Màu xanh
          </div>
          <div
            className={classNames("filterproducts__color__red", {
              LinkColor: valueColor === "red",
            })}
            onClick={() => handleFilterColor("red")}
          >
            Màu Đỏ
          </div>
        </div>
      </div>
      <hr />
      <div className="filterproducts__rating">
        <div className="filterproducts__rating__title">
          <h3>Chọn Theo Rating</h3>
        </div>
        <div
          style={{
            padding: 10,
          }}
        >
          <div
            className={classNames("filterproducts__rating__item", {
              bgColorRating: valueRating === 3,
            })}
            onClick={() => handleFilterRating(3)}
          >
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </div>
          <div
            className={classNames("filterproducts__rating__item", {
              bgColorRating: valueRating === 4,
            })}
            onClick={() => handleFilterRating(4)}
          >
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </div>
          <div
            className={classNames("filterproducts__rating__item", {
              bgColorRating: valueRating === 5,
            })}
            onClick={() => handleFilterRating(5)}
          >
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterProducts;
