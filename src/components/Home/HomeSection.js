import React, { useEffect } from "react";
import HomePosts from "./HomePosts";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMainImageList,
  FETCH_MAINIMAGE_LIST,
} from "../../modules/imageboard";

const HomeSection = () => {
  const dispatch = useDispatch();

  const { images, isLoading } = useSelector(({ image, loading }) => ({
    images: image.images,
    isLoading: loading[FETCH_MAINIMAGE_LIST],
  }));

  useEffect(() => {
    dispatch(fetchMainImageList());
  }, [dispatch]);

  return <HomePosts images={images} isLoading={isLoading} />;
};
export default HomeSection;
