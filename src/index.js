import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//createRoot indica qual o elemnto principal html, onde irá  conter os componentes react
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<App />);
