import * as React from "react";
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

const Profile = () => {
  return (
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
            sx={{ bgcolor: red[500], width: "70px", height: "70px" }}
          ></Avatar>
        }
        title="유저 닉네임"
        subheader="유저이메일"
      />
      <Box
        sx={{
          position: "absolute",
          top: "10px",
          right: "20px",
        }}
      >
        <IconButton>
          <EditIcon />
        </IconButton>
        Edit
      </Box>
      <List sx={{ display: "flex" }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <KeyboardArrowRightIcon />
            </ListItemIcon>
            <ListItemText primary="내 이미지 보기" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <KeyboardArrowRightIcon />
            </ListItemIcon>
            <ListItemText primary="내가 산 기프티콘 보기" />
          </ListItemButton>
        </ListItem>
      </List>
    </Card>
  );
};
export default Profile;
