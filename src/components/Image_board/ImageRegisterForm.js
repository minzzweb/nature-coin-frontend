import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/joy/Typography";
import Table from "@mui/joy/Table";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/joy/Button";
import style from "../common/style";

const ImageRegisterForm = ({ onRegister }) => {
  const categories = {
    1: "Transportation",
    2: "Cafe",
    3: "Bag",
    4: "Food",
  };
  const [categoryId, setCategoryId] = useState("");
  const [imageTitle, setImageTitle] = useState("");
  const [imageContent, setImageContent] = useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleChangeCategory = (e, newValue) => {
    setCategoryId(newValue);
  };

  const handleChangeImageTitle = useCallback((e) => {
    setImageTitle(e.target.value);
  }, []);

  const handleChangeImageContent = useCallback((e) => {
    const inputContent = e.target.value;
    if (inputContent.length <= 200) {
      setImageContent(inputContent);
    }
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

      onRegister(imageTitle, imageContent, categoryId, file);
    },
    [onRegister, imageTitle, imageContent, categoryId, file]
  );

  return (
    <Box sx={style.ImageBoardContainer}>
      <Typography level="h3" sx={style.ImageBoardTitle}>
        Register your photo and get coins!
      </Typography>
      <Box sx={style.ImageBoardBox1}>
        <form onSubmit={handleSubmit}>
          <Table size="sm">
            <tbody>
              <tr>
                <td style={style.ImageBoardtd1Width}>
                  <Select
                    name="categoryId"
                    id="categoryId"
                    size="sm"
                    onChange={handleChangeCategory}
                    placeholder="Category"
                  >
                    {Object.keys(categories).map((key) => (
                      <Option key={key} value={key}>
                        {categories[key]}
                      </Option>
                    ))}
                  </Select>
                </td>
                <td style={style.ImageBoardtd2Width}>
                  <Input
                    variant="outlined"
                    type="text"
                    value={imageTitle}
                    onChange={handleChangeImageTitle}
                    placeholder="제목을 입력해주세요"
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
                    <img src={previewUrl} alt="" style={style.ImageBoardImg} />
                  </Box>
                </td>
              </tr>
              <tr>
                <td colSpan="2" rows={5}>
                  <span>{imageContent.length}/200 글자</span>
                  <Textarea
                    rows="5"
                    value={imageContent}
                    onChange={handleChangeImageContent}
                    required
                    sx={style.ImageBoardTextarea}
                  ></Textarea>
                </td>
              </tr>
            </tbody>
          </Table>
          <Box sx={style.ImageBoardBox}>
            <Button type="submit" sx={style.ImageBoardRegistBtn}>
              등록
            </Button>
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
    </Box>
  );
};
export default ImageRegisterForm;
