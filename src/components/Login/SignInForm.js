import React, { useCallback } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, Button } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import Input from "@mui/joy/Input";
import { Typography } from "@mui/material";
import FormLabel from "@mui/joy/FormLabel";
import { ToastContainer } from "react-toastify";
import EmailIcon from "@mui/icons-material/Email";
import style from "../common/style.js";
import { Link } from "react-router-dom";

const SignInForm = ({ onSignIn }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("올바른 이메일 형식이 아닙니다")
      .required("이메일을 입력하세요"),
    password: Yup.string().required("패스워드를 입력하세요"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSignIn(values.email, values.password);
      }}
    >
      {({ values, handleSubmit, handleChange }) => (
        <Box sx={style.SignInFormContaniner}>
          <ToastContainer />
          <Typography variant="h4" gutterBottom sx={style.SignInFormTitle}>
            NATURE COIN
          </Typography>
          <form onSubmit={handleSubmit} autoComplete="off">
            <Box sx={style.SignInFormBox1}>
              {/*이메일*/}
              <Box>
                <Box sx={style.SignInFormEmailBox}>
                  <FormLabel sx={style.SignInFormFormLabel}>
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
                </Box>
                <Typography color="error">
                  <ErrorMessage name="email" />
                </Typography>
              </Box>
              {/*패스워드*/}
              <Box>
                <Box sx={style.SignInFormPwdBox}>
                  <FormLabel sx={style.SignInFormFormLabel}>
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
                </Box>
                <Typography color="error">
                  <ErrorMessage name="password" />
                </Typography>
              </Box>

              <Button type="submit" sx={style.SignInBtn}>
                Submit
              </Button>
              <Box sx={style.SignInAskBox}>
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

export default SignInForm;
