import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Assuming your index.html has a div with id='root' where the React app will be mounted
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
