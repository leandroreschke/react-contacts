import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BookProvider from './context/Book';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BookProvider>
        <App />
      </BookProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

