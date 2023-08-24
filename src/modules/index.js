//루트 사가
import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import image, { imageSaga } from "./imageboard";
import auth, { authSaga } from "./auth";
import loading from "./loading";
import member, { memberSaga } from "./member";
import coin, { coinSaga } from "./coin";
import useritem, { userItemSaga } from "./useritem";

const rootReducer = combineReducers({
  image,
  loading,
  auth,
  member,
  coin,
  useritem,
});

export function* rootSaga() {
  yield all([
    imageSaga(),
    authSaga(),
    memberSaga(),
    coinSaga(),
    userItemSaga(),
  ]);
}

export default rootReducer;
