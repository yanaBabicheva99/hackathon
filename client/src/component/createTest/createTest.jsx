import React from "react";
import { Card } from "antd";
import "./createTest.css";
import { Input, Button, Radio } from "antd";

const CreateTest = () => {
  return (
    <div className="TestContainer">
      <Card
        title="Создание тест"
        style={{
          width: "30%",
        }}
      >
        <div className="TestContainer__content">
          <div className="TestContainer__inputs">
            <Input placeholder="Название" />
            <Input placeholder="Описание" />
          </div>
          <div className="TestContainer__btns">
            <Button>Добавление задачи</Button>
            <Button>Добавление варианта</Button>
          </div>
        </div>

        <div
          style={{ display: "grid", paddingTop: "10px", paddingBottom: "10px" }}
        >
          <Radio>Вариант ответа 1</Radio>
          <Radio>Вариант ответа 2</Radio>
          <Radio>Вариант ответа 3</Radio>
        </div>

        <textarea
          style={{ width: "100%", borderRadius: "10px" }}
          placeholder="Текст теста"
        />

        <div style={{ justifyContent: "center", display: "flex" }}>
          <Button>Сохранить задачу</Button>
        </div>
      </Card>
    </div>
  );
};

export default CreateTest;
