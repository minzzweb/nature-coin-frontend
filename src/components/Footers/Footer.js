import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box } from "@mui/material";
import Typography from "@mui/joy/Typography";
import { Link } from "react-router-dom";
import style from "../common/style";
const Footer = () => {
  return (
    <Box sx={style.FooterContainer}>
      <Box sx={style.FooterLeftBox1}>
        <Box sx={style.FooterLeftBox2}>
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
        <Box sx={style.FooterRightBox1}>
          <Box sx={style.FooterRightBox2}>
            <Link to="/">
              <YouTubeIcon sx={style.FooterIcon} />
            </Link>
            <Link to="/">
              <FacebookIcon sx={style.FooterIcon} />
            </Link>
            <Link to="/">
              <InstagramIcon sx={style.FooterIcon} />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
