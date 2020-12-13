import React from "react";
import "./Footer.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Footer.propTypes = {};

function Footer(props) {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-3 col-md-12 footer__logo">
          <img
            src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Store.svg"
            className="footer__logo__image"
            alt="footer image"
          />
        </div>
        <div className="col-9 col-md-12 footer__link">
          <div className="row">
            <div className="col-3 col-md-6">
              <h2>
                <Link to="3">Sản Phẩm</Link>
              </h2>
              <Link to="/tigtig-shop-shoes/MenShoes">Giày Nam</Link>
              <Link to="/tigtig-shop-shoes/WomonShoes">Giày Nữ</Link>
              <Link to="/tigtig-shop-shoes/SportShoes">Thời Trang </Link>
              <Link to="#">Sale-off</Link>
            </div>
            <div className="col-3 col-md-6">
              <h2>
                <Link to="/tigtig-shop-shoes">Về Công Ty</Link>
              </h2>
              <Link to="/tigtig-shop-shoes">tuyển Dụng</Link>
              <Link to="/tigtig-shop-shoes">Liên hệ chuyển nhượng</Link>
              <Link to="/tigtig-shop-shoes">Về BEYL</Link>
            </div>
            <div className="col-3 col-md-6">
              <h2>
                <Link to="#">Hỗ trợ</Link>
              </h2>
              <Link to="/tigtig-shop-shoes">FAQS</Link>
              <Link to="/tigtig-shop-shoes">Bảo Mật Thông Tin</Link>
              <Link to="/tigtig-shop-shoes">Chính Sách Chung </Link>
              <Link to="/tigtig-shop-shoes">Tra cứu Đơn Hàng</Link>
            </div>
            <div className="col-3 col-md-6">
              <h2>
                <Link to="/tigtig-shop-shoes">Liên Hệ</Link>
              </h2>
              <Link to="/tigtig-shop-shoes">Email Góp Ý </Link>
              <Link to="/tigtig-shop-shoes">HotLine</Link>
            </div>
            <div className="col-3 col-md-6">
              <h2>
                <Link to="/tigtig-shop-shoes">BEYL SOCIAL</Link>
              </h2>
              <Link
                to="/tigtig-shop-shoes"
                style={{
                  display: "inline-block",
                  fontSize: 30,
                }}
              >
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
              </Link>
              <Link
                to="/tigtig-shop-shoes"
                style={{
                  display: "inline-block",
                  fontSize: 30,
                  margin: "0 20px ",
                }}
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </Link>
              <Link
                to="/tigtig-shop-shoes"
                style={{
                  display: "inline-block",
                  fontSize: 30,
                }}
              >
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </Link>
            </div>
            <div className="col-3 col-md-6">
              <h2>
                <Link to="/tigtig-shop-shoes">ĐĂNG KÝ NHẬN MAIL</Link>
              </h2>
              <div className="row">
                <input type="text" className="footer__input col-10" />
                <button className="btn btn-submit col-2">
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div
              className="col-6 col-md-12"
              style={{
                padding: 30,
              }}
            >
              <img
                src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Footer.svg"
                className="footer__logo__image"
                style={{
                  width: "100%",
                }}
                alt="Ảnh"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
