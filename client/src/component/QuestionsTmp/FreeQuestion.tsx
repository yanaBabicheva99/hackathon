import React from 'react';
import './Questions.css'
import {Button, Card, Input} from "antd";

const { TextArea } = Input;

export const FreeQuestion = () => {
    return (
        <div className={'free-wrapper'}>
            <Card title={'Вопрос 1: Где обитают пингвины?'}>
                <div className={'freeq-card'}>
                    <TextArea rows={4} placeholder={'Введите свой ответ...'} />
                    <Button style={{marginTop: '5px'}}>Подтвердить</Button>
                </div>
            </Card>
        </div>
    );
};