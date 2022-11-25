import React, { useState } from 'react';
import "antd/dist/reset.css";
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Progress, message } from 'antd';

const Progression: React.FC = () => {
  const [percent, setPercent] = useState(0);

  const info = () => {
  message.info('Задание выполнено');
};

  const increase = () => {
    let newPercent = percent + 10;
    if (newPercent > 100) {
      newPercent = 100;
      return (info);
    }
    setPercent(newPercent);
  };

  const decline = () => {
    let newPercent = percent - 10;
    if (newPercent < 0) {
      newPercent = 0;
    }
    setPercent(newPercent);
  };

  return (
    <>
      <Progress percent={percent} />
      <Button.Group>
        <Button onClick={decline} icon={<MinusOutlined />} />
        <Button onClick={increase} icon={<PlusOutlined />} />
      </Button.Group>
    </>
  );
};

export default Progression;