import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="74131798307-mil5equd3kte3s5vu61i8c10grl8eg44.apps.googleusercontent.com">
      <Router forceRefresh={false} basename="/">
        <App />
      </Router>
    </GoogleOAuthProvider>
  </React.StrictMode>
);