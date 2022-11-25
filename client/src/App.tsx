import React from 'react';

import {createStore} from './store/store';
import {Provider} from "react-redux";
import {Routes} from './component/routs';


const store = createStore();

function App() {
  return (
    <Provider store={store}>
        <Routes />
    </Provider>
  );
}

export default App;
