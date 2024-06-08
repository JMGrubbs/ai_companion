import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './AppContainer.css';
import Sidebar from './sidebar/Sidebar';
import ChatApp from './chatapp/ChatApp';
import NewAgent from './agents/NewAgent';
import useAgentHooks from '../hooks/agentHooks';
import useThreadHooks from '../hooks/threadHooks';
import PasswordEntry from './PasswordEntry';

function AppContainer() {
    const [entry, setEntry] = useState(false);
    const { curThread, setCurThread } = useThreadHooks();
    const { proxy, setProxy } = useAgentHooks();

    const handlePasswordSubmit = (event_pass) => {
        if (event_pass === 'pass1299') {
            setEntry(true);
        }
    }
    return (
        <Router>
            <div className="App">
                {entry ? <main className="app-holder">
                    <div className={`sidebar-holder`}>
                        <Sidebar setProxy={setProxy} setCurThread={setCurThread} />
                    </div>
                    <div className="divider">
                        <Routes>
                            <Route path="/" element={<ChatApp proxy={proxy} curThread={curThread} />} />
                            <Route path="/thread/:id" element={<ChatApp proxy={proxy} curThread={curThread} />} />
                            <Route path="/agent/new" element={<NewAgent />} />
                        </Routes>
                    </div>
                </main> :
                    <PasswordEntry handlePasswordSubmit={handlePasswordSubmit} />}
            </div>
        </Router>
    );
}

export default AppContainer;