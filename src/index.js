import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./root/components/context/Context";
import { MantineProvider } from "@mantine/core";
// import { CartProvider } from "./root/components/context/CartContext";
// import store from "./utils/store";
// import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <MantineProvider>
          <App />
        </MantineProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
