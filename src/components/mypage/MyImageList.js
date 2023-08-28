import Image from "../common/Image";
import style from "../common/style";
import Box from "@mui/material/Box";
const MyImageList = ({
  images,
  isLoading,
  grantedImages,
  count,
  currentPage,
  handlePageChange,
}) => {
  return (
    <Box sx={style.marginLayout}>
      <Image
        images={images}
        isLoading={isLoading}
        grantedImages={grantedImages}
        count={count}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </Box>
  );
};

export default MyImageList;
