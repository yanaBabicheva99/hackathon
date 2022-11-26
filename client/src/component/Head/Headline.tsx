import React from 'react';
import { Breadcrumb, Layout, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import './Headline.css';

const { Header } = Layout;
const linkStyle = {
  marginRight: '10px',
  textDecoration: "none",
  color: 'bisque'
};


const Headline: React.FC = () => (
  <Layout>
    <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', backgroundColor: "white", border: '1px solid whitesmoke' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        style={{backgroundColor: 'white', height: '95%'}}
      >
        
        <Link className={'linkStyle'} to="/">Главная страница</Link>
        <Link className={'linkStyle'} style={{marginLeft: '10px'}} to="/tasklists">Тесты</Link>
      </Menu>
    </Header>
  </Layout>
);

export default Headline;