import axios from "axios";

//이미지 게시판 등록 -> 비동기 처리

//이미지 게시판 상세
export const fetchItemApi = (itemId) => axios.get(`/items/${itemId}`);
