import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import Typography from "@mui/joy/Typography";

const ItemList = ({ itemsData, onBuy }) => {
  return (
    <Box
      sx={{
        width: 1200,
        overflowY: "hidden",
        overflowX: "hidden",
        margin: "0 auto",
        marginTop: "100px",
        padding: "20px",
      }}
    >
      <Typography
        level="h3"
        sx={{
          color: "#EA9A3E",
        }}
      >
        Buy gifticons with coins!
      </Typography>
      <ImageList sx={{ width: "1160px", overflow: "hidden" }} cols={5} gap={1}>
        {itemsData.map((item) => (
          <ImageListItem key={item.itemId} sx={{ marginBottom: "30px" }}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.itemName}
              loading="lazy"
              style={{
                objectFit: "cover", //
                border: "1px solid #A1E8A1",
                borderRadius: "15px",
                width: "180px", // 이미지의 가로 크기 조절
                height: "180px",
              }}
            />
            <ImageListItemBar
              title={item.itemName}
              subtitle={<span>coin: {item.price}</span>}
              position="below"
            />
            <Button
              variant="contained"
              href="#contained-buttons"
              onClick={() => onBuy(item.itemId, item.itemName, item.price)}
              sx={{
                backgroundColor: "#A1E8A1",
                width: "90px",
              }}
            >
              구입하기
            </Button>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
export default ItemList;
