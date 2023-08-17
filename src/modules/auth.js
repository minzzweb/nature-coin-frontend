import { createAction, handleActions } from "redux-actions";
import { takeLatest, call, put } from "redux-saga/effects";
import { signIn } from "../lib/api";
import client from "../lib/client";

//액션 타입
const SET_ACCESS_TOKEN = "auth/SET_ACCESS_TOKEN";
const LOGIN = "auth/LOGIN";

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

//비동기
function* loginSaga(action) {
  //loginSaga(login)

  try {
    const { email, password } = action.payload;

    const response = yield call(signIn, email, password);

    const { authorization } = response.headers;
    const accessToken = authorization.substring(7);

    yield put(setAccessToken(accessToken));
    client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    //로그인 후 모든 요청에 액세스 토큰을 포함시킴
  } catch (e) {
    console.log(e);
  }
}
export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
}

//초기상태
const initialState = {
  accessToken: "",
};

//리듀서
const auth = handleActions(
  {
    [SET_ACCESS_TOKEN]: (state, action) => ({
      ...state,
      accessToken: action.payload,
    }),
  },
  initialState
);

export default auth;
