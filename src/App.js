import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./App.sass";
import Content from "./components/Content";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WindowDimensionsProvider from "./components/WindowDimensionsProvider";
import items from "./data.json";
import "bulma/css/bulma.css";
import "./react_dates_overrides.css"
import { ConnectedRouter } from "connected-react-router";
import routes from "./routes";
import Routes from "./routes";

const App = ({ history }) => {
  return (
      <ConnectedRouter history={history}>
        <Routes></Routes>
      </ConnectedRouter>
  );
};

export default App;
