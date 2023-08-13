import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Typography from "@mui/joy/Typography";
const Category = {
  Transportation: {
    title: "Transportation",
    subtitle:
      "자동차 대신 자전거 이용으로 환경보호에 일조하세요. 대중교통을 선택하며 온실가스 배출을 줄일 수 있습니다.",
  },
  Cafe: {
    title: "Cafe",
    subtitle:
      "카페에서 일회용 컵 사용 대신 텀블러를 사용해주세요. 작은 실천이지만 지속적인 환경보호에 기여할 수 있습니다.",
  },
  Bag: {
    title: "Bag",
    subtitle:
      "일회용 플라스틱 봉지 대신 지속 가능한 소재의 재사용 가능한 가방을 사용하여 환경을 지켜주세요.",
  },
  Food: {
    title: "Food",
    subtitle: "지구를 위한 건강한 식습관을 만들어보세요.",
  },
};

const ImageListContainer = () => {
  return (
    <Box
      sx={{
        width: 1200,
        margin: "0 auto",
        marginTop: "30px",
      }}
    >
      <Typography
        level="h3"
        sx={{
          color: "#EA9A3E",
        }}
      >
        Category
      </Typography>
      <List>
        {Object.entries(Category).map(([category, { title, subtitle }]) => (
          <ListItem key={category}>
            <Link
              to={`/image/list/${category}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                "&:hover": {
                  color: "inherit", // 클릭하지 않은 상태에서의 컬러 유지
                  textDecoration: "none", // 클릭하지 않은 상태에서의 밑줄 유지
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  borderLeft: "10px solid #A1E8A1",
                  paddingLeft: "25px",
                }}
              >
                <h2>{title}</h2>
                <p>{subtitle}</p>
              </Box>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ImageListContainer;
