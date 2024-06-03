
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavBar from "./NavBar";
import { PrimeReactProvider } from 'primereact/api';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
        <NavBar />
        <App />
      </BrowserRouter>
    </PrimeReactProvider>
  </React.StrictMode>
);

