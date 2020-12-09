import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import router from "./routers";
import configureStore from "./Redux/configStore";
import { Provider } from "react-redux";
import Footer from "./Components/Footer/Footer";
import BgLoadingContainer from "./Containers/BgLoadingContainer";
import MenuContainers from "./Containers/MenuContainers";
import NavBarContainers from "./Containers/NavBarContainers";
import MenuMobileContainers from "./Containers/MenuMobileContainers";
import SearchMobileContainers from "./Containers/SearchMobileContainers";
const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBarContainers />
        <MenuContainers />
        <Switch>
          {router.map((value, index) => {
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
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
