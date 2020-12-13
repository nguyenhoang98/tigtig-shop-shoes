import React from "react";
import "./AdidasShoesPage.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

AdidasShoesPage.propTypes = {};

function AdidasShoesPage(props) {
  const { adidasData, onAddProductToCart } = props;
  return (
    <div className="adiashoespage">
      <div className="adiashoespage__title">
        <h2>Giày Adidas Chất Lượng Tốt</h2>
      </div>
      {adidasData.map((value, index) => {
        return (
          <div className="adiashoespage__card box-shadow row" key={index}>
            <div className="adiashoespage__card__left col-2 col-md-4">
              <Link
                to={{
                  pathname: `/tigtig-shop-shoes/products-detailt/${value.name}`,
                  state: value,
                }}
              >
                <img
                  src={value.src}
                  className="adiashoespage__card__image responsive-image"
                  alt="image-nike"
                />
              </Link>
              <div
                className="adiashoespage__card__overflow__cart overflow-icon-top"
                style={{
                  top: "20%",
                }}
                onClick={() => onAddProductToCart(value, 1)}
              >
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </div>
              <div
                className="adiashoespage__card__overflow__heart overflow-icon-bottom"
                style={{
                  top: "50%",
                }}
              >
                <i className="fa fa-heart" aria-hidden="true"></i>
              </div>
            </div>
            <div className="adiashoespage__card__right adiashoespage__card__body col-10 col-md-8">
              <div className="adiashoespage__card__body__name">
                {value.name}
              </div>
              <div className="adiashoespage__card__body__description">
                {value.description}
              </div>
              <div className="adiashoespage__card__body__price">
                Giá : {value.price}
                <sup>đ</sup>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AdidasShoesPage;
