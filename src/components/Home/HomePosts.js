import Image from "../common/Image";
import Typography from "@mui/joy/Typography";
const HomePosts = ({ images, isLoading }) => {
  return <Image images={images} isLoading={isLoading} />;
};
export default HomePosts;
