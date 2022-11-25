import React from 'react';
import './ExhibitionItem.css'
import {Card} from "antd";
import {MenuOutlined} from "@ant-design/icons";

export const ExhibitionItem = () => {
    return (
        <div>
            <Card title={<MenuOutlined />} style={{width: '100%', height: '100vh'}}>
                <div className={'card-wrapper'}>
                    <img className={'event-image'} src={require('./AntonAdministator.jpg')} alt={'Broken'}/>
                    <div className={'description-block'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequatur culpa cumque, dignissimos dolor ea eligendi excepturi exercitationem iure laboriosam laborum minima, nisi numquam quas, quo sed similique ut vitae.
                    </div>
                </div>
            </Card>
        </div>
    );
};