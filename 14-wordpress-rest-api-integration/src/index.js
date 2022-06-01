import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { LoginContextProvider } from "./store_context/auth-context";
import { store } from "./store_redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <LoginContextProvider>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </LoginContextProvider>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
