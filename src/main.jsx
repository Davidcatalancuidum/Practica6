import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { DarkModeContextProvider } from "./context/darkModeContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkModeContextProvider>
    <App />
  </DarkModeContextProvider>
);