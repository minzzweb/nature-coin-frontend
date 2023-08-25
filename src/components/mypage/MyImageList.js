import Image from "../common/Image";
import style from "../common/style";
import Box from "@mui/material/Box";
const MyImageList = ({ images, isLoading }) => {
  return (
    <Box sx={style.marginLayout}>
      <Image images={images} isLoading={isLoading} />
    </Box>
  );
};

export default MyImageList;
