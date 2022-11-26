import React from "react";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "antd/dist/reset.css";

import { createStore } from "./store/store";
import { Provider } from "react-redux";
import { Routes } from "./component/routs";

const store: any = createStore();

function App() {
  return (
      <div className='App'>
          <Provider store={store}>
              <Routes/>
              <ToastContainer position="top-center"/>
          </Provider>
      </div>
  );
}

export default App;
