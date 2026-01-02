import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes.jsx';
import './index.css';

// Root React render with React Router and GitHub Pages basename
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/sonakanda-client/"> {/* <-- Important for GH Pages */}
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
