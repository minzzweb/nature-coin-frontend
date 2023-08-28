import React, { useEffect, useState } from "react";
import Image from "../../components/common/Image";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchImageList, FETCH_IMAGE_LIST } from "../../modules/imageboard";
import { Box } from "@mui/material";
import style from "../../components/common/style";

const CategoryContainer = () => {
  const dispatch = useDispatch();
  const { category } = useParams();

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  const { images, categoryName, isLoading, count } = useSelector(
    ({ image, loading }) => ({
      images: image.images,
      categoryName: category,
      isLoading: loading[FETCH_IMAGE_LIST],
      count: image.count,
    })
  );

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [categoryName]);

  // 이미지 목록 호출
  useEffect(() => {
    dispatch(fetchImageList(categoryName, currentPage));
    console.log("currentPage?? " + currentPage);
  }, [dispatch, categoryName, currentPage]);

  return (
    <Box sx={style.marginLayout}>
      <Image
        images={images}
        categoryName={categoryName}
        isLoading={isLoading}
        count={count}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </Box>
  );
};

export default CategoryContainer;
