import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "../Redux/configStore";
import { Provider } from "react-redux";
import HomePage from "./Containers/HomePage";
const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <Router>
        <HomePage />
      </Router>
    </Provider>
  );
}

export default App;
