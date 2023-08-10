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

const ImageRegisterForm = ({ onRegister }) => {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState(0);
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleChangeItemName = useCallback((e) => {
    setItemName(e.target.value);
  }, []);
  const handleChangePrice = useCallback((e) => {
    setPrice(e.target.value);
  }, []);
  const handleChangeDescription = useCallback((e) => {
    setContent(e.target.value);
  }, []);
  const handleChangeFile = useCallback((e) => {
    console.log(e.target.files[0]);

    setFile(e.target.files[0]);
  }, []);

  //submit 처리
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      onRegister(itemName, price, content, file);
    },
    [onRegister, itemName, price, content, file]
  );

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
                {/* 이것두 핸들처리 */}
                <td style={{ width: "25%" }}>
                  <Select
                    name="category"
                    id="categoryId"
                    placeholder="Category"
                    size="sm"
                  >
                    <Option value="1">Transportation</Option>
                    <Option value="2">Cafe</Option>
                    <Option value="3">Bag</Option>
                    <Option value="4">Food</Option>
                  </Select>
                </td>
                <td style={{ width: "75%" }}>
                  <Input
                    variant="outlined"
                    type="text"
                    value={itemName}
                    onChange={handleChangeItemName}
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
                <td colSpan="2" rows={5}>
                  <span>최대 200자</span>
                  <Textarea
                    rows="5"
                    value={content}
                    onChange={handleChangeDescription}
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
    </Box>
  );
};
export default ImageRegisterForm;
