import React, { useEffect } from "react";
import ImageRead from "../components/Image_board/ImageRead";
//import { useDispatch, useSelector } from "react-redux";
//import { fetchItem, FETCH_ITEM } from "../modules/imageboard";
import { useParams } from "react-router-dom";

const ImageReadContainer = () => {
  //const { imageId } = useParams();
  //const dispatch = useDispatch();

  //const { image, isLoading } = useSelector(({ image, loading }) => ({
  //  image: image.item,
  //  isLoading: loading[FETCH_ITEM],
  //}));

  //useEffect(() => {
  //  dispatch(fetchItem(imageId));
  //}, [dispatch, imageId]);

  //return <ImageRead imageId={imageId} image={image} isLoading={isLoading} />;
  return <ImageRead />;
};
export default ImageReadContainer;
