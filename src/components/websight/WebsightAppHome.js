import Sidebar from './sidebar/WebsightSidebar';
import Home from './home/home.js';

function WebsightAppHome() {
    return (
        <div className={`app-holder`}>
            <div className={`sidebar-holder`}>
                <Sidebar />
            </div>
            <div className={`main-holder`}>
                <Home />
            </div>
        </div>
    );
}

export default WebsightAppHome;