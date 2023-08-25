import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import style from "../common/style";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SquareIcon from "@mui/icons-material/Square";
import Typography from "@mui/joy/Typography";
import ListSubheader from "@mui/material/ListSubheader";

const Image = ({ images, categoryName, isLoading }) => {
  const pictureUrl = (imageId) => {
    return (
      "/image/display?imageId=" + imageId + "&timestamp=" + new Date().getTime()
    );
  };

  const imageDate = (regDate) => {
    const formattedDate = regDate.replace(/-/g, "");
    return formattedDate;
  };

  return (
    <Box>
      {isLoading && "로딩중..."}
      {!isLoading && images && (
        <ImageList sx={style.ImageImageList}>
          <ImageListItem key="Subheader" cols={4}>
            {categoryName && (
              <ListSubheader component="div">
                <Typography
                  level="h3"
                  sx={{
                    color: "#EA9A3E",
                    marginBottom: "30px",
                  }}
                >
                  {categoryName}
                </Typography>
              </ListSubheader>
            )}
          </ImageListItem>

          {images.map((image) => (
            <Box style={{ width: "300px" }} key={image.imageId}>
              <Link to={"/image/read/" + image.imageId}>
                <ImageListItem sx={style.ImageImageListItem}>
                  <Box>
                    <SquareIcon sx={style.SquareIcon1} />
                    <SquareIcon sx={style.SquareIcon2} />
                    <SquareIcon sx={style.SquareIcon3} />
                    <PlayArrowIcon sx={style.PlayArrowIcon} />
                    <Typography sx={style.ImageDate}>
                      {imageDate(image.regDate)}
                    </Typography>
                  </Box>
                  <img
                    src={`${pictureUrl(
                      image.imageId
                    )}?w=300&fit=crop&auto=format`}
                    srcSet={`${pictureUrl(
                      image.imageId
                    )}?w=300&fit=crop&auto=format&dpr=2 2x`}
                    alt={image.imageTitle}
                    loading="lazy"
                    style={style.ImageImageListItem}
                  />

                  <ImageListItemBar
                    title={image.imageTitle}
                    subtitle={image.imageWriter}
                    actionIcon={
                      <IconButton
                        sx={style.ImageIconButton}
                        aria-label={`info about ${image.title}`}
                      ></IconButton>
                    }
                  />
                </ImageListItem>
              </Link>
            </Box>
          ))}
        </ImageList>
      )}
    </Box>
  );
};

export default Image;
