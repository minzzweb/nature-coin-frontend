import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/joy/Typography";
import Input from "@mui/joy/Input";
import cat from "../../assets/cat.png";
import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";
import Table from "@mui/joy/Table";

const ImageRead = ({ imageId, image, isLoading, categoryName, onRemove }) => {
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
                      src={cat}
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
            </tbody>
          </Table>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              component={Link}
              to={`/image/edit/${imageId}`}
              size="sm"
              sx={{
                backgroundColor: "#CDD7E1",
                height: "36px",
              }}
            >
              {/*글쓴자만 보이게!*/}
              편집
            </Button>
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
            <Button
              component={Link}
              to={"/image/list/" + categoryName}
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
