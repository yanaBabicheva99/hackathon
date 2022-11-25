import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input, Button, Card } from "antd";
import { useSignInMutation } from "../../services/authService";
import { createToken, getToken } from "../../services/tokenService";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";
const SignupSchema = Yup.object().shape({
  email: Yup.string().email("invalid").required("is required"),
  password: Yup.string().required("is required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const [signIn] = useSignInMutation();
  const select = useSelector(getToken());

  console.log(select);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (content) => {
    console.log(content);
    signIn(content)
      .unwrap()
      .then((data) => dispatch(createToken(data)))
      .catch((err) => console.log(err));
  };

  // const {data, error, isLoading} = useGetUsersQuery();
  // console.log(data, error);

  return (
    <Card className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.email}
              errors={errors.email}
            />

            <Input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched.password}
              errors={errors.password}
            />

            <Button>Log in</Button>
          </form>
        )}
      </Formik>
      <p>
        Dont have account ?<Link to="/register"> Sign up</Link>
      </p>
      <Link to="/">К Главной</Link>
    </Card>
  );
};

export default LoginForm;
