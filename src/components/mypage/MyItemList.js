import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Button from "@mui/material/Button";
import Typography from "@mui/joy/Typography";
import itemsData from "../../dummyData/itemsData";
import style from "../common/style";
import BasicPagination from "../common/BasicPagination";
const MyItemList = ({
  userItems,
  isLoading,
  count,
  currentPage,
  handlePageChange,
}) => {
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
    <Box sx={{ ...style.ItemListContainer, marginTop: "0px" }}>
      {isLoading && "로딩중..."}
      {!isLoading && userItems.length === 0 && (
        <Typography>구입한 상품이 없습니다!</Typography>
      )}
      {!isLoading && userItems && (
        <ImageList sx={style.IlImageList} cols={5} gap={1}>
          {combinedItems.map((item) => (
            <ImageListItem key={item.userItemNo} sx={{ marginBottom: "30px" }}>
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
              <Typography sx={style.MyItemListDate}>
                구매날짜 : {item.regDate}
              </Typography>
              <Button
                variant="contained"
                href="#contained-buttons"
                sx={style.MyItemListDlBtn}
              >
                다운로드
              </Button>
            </ImageListItem>
          ))}
        </ImageList>
      )}
      {count > 0 && ( // count가 0보다 큰 경우에만 BasicPagination 렌더링
        <BasicPagination
          count={count}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      )}
    </Box>
  );
};

export default MyItemList;
