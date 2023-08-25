import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Button from "@mui/material/Button";
import Typography from "@mui/joy/Typography";
import style from "../common/style";

const ItemList = ({ itemsData, onBuy }) => {
  return (
    <Box sx={style.ItemListContainer}>
      <Typography level="h3" sx={style.ItemListTitle}>
        Buy gifticons with coins!
      </Typography>
      <ImageList sx={style.IlImageList} cols={5} gap={1}>
        {itemsData.map((item) => (
          <ImageListItem key={item.itemId} sx={{ marginBottom: "30px" }}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.itemName}
              loading="lazy"
              style={style.ItemListImg}
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
              sx={style.ItemListBtn}
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
