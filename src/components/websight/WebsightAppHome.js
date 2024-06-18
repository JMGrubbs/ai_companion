import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar/WebsightSidebar';
import ProjectHolder from './projects/ProjectHolder.js';
import Home from './home/home.js';

function WebsightAppHome() {
    const [screen, setScreen] = useState('home');

    const changeScreen = (newScreen) => {
        setScreen(newScreen);
    }

    return (
        <div className={`app-holder`}>
            <div className={`sidebar-holder`}>
                <Sidebar changeScreen={changeScreen} />
            </div>
            <div className={`main-holder`}>
                {screen === "projects" ? <ProjectHolder /> : <Home />}
            </div>
        </div>
    );
}

export default WebsightAppHome;