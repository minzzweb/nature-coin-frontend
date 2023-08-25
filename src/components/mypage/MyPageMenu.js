import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import style from "../common/style";

const MyPageMenu = ({
  myImageList,
  userItemList,
  imageListAll,
  isAuthorized,
  isMember,
  isAdmin,
  showImageList,
  showUserItemList,
}) => {
  return (
    <>
      {isAuthorized && isMember && (
        <List sx={style.MyPageMenuList}>
          <ListItem
            disablePadding
            sx={
              showImageList
                ? { background: "#A1E8A1", color: "#fff" }
                : { background: "#fff", color: "#000" }
            }
          >
            <ListItemButton onClick={myImageList}>
              <ListItemIcon>
                {showImageList ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowRightIcon />
                )}
              </ListItemIcon>
              <ListItemText primary="내 이미지 보기" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={
              showUserItemList
                ? { background: "#A1E8A1", color: "#fff" }
                : { background: "#fff", color: "#000" }
            }
          >
            <ListItemButton onClick={userItemList}>
              <ListItemIcon>
                {showUserItemList ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowRightIcon />
                )}
              </ListItemIcon>
              <ListItemText primary="내가 산 기프티콘 보기" />
            </ListItemButton>
          </ListItem>
        </List>
      )}
      {isAuthorized && isAdmin && (
        <List sx={style.MyPageMenuList}>
          <ListItem
            disablePadding
            sx={
              showImageList
                ? { background: "#A1E8A1", color: "#fff" }
                : { background: "#fff", color: "#000" }
            }
          >
            <ListItemButton onClick={imageListAll}>
              <ListItemIcon>
                {showImageList ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowRightIcon />
                )}
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
