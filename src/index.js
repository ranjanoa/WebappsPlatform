import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import your main App component

// Create a root for the React application in the 'root' div of index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
