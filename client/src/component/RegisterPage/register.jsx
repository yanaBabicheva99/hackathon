import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input, Button, Card, Radio, Checkbox } from "antd";
import { useSignUpMutation } from "../../services/authService";
import { createToken, getToken } from "../../services/tokenService";
import { useDispatch, useSelector } from "react-redux";
import "../LoginPage/login";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("invalid").required("is required"),
  password: Yup.string().required("is required"),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [signUp] = useSignUpMutation();
  const select = useSelector(getToken());

  const [isCompany, setIsCompany] = useState(false);
  const initialValues = {
    email: "",
    password: "",
    nameCompany: "",
  };

  const handleSubmit = async (content) => {
    console.log(content);
    signUp(content)
      .unwrap()
      .then((data) => dispatch(createToken(data)))
      .catch((err) => console.log(err));
  };

  // const {data, error, isLoading} = useGetUsersQuery();
  // console.log(data, error);

  return (
    <Layout>
      <Header>Header</Header>
      <div className="login__wrapper">
        <Card className="login__container">
          <h1>Быстрая регистрация</h1>
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
                  className="login__input"
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched.email}
                  errors={errors.email}
                  placeholder="email"
                />

                <Input
                  className="login__input"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched.password}
                  errors={errors.password}
                  placeholder="пароль"
                />
                <div>
                  <Checkbox
                    onChange={() => {
                      setIsCompany((prev) => !prev);
                    }}
                  >
                    Я представитель компании
                  </Checkbox>
                </div>
                {isCompany && (
                  <Input
                    className="login__input"
                    type="text"
                    name="password"
                    value={values.nameCompany}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.password}
                    errors={errors.password}
                    placeholder="Название компании"
                  />
                )}
                <Button type="primary" className="login__button">
                  Создать аккаунт
                </Button>
              </form>
            )}
          </Formik>
          <p>
            Есть аккаунт? <Link to="/login">Войти!</Link>
          </p>
        </Card>
      </div>
    </Layout>
  );
};

export default RegisterForm;
