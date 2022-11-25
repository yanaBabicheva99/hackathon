import React from 'react';
import './Exhibition.css'
import {Card, Steps} from "antd";
import {MenuOutlined} from "@ant-design/icons";

const items = [{ title: 'first step' }, { title: 'second step' }, { title: 'third step' }, { title: 'fourth step' }, { title: 'fifth step' }];

export const Exhibition = () => {
    return (
        <div className={'main'}>
            <Card title={'Выставка какая-то там ( очень крутая )'} extra={<MenuOutlined/>} style={{height: '1000px'}}>
                <div className={'card-wrapper'}>
                    <img src={require('../Main/ExhibitionItem/AntonAdministator.jpg')} style={{width: '300px', height:'300px', border: '1px solid whitesmoke', borderRadius: '20px'}}/>
                    <hr style={{width: '100%', border: '1px solid whitesmoke'}} />
                    <div className={'event-description'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut beatae cupiditate illo
                        molestias, quibusdam sequi velit? Blanditiis exercitationem, incidunt, iste iusto optio quae
                        quisquam, reprehenderit saepe sapiente vitae voluptas!!
                    </div>
                    <Steps items={items} style={{marginTop: '25px'}} />
                </div>
            </Card>
        </div>
    );
};