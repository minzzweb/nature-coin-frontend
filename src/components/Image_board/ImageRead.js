import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";
import Table from "@mui/joy/Table";
import axios from "axios";

const ImageRead = ({
  imageId,
  image,
  isLoading,
  categoryName,
  onRemove,
  myInfo,
  isMyPage,
  onGrantCoin,
}) => {
  // 이미지 표시 URL 생성
  const pictureUrl = () => {
    return (
      "/image/display?imageId=" + imageId + "&timestamp=" + new Date().getTime()
    );
  };

  const profilepictureUrl = () => {
    return (
      "/image/display/profile?imageWriter=" +
      image.imageWriter +
      "&timestamp=" +
      new Date().getTime()
    );
  };

  //게시글  소유자 확인
  let isOwn = false;
  if (myInfo && image) {
    if (myInfo.nickname === image.imageWriter) {
      isOwn = true;
    }
  }

  let isAdmin = false;
  if (myInfo && myInfo.authList[0].auth === "ROLE_ADMIN") {
    isAdmin = true;
  }

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
      ></Box>
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
          <Table>
            <tbody>
              <tr>
                <td>
                  <Box
                    sx={{
                      borderRadius: "50%",
                      border: "2px solid #A1E8A1",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={profilepictureUrl()}
                      style={{
                        width: "50px",
                        height: "50px",
                        display: "block",
                      }}
                    />
                  </Box>
                </td>
                <td colSpan={7}>
                  {image.imageWriter} {""} 의<b> {""}Photo</b>
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    color: "#EA9A3E",
                  }}
                >
                  {categoryName}{" "}
                </td>
                <td colSpan={6}> {image.imageTitle}</td>
              </tr>

              <tr>
                <td colSpan={8}>
                  <Box
                    sx={{
                      width: "300px",
                      height: "300px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      overflow: "hidden",
                      margin: "0 auto",
                    }}
                  >
                    <img
                      src={pictureUrl()}
                      alt=""
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </Box>
                </td>
              </tr>
              <tr>
                <td colSpan="8">
                  <Textarea
                    value={image.imageContent}
                    readOnly
                    sx={{
                      height: "200px",
                    }}
                  ></Textarea>
                </td>
              </tr>
              <tr>
                <td colSpan="8">{image.regDate} 에 작성되었습니다.</td>
              </tr>
            </tbody>
          </Table>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {isOwn && (
              <Button
                component={Link}
                to={`/image/edit/${imageId}`}
                size="sm"
                sx={{
                  backgroundColor: "#CDD7E1",
                  height: "36px",
                }}
              >
                편집
              </Button>
            )}
            {(isOwn || isAdmin) && (
              <Button
                onClick={onRemove}
                size="sm"
                sx={{
                  backgroundColor: "#CDD7E1",
                  height: "40px",
                  margin: "0px 3px",
                }}
              >
                {/*글쓴자만 보이게!*/}
                삭제
              </Button>
            )}
            {isAdmin && (
              <Button
                onClick={onGrantCoin}
                size="sm"
                sx={{
                  backgroundColor: "#A1E8A1",
                  height: "40px",
                  margin: "0px 3px",
                }}
              >
                {/*글쓴자만 보이게!*/}
                코인 적립
              </Button>
            )}
            <Button
              component={Link}
              to={
                isMyPage
                  ? `/member/mypage/${myInfo.userNo}`
                  : `/image/list/${categoryName}`
              }
              size="sm"
              sx={{
                backgroundColor: "#CDD7E1",
                height: "36px",
              }}
            >
              목록
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ImageRead;
