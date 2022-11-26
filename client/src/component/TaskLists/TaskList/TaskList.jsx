import React from 'react';
import { Card, Button, Radio } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import './TaskList.css'


const TaskList = () => {
    return (
        <div className='taskbody' style={{
            display: 'flex',
            margin: '0 auto',
            justifyContent: 'center',
      
        }}>
            <Card title='Список задач'
                headStyle={{
                   textAlign: 'center',
                    width: '500px',
                }}>
                <div className='taskbody__tasks'>
                    <Card title='Задача 1' >
                        <div>
                            <Button><EditOutlined/></Button>
                            <Button> <DeleteOutlined /></Button>
                        </div>
                    </Card>
                    <Card title='Задача 2'>
                        <div>
                            <Button><EditOutlined/></Button>
                            <Button> <DeleteOutlined /></Button>
                        </div>

                    </Card>
                </div>

            </Card>
        </div>
    );
}

export default TaskList;
