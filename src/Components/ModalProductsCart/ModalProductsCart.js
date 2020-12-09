import React from "react";
import "./ModalProductsCart.scss";
import PropTypes from "prop-types";

ModalProductsCart.propTypes = {};

function ModalProductsCart(props) {
  const { productscart } = props;
  return (
    <div className="ModalProductsCart">
      <div className="ModalProductsCart__title">
        <h3>Giỏ Hàng Có {productscart.length} Sản Phẩm</h3>
      </div>
      {productscart.map((value) => {
        return (
          <div className="ModalProductsCart__item row" key={value.products.id}>
            <div className="ModalProductsCart__item__left col-3">
              <img
                src={value.products.src}
                className="ModalProductsCart__item__left-image"
              />
            </div>
            <div className="ModalProductsCart__item__right col-9">
              {value.products.name}
              <div className="ModalProductsCart__item__right-quantity">
                Số Lượng : {value.quantity}
              </div>
            </div>
          </div>
        );
      })}
      <div className="ModalProductsCart__total-price">
        Tổng Tiền :
        {productscart.reduce((total, value) => {
          return total + value.products.price * value.quantity;
        }, 0)}
        VNĐ
      </div>
    </div>
  );
}

export default ModalProductsCart;
