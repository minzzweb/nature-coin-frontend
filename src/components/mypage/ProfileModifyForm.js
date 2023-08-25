import React, { useState, useEffect, useCallback } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/material";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import style from "../common/style";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { FormControlLabel } from "@mui/material";

const ProfileModifyForm = ({ member, isLoading, onModify, myInfo }) => {
  const [nickname, setNickname] = useState("");
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState("");

  const pictureUrl = () => {
    return (
      "/users/display?email=" +
      myInfo.email +
      "&timestamp=" +
      new Date().getTime()
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
    <Box sx={{ minHeight: "50vh" }}>
      {/* '로딩중...' 표시 */}
      {isLoading && "로딩중..."}
      {/* 상세보기 화면 표시 */}
      {!isLoading && member && (
        <Card
          sx={{ ...style.ProfileCard, borderBottom: "none", height: "130px" }}
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
                <Box sx={{ display: "flex" }}>
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
                  <Box>
                    <Button
                      type="button"
                      // onClick={handleCheckDuplicate}
                      sx={style.PfmIdPwdBtn}
                    >
                      <Typography sx={style.PfmText}>확인</Typography>
                    </Button>
                  </Box>
                  {/* {isNicknameAvailable !== null && (
                    <Typography
                      sx={{ color: isNicknameAvailable ? "green" : "red" }}
                    >
                      {isNicknameAvailable
                        ? "사용 가능한 아이디입니다."
                        : "이미 사용 중인 아이디입니다."}
                    </Typography>
                  )} */}
                  <Box>
                    <Button
                      type="button"
                      // onClick={handleChangePassword}
                      sx={style.PfmIdPwdBtn}
                    >
                      <Typography
                        sx={{
                          ...style.PfmText,
                          color: "red",
                        }}
                      >
                        비빌번호 변경하기
                      </Typography>
                    </Button>
                  </Box>
                </Box>

                <label style={style.PfmLabel}>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleChangeFile}
                  />
                  <Box sx={style.PfmLabelBox}>
                    <CameraAltIcon />
                    <Typography sx={{ color: "#EA9A3E" }}>사진 변경</Typography>
                  </Box>
                </label>

                <Box sx={style.ProfileBox1}>
                  <Button type="submit" sx={style.PfmEditBtn}>
                    <Typography sx={style.PfmbtnText}>완료</Typography>
                  </Button>
                </Box>
              </form>
            }
            subheader={
              <>
                {member.email}{" "}
                <span style={style.PfmEmailText}>
                  이메일은 변경할 수 없습니다.!
                </span>
              </>
            }
          />
        </Card>
      )}
    </Box>
  );
};
export default ProfileModifyForm;
