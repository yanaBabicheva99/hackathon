import React from 'react';
import {Card, Button} from 'antd';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import './TaskLists.css'
import {TasksList} from "../TasksList/TasksList";

const TaskLists = () => {
    return (
        <div className='taskLists' style={{
            display: 'flex',
            margin: '0 auto',
            justifyContent: 'center',

        }}>
            <Card title='Список задач'
                  headStyle={{
                      textAlign: 'center',
                      width: '800px',

                  }}
                  style={{
                      width: '800px',
                      height: '800px'
                  }}
            >
                <div className='taskLists__Content'>
                    <Card title='Добавление задач'
                          style={{textAlign: 'center', height: '700px'}}
                    >

                    </Card>

                    <Card title='Список задач'
                          style={{textAlign: 'center'}}
                    >
                        <TasksList/>
                    </Card>
                </div>

            </Card>
        </div>
    );
}

export default TaskLists;
