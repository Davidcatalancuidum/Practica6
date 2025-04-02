import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { DarkModeContextProvider } from './context/darkModeContext';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
