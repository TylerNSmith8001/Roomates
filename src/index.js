import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {RoommateContextProvider} from "./context/roommateContext"

ReactDOM.render(
  <React.StrictMode>
    <RoommateContextProvider>
      <App />
    </RoommateContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);