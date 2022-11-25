import React from 'react';
import './main.css'
import { useGetUsersQuery } from '../../services/userService';
import {ExhibitionItem} from "./ExhibitionItem/ExhibitionItem";

const Main = () => {
  const {data, error, isLoading} = useGetUsersQuery();
  console.log('err', error);

  if (isLoading) {
    return <h2>Loading</h2>
  }
  console.log(data, error);

console.log('nerio')

  return (
    <div className={'main-wrapper'}>
      <ExhibitionItem />
    </div>
  );
};

export default Main;