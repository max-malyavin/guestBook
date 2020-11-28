import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { Provider } from "react-redux";

import "./index.css";
import App from "./components/App";
import theme from "./theme";
import store from "./store/store";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Provider store={store}>
        <Container maxWidth="md">
          <App />
        </Container>
      </Provider>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
