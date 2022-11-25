import React, { useState } from 'react';
import './personal.css';
import { Layout, Input, Card, Avatar, Button, } from 'antd';
import { UserOutlined, FileAddOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import Headline from '../Head/Headline';


const { Header, Content, Footer } = Layout;
const { TextArea } = Input;


const Personal: React.FC = () => {
  const [size, setSize] = useState<SizeType>('large');
  return (
    <Layout>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 32 }}>
        <div className="site-layout-background" style={{ padding: 0, minHeight: 380 }}>
          <Card title="Пользователь" extra={<a href="#">Изменить</a>}>
            <div className="card-redact">
              <div>
                <Avatar size={96} src={require('../Main/ExhibitionItem/AntonAdministator.jpg')} />
              </div>
              <Card type="inner" title="Фамилия Имя Отчество" style={{ width: '100%', marginLeft: '15px' }} >
                Попов Жопа Очкович
              </Card>
            </div>
            <Card type="inner" title="Заметки" style={{ marginLeft: '111px', marginTop: '15px' }} >
              <TextArea rows={4} />
              <br />
            </Card>
          </Card>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <Button type="primary" icon={<FileAddOutlined />} size={size} >
          Создать тест
        </Button>
      </Footer>
    </Layout>
  );
}

export default Personal;
