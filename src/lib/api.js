import axios from "axios";
import client from "./client";
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
  client.post(`/api/authenticate?email=${email}&password=${password}`);

//최초 관리자 생성
export const adminSetup = (email, nickname, password) =>
  client.post("/users/setup", { email, nickname, password });

//로그인 정보
export const getMyInfo = () => client.get("/users/myinfo");
