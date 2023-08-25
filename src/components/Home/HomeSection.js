import React, { useEffect } from "react";
import HomePosts from "./HomePosts";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMainImageList,
  FETCH_MAINIMAGE_LIST,
} from "../../modules/imageboard";
import Typography from "@mui/joy/Typography";
import { Box } from "@mui/material";
import style from "../common/style";

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
    <Box sx={style.marginLayout}>
      <Typography level="h2" sx={{ color: "#EA9A3E" }}>
        Recent Images
      </Typography>
      <HomePosts images={images} isLoading={isLoading} />
    </Box>
  );
};
export default HomeSection;
