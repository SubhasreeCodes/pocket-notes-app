// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Creating the root element and rendering the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
