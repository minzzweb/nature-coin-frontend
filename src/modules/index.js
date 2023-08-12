//루트 사가
import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import image, { imageSaga } from "./imageboard";
import loading from "./loading";

const rootReducer = combineReducers({
  image,
  loading,
});

export function* rootSaga() {
  yield all([imageSaga()]);
}

export default rootReducer;
