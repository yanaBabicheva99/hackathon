import React from 'react';
import {Card } from 'antd';
import './TaskLists.css'
import {TasksList} from "../TasksList/TasksList";

const TaskLists = () => {
    return (
        <div className='taskLists'>
                <div className='taskLists__Content'>
                        <Card title='Добавление тестов'
                              style={{textAlign: 'center', width: '100%'}}
                        >

                        </Card>
                    <div className={'taskLists__content__cardl'}>
                        <Card title='Список тестов'
                              style={{textAlign: 'center', width: '100%'}}
                        >
                            <TasksList/>
                        </Card>
                    </div>
                </div>
        </div>
    );
}

export default TaskLists;
