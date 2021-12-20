import logo from "./logo.svg";
import Header from "./components/Layout/Header.jsx";
import React, { useState, Fragment } from "react";
import Meals from "./components/Meals/Meals.jsx";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = React.useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </Fragment>
  );
}

export default App;
