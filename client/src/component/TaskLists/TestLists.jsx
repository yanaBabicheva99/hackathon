import React from 'react';
<<<<<<< HEAD:client/src/component/TaskLists/TestLists.jsx
import {Card} from 'antd';
import './TestLists.css'
import TestForm from '../form/testForm';
=======
import {Card } from 'antd';
import './TaskLists.css'
import {TasksList} from "../TasksList/TasksList";
>>>>>>> 15d0f2f59eced1241fed604ec56398b6c2fd36f2:client/src/component/TaskLists/TaskLists.jsx

const TaskLists = ({children, handleSubmit}) => {
    return (
<<<<<<< HEAD:client/src/component/TaskLists/TestLists.jsx
        <div className='taskLists' style={{
            display: 'flex',
            margin: '0 auto',
            justifyContent: 'center',

        }}>
            <Card title='Список тестов'
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
                    <Card title='Добавление тестов'
                          style={{textAlign: 'center', height: '700px'}}
                    >
                      <TestForm handleSubmit={handleSubmit}/>
                    </Card>

                    <Card title='Список Тестов'
                          style={{textAlign: 'center'}}
                    >
                      {children}
                    </Card>
=======
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
>>>>>>> 15d0f2f59eced1241fed604ec56398b6c2fd36f2:client/src/component/TaskLists/TaskLists.jsx
                </div>
        </div>
    );
}

export default TaskLists;
