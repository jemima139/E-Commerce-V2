import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Get the root element from the DOM
const container = document.getElementById('root');

// Create a root using the container
const root = createRoot(container);

// Render your application using the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// Comment out or remove the following line
// reportWebVitals();
