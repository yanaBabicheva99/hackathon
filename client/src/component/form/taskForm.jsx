import React from 'react';
import { Formik } from 'formik';
import { Button, Input } from 'antd';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required("is required")
    .min(2, 'is too short!')
    .matches( /^\S*$/, 'incorrect'),
  description: Yup.string()
    .matches( /^\S*$/, 'incorrect')
    .min(10, 'is too short!')
});



const TaskForm = ({
                    initialValues = {
                      name: "",
                      description: "",
                    },
                    title='Создать задачу',
                    handleSubmit
                  }) => {
  return (
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
            {title}
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default TaskForm;