import React from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "antd/dist/reset.css";

import { createStore } from "./store/store";
import { Provider } from "react-redux";
import { Routes } from "./component/routs";
import Headline from "./component/Head/Headline";

const store: any = createStore();

function App() {
  return (
    <Provider store={store}>
      <Headline />
      <Routes />
      <ToastContainer position="top-center" />
    </Provider>
  );
}

export default App;
