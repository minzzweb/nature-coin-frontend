// import { handleActions, createAction } from "redux-actions";
// import { takeLatest, call, put } from "redux-saga/effects";

// // 상품 사가 함수 작성
// export function* fetchImageSaga() {
//   yield takeLatest(FETCH_ITEM, fetchImageSaga);
// }

// // 초기 상태
// const initialState = {
//   image: null,
//   images: [],
//   error: null,
// };

// export const FETCH_ITEM = "item/FETCH_ITEM";
// export const FETCH_SUCCESS = "item/FETCH_SUCCESS";
// export const FETCH_FAILURE = "item/FETCH_FAILURE";

// export const fetchItem = createAction(FETCH_ITEM, (itemId) => itemId);

// const image = handleActions(
//   {
//     [FETCH_SUCCESS]: (state, action) => ({
//       ...state,
//       image: action.payload,
//     }),
//     [FETCH_FAILURE]: (state, action) => ({
//       ...state,
//       error: action.payload,
//     }),
//   },
//   initialState
// );

// export default image;
