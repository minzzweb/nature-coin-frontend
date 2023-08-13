import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box } from "@mui/material";
import Typography from "@mui/joy/Typography";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer style={{ width: "100%", marginTop: "40px" }}>
      <Box
        sx={{
          width: "100%",
          padding: "20px 0px",
          borderTop: "1px solid #ddd",
          position: "absolute",
          bottom: "0px",
          left: "0px",
        }}
      >
        <Box
          sx={{
            width: "1200px",
            margin: "0 auto",
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: "50%",
              height: "100%",
            }}
          >
            <Box>
              <Typography level="body-md">
                대표 민즈 | 사업자번호 123-12-12345
              </Typography>
              <Typography level="body-md">
                주소 서울특별시 마포구 30길 5, 7층
              </Typography>
              <Typography level="body-md">
                전화 02-123-1212 | 고객문의 minzzweb@gmail.com
              </Typography>
              <Typography level="body-sm" mt={2}>
                이용약관 {""}
                <a href="https://www.privacy.go.kr/front/contents/cntntsView.do?contsNo=267">
                  개인정보처리방침
                </a>
              </Typography>
              <Typography level="body-sm">
                Copyright ⓒ 2023 NATURECOIN All rights reserved.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "50%",
              position: "relative",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                position: "absolute",
                width: "200px",
                top: "0px",
                right: "20px",
              }}
            >
              <Link to="/">
                <YouTubeIcon
                  sx={{
                    color: "#51BC51",
                  }}
                />
              </Link>
              <Link to="/">
                <FacebookIcon
                  sx={{
                    color: "#51BC51",
                  }}
                />
              </Link>
              <Link to="/">
                <InstagramIcon
                  sx={{
                    color: "#51BC51",
                  }}
                />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};
export default Footer;
