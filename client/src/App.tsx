import React from 'react';

import {createStore} from './store/store';
import {Provider} from "react-redux";

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <h1>Hello</h1>
    </Provider>
  );
}

export default App;
