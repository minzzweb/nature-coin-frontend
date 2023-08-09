import axios from "axios";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/reducers/AuthReducer.js";
import { useCookies } from "react-cookie";
import Input from "@mui/joy/Input";
import FormLabel from "@mui/joy/FormLabel";
import { Typography } from "@mui/material";
import style from "../common/style.js";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import { Link } from "react-router-dom";

const Login = () => {
  // const [cookie, setCookie] = useCookies([]);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const validationSchema = Yup.object().shape({
  //   email: Yup.string()
  //     .email("올바른 이메일 형식이 아닙니다")
  //     .required("이메일을 입력하세요"),
  //   password: Yup.string().required("패스워드를 입력하세요"),
  // });
  // const submit = async (values) => {
  //   // const {email, password} = values;
  //   const formData = new FormData();
  //   formData.append("email", values.email);
  //   formData.append("password", values.password);
  //   try {
  //     const { data } = await axios.post(
  //       "http://localhost:8080/login",
  //       formData
  //     );
  //     // dispatch(setToken(data.token));
  //     dispatch({ type: "TOKEN", data: data.accessToken });
  //     dispatch({ type: "MEMBERID", data: data.email });
  //     console.log(data.accessToken);
  //     console.log(data.email);

  //     const expires = new Date();
  //     expires.setDate(expires.getDate() + 1);
  //     setCookie("refreshToken", data.refreshToken, {
  //       url: "/",
  //       expires,
  //     });

  //     toast.success(<h3>로그인 성공</h3>, {
  //       position: "top-center",
  //       autoClose: 2000,
  //     });
  //     document.location.href = "/";
  //   } catch (e) {
  //     // 서버에서 받은 에러 메시지 출력
  //     toast.error("비밀번호를 다시 확인해주세요" + "😭", {
  //       position: "top-center",
  //     });
  //   }
  // };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      // validationSchema={validationSchema}
      // onSubmit={submit}
    >
      {({ values, handleSubmit, handleChange }) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            justifyContent: "center", // Add this line to center horizontally and vertically
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <ToastContainer />

          <Typography variant="h4" gutterBottom sx={{ color: "#1F7A1F" }}>
            NATURE COIN
          </Typography>

          <form onSubmit={handleSubmit} autoComplete="off">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "400px",
              }}
            >
              {/*이메일*/}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <FormLabel
                  sx={{
                    width: "100px",
                    fontWeight: "bold",
                    paddingRight: "20px",
                  }}
                >
                  <EmailIcon sx={{ color: "#51BC51" }} />
                  EMAIL
                </FormLabel>
                <Input
                  value={values.email}
                  name="email"
                  variant="outlined"
                  onChange={handleChange}
                  placeholder="email"
                  sx={{ width: "300px" }}
                />
                <Typography color="error">
                  <ErrorMessage name="email" />
                </Typography>
              </Box>
              {/*패스워드*/}
              <Box
                sx={{
                  margin: "30px 0px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <FormLabel
                  sx={{
                    width: "100px",
                    fontWeight: "bold",
                    paddingRight: "20px",
                  }}
                >
                  <KeyIcon sx={{ color: "#51BC51" }} />
                  &nbsp;Password
                </FormLabel>
                <Input
                  value={values.password}
                  name="password"
                  variant="outlined"
                  type="password"
                  onChange={handleChange}
                  placeholder="password"
                  sx={{ width: "300px" }}
                />
                <Typography color="error">
                  <ErrorMessage name="password" />
                </Typography>
              </Box>
              <Button type="submit" sx={style.loginBtn}>
                Submit
              </Button>
              <Box sx={{ textAlign: "center", marginTop: "4px" }}>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  회원이 아니십니까?
                </Link>
              </Box>
            </Box>
          </form>
        </Box>
      )}
    </Formik>
  );
};

export default Login;
