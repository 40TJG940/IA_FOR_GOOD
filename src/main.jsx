import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Create a root
const container = document.getElementById('root');
const root = createRoot(container);

// Render your app using the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);