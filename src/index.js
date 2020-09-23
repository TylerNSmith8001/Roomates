import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {RoommateContextProvider} from "./context/roommateContext"

ReactDOM.render(
  <React.StrictMode>
    <RoommateContextProvider>
      <div className="pb-4" style={{background: "linear-gradient(15deg, rgb(0,47,87) 0%, rgb(2,117,216) 75%, rgb(91,192,222) 100%)", width: '100vw', minHeight: '100vh'}}>
        <App />
      </div>
    </RoommateContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);