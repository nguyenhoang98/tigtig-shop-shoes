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
              <Link to="#">Giày Nam</Link>
              <Link to="#">Giày Nữ</Link>
              <Link to="#">Thời Trang </Link>
              <Link to="#">Sale-off</Link>
            </div>
            <div className="col-3 col-md-6">
              <h2>
                <Link to="#">Về Công Ty</Link>
              </h2>
              <Link to="#">tuyển Dụng</Link>
              <Link to="#">Liên hệ chuyển nhượng</Link>
              <Link to="#">Về BEYL</Link>
            </div>
            <div className="col-3 col-md-6">
              <h2>
                <Link to="#">Hỗ trợ</Link>
              </h2>
              <Link to="#">FAQS</Link>
              <Link to="#">Bảo Mật Thông Tin</Link>
              <Link to="#">Chính Sách Chung </Link>
              <Link to="#">Tra cứu Đơn Hàng</Link>
            </div>
            <div className="col-3 col-md-6">
              <h2>
                <Link to="#">Liên Hệ</Link>
              </h2>
              <Link to="#">Email Góp Ý </Link>
              <Link to="#">HotLine</Link>
            </div>
            <div className="col-3 col-md-6">
              <h2>
                <Link to="#">BEYL SOCIAL</Link>
              </h2>
              <Link
                to="#"
                style={{
                  display: "inline-block",
                  fontSize: 30,
                }}
              >
                <i class="fa fa-facebook-official" aria-hidden="true"></i>
              </Link>
              <Link
                to="#"
                style={{
                  display: "inline-block",
                  fontSize: 30,
                  margin: "0 20px ",
                }}
              >
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </Link>
              <Link
                to="#"
                style={{
                  display: "inline-block",
                  fontSize: 30,
                }}
              >
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
              </Link>
            </div>
            <div className="col-3 col-md-6">
              <h2>
                <Link to="/">ĐĂNG KÝ NHẬN MAIL</Link>
              </h2>
              <input type="text" />
              <button>Submit</button>
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
