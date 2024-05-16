import React from 'react';
import '../css/Sidebar.css';
import '../css/ChatApp.css';
import '../css/NetworkBox.css';
import Sidebar from './sidebar/Sidebar';
import ChatApp from './chatapp/ChatApp';
import useAgentHooks from '../hooks/agentHooks';
import useThreadHooks from '../hooks/threadHooks';


function AppContainer() {
    const { curThread, setCurThread } = useThreadHooks()
    const { proxy, setProxy } = useAgentHooks();
    return (
        <div className="App">
            <main className='app-holder'>
                <Sidebar setProxy={setProxy} setCurThread={setCurThread} />
                <ChatApp proxy={proxy} curThread={curThread} />
            </main>
        </div>
    );
}

export default AppContainer;