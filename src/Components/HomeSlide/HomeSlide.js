import React from "react";
import "./HomeSlide.scss";
import "../../slick/slick-theme.scss";
import "../../slick/slick.scss";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link } from "react-router-dom";
HomeSlide.propTypes = {};
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};
function HomeSlide(props) {
  const { homeSlide } = props;
  return (
    <div className="homeslide">
      <Slider {...settings}>
        {homeSlide.map((value, index) => {
          return (
            <div className="homeslide__item b-radius" key={index}>
              <img
                src={value.src}
                className="homeslide__item__image"
                alt="image slide"
              />
              <div className="homeslide__item__text">
                <h2>{value.title} </h2>
                <Link
                  to={value.link}
                  className="btn btn-shopping"
                  style={{
                    display: "inline-block",
                  }}
                >
                  {" "}
                  Mua Ngay{" "}
                </Link>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default HomeSlide;
