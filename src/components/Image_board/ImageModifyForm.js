import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/joy/Typography";
import Table from "@mui/joy/Table";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/joy/Button";
import style from "../common/style";

const ImageModifyForm = ({
  imageId,
  image,
  categoryName,
  isLoading,
  onModify,
  myInfo,
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

  // 게시글 소유자 확인
  let isOwn = false;
  if (myInfo && image) {
    if (myInfo.nickname === image.imageWriter) {
      isOwn = true;
    }
  }
  return (
    <Box sx={style.ImageBoardContainer}>
      <Typography level="h3" sx={style.ImageBoardTitle}>
        Register your photo and get coins!
      </Typography>
      {/* '로딩중...' 표시 */}
      {isLoading && "로딩중..."}
      {/* 상세보기 화면 표시 */}
      {!isLoading && image && (
        <Box sx={style.ImageBoardBox1}>
          <form onSubmit={handleSubmit}>
            <Table size="sm">
              <tbody>
                <tr>
                  <td style={style.ImageBoardtd1Width}>
                    <Input type="text" value={categoryName} readOnly />
                  </td>
                  <td style={style.ImageBoardtd2Width}>
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
                    <Box sx={style.ImageBoardBox2}>
                      <img
                        src={previewUrl || pictureUrl()}
                        alt=""
                        style={style.ImageBoardImg}
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
                      sx={style.ImageBoardTextarea}
                    ></Textarea>
                  </td>
                </tr>
                <tr>
                  <td>작성자</td>
                  <td>
                    <input type="text" value={image.imageWriter} disabled />
                  </td>
                </tr>
              </tbody>
            </Table>
            <Box sx={style.ImageBoardRegistBtn}>
              {isOwn && (
                <Button type="submit" sx={style.ImfRegistBtn}>
                  등록
                </Button>
              )}
              <Button
                component={Link}
                to="/"
                size="sm"
                sx={style.ImageBoardResetBtn}
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
