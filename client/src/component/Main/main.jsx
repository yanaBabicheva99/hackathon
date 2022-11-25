import React from 'react';
import './main.css'
import {useGetUsersQuery} from '../../services/userService';
import {Card, Avatar} from "antd";

const Main = () => {
    const {data, error, isLoading} = useGetUsersQuery();
    console.log('err', error);

    if (isLoading) {
        return <h2>Loading</h2>
    }
    console.log(data, error);

    console.log('nerio')

    return (
        <div className={'main-wrapper'}>
            <div className={'brand-info'}>
                <Avatar src={'https://upload.wikimedia.org/wikipedia/ru/thumb/4/42/Росатом_Знак.svg/640px-Росатом_Знак.svg.png'} size={300} />
                <hr style={{border: 'none'}}/>
                <div>
                    <h1>Гринатом</h1>
                </div>
                <hr style={{border: '1px solid whitesmoke'}}/>
                <div>
                    Гринатом – ИТ-интегратор Госкорпорации «Росатом». Компания ведет собственную разработку ПО,
                    осуществляет поддержку и развитие корпоративных ИТ-систем, разрабатывает программных роботов,
                    занимается проектным управлением, импортозамещением, применяет искусственный интеллект и машинное
                    обучение. Сегодня Гринатом создает самые современные решения для цифровизации Росатома и является
                    одной из самых динамично развивающихся ИТ-компаний России.
                </div>
            </div>
            <div className={'tests'}>
                <Card title={'Тесты'}>
                    <div className={'testcard-wrapper'}>
                        <Card title={'C++'} style={{width: '100%'}}/>
                        <Card title={'VS'} style={{width: '100%', marginTop: '10px'}}/>
                        <Card title={'...'} style={{width: '100%', marginTop: '10px'}}/>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Main;