import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Input from "@mui/joy/Input";
import FormLabel from "@mui/joy/FormLabel";
import { Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import style from "../common/style.js";

const SignUpForm = ({ onSignUp }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("유효한 이메일 주소를 입력해주세요")
      .required("이메일을 입력하세요."),
    nickname: Yup.string()
      .min(2, "닉네임은 최소 2글자 이상")
      .max(10, "닉네임은 최대 10글자")
      .matches(
        /^[가-힣a-zA-Z][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
        "닉네임에는 특수문자나 숫자가 포함될 수 없습니다."
      )
      .required("닉네임을 입력하세요."),
    password: Yup.string()
      .min(8, "비밀번호는 최소 8자리 이상")
      .max(16, "비밀번호는 최대 16자.")
      .required("패스워드를 입력하세요.")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[^\s]*$/,
        "알파벳, 숫자, 공백을 제외한 특수문자를 모두 포함해야 합니다."
      ),
    password2: Yup.string()
      .oneOf([Yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
      .required("필수 입력 값입니다."),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        nickname: "",
        password: "",
        password2: "",
      }}
      validationSchema={validationSchema}
      onSubmit={onSignUp}
      validateOnMount={true}
    >
      {({ values, handleSubmit, handleChange, errors }) => (
        <Box sx={style.SetupContainer}>
          <ToastContainer />
          <Typography variant="h4" gutterBottom sx={style.SetupTitle}>
            NATURE COIN
          </Typography>
          <Button component={Link} to="/member/setup" sx={style.SufAdminBtn}>
            최초관리자 등록
          </Button>
          <form onSubmit={handleSubmit} autoComplete="off">
            <Box sx={style.SetupBox1}>
              {/*이메일*/}
              <Box sx={style.SetupBox2}>
                <FormLabel sx={style.SetupFormLabel}>
                  <EmailIcon sx={{ color: "#51BC51" }} />
                  &nbsp;EMAIL
                </FormLabel>
                <Input
                  value={values.email}
                  name="email"
                  variant="outlined"
                  onChange={handleChange}
                  placeholder="email"
                  sx={{ width: "380px" }}
                />
              </Box>
              <Typography color="error">{errors.email}</Typography>

              {/*닉네임*/}
              <Box sx={style.SetupBox2}>
                <FormLabel sx={style.SetupFormLabel}>
                  <EmailIcon sx={{ color: "#51BC51" }} />
                  &nbsp; NICKNAME
                </FormLabel>
                &nbsp;
                <Input
                  value={values.nickname}
                  name="nickname"
                  variant="outlined"
                  onChange={handleChange}
                  placeholder="nickname"
                  sx={{ width: "380px" }}
                />
              </Box>
              <Typography color="error">{errors.nickname}</Typography>

              {/*패스워드*/}
              <Box sx={style.SetupBox2}>
                <FormLabel sx={style.SetupFormLabel}>
                  <EmailIcon sx={{ color: "#51BC51" }} />
                  &nbsp; PASSWORD
                </FormLabel>
                <Input
                  value={values.password}
                  name="password"
                  variant="outlined"
                  type="password"
                  onChange={handleChange}
                  placeholder="password"
                  sx={{ width: "380px" }}
                />
              </Box>
              <Typography color="error">{errors.password}</Typography>

              {/*패스워드 체크*/}
              <Box sx={style.SetupBox2}>
                <FormLabel sx={style.SetupFormLabel}>
                  <EmailIcon sx={{ color: "#51BC51" }} />
                  &nbsp; PASSWORD <br />
                  &nbsp; VALIDATE
                </FormLabel>
                <Input
                  value={values.password2}
                  name="password2"
                  variant="outlined"
                  type="password"
                  onChange={handleChange}
                  placeholder="password validate"
                  sx={{ width: "380px" }}
                />
              </Box>
              <Typography color="error">{errors.password2}</Typography>
              <Button fullWidth type="submit" sx={style.SignupBtn}>
                회원가입
              </Button>
            </Box>
          </form>
        </Box>
      )}
    </Formik>
  );
};

export default SignUpForm;
