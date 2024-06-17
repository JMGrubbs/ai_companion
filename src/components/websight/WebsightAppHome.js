import Sidebar from './sidebar/WebsightSidebar';
import Home from './home/Home';

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