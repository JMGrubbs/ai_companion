// import ChatApp from './chatapp/ChatApp';
import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import ChatApp from './chatapp/ChatApp';
import '../css/Sidebar.css';
import '../css/ChatApp.css';
import '../css/NetworkBox.css';
// import useAgentHooks from '../hooks/agentHooks';
import useAgentHooks from '../hooks/agentHooks';



function AppContainer() {
    // const { threads, setThread } = useCustomHook()
    // const { agents, setAgents } = useAgentHooks()
    const { proxy, setProxy } = useAgentHooks();
    return (
        <div className="App">
            <main className='app-holder'>
                <Sidebar setProxy={setProxy} />
                <ChatApp messages={[]} proxy={proxy} />
                {/* <ChatApp messages={[messages]} fetchMessageData={fetchMessageData} addMessage={addMessage} /> */}
            </main>
        </div>
    );
}

export default AppContainer;