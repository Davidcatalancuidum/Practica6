import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { DarkModeContextProvider } from "./context/darkModeContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <DarkModeContextProvider>
    <App />
</DarkModeContextProvider>,
)
