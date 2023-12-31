import React, { useEffect, useState } from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import style from "../common/style";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import MoreVert from "@mui/icons-material/MoreVert";
import Edit from "@mui/icons-material/Edit";
import MenuButton from "@mui/joy/MenuButton";
import Dropdown from "@mui/joy/Dropdown";
import IconButton from "@mui/joy/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

export default function Header({
  myInfo,
  isAuthorized,
  onLogout,
  isAdmin,
  isMember,
  userCoin,
}) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };
  const handleGetCoinClick = () => {
    navigate("/image/create");
  };
  const handleShareClick = () => {
    navigate("/item/create");
  };

  const handleMypageClick = () => {
    navigate(`/member/mypage/${myInfo.userNo}`);
  };

  return (
    <Box component="nav" aria-label="My site" sx={style.BoxStyle}>
      <Box sx={style.BoxContainer}>
        <List role="menubar" orientation="horizontal">
          <Box sx={style.BoxLeft}>
            <ListItem role="none">
              <ListItemButton
                role="menuitem"
                component={Link}
                to="/"
                aria-label="Home"
                sx={{ ...style.btnStyle, color: "#000" }}
              >
                NatureCoin
              </ListItemButton>
            </ListItem>
            <ListItem
              role="none"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              sx={style.HeaderListItem}
            >
              <ListItemButton
                role="menuitem"
                component={Link}
                to="/image/list"
                sx={{
                  ...style.btnStyle,
                  color: isDropdownOpen ? "#000" : "#fff",
                }}
              >
                Album
              </ListItemButton>
              {isDropdownOpen && (
                <List
                  aria-labelledby="basic-list-demo"
                  sx={{ ...style.menuStyle }}
                >
                  <ListItem>
                    <ListItemButton
                      component={Link}
                      to="/image/list/Transportation"
                    >
                      Transportation
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton component={Link} to="/image/list/Cafe">
                      Cafe
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton component={Link} to="/image/list/Bag">
                      Bag
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton component={Link} to="/image/list/Food">
                      Food
                    </ListItemButton>
                  </ListItem>
                </List>
              )}
            </ListItem>
            <ListItem role="none">
              <ListItemButton
                role="menuitem"
                component={Link}
                to="/items"
                sx={style.btnStyle}
              >
                Shop
              </ListItemButton>
            </ListItem>
          </Box>

          <Box sx={style.BoxRight}>
            {/* 로그아웃 시 안보이게 할것 */}
            {isAuthorized && isMember && myInfo !== null && (
              <ListItem role="none">
                <ListItemButton
                  role="menuitem"
                  component="a"
                  href="#horizontal-list"
                  sx={{ ...style.coinStyle }}
                >
                  <ListItemDecorator>
                    <AttachMoneyIcon />
                  </ListItemDecorator>{" "}
                  <Typography>{userCoin}</Typography>
                </ListItemButton>
              </ListItem>
            )}
            {isAuthorized && isMember && (
              <Dropdown>
                <MenuButton
                  slots={{ root: IconButton }}
                  slotProps={{
                    root: { variant: "outlined", color: "neutral" },
                  }}
                  sx={style.myBtn}
                >
                  <MoreVert />
                </MenuButton>
                <Menu placement="bottom-end">
                  <MenuItem onClick={handleGetCoinClick}>
                    <ListItemDecorator>
                      <Edit />
                    </ListItemDecorator>{" "}
                    Get Coin
                  </MenuItem>
                  <MenuItem onClick={handleMypageClick}>
                    <ListItemDecorator>
                      <PersonIcon />
                    </ListItemDecorator>{" "}
                    My page
                  </MenuItem>
                  <MenuItem onClick={onLogout}>
                    <ListItemDecorator>
                      <LogoutIcon />
                    </ListItemDecorator>{" "}
                    Log out
                  </MenuItem>
                </Menu>
              </Dropdown>
            )}
            {isAuthorized && isAdmin && (
              <Dropdown>
                <MenuButton
                  slots={{ root: IconButton }}
                  slotProps={{
                    root: { variant: "outlined", color: "neutral" },
                  }}
                  sx={style.myBtn}
                >
                  <MoreVert />
                </MenuButton>
                <Menu placement="bottom-end">
                  <MenuItem onClick={handleMypageClick}>
                    <ListItemDecorator>
                      <PersonIcon />
                    </ListItemDecorator>{" "}
                    게시글 관리
                  </MenuItem>
                  <MenuItem onClick={onLogout}>
                    <ListItemDecorator>
                      <LogoutIcon />
                    </ListItemDecorator>{" "}
                    Log out
                  </MenuItem>
                </Menu>
              </Dropdown>
            )}

            {!isAuthorized && !myInfo && (
              <ListItem role="none">
                <ListItemButton
                  role="menuitem"
                  component={Link}
                  to="/signin"
                  sx={style.btnStyle}
                >
                  Log in
                </ListItemButton>
              </ListItem>
            )}
            {!isAuthorized && !myInfo && (
              <ListItem role="none">
                <ListItemButton
                  role="menuitem"
                  component={Link}
                  to="/signUp"
                  sx={style.btnStyle}
                >
                  Sign up
                </ListItemButton>
              </ListItem>
            )}
          </Box>
        </List>
      </Box>
    </Box>
  );
}
