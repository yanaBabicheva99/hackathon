import React from 'react';
import './TestPage.css'
import {SingleQuestion} from "../QuestionsTmp/SingleQuestion";
import {MultiQuestion} from "../QuestionsTmp/MultiQuestion";
import {FreeQuestion} from "../QuestionsTmp/FreeQuestion";
import {Button, Card} from "antd";

export const TestPage = () => {
    return (
        <div className={'test-wrapper'}>
            <Card title={'Страница теста'} extra={'Таймер: 02:58:59'}>
                <div className={'test-item'}>
                    <SingleQuestion/>
                </div>
                <div className={'test-item'}>
                    <MultiQuestion/>
                </div>
                <div className={'test-item'}>
                    <FreeQuestion/>
                </div>
                <Button type={'primary'} style={{width: '100%'}}>Завершить тест</Button>
            </Card>
        </div>
    );
};