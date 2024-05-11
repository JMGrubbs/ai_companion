import { useState } from 'react';
import { get_agents } from '../api/fastapi/agents.js';


function useAgentHooks() {
    const [agents, setAgents] = useState([]);
    const [proxy, setProxy] = useState(null);

    useState(async () => {
        const agents_response = await get_agents();
        setAgents(agents_response);
    }, []);


    // const fetchMessageData = async () => {
    //     const messages_response = await getMessages();
    //     setMessages(messages_response);
    // };

    // const addMessage = (message) => {
    //     setMessages([...messages, message]);
    // };

    return { agents, proxy, setProxy };
}

export default useAgentHooks;