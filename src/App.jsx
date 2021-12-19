import logo from "./logo.svg";
import Header from "./components/Layout/Header.jsx";
import React, { Fragment } from "react";
import Meals from "./components/Meals/Meals.jsx";

function App() {
  return (
    <Fragment>
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;
