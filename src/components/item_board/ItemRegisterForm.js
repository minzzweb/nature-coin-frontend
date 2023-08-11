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

const ItemRegisterForm = ({ onRegister }) => {
  // const [itemTitle, setItemTitle] = useState("");
  // const [itemContent, setItemContent] = useState("");
  // const [file, setFile] = useState(null);

  // const handleChangeImageTitle = useCallback((e) => {
  //   setImageTitle(e.target.value);
  // }, []);

  // const handleChangeImageContent = useCallback((e) => {
  //   setImageContent(e.target.value);
  // }, []);

  // const handleChangeFile = useCallback((e) => {
  //   console.log(e.target.files[0]);
  //   setFile(e.target.files[0]);
  // }, []);

  // //submit 처리
  // const handleSubmit = useCallback(
  //   (e) => {
  //     e.preventDefault();

  //     onRegister(imageTitle, imageContent, categoryId, file);
  //   },
  //   [onRegister, imageTitle, imageContent, categoryId, file]
  // );

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
      {/* <Typography
        level="h3"
        sx={{
          color: "#EA9A3E",
        }}
      >
        Share your stuff with people!
      </Typography>
      <Typography
        level="h6"
        sx={{
          color: "#EA9A3E",
        }}
      >
        You can practice environmental protection through <br />
        second-hand trading.
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
                <td style={{ width: "75%" }} colSpan="2">
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
                  <input type="file" onChange={handleChangeFile} />
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
      </Box> */}
    </Box>
  );
};
export default ItemRegisterForm;
