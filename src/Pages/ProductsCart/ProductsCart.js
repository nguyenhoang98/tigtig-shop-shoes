import React from "react";
import "./ProductsCart.scss";
import PropTypes from "prop-types";

ProductsCart.propTypes = {};

function ProductsCart(props) {
  const { productsCart, onReductionProductCart, onDeleteProductCart } = props;
  return (
    <div className="products-cart m-auto">
      <div className="products-cart__caption">Giỏ Hàng Của Bạn</div>
      <div className="products-cart__table">
        <table>
          <thead>
            <tr>
              <th>Ảnh</th>
              <th> Tên </th>
              <th>Số Lượng</th>
              <th>Giá</th>
              <th>Loại Bỏ Khỏi Giỏ Hàng</th>
            </tr>
          </thead>
          <tbody>
            {productsCart.map((value, index) => {
              return (
                <tr>
                  <td>
                    <img
                      src={value.products.src}
                      className="products-cart__table__image"
                    />
                  </td>
                  <td className="products-cart__table__name">
                    {value.products.name}
                  </td>
                  <td>
                    <button
                      className="btn btn-reduction"
                      onClick={() =>
                        onReductionProductCart(value.products.id, -1)
                      }
                    >
                      <i className="fa fa-minus" aria-hidden="true"></i>
                    </button>
                    <span> {value.quantity} </span>
                    <button
                      className="btn btn-increase"
                      onClick={() =>
                        onReductionProductCart(value.products.id, 1)
                      }
                    >
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                  </td>
                  <td> {value.products.price}VNĐ/1 Đôi </td>
                  <td>
                    <button
                      className="btn btn-delete-products-cart"
                      onClick={() => onDeleteProductCart(value.products.id)}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr className="products-cart__table__result">
              <td></td>
              <td>Tổng Tiền</td>
              <td>
                {productsCart.reduce((total, value) => {
                  return total + value.quantity * value.products.price;
                }, 0)}
                VNĐ
              </td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsCart;
