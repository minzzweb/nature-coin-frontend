import React, { useEffect } from "react";
import HomePosts from "./HomePosts";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMainImageList,
  FETCH_MAINIMAGE_LIST,
} from "../../modules/imageboard";
import Typography from "@mui/joy/Typography";
const HomeSection = () => {
  const dispatch = useDispatch();

  const { images, isLoading } = useSelector(({ image, loading }) => ({
    images: image.images,
    isLoading: loading[FETCH_MAINIMAGE_LIST],
  }));

  useEffect(() => {
    dispatch(fetchMainImageList());
  }, [dispatch]);

  return (
    <>
      <Typography
        level="h2"
        sx={{
          color: "#EA9A3E",
          margin: "30px 0px",
        }}
      >
        Recent Images
      </Typography>
      <HomePosts images={images} isLoading={isLoading} />;
    </>
  );
};
export default HomeSection;
