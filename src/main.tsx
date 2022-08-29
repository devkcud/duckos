import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <h1 id="NOT_SUPPORTED_WARNING">Sorry, but the minimum resolution supported is 660x768.</h1>
  </React.StrictMode>,
);
