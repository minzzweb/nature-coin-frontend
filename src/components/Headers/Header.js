import React, { useState } from "react";
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

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <Box component="nav" aria-label="My site" sx={style.BoxStyle}>
      <Box sx={style.BoxContainer}>
        <List role="menubar" orientation="horizontal">
          <Box sx={style.BoxLeft}>
            <ListItem role="none">
              <ListItemButton
                role="menuitem"
                component="a"
                href="#horizontal-list"
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
              sx={{
                position: "relative",
                height: "100%",
              }}
            >
              <ListItemButton
                role="menuitem"
                component="a"
                href="#horizontal-list"
                sx={{
                  ...style.btnStyle,
                  color: isDropdownOpen ? "#000" : "#fff",
                }}
              >
                Album
              </ListItemButton>
              {isDropdownOpen && (
                <List aria-labelledby="basic-list-demo" sx={style.menuStyle}>
                  <ListItem>
                    <ListItemButton>Transportation</ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>Cafe</ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>Bag</ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>Food</ListItemButton>
                  </ListItem>
                </List>
              )}
            </ListItem>
            <ListItem role="none">
              <ListItemButton
                role="menuitem"
                component="a"
                href="#horizontal-list"
                sx={style.btnStyle}
              >
                Shop
              </ListItemButton>
            </ListItem>
          </Box>

          <Box sx={style.BoxRight}>
            {/* 로그아웃 시 안보이게 할것 */}
            {/* 
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
                5000
              </ListItemButton>
            </ListItem>
           <Dropdown>
              <MenuButton
                slots={{ root: IconButton }}
                slotProps={{ root: { variant: "outlined", color: "neutral" } }}
                sx={style.myBtn}
              >
                <MoreVert />
              </MenuButton>
              <Menu placement="bottom-end">
                <MenuItem>
                  <ListItemDecorator>
                    <Edit />
                  </ListItemDecorator>{" "}
                  Get Coin
                </MenuItem>
                <MenuItem>
                  <ListItemDecorator>
                    <PersonIcon />
                  </ListItemDecorator>{" "}
                  My page
                </MenuItem>
                <MenuItem>
                  <ListItemDecorator>
                    <LogoutIcon />
                  </ListItemDecorator>{" "}
                  Log out
                </MenuItem>
              </Menu>
            </Dropdown> */}
            <ListItem role="none">
              <ListItemButton
                role="menuitem"
                component="a"
                href="#horizontal-list"
                sx={style.btnStyle}
              >
                Log in
              </ListItemButton>
            </ListItem>
            <ListItem role="none">
              <ListItemButton
                role="menuitem"
                component="a"
                href="#horizontal-list"
                sx={style.btnStyle}
              >
                Sign up
              </ListItemButton>
            </ListItem>
          </Box>
        </List>
      </Box>
    </Box>
  );
}
