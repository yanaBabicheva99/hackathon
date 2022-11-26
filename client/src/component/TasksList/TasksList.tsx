import { CloseOutlined, EditFilled } from '@ant-design/icons';
import React from 'react';
import './TasksList.css'

export const TasksList = () => {
    return (
        <div className={'task-wrapper'}>
            <div className={'tasks'}>
                <div className={'task'}>
                    <div>
                        Задача 1
                    </div>
                    <div className={'buttons'}>
                        <div className={'button-element'}>
                            <EditFilled />
                        </div>
                        <div className={'button-element'}>
                            <CloseOutlined />
                        </div>
                    </div>
                </div>
                <div className={'task'}>
                    <div>
                        Задача 2
                    </div>
                    <div className={'buttons'}>
                        <div className={'button-element'}>
                            <EditFilled />
                        </div>
                        <div className={'button-element'}>
                            <CloseOutlined />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};