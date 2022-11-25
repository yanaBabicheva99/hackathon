import React from 'react';
import './Questions.css'
import {Button, Card, Radio, Space} from "antd";

export const SingleQuestion = () => {
    return (
        <div className={'single-wrapper'}>
            <Card title={'Вопрос 1: Где обитают пингвины?'} style={{width: '500px'}}>
                <div className={'singleq-card'}>
                    <Radio.Group name="radiogroup" defaultValue={1}>
                        <Space direction='vertical'>
                            <Radio value={1}>Крутой вопрос</Radio>
                            <Radio value={2}>Согласен</Radio>
                            <Radio value={3}>Спасибо за внимание</Radio>
                            <Radio value={4}>Пожалуйста</Radio>
                        </Space>
                    </Radio.Group>
                    <Button style={{marginTop: '5px'}} type={'primary'}>Подтвердить</Button>
                </div>
            </Card>
        </div>
    );
};