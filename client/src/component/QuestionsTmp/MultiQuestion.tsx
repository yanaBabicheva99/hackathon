import React from 'react';
import './Questions.css'
import {Button, Card, Checkbox, Space} from "antd";

export const MultiQuestion = () => {
    return (
        <div className={'multi-wrapper'}>
            <Card title={'Вопрос 1: Где обитают пингвины?'} style={{width: '500px'}}>
                <div className={'multiq-card'}>
                    <Checkbox.Group name="checkboxgroup" >
                        <Space direction='vertical'>
                            <Checkbox value={1}>Крутой вопрос</Checkbox>
                            <Checkbox value={2}>Согласен</Checkbox>
                            <Checkbox value={3}>Спасибо за внимание</Checkbox>
                            <Checkbox value={4}>Пожалуйста</Checkbox>
                        </Space>
                    </Checkbox.Group>
                    <Button style={{marginTop: '5px'}} type={'primary'}>Подтвердить</Button>
                </div>
            </Card>
        </div>
    );
};