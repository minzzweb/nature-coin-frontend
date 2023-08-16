import axios from "axios";

//이미지 게시판 상세
export const fetchImageApi = (imageId) => axios.get(`/image/${imageId}`);

//이미지 삭제
export const removeImageApi = (imageId) => axios.delete(`/image/${imageId}`);

//이미지 목록
export const fetchItemListByCategoryApi = (categoryName) =>
  axios.get(`/image/list/${categoryName}`);

//회원가입
export const signUp = (email, nickname, password) =>
  axios.post("/users", { email, nickname, password });

//로그인
export const signIn = (email, password) =>
  axios.post(`/api/authenticate?email=${email}&password=${password}`);
