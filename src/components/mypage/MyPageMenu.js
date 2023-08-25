import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const MyPageMenu = ({
  myImageList,
  userItemList,
  imageListAll,
  isAuthorized,
  isMember,
  isAdmin,
}) => {
  return (
    <>
      {isAuthorized && isMember && (
        <List sx={{ display: "flex", maxWidth: 1200, margin: "0px auto" }}>
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
        <List sx={{ display: "flex", maxWidth: 1200, margin: "0px auto" }}>
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
    </>
  );
};

export default MyPageMenu;
