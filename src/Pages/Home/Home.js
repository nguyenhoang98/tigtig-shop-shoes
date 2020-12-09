import React from "react";
import "./Home.scss";
import PropTypes from "prop-types";
import HomeSlideContainers from "../../Containers/HomeSlideContainers";
import FlashSales from "../../Components/FlashSales/FlashSales";
import MostPopular from "../../Components/MostPopular/MostPopular";
import YouMayLike from "../../Components/YouMayLike/YouMayLike";
import ShoesNike from "../../Components/ShoesNike/ShoesNike";
import ShoesAdidas from "../../Components/ShoesAdidas/ShoesAdidas";
Home.propTypes = {};

function Home(props) {
  const { homeProducts, onAddProductToCart } = props;
  const fashSalesData = homeProducts.filter((value) => {
    return value.caption === "FLASH_SALES";
  });
  const mostPopularData = homeProducts.filter((value) => {
    return value.caption === "MOST_POPULAR";
  });
  const youMayLikeData = homeProducts.filter((value) => {
    return value.caption === "YOU_MAY_LIKE";
  });
  const nike = homeProducts.filter((value) => {
    return value.trademark === "nike";
  });
  const adidas = homeProducts.filter((value) => {
    return value.trademark === "adidas";
  });
  return (
    <div className="home">
      <HomeSlideContainers />
      <FlashSales
        fashSalesData={fashSalesData}
        onAddProductToCart={onAddProductToCart}
      />
      <MostPopular
        mostPopularData={mostPopularData}
        onAddProductToCart={onAddProductToCart}
      />
      <YouMayLike
        youMayLikeData={youMayLikeData}
        onAddProductToCart={onAddProductToCart}
      />
      <ShoesNike nike={nike} onAddProductToCart={onAddProductToCart} />
      <ShoesAdidas adidas={adidas} onAddProductToCart={onAddProductToCart} />
    </div>
  );
}

export default Home;
