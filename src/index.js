import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import 'react-dates/lib/css/_datepicker.css';
import './index.css'
import { Provider } from "react-redux";
import App from "./App";
import WindowDimensionsProvider from "./components/WindowDimensionsProvider";
import "react-dates/initialize";
import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import DefaultTheme from "react-dates/lib/theme/DefaultTheme";
// import * as serviceWorker from './serviceWorker';
import configureStore, { history } from "./configureStore";
ThemedStyleSheet.registerTheme(DefaultTheme);

const store = configureStore();

const render = () => {
  ReactDOM.render(
        <Provider store={store}>
          <WindowDimensionsProvider>
          <App history={history} />
          </WindowDimensionsProvider>
        </Provider>,
    document.getElementById("root")
  );
};
render();
// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept("./App", () => {
    render();
  });
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
