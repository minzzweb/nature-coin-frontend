import { createAction, handleActions } from "redux-actions";
import { takeLatest, call, put } from "redux-saga/effects";
import { signIn, getMyInfo } from "../lib/api";
import client from "../lib/client";
import Cookies from "js-cookie";

//액션 타입
const SET_ACCESS_TOKEN = "auth/SET_ACCESS_TOKEN";
const LOGIN = "auth/LOGIN";
const LOGIN_FAILURE = "auth/LOGIN_FAILURE";
const SET_MY_INFO = "auth/SET_MY_INFO";
const CHECK_MY_INFO = "auth/CHECK_MY_INFO";

//액션 생성함수
export const setAccessToken = createAction(
  SET_ACCESS_TOKEN,
  (accessToken) => accessToken //accessToken받아옴
);
export const login = createAction(LOGIN, ({ email, password }) => ({
  email,
  password,
  //아이디, 비번 받아옴
}));

export const loginfailure = createAction(LOGIN_FAILURE, (e) => e);

//사용자정보 설정
export const setMyInfo = createAction(SET_MY_INFO, (myInfo) => myInfo);
//사용자정보 수신
export const checkMyInfo = createAction(CHECK_MY_INFO);

//비동기
function* loginSaga(action) {
  try {
    const { email, password } = action.payload;

    const response = yield call(signIn, email, password);

    const { authorization } = response.headers;
    const accessToken = authorization.substring(7);

    yield put(setAccessToken(accessToken));
    //로그인 후 모든 요청에 액세스 토큰을 포함시킴
    client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    //쿠키에 액세스토큰 저장
    Cookies.set("accessToken", accessToken, { expires: 1 });
  } catch (e) {
    yield put(loginfailure(e));
  }
}

//사용자 정보
function* checkMyInfoSaga() {
  try {
    const response = yield call(getMyInfo);

    yield put(setMyInfo(response.data));
  } catch (e) {
    console.log("??");
  }
}

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(CHECK_MY_INFO, checkMyInfoSaga);
}

//초기상태
const initialState = {
  accessToken: "",
  //로그인한 사용자 정보
  myInfo: null,
  error: null,
};

//리듀서
const auth = handleActions(
  {
    [SET_ACCESS_TOKEN]: (state, action) => ({
      ...state,
      accessToken: action.payload,
    }),
    [SET_MY_INFO]: (state, action) => ({
      ...state,
      myInfo: action.payload,
    }),
    [LOGIN_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState
);

export default auth;
