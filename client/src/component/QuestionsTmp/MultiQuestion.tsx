import React, { FC } from "react";
import "./Questions.css";
import { Button, Card, Checkbox, Space } from "antd";
import { questionI } from "./SingleQuestion";

export const MultiQuestion: FC<questionI> = ({ task }) => {
  return (
    <div className={"multi-wrapper"}>
      <Card title={task.title}>
        <div className={"multiq-card"}>
          <p>{task.body}</p>
          <Checkbox.Group name="checkboxgroup">
            <Space direction="vertical">
              {task.variants.map((variant, index) => (
                <Checkbox value={index}>{variant.value}</Checkbox>
              ))}
            </Space>
          </Checkbox.Group>
          <Button style={{ marginTop: "5px" }}>Подтвердить</Button>
        </div>
      </Card>
    </div>
  );
};
