import { handleActions, createAction } from "redux-actions";
import { takeLatest, call, put } from "redux-saga/effects";
//서버 api
import {
  fetchImageApi,
  fetchItemListByCategoryApi,
  fetchItemListApi,
  fetchMyImageListApi,
} from "../lib/api";
//로딩
import { startLoading, endLoading } from "../modules/loading";

//액션타입
export const FETCH_SUCCESS = "image/FETCH_SUCCESS";
export const FETCH_FAILURE = "image/FETCH_FAILURE";
export const FETCH_LIST_SUCCESS = "image/FETCH_LIST_SUCCESS";
export const FETCH_LIST_FAILURE = "image/FETCH_LIST_FAILURE";
export const FETCH_MAIN_LIST_SUCCESS = "image/FETCH_MAIN_LIST_SUCCESS";
export const FETCH_MAIN_LIST_FAILURE = "image/FETCH_MAIN_LIST_FAILURE";
export const FETCH_MYIMAGELIST_SUCCESS = "image/FETCH_MYIMAGELIST_SUCCESS";
export const FETCH_MYIMAGELIST_FAILURE = "image/FETCH_MYIMAGELIST_FAILURE";

export const FETCH_IMAGE = "image/FETCH_IMAGE";
export const FETCH_IMAGE_LIST = "image/FETCH_IMAGE_LIST";
export const FETCH_MAINIMAGE_LIST = "image/FETCH_MAINIMAGE_LIST";
export const FETCH_MYIMAGE_LIST = "image/FETCH_MYIMAGE_LIST";

//액션 생성함수
//이미지게시판 상세------------------------------------------------------------
export const fetchSuccess = createAction(
  FETCH_SUCCESS,
  (image, categoryName) => ({ image, categoryName })
);
export const fetchFailure = createAction(FETCH_FAILURE, (e) => e);

//이미지게시판 목록------------------------------------------------------------
export const fetchListSuccess = createAction(
  FETCH_LIST_SUCCESS,
  (images, totalPageCount) => ({ images, totalPageCount })
);
export const fetchListFailure = createAction(FETCH_LIST_FAILURE, (e) => e);

//메인 목록-----------------------------------------------------------------
export const fetchMainListSuccess = createAction(
  FETCH_MAIN_LIST_SUCCESS,
  (images, totalPageCount) => ({ images, totalPageCount })
);
export const fetchMainListFailure = createAction(
  FETCH_MAIN_LIST_FAILURE,
  (e) => e
);

//마이페이지 목록------------------------------------------------------------
export const fetchMyImageListSuccess = createAction(
  FETCH_MYIMAGELIST_SUCCESS,
  (images, totalPageCount) => ({ images, totalPageCount })
);

export const fetchMyImageLisFailure = createAction(
  FETCH_MYIMAGELIST_FAILURE,
  (e) => e
);

//==============================================================
export const fetchImage = createAction(FETCH_IMAGE, (imageId) => imageId);
export const fetchImageList = createAction(
  FETCH_IMAGE_LIST,
  (categoryName, currentPage) => ({
    categoryName,
    currentPage,
  })
);
export const fetchMainImageList = createAction(
  FETCH_MAINIMAGE_LIST,
  (currentPage) => currentPage
);
export const fetchMyImageList = createAction(
  FETCH_MYIMAGE_LIST,
  (imageWriter, currentPage) => ({ imageWriter, currentPage })
);

//상세 조회 테스크 작성
function* fetchImageSaga(action) {
  yield put(startLoading(FETCH_IMAGE));

  try {
    const response = yield call(fetchImageApi, action.payload);

    yield put(fetchSuccess(response.data.image, response.data.categoryName));
  } catch (e) {
    yield put(fetchFailure(e));
  }
  yield put(endLoading(FETCH_IMAGE));
}

//이미지 게시판 목록 조회 테스크
function* fetchImageListSaga(action) {
  yield put(startLoading(FETCH_IMAGE_LIST));
  try {
    const { categoryName, currentPage } = action.payload;

    const response = yield call(
      fetchItemListByCategoryApi,
      categoryName,
      currentPage
    );
    yield put(
      fetchListSuccess(response.data.page.content, response.data.totalPageCount)
    );
  } catch (e) {
    yield put(fetchListFailure(e));
  }
  yield put(endLoading(FETCH_IMAGE_LIST));
}

//메인 목록
function* fetchMainImageListSaga(action) {
  yield put(startLoading(FETCH_MAINIMAGE_LIST));
  try {
    const response = yield call(fetchItemListApi, action.payload);

    yield put(
      fetchMainListSuccess(
        response.data.page.content,
        response.data.totalPageCount
      )
    );
  } catch (e) {
    yield put(fetchMainListFailure(e));
  }
  yield put(endLoading(FETCH_MAINIMAGE_LIST));
}

//마이페이지 목록
function* fetchMyImageListSaga(action) {
  yield put(startLoading(FETCH_MYIMAGE_LIST));
  try {
    const { imageWriter, currentPage } = action.payload;
    const response = yield call(fetchMyImageListApi, imageWriter, currentPage);
    yield put(
      fetchMyImageListSuccess(
        response.data.page.content,
        response.data.totalPageCount
      )
    );
  } catch (e) {
    yield put(fetchMyImageLisFailure(e));
  }
  yield put(endLoading(FETCH_MYIMAGE_LIST));
}

export function* imageSaga() {
  yield takeLatest(FETCH_IMAGE, fetchImageSaga);
  yield takeLatest(FETCH_IMAGE_LIST, fetchImageListSaga);
  yield takeLatest(FETCH_MAINIMAGE_LIST, fetchMainImageListSaga);
  yield takeLatest(FETCH_MYIMAGE_LIST, fetchMyImageListSaga);
}

// 초기 상태
const initialState = {
  image: null,
  images: [],
  error: null,
  categoryName: null,
  count: 0,
};

const image = handleActions(
  {
    //상세 조회 상태 변경
    [FETCH_SUCCESS]: (state, action) => ({
      ...state,
      image: action.payload.image,
      categoryName: action.payload.categoryName,
    }),
    [FETCH_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [FETCH_LIST_SUCCESS]: (state, action) => ({
      ...state,
      images: action.payload.images,
      count: action.payload.totalPageCount,
    }),
    [FETCH_LIST_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [FETCH_MAIN_LIST_SUCCESS]: (state, action) => ({
      ...state,
      images: action.payload.images,
      count: action.payload.totalPageCount,
    }),
    [FETCH_MAIN_LIST_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [FETCH_MYIMAGELIST_SUCCESS]: (state, action) => ({
      ...state,
      images: action.payload.images,
      count: action.payload.totalPageCount,
    }),
    [FETCH_MYIMAGELIST_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState
);

export default image;
