import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/js/dist/modal";
// import "bootstrap/js/dist/tooltip";
// import "react-calendar/dist/Calendar.css";

import { Provider } from "react-redux";

import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import Login from "./pages/Login";
import MainRoutes from "./router/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <MainRoutes />
    </PersistGate>
  </Provider>
);
