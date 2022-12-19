import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import { StoreProvider } from "easy-peasy";
import App from "./App";
import "./index.css";
import store from "./state/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </Router>
  </React.StrictMode>
);
