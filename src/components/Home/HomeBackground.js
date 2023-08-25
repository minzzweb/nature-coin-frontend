import React from "react";
import homeBackground from "../../assets/homeBackground.mp4";
import { Box } from "@mui/material";
import Typography from "@mui/joy/Typography";
import style from "../common/style";
const HomeBackground = () => {
  return (
    <Box sx={style.HbgContainer}>
      <video autoPlay loop muted style={style.videoStyle}>
        <source src={homeBackground} type="video/mp4" />
      </video>
      <Box sx={style.HbgBox_2}>
        <Box sx={style.marginLayout}>
          <Typography level="h1" sx={style.HbgTextColor}>
            지구를 아름답게, 당신의 사진으로
          </Typography>
          <Typography
            level="h2"
            sx={{ ...style.HbgTextColor, marginBottom: "120px" }}
          >
            Make the Earth beautiful with your photos.
          </Typography>
          <Typography level="h3" sx={style.HbgTextColor}>
            사진 하나가 미래의 녹색을 만듭니다
          </Typography>
          <Typography level="h3" sx={style.HbgTextColor}>
            One photo creates the future green.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeBackground;
