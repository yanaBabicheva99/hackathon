import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { useCreateTestMutation, useGetTestsQuery } from '../../services/testService';

import { Button, Input } from 'antd';



const Tasks = () => {
  const [createTest] = useCreateTestMutation();
  const {data, error, isLoading} = useGetTestsQuery();

  console.log(data,  'fkf')

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .required("is required")
      .min(2, 'is too short!')
      .matches( /^\S*$/, 'incorrect'),
    description: Yup.string()
      .matches( /^\S*$/, 'incorrect')
      .min(10, 'is too short!')
  });

  const initialValues = {
    name: "",
    description: "",
  };

  const handleSubmit = async (content) => {
    createTest(content)
      .unwrap()
      .then(content => console.log(content))
      .catch(err => console.log(err))
  }

  return (
    <div>
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
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && <p>{errors.name}</p>}

            <Input
              className="login__input"
              type="text"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.description && touched.description && <p>{errors.description}</p>}

            <Button type="primary" htmlType='submit' className="login__button">
              Создать задачу
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Tasks;