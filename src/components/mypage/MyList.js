import Image from "../common/Image";

const MyList = ({ images, isLoading }) => {
  return <Image images={images} isLoading={isLoading} />;
};

export default MyList;
