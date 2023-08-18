import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/material";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
const ProfileModifyForm = ({ userNo, member, isLoading, onModify }) => {
  const [nickname, setNickname] = useState("");
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState("");

  const pictureUrl = () => {
    return (
      "/users/display?userNo=" + userNo + "&timestamp=" + new Date().getTime()
    );
  };

  const handleChangeNickname = useCallback((e) => {
    setNickname(e.target.value);
  }, []);

  const handleChangeFile = useCallback((e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(imageUrl);
    }
  }, []);

  useEffect(() => {
    if (member) {
      setNickname(member.nickname);

      if (member.picture) {
        setFile(member.picture);
        setPreviewUrl(member.pictureUrl);
      }
    }
  }, [member]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      onModify(nickname, file);
    },
    [onModify, nickname, file]
  );

  return (
    <Box>
      {/* '로딩중...' 표시 */}
      {isLoading && "로딩중..."}
      {/* 상세보기 화면 표시 */}
      {!isLoading && member && (
        <Card
          sx={{
            maxWidth: 1200,
            margin: "120px auto 50px",
            position: "relative",
            boxShadow: "0",
            borderBottom: "1px solid #ddd",
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                src={previewUrl || pictureUrl()}
                sx={{ bgcolor: red[500], width: "70px", height: "70px" }}
              />
            }
            title={
              <form onSubmit={handleSubmit}>
                <Input
                  variant="outlined"
                  type="text"
                  value={nickname}
                  onChange={handleChangeNickname}
                  required
                  sx={{
                    width: "200px",
                  }}
                />
                <input type="file" onChange={handleChangeFile} />
                <Button type="submit">
                  <EditIcon />
                  <Typography>완료</Typography>
                </Button>
              </form>
            }
            subheader={
              <>
                {member.email}{" "}
                <span style={{ color: "red", fontSize: "12px" }}>
                  이메일은 변경할 수 없습니다.!
                </span>
              </>
            }
          />
          <Box
            sx={{
              position: "absolute",
              top: "10px",
              right: "20px",
            }}
          ></Box>
        </Card>
      )}
    </Box>
  );
};
export default ProfileModifyForm;
