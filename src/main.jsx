import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.jsx';
import { GlobalStyle } from './globalStyle.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/kindzmarauli">
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        <Provider store={store}>
          <GlobalStyle />
          <App />
        </Provider>
      </PersistGate>
    </BrowserRouter>
  </React.StrictMode>,
);
