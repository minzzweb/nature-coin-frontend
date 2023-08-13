import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/joy/Typography";

const ImagePosts = ({ itemData, category }) => {
  return (
    <Box
      sx={{
        width: 1200,
        margin: "0 auto",
      }}
    >
      <ImageList sx={{ width: 1200, overflow: "hidden" }}>
        <ImageListItem key="Subheader" cols={4}>
          <Typography
            level="h3"
            sx={{
              color: "#EA9A3E",
              marginBottom: "30px",
            }}
          >
            {category}
          </Typography>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=300&fit=crop&auto=format`}
              srcSet={`${item.img}?w=300&fit=crop&auto=format&dpr=2 2x`}
              alt={item.imageTitle}
              loading="lazy"
              style={{ height: "300px", width: "300px" }}
            />
            <ImageListItemBar
              title={item.imageTitle}
              subtitle={item.imageWriter}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                ></IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
export default ImagePosts;
