import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("유효한 이메일 주소를 입력해주세요")
      .required("이메일을 입력하세요!"),
    nickname: Yup.string()
      .min(2, "닉네임은 최소 2글자 이상입니다!")
      .max(10, "닉네임은 최대 10글자입니다!")
      .matches(
        /^[가-힣a-zA-Z][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
        "닉네임에 특수문자가 포함되면 안되고 숫자로 시작하면 안됩니다!"
      )
      .required("닉네임을 입력하세요!"),
    password: Yup.string()
      .min(8, "비밀번호는 최소 8자리 이상입니다")
      .max(16, "비밀번호는 최대 16자리입니다!")
      .required("패스워드를 입력하세요!")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[^\s]*$/,
        "알파벳, 숫자, 공백을 제외한 특수문자를 모두 포함해야 합니다!"
      ),
    password2: Yup.string()
      .oneOf([Yup.ref("password"), null], "비밀번호가 일치하지 않습니다!")
      .required("필수 입력 값입니다!"),
  });
  const submit = async (values) => {
    const { email, nickname, password } = values;
    try {
      await axios.post("http://localhost:8080/api/members", {
        email,
        nickname,
        password,
      });
      toast.success(<h3>회원가입이 완료되었습니다.</h3>, {
        position: "top-center",
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (e) {
      // 서버에서 받은 에러 메시지 출력
      toast.error(e.response.data.message, {
        position: "top-center",
      });
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        nickname: "",
        password: "",
        password2: "",
      }}
      validationSchema={validationSchema}
      onSubmit={submit}
      validateOnMount={true}
    >
      {({ values, handleSubmit, handleChange, errors }) => (
        <main className="signup-wrapper">
          <ToastContainer />
          <header className="title-coco">
            START WITH.
            <span className="title-accent-coco"> COCO </span>
          </header>

          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="input-forms">
              {/*이메일*/}
              <div className="input-forms-item">
                <label className="input-label">&nbsp; EMAIL</label>
                <TextField
                  value={values.email}
                  name="email"
                  variant="outlined"
                  onChange={handleChange}
                />
                <div className="error-message">{errors.email}</div>
              </div>

              {/*닉네임*/}
              <div className="input-forms-item">
                <label className="input-label">&nbsp; NICKNAME</label>
                &nbsp;
                <TextField
                  value={values.nickname}
                  name="nickname"
                  variant="outlined"
                  onChange={handleChange}
                />
                <div className="error-message">{errors.nickname}</div>
              </div>

              {/*패스워드*/}
              <div className="input-forms-item">
                <label className="input-label">&nbsp; PASSWORD</label>
                <TextField
                  value={values.password}
                  name="password"
                  variant="outlined"
                  type="password"
                  onChange={handleChange}
                />
                <div className="error-message">{errors.password}</div>
              </div>

              {/*패스워드 체크*/}
              <div className="input-forms-item">
                <label className="input-label">
                  <div> PASSWORD VALIDATE </div>
                </label>
                <TextField
                  value={values.password2}
                  name="password2"
                  variant="outlined"
                  type="password"
                  onChange={handleChange}
                />
                <div className="error-message">{errors.password2}</div>
              </div>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                회원가입
              </Button>
            </div>
          </form>
        </main>
      )}
    </Formik>
  );
};

export default Signup;
