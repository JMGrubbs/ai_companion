import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './AppRouter.css';
import './Sidebar.css';
import ChatAppHome from './chatapp/ChatAppHome';
import CreateAgent from './chatapp/agents/NewAgent';

import WebsightAppHome from './websight/WebsightAppHome';
import PasswordEntry from './security/PasswordEntry';

function AppContainer() {
    const [entry, setEntry] = useState(true);

    const handlePasswordSubmit = (event_pass) => {
        if (event_pass === 'pass1299') {
            setEntry(true);
        }
    }

    return (
        <Router>
            <div className="App">
                {entry ? (
                    <main className="app-holder">
                        <div className="divider">
                            <Routes>
                                <Route path="/hello-world/*" element={<WebsightRoutes />} />
                                <Route path="/ai-chat/*" element={<ChatAppRoutes />} />
                                <Route path="/*" element={<Navigate to="/hello-world/home" />} />
                            </Routes>
                        </div>
                    </main>
                ) : (
                    <PasswordEntry handlePasswordSubmit={handlePasswordSubmit} />
                )}
            </div>
        </Router>
    );
}

const ChatAppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ChatAppHome />} />
            <Route path="thread/:id" element={<ChatAppHome />} />
            <Route path="agent/new" element={<CreateAgent />} />
        </Routes>
    );
};

const WebsightRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<WebsightAppHome />} />
            <Route path="/about" element={<WebsightAppHome />} />
            <Route path="/contact" element={<WebsightAppHome />} />
            <Route path="/projects" element={<WebsightAppHome />} />
        </Routes>
    );
};

export default AppContainer;
