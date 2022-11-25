import React from 'react';
import './personal.css';
import { Breadcrumb, Layout, Menu, Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const Personal: React.FC = () => (
  <Layout>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 32 }}>
      <div className="site-layout-background" style={{ padding: 0, minHeight: 380 }}>
      <Card title="Пользователь" extra={<a href="#">Изменить</a>}> 
      <div className="card-redact">
      <div>
      <Avatar size={96} icon={<UserOutlined />} />
    </div> 
    <Card type="inner" title="Фамилия Имя Отчество" style={{width: '100%', marginLeft: '15px'}} >
      Попов Жопа Очкович
    </Card>   
    </div>
  </Card>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}></Footer>
  </Layout>
);

export default Personal;
