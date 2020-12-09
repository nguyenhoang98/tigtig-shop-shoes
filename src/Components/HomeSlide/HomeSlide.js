import React from "react";
import "./HomeSlide.scss";
import "../../slick/slick-theme.scss";
import "../../slick/slick.scss";
import PropTypes from "prop-types";
import Slider from "react-slick";
HomeSlide.propTypes = {};
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
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
                <button className="btn btn-shopping"> Mua Ngay </button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default HomeSlide;
