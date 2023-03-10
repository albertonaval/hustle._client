import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"


import "bootstrap/dist/css/bootstrap.min.css"
import { AuthProviderWrapper } from './context/auth.context';
import { DarkModeProviderWrapper } from './context/darkmode.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProviderWrapper>
    <DarkModeProviderWrapper>
      <Router>
        <App />
      </Router>
    </DarkModeProviderWrapper>
  </AuthProviderWrapper>
)

