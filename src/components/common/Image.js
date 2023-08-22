import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";

const Image = ({ images, isLoading }) => {
  const pictureUrl = (imageId) => {
    return (
      "/image/display?imageId=" + imageId + "&timestamp=" + new Date().getTime()
    );
  };

  return (
    <Box
      sx={{
        width: 1200,
        margin: "0 auto",
      }}
    >
      {isLoading && "로딩중..."}
      {!isLoading && images && (
        <ImageList sx={{ width: 1200, overflow: "hidden" }}>
          <ImageListItem key="Subheader" cols={4}></ImageListItem>
          {images.map((image) => (
            <Link to={"/image/read/" + image.imageId} key={image.imageId}>
              <ImageListItem sx={{ height: 300, width: 300 }}>
                <img
                  src={`${pictureUrl(
                    image.imageId
                  )}?w=300&fit=crop&auto=format`}
                  srcSet={`${pictureUrl(
                    image.imageId
                  )}?w=300&fit=crop&auto=format&dpr=2 2x`}
                  alt={image.imageTitle}
                  loading="lazy"
                  style={{ height: "300px", width: "300px" }}
                />
                <ImageListItemBar
                  title={image.imageTitle}
                  subtitle={image.imageWriter}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${image.title}`}
                    ></IconButton>
                  }
                />
              </ImageListItem>
            </Link>
          ))}
        </ImageList>
      )}
    </Box>
  );
};

export default Image;
