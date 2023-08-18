//루트 사가
import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import image, { imageSaga } from "./imageboard";
import auth, { authSaga } from "./auth";
import loading from "./loading";
import member, { memberSaga } from "./member";

const rootReducer = combineReducers({
  image,
  loading,
  auth,
  member,
});

export function* rootSaga() {
  yield all([imageSaga(), authSaga(), memberSaga()]);
}

export default rootReducer;
