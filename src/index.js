import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Creacion from './components/Creacion';
import reportWebVitals from './reportWebVitals';
//import Manillas from './components/Manillas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Creacion />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
