import React from 'react';
import { useGetUsersQuery } from '../services/userService';

const Main = () => {
  const {data, error, isLoading} = useGetUsersQuery();
  console.log('err', error);



  if (isLoading) {
    return <h2>Loading</h2>
  }
  console.log(data, error);

console.log('nerio')

  return (
    <div>
      main
    </div>
  );
};

export default Main;