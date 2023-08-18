import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/joy/Typography";
import Table from "@mui/joy/Table";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/joy/Button";

const ImageModifyForm = ({
  imageId,
  image,
  categoryName,
  isLoading,
  onModify,
}) => {
  const [imageTitle, setImageTitle] = useState("");
  const [imageContent, setImageContent] = useState("");
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState("");
  const pictureUrl = () => {
    return (
      "/image/display?imageId=" + imageId + "&timestamp=" + new Date().getTime()
    );
  };
  const handleChangeImageTitle = useCallback((e) => {
    setImageTitle(e.target.value);
  }, []);

  const handleChangeImageContent = useCallback((e) => {
    setImageContent(e.target.value);
  }, []);

  const handleChangeFile = useCallback((e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(imageUrl);
    }
  }, []);

  //submit 처리
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      onModify(imageTitle, imageContent, file);
    },
    [onModify, imageTitle, imageContent, , file]
  );

  useEffect(() => {
    if (image) {
      setImageTitle(image.imageTitle);
      setImageContent(image.imageContent);

      if (image.picture) {
        setFile(image.picture);
        setPreviewUrl(pictureUrl()); // 이미지가 있는 경우 미리보기 설정
      }
    }
  }, [image]);
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
      <Typography
        level="h3"
        sx={{
          color: "#EA9A3E",
        }}
      >
        Register your photo and get coins!
      </Typography>
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
          <form onSubmit={handleSubmit}>
            <Table size="sm">
              <tbody>
                <tr>
                  <td style={{ width: "25%" }}>
                    <Input type="text" value={categoryName} readOnly />
                  </td>
                  <td style={{ width: "75%" }}>
                    <Input
                      variant="outlined"
                      type="text"
                      value={imageTitle}
                      onChange={handleChangeImageTitle}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <input type="file" onChange={handleChangeFile} />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
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
                        src={previewUrl || pictureUrl()}
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
                  <td colSpan="2" rows={5}>
                    <span>최대 200자</span>
                    <Textarea
                      rows="5"
                      value={imageContent}
                      onChange={handleChangeImageContent}
                      required
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
                type="submit"
                sx={{
                  backgroundColor: "#A1E8A1",
                  marginRight: "5px",
                }}
              >
                등록
              </Button>
              <Button
                component={Link}
                to="/"
                size="sm"
                sx={{
                  backgroundColor: "#CDD7E1",
                  height: "36px",
                }}
              >
                취소
              </Button>
            </Box>
          </form>
        </Box>
      )}
    </Box>
  );
};
export default ImageModifyForm;
