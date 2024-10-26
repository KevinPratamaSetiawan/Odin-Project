import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUpPage from './components/signUpForm/SignUpPage';
import LoginPage from './components/signUpForm/LoginPage'; 
import DashboardPage from './components/projectsDashboard/dashboardPage';

const root = createRoot(document.getElementById('root'));
const hasAccount = localStorage.getItem('hasAccount') === 'true';
const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';

root.render(
  <Router>
    <Routes>
      <Route path="/" element={ <Navigate to="/sign-up" />} />
      <Route path="/sign-up" element={ <SignUpPage /> } />
      <Route path="/login" element={ <LoginPage /> } />

      <Route path="/dashboard" element={isAuthenticated ? <DashboardPage /> : <Navigate to="/" />} />
    </Routes>
  </Router>
);