import { Link } from "react-router-dom";

//더미 데이터
const BlogPosts = {
  Transportation: {
    title: "Transportation",
    description: "Lorem ipsum dolor sit amet, consectetur adip.",
  },
  Cafe: {
    title: "Cafe",
    description: "Hello React Router v6",
  },
  Bag: {
    title: "Bag",
    description: "Lorem ipsum dolor sit amet, consectetur adip.",
  },
  Food: {
    title: "Food",
    description: "Hello React Router v6",
  },
};

const ImageListContainer = () => {
  return (
    <ul>
      {Object.entries(BlogPosts).map(([category, { title }]) => (
        <li key={category}>
          <Link to={`/image/list/${category}`}>
            <h3>{title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default ImageListContainer;
