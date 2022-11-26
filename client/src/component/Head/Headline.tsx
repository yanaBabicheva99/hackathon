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
    <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
      >
        <Link style={linkStyle} to="/personalpage">Personal</Link>
      </Menu>
    </Header>
  </Layout>
);

export default Headline;