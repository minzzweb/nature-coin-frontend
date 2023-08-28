import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";
import Table from "@mui/joy/Table";
import style from "../common/style";

const ImageRead = ({
  imageId,
  image,
  isLoading,
  categoryName,
  onRemove,
  myInfo,
  isMypage,
  onGrantCoin,
  grantedImage,
  currentPage,
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

  console.log("read currentPage" + currentPage);
  return (
    <Box sx={style.ImageBoardContainer}>
      <Box sx={style.ImageBoardTitle}></Box>
      {/* '로딩중...' 표시 */}
      {isLoading && "로딩중..."}
      {/* 상세보기 화면 표시 */}
      {!isLoading && image && (
        <Box sx={style.ImageBoardBox1}>
          <Table>
            <tbody>
              <tr>
                <td>
                  <Box sx={style.ImageReadBox1}>
                    <img
                      src={profilepictureUrl()}
                      style={style.ImageReadProfileImg}
                    />
                  </Box>
                </td>
                <td colSpan={7}>
                  {image.imageWriter} {""} 의<b> {""}Photo</b>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={style.categoryColor}>
                  {categoryName}{" "}
                </td>
                <td colSpan={6}> {image.imageTitle}</td>
              </tr>

              <tr>
                <td colSpan={8}>
                  <Box sx={style.ImageBoardBox2}>
                    <img
                      src={pictureUrl()}
                      alt=""
                      style={style.ImageBoardImg}
                    />
                  </Box>
                </td>
              </tr>
              <tr>
                <td colSpan="8">
                  <Textarea
                    value={image.imageContent}
                    readOnly
                    sx={style.ImageBoardTextarea}
                  ></Textarea>
                </td>
              </tr>
              <tr>
                <td colSpan="8">{image.regDate} 에 작성되었습니다.</td>
              </tr>
            </tbody>
          </Table>

          <Box sx={style.ImageBoardBox}>
            {isOwn && (
              <Button
                component={Link}
                to={`/image/edit/${imageId}`}
                size="sm"
                sx={
                  grantedImage
                    ? {
                        ...style.ImageRemoveBtn,
                        pointerEvents: "none",
                        opacity: 0.5,
                      }
                    : style.ImageEditBtn
                }
              >
                편집
              </Button>
            )}

            {(isOwn || isAdmin) && (
              <Button
                onClick={onRemove}
                size="sm"
                sx={
                  grantedImage
                    ? {
                        ...style.ImageRemoveBtn,
                        pointerEvents: "none",
                        opacity: 0.5,
                      }
                    : style.ImageRemoveBtn
                }
              >
                {/*글쓴자만 보이게!*/}
                삭제
              </Button>
            )}

            {isAdmin && (
              <Button
                onClick={onGrantCoin}
                size="sm"
                sx={
                  grantedImage
                    ? {
                        ...style.ImageCoinBtn,
                        pointerEvents: "none",
                        opacity: 0.5,
                      }
                    : style.ImageCoinBtn
                }
              >
                코인 적립
              </Button>
            )}
            <Button
              component={Link}
              to={
                isMypage
                  ? `/member/mypage/${myInfo.userNo}?page=${currentPage}`
                  : `/image/list/${categoryName}?page=${currentPage}`
              }
              size="sm"
              sx={style.ImageListBtn}
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
