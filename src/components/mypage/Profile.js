import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Profile = ({
  member,
  isLoading,
  myInfo,
  myImageList,
  userItemList,
  isAuthorized,
  isAdmin,
  isMember,
  imageListAll,
}) => {
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
                src={pictureUrl()}
                sx={{ bgcolor: red[500], width: "70px", height: "70px" }}
              />
            }
            title={member.nickname}
            subheader={member.email}
          />
          <Box
            sx={{
              position: "absolute",
              top: "10px",
              right: "20px",
            }}
          >
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
          {isAuthorized && isMember && (
            <List sx={{ display: "flex" }}>
              <ListItem disablePadding>
                <ListItemButton onClick={myImageList}>
                  <ListItemIcon>
                    <KeyboardArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="내 이미지 보기" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={userItemList}>
                  <ListItemIcon>
                    <KeyboardArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="내가 산 기프티콘 보기" />
                </ListItemButton>
              </ListItem>
            </List>
          )}
          {isAuthorized && isAdmin && (
            <List sx={{ display: "flex" }}>
              <ListItem disablePadding>
                <ListItemButton onClick={imageListAll}>
                  <ListItemIcon>
                    <KeyboardArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary="전체 이미지 게시글 보기" />
                </ListItemButton>
              </ListItem>
            </List>
          )}
        </Card>
      )}
    </Box>
  );
};
export default Profile;
