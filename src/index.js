import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import Generator from './Generator';
import Cover from './component/cover'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Generator />
    <Cover />
  </React.StrictMode>
);