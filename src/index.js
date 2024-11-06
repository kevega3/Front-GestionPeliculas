import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/header";
import Menu from "./Components/Menu/menu";
import Body from "./Components/Body/body";
import Footer from "./Components/Footer/footer";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Menu />
      <Body />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
