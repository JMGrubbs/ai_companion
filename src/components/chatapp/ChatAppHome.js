import Sidebar from './sidebar/Sidebar';
import ChatApp from './ChatApp';
import useAgentHooks from './hooks/agentHooks';
import useThreadHooks from './hooks/threadHooks';

function ChatAppHome() {
    const { curThread, setCurThread } = useThreadHooks();
    const { proxy, setProxy } = useAgentHooks();

    return (
        <div className={`chat-app-holder`}>
            <div className={`sidebar-holder`}>
                <Sidebar setProxy={setProxy} setCurThread={setCurThread} />
            </div>
            <div className={`chat-holder`}>
                <ChatApp proxy={proxy} curThread={curThread} />
            </div>
        </div>
    );
}

export default ChatAppHome;