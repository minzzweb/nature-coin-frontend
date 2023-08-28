import React, { useEffect, useState } from "react";
import Image from "../../components/common/Image";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchImageList, FETCH_IMAGE_LIST } from "../../modules/imageboard";
import { Box } from "@mui/material";
import style from "../../components/common/style";

const CategoryContainer = () => {
  const dispatch = useDispatch();
  const { category } = useParams();

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const urlPage = queryParams.get("page");
  const parsedUrlPage = parseInt(urlPage, 10);

  console.log("parsedUrlPage" + parsedUrlPage);

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

  //메뉴에서 카테고리 눌러서 바뀌면 첫번째로!
  useEffect(() => {
    setCurrentPage(1);
  }, [categoryName]);

  // 카테고리, currentPage 바뀔 때 이미지 목록 호출
  useEffect(() => {
    dispatch(fetchImageList(categoryName, currentPage));
  }, [dispatch, currentPage]);

  //parsedUrlPage 바뀔 때 parsedUrlPage값으로 목록 호출
  useEffect(() => {
    if (!isNaN(parsedUrlPage)) {
      setCurrentPage(parsedUrlPage);
      dispatch(fetchImageList(categoryName, currentPage));
    } else {
      setCurrentPage(1);
      dispatch(fetchImageList(categoryName, currentPage));
    }
  }, [categoryName, parsedUrlPage]);

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
