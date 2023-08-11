import React from "react";
import { Link } from "react-router-dom";

const ImageRead = ({ itemId, item, isLoading }) => {
  // 이미지 표시 URL 생성
  /*const pictureUrl = () => {
    return (
      "/items/display?itemId=" + itemId + "&timestamp=" + new Date().getTime()
    );
  };*/
  return (
    <div align="center">
      <h2>상품 상세보기</h2>
      {/* '로딩중...' 표시 */}
      {/*{isLoading && "로딩중..."}*/}
      {/* 상세보기 화면 표시 */}
      {/*{!isLoading && item && (*/}
      <>
        <table>
          <tbody>
            <tr>
              <td>상품번호</td>
              <td>
                {/* 상품아이디 표시 */}
                <input type="text" value="" readOnly />
              </td>
            </tr>
            <tr>
              <td>상품명</td>
              <td>
                {/* 상품명 표시 */}
                <input type="text" value="" readOnly />
              </td>
            </tr>
            <tr>
              <td>상품가격</td>
              <td>
                {/* 가격 표시 */}
                <input type="text" value="" readOnly /> 원
              </td>
            </tr>
            <tr>
              <td>미리보기</td>
              <td>
                {/* 이미지 표시 */}
                {/*<img src={pictureUrl()} alt="" width="200" />*/}
              </td>
            </tr>
            <tr>
              <td>상품설명</td>
              <td>
                {/* 상품설명 표시 */}
                <textarea value="" readOnly></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        {/* 편집화면으로 이동 */}
        <Link to={`/edit/${itemId}`}>편집</Link>
        <button>삭제</button>
        <Link to="/">목록</Link>
      </>
      {/*)}*/}
    </div>
  );
};

export default ImageRead;
