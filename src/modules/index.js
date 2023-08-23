//루트 사가
import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import image, { imageSaga } from "./imageboard";
import auth, { authSaga } from "./auth";
import loading from "./loading";
import member, { memberSaga } from "./member";
import coin, { coinSaga } from "./coin";

const rootReducer = combineReducers({
  image,
  loading,
  auth,
  member,
  coin,
});

export function* rootSaga() {
  yield all([imageSaga(), authSaga(), memberSaga(), coinSaga()]);
}

export default rootReducer;
