import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import style from "./common/style";
const NotFound = () => {
  return (
    <Box sx={{ ...style.marginLayout, marginTop: "120px", minHeight: "50vh" }}>
      <Typography variant="h4" component="h4">
        404: Page Not Found
      </Typography>
      <Typography variant="h5" component="h5">
        Oops! It seems like you've reached a page that doesn't exist.
      </Typography>
    </Box>
  );
};
export default NotFound;
