import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/app';
import { Settings } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App errorCount={Settings.errorCount}/>
  </React.StrictMode>
);
