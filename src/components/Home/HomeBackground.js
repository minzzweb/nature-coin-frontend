import React from "react";
import homeBackground from "../../assets/homeBackground.mp4";
import { Box } from "@mui/material";
import Typography from "@mui/joy/Typography";
const HomeBackground = () => {
  return (
    <Box
      sx={{
        marginTop: "70px",
        width: "100%",
        height: "600px",
        position: "relative",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src={homeBackground} type="video/mp4" />
      </video>
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          top: "100px",
          left: "0%",
        }}
      >
        <Box
          sx={{
            width: "1200px",
            margin: "0 auto",
          }}
        >
          <Typography level="h1" sx={{ color: "#fff" }}>
            지구를 아름답게, 당신의 사진으로
          </Typography>
          <Typography level="h2" sx={{ color: "#fff", marginBottom: "120px" }}>
            Make the Earth beautiful with your photos.
          </Typography>
          <Typography level="h3" sx={{ color: "#fff" }}>
            사진 하나가 미래의 녹색을 만듭니다
          </Typography>
          <Typography level="h3" sx={{ color: "#fff" }}>
            One photo creates the future green.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeBackground;
