import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/header";
import Menu from "./Components/Menu/menu";
import Body from "./Components/Body/body";
import Footer from "./Components/Footer/footer";
import "./index.css";
import { FavoritoProvider } from "./Components/Context/favoritoContext";
import { CarritoProvider } from "./Components/Context/carritoContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CarritoProvider>
        <FavoritoProvider>
          <Header />
          <Menu />
          <Body />
          <Footer />
        </FavoritoProvider>
      </CarritoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
