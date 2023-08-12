import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImage, FETCH_IMAGE } from "../modules/imageboard";
import ImageRead from "../components/Image_board/ImageRead";
import { useParams } from "react-router-dom";

const ImageReadContainer = () => {
  const { imageId } = useParams();
  const dispatch = useDispatch();

  const { image, categoryName, isLoading } = useSelector(
    ({ image, loading }) => ({
      image: image.image,
      categoryName: image.categoryName,
      isLoading: loading[FETCH_IMAGE],
    })
  );

  useEffect(() => {
    dispatch(fetchImage(imageId));
  }, [dispatch, imageId]);

  return (
    <ImageRead
      imageId={imageId}
      image={image}
      isLoading={isLoading}
      categoryName={categoryName}
    />
  );
};
export default ImageReadContainer;
