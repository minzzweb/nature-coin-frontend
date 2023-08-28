import Image from "../common/Image";

const HomePosts = ({ images, isLoading, currentPage }) => {
  return (
    <Image images={images} isLoading={isLoading} currentPage={currentPage} />
  );
};
export default HomePosts;
