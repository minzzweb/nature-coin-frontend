import axios from "axios";

//이미지 게시판 상세
export const fetchImageApi = (imageId) => axios.get(`/image/${imageId}`);

//이미지 삭제
export const removeImageApi = (imageId) => axios.delete(`/image/${imageId}`);

//이미지 목록
export const fetchItemListByCategoryApi = (categoryName) =>
  axios.get(`/image/list/${categoryName}`);
