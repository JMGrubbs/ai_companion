import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import ChatApp from './chatapp/ChatApp';
import NewAgent from './agents/NewAgent';
import useAgentHooks from '../hooks/agentHooks';
import useThreadHooks from '../hooks/threadHooks';

function AppContainer() {
    const { curThread, setCurThread } = useThreadHooks();
    const { proxy, setProxy } = useAgentHooks();
    return (
        <Router>
            <div className="App">
                <main className="app-holder">
                    <div className={`sidebar-holder`}>
                        <Sidebar setProxy={setProxy} setCurThread={setCurThread} />
                    </div>
                    <div className="divider">
                        <Routes>
                            <Route path="/chat" element={<ChatApp proxy={proxy} curThread={curThread} />} />
                            <Route path="/thread/:id" element={<ChatApp proxy={proxy} curThread={curThread} />} />
                            <Route path="/agent/new" element={<NewAgent />} />
                            {/* Add more routes as needed */}
                        </Routes>
                    </div>
                </main>
            </div>
        </Router>
    );
}

export default AppContainer;