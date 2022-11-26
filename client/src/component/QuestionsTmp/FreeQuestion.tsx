import React, { FC } from "react";
import "./Questions.css";
import { Button, Card, Input } from "antd";
import { questionI } from "./SingleQuestion";

const { TextArea } = Input;

export const FreeQuestion: FC<questionI> = ({ task }) => {
  return (
    <div className={"free-wrapper"}>
      <Card title={task.title}>
        <p>{task.body}</p>
        <div className={"freeq-card"}>
          <TextArea rows={4} placeholder={"Введите свой ответ..."} />
          <Button style={{ marginTop: "5px" }}>Подтвердить</Button>
        </div>
      </Card>
    </div>
  );
};
