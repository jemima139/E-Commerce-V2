import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Gets the root element from the DOM
const container = document.getElementById('root');

// Creates a root using the container
const root = createRoot(container);

// Renders your application using the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// Comment out or remove the following line
// reportWebVitals();
