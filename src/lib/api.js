import client from "./client";

//이미지 등록
export const registImageApi = (formData) =>
  client.post("/image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

//이미지 수정
export const modifyImageApi = (formData) =>
  client.put("/image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

//이미지 게시판 상세
export const fetchImageApi = (imageId) => client.get(`/image/${imageId}`);

//이미지 삭제
export const removeImageApi = (imageId) => client.delete(`/image/${imageId}`);

//이미지 카테고리별 목록
export const fetchItemListByCategoryApi = (categoryName) =>
  client.get(`/image/list/${categoryName}`);

//이미지 메인 목록
export const fetchItemListApi = () => client.get("/image");

//회원가입
export const signUp = (email, nickname, password) =>
  client.post("/users", { email, nickname, password });

//로그인
export const signIn = (email, password) =>
  client.post(`/api/authenticate?email=${email}&password=${password}`);

//최초 관리자 생성
export const adminSetup = (email, nickname, password) =>
  client.post("/users/setup", { email, nickname, password });

//로그인 정보
export const getMyInfo = () => client.get("/users/myinfo");

//회원 상세
export const fetchMemberApi = (userNo) => client.get(`/users/${userNo}`);

//회원수정
export const modifyMemberApi = (formData) =>
  client.put("/users", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

//회원 이미지 게시글 목록
export const fetchMyImageListApi = (nickname) =>
  client.get(`/image/mypage/list/myimage/${nickname}`);

//코인 적립
export const grantCoinsToUserApi = (imageId, imagewriter, amount) =>
  client.post("/coins", { imageId, imagewriter, amount });
