// import ChatApp from './chatapp/ChatApp';
import Sidebar from './sidebar/Sidebar';
import '../css/Sidebar.css';
import '../css/ChatApp.css';
import '../css/NetworkBox.css';
// import useAgentHooks from '../hooks/agentHooks';


function AppContainer() {
    // const { threads, setThread } = useCustomHook()
    // const { agents, setAgents } = useAgentHooks()
    return (
        <div className="App">
            <main className='app-holder'>
                <Sidebar />
                {/* <ChatApp messages={messages} fetchMessageData={fetchMessageData} addMessage={addMessage} /> */}
            </main>
        </div>
    );
}

export default AppContainer;