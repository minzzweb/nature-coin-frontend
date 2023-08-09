import { handleActions } from "redux-actions";

// 상품 사가 함수 작성
export function* imageSaga() {}

// 초기 상태
const initialState = {
  image: null,
  images: [],
  error: null,
};

const image = handleActions({}, initialState);

export default image;
