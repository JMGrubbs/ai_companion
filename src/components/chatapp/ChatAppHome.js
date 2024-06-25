import React, { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import './ChatApp.css';
import ChatApp from './ChatApp';
import useAgentHooks from './hooks/agentHooks';
import useThreadHooks from './hooks/threadHooks';
import PasswordEntry from '../security/PasswordEntry';
import { validatePassword } from '../security/api/pass_validation';

function ChatAppHome() {
    const { curThread, setCurThread } = useThreadHooks();
    const { proxy, setProxy } = useAgentHooks();
    const [profile, setProfile] = useState(false);

    const handlePasswordSubmit = async (event_pass) => {
        const pass_ret = await validatePassword(event_pass)
        if (pass_ret) {
            console.log(pass_ret)
            setProfile(pass_ret)
        }
    }

    return (
        <div className={`app-holder`}>
            {profile ? (<div className={`login`}>
                <div className={`sidebar-holder`}>
                    <Sidebar setProxy={setProxy} setCurThread={setCurThread} />
                </div>
                <div className={`main-holder`}>
                    <ChatApp proxy={proxy} curThread={curThread} />
                </div>
            </div>) : (
                <PasswordEntry handlePasswordSubmit={handlePasswordSubmit} />
            )}
        </div >
    );
}

export default ChatAppHome;