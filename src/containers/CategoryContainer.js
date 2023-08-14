import React, { useEffect } from "react";
import ImagePosts from "../components/Image_board/ImagePosts";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import loading from "../modules/loading";
import { fetchImageList, FETCH_IMAGE_LIST } from "../modules/imageboard";

const CategoryContainer = () => {
  const { category } = useParams();

  const dispatch = useDispatch();

  const { images, categoryName, isLoading } = useSelector(
    ({ image, loading }) => ({
      images: image.images,
      categoryName: category,
      isLoading: loading[FETCH_IMAGE_LIST],
    })
  );

  useEffect(() => {
    dispatch(fetchImageList(categoryName));
  }, [dispatch, categoryName]);

  return (
    <ImagePosts
      images={images}
      categoryName={categoryName}
      isLoading={isLoading}
    />
  );
};

export default CategoryContainer;
