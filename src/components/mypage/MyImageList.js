import Image from "../common/Image";
import style from "../common/style";
import Box from "@mui/material/Box";
const MyImageList = ({ images, isLoading, grantedImages }) => {
  return (
    <Box sx={style.marginLayout}>
      <Image
        images={images}
        isLoading={isLoading}
        grantedImages={grantedImages}
      />
    </Box>
  );
};

export default MyImageList;
