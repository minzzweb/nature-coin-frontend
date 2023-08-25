import React, { useEffect } from "react";
import Image from "../../components/common/Image";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchImageList, FETCH_IMAGE_LIST } from "../../modules/imageboard";
import { Box } from "@mui/material";
import style from "../../components/common/style";

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
    <Box sx={style.marginLayout}>
      <Image
        images={images}
        categoryName={categoryName}
        isLoading={isLoading}
      />
    </Box>
  );
};

export default CategoryContainer;
