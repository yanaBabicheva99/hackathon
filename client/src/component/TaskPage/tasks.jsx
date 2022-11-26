import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { useCreateTestMutation, useGetTestsQuery } from '../../services/testService';

import { Button, Input } from 'antd';
import TaskForm from '../form/taskForm';



const Tasks = () => {
  const [createTest] = useCreateTestMutation();
  const {data, error, isLoading} = useGetTestsQuery();

  console.log(data,  'fkf')

  const handleSubmit = async (content) => {
    createTest(content)
      .unwrap()
      .then(content => console.log(content))
      .catch(err => console.log(err))
  }

  return (
    <div>
     <TaskForm handleSubmit={handleSubmit}/>
    </div>
  );
};

export default Tasks;