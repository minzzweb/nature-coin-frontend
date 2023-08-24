import Image from "../common/Image";

const MyImageList = ({ images, isLoading }) => {
  return <Image images={images} isLoading={isLoading} />;
};

export default MyImageList;
