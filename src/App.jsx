// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import DashBoard from "./components/DashBoard"

const App = () => {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<RegistrationForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/dashboard" element={<DashBoard />} />
                </Routes>
            </Router>
    );
};

export default App;
