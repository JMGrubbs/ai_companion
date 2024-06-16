import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './AppContainer.css';
import ChatAppHome from './chatapp/ChatAppHome';
import CreateAgent from './chatapp/agents/NewAgent';
import Home from './websight/home';
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
                {entry ? <main className="app-holder">
                    <div className="divider">
                        <Routes>
                            <Route path="/home" element={<Home />} />
                            <Route path="/ai-chat" element={<ChatAppHome />} />
                            <Route path="/ai-chat/thread/:id" element={<ChatAppHome />} />
                            <Route path="/ai-chat/agent/new" element={<CreateAgent />} />
                            <Route path="/*" element={<Navigate to="/home" />} />
                        </Routes>
                    </div>
                </main> :
                    <PasswordEntry handlePasswordSubmit={handlePasswordSubmit} />}
            </div>
        </Router>
    );
}

export default AppContainer;