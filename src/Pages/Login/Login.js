import React from "react";
import "./Login.scss";
import email_png from "../../acssets/image/email.png";
import password_png from "../../acssets/image/password.png";
import google_png from "../../acssets/image/google.png";
import facebook_png from "../../acssets/image/facebook.png";
import PropTypes from "prop-types";

Login.propTypes = {};

function Login(props) {
  return (
    <div className="login">
      <div className="login__title">Đăng Nhập</div>
      <div className="login__form">
        <div className="login__form-group">
          <img src={google_png} className="login__form-group__icon" />
          <button className="btn btn-google">Continue With Google</button>
        </div>
        <div className="login__form-group">
          <img src={facebook_png} className="login__form-group__icon" />
          <button className="btn btn-facebook">Continue With Facebook</button>
        </div>
        <form>
          <div className="login__form-group">
            <img src={email_png} className="login__form-group__icon" />
            <input type="text" className="login__user" placeholder="Email" />
          </div>
          <div className="login__form-group">
            <img src={password_png} className="login__form-group__icon" />
            <input
              type="password"
              className="login__password"
              placeholder="Password"
            />
          </div>
          <div className="login__form-group">
            <button type="submit" className="btn btn-login">
              Login
            </button>
            <button type="reset" className="btn btn-reset">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
