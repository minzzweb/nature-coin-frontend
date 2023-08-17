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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            justifyContent: "center", // Add this line to center horizontally and vertically
            margin: "200px 0px",
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

export default SignInForm;
