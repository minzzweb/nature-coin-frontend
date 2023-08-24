import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Button from "@mui/material/Button";
import Typography from "@mui/joy/Typography";
import itemsData from "../item_board/itemsData";
import useritem from "../../modules/useritem";

const MyItemList = ({ userItems, isLoading }) => {
  const combinedItems = userItems.map((userItem) => {
    const matchingItem = itemsData.find(
      (item) => item.itemId === userItem.itemId
    );
    return {
      ...userItem,
      ...matchingItem,
    };
  });

  console.log(combinedItems);
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
        {combinedItems.map((item) => (
          <ImageListItem key={item.userItemNo} sx={{ marginBottom: "30px" }}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.itemName}
              loading="lazy"
              style={{
                objectFit: "cover",
                border: "1px solid #A1E8A1",
                borderRadius: "15px",
                width: "180px",
                height: "180px",
              }}
            />
            <ImageListItemBar
              title={item.itemName}
              subtitle={<span>coin: {item.price}</span>}
              position="below"
            />
            <Typography
              sx={{
                fontSize: "14px",
                color: "#EA9A3E",
                paddingBottom: "10px",
              }}
            >
              구매날짜 : {item.regDate}
            </Typography>
            <Button
              variant="contained"
              href="#contained-buttons"
              sx={{
                backgroundColor: "#A1E8A1",
                width: "90px",
              }}
            >
              다운로드
            </Button>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default MyItemList;
