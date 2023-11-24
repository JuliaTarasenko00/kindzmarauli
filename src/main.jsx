import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { GlobalStyle } from './globalStyle.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/kindzmarauli">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
