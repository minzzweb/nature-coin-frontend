import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/joy/Typography";
import Input from "@mui/joy/Input";

const ImageRead = ({ imageId, image, isLoading, categoryName }) => {
  // 이미지 표시 URL 생성
  const pictureUrl = () => {
    return (
      "/image/display?imageId=" + imageId + "&timestamp=" + new Date().getTime()
    );
  };
  return (
    <Box
      sx={{
        width: "600px",
        margin: "0 auto",
        marginTop: "100px",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          color: "#EA9A3E",
        }}
      >
        유저 프로필 올 예정 <br />
      </Box>
      {/* '로딩중...' 표시 */}
      {isLoading && "로딩중..."}
      {/* 상세보기 화면 표시 */}
      {!isLoading && image && (
        <Box
          sx={{
            marginTop: "10px",
            padding: "10px",
            backgroundColor: "#F6FEF6",
            width: "100%",
          }}
        >
          <table>
            <tbody>
              <tr>
                <td>
                  <Input type="text" value={categoryName} />
                </td>
              </tr>
              <tr>
                <td>
                  <Input type="text" value={image.imageTitle} readOnly />
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
        </Box>
      )}
    </Box>
  );
};

export default ImageRead;
