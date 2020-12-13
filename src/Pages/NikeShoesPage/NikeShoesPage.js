import React from "react";
import "./NikeShoesPage.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

NikeShoesPage.propTypes = {};

function NikeShoesPage(props) {
  const { nikeData, onAddProductToCart } = props;
  return (
    <div className="nikeshoespage">
      <div className="nikeshoespage__title">
        <h2>Giày Nike Chất Lượng Tốt</h2>
      </div>
      {nikeData.map((value, index) => {
        return (
          <div className="nikeshoespage__card box-shadow row" key={index}>
            <div className="nikeshoespage__card__left col-2 col-md-4">
              <Link
                to={{
                  pathname: `/tigtig-shop-shoes/products-detailt/${value.name}`,
                  state: value,
                }}
              >
                <img
                  src={value.src}
                  className="nikeshoespage__card__image responsive-image"
                  alt="image-nike"
                />
              </Link>
              <div
                className="nikeshoespage__card__overflow__cart overflow-icon-top"
                style={{
                  top: "20%",
                }}
                onClick={() => onAddProductToCart(value, 1)}
              >
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </div>
              <div
                className="nikeshoespage__card__overflow__heart overflow-icon-bottom"
                style={{
                  top: "50%",
                }}
              >
                <i className="fa fa-heart" aria-hidden="true"></i>
              </div>
            </div>
            <div className="nikeshoespage__card__body nikeshoespage__card__right col-10 col-md-8">
              <div className="nikeshoespage__card__body__name">
                {value.name}
              </div>
              <div className="nikeshoespage__card__body__description">
                {value.description}
              </div>
              <div className="nikeshoespage__card__body__price">
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

export default NikeShoesPage;
