import ImagePosts from "../components/Image_board/ImagePosts";
import { useParams } from "react-router-dom";

//더미 데이터
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    imageTitle: "Breakfast",
    imageWriter: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    imageTitle: "Burger",
    imageWriter: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    imageTitle: "Camera",
    imageWriter: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    imageTitle: "Coffee",
    imageWriter: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    imageTitle: "Hats",
    imageWriter: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    imageTitle: "Honey",
    imageWriter: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    imageTitle: "Basketball",
    imageWriter: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    imageTitle: "Fern",
    imageWriter: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    imageTitle: "Mushrooms",
    imageWriter: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    imageTitle: "Tomato basil",
    imageWriter: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    imageTitle: "Sea star",
    imageWriter: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    imageTitle: "Bike",
    imageWriter: "@southside_customs",
  },
];

const CategoryContainer = () => {
  const { category } = useParams();
  return <ImagePosts itemData={itemData} category={category} />;
};

export default CategoryContainer;
