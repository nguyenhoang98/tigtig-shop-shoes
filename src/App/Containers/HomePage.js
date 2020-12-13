import React, { Fragment } from "react";
import PropTypes from "prop-types";
import NavBarContainers from "../../Containers/NavBarContainers";
import MenuContainers from "../../Containers/MenuContainers";
import { routers } from "../../routers";
import { Route, Switch, useLocation } from "react-router-dom";
import BgLoadingContainer from "../../Containers/BgLoadingContainer";
import MenuMobileContainers from "../../Containers/MenuMobileContainers";
import SearchMobileContainers from "../../Containers/SearchMobileContainers";
import Footer from "../../Components/Footer/Footer";

HomePage.propTypes = {};

function HomePage(props) {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div>
      <NavBarContainers />
      {pathname !== "/tigtig-shop-shoes/login" && <MenuContainers />}
      <Switch>
        {routers.map((value, index) => {
          return (
            <Route
              path={value.path}
              component={value.component}
              exact={value.exact}
              key={index}
            />
          );
        })}
      </Switch>
      <BgLoadingContainer />
      <MenuMobileContainers />
      <SearchMobileContainers />
      {pathname !== "/tigtig-shop-shoes/login" && <Footer />}
    </div>
  );
}

export default HomePage;
