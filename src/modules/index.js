//루트 사가
import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import image, { imageSaga } from "./imageboard";
import auth, { authSaga } from "./auth";
import loading from "./loading";

const rootReducer = combineReducers({
  image,
  loading,
  auth,
});

export function* rootSaga() {
  yield all([
    imageSaga(),
    authSaga(), // authSaga도 추가합니다.
  ]);
}

export default rootReducer;
