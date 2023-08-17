import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer, { rootSaga } from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
//쿠키
import Cookies from "js-cookie";
import { setAccessToken, checkMyInfo } from "./modules/auth";
import client from "./lib/client";

const sagaMiddleware = createSagaMiddleware(); //리덕스 사가 미들웨어 생성

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

function loadUser() {
  try {
    const savedToken = Cookies.get("accessToken");

    if (!savedToken) return;

    store.dispatch(setAccessToken(savedToken));
    client.defaults.headers.common.Authorization = `Bearer ${savedToken}`;

    store.dispatch(checkMyInfo());
  } catch (e) {
    console.log(e);
  }
}

sagaMiddleware.run(rootSaga);

loadUser();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
