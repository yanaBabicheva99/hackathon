import React from 'react';
import './main.css'
import { useGetUsersQuery } from '../../services/userService';
import {ExhibitionItem} from "./ExhibitionItem/ExhibitionItem";
import {MenuOutlined} from "@ant-design/icons";
import {Card} from "antd";

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
      <Card title={'Главная страница'} extra={<MenuOutlined />} style={{width: '100%', height: '100vh'}}>
      <ExhibitionItem />
      </Card>
    </div>
  );
};

export default Main;