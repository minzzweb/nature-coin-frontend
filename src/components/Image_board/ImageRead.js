import React from "react";
import { Link } from "react-router-dom";

const ImageRead = ({ imageId, image, isLoading }) => {
  // 이미지 표시 URL 생성
  const pictureUrl = () => {
    return (
      "/image/display?imageId=" + imageId + "&timestamp=" + new Date().getTime()
    );
  };
  return (
    <div align="center">
      <h2>상품 상세보기</h2>
      {/* '로딩중...' 표시 */}
      {isLoading && "로딩중..."}
      {/* 상세보기 화면 표시 */}
      {!isLoading && image && (
        <>
          <table>
            <tbody>
              <tr>
                <td>제목</td>
                <td>
                  {/* 상품아이디 표시 */}
                  <input type="text" value={image.imageTitle} readOnly />
                </td>
              </tr>

              <tr>
                <td>미리보기</td>
                <td>
                  {/* 이미지 표시 */}
                  <img src={pictureUrl()} alt="" width="200" />
                </td>
              </tr>
              <tr>
                <td>상품설명</td>
                <td>
                  {/* 상품설명 표시 */}
                  <textarea value={image.imageContent} readOnly></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          {/* 편집화면으로 이동 */}
          <Link to={`/edit/${imageId}`}>편집</Link>
          <button>삭제</button>
          <Link to="/">목록</Link>
        </>
      )}
    </div>
  );
};

export default ImageRead;
