import { handleActions, createAction } from "redux-actions";
import { takeLatest, call, put } from "redux-saga/effects";
//서버 api
import { fetchImageApi } from "../lib/api";
//로딩
import { startLoading, endLoading } from "../modules/loading";

//액션타입
export const FETCH_SUCCESS = "image/FETCH_SUCCESS";
export const FETCH_FAILURE = "image/FETCH_FAILURE";

//상세 조회 액션 타입
export const FETCH_IMAGE = "image/FETCH_IMAGE";

//액션 생성함수
export const fetchSuccess = createAction(FETCH_SUCCESS, (data) => data);
export const fetchFailure = createAction(FETCH_FAILURE, (e) => e);

//상세 조회 액션 생성함수
export const fetchImage = createAction(FETCH_IMAGE, (imageId) => imageId);

//상품 상세 조회 테스크 작성
function* fetchImageSaga(action) {
  yield put(startLoading(FETCH_IMAGE));

  try {
    const response = yield call(fetchImageApi, action.payload);

    yield put(fetchSuccess(response.data));
  } catch (e) {
    yield put(fetchFailure(e));
  }
  yield put(endLoading(FETCH_IMAGE));
}

export function* imageSaga() {
  // 상세 조회 태스크 수행
  yield takeLatest(FETCH_IMAGE, fetchImageSaga);
}

// 초기 상태
const initialState = {
  image: null,
  images: [],
  error: null,
};

const image = handleActions(
  {
    //상세 조회 상태 변경
    [FETCH_SUCCESS]: (state, action) => ({
      ...state,
      image: action.payload,
    }),
    [FETCH_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState
);

export default image;
