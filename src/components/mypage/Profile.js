import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/material";
import style from "../common/style";

const Profile = ({ member, isLoading, myInfo }) => {
  const pictureUrl = () => {
    return (
      "/users/display?email=" +
      myInfo.email +
      "&timestamp=" +
      new Date().getTime()
    );
  };

  return (
    <Box>
      {/* '로딩중...' 표시 */}
      {isLoading && "로딩중..."}
      {/* 상세보기 화면 표시 */}
      {!isLoading && member && (
        <Card sx={style.ProfileCard}>
          <CardHeader
            avatar={
              <Avatar
                src={pictureUrl()}
                sx={{ bgcolor: red[500], ...style.ProfileAvatar }}
              />
            }
            title={member.nickname}
            subheader={member.email}
          />
          <Box sx={style.ProfileBox1}>
            <Link
              to={`/member/mypage/edit/${member.userNo}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <IconButton>
                <EditIcon />
              </IconButton>
              Edit
            </Link>
          </Box>
        </Card>
      )}
    </Box>
  );
};
export default Profile;
