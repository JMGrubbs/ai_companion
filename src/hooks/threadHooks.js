import { useState } from 'react';
import { getThreads } from '../api/fastapi/threads.js';


function useThreadHooks() {
    const [threads, setThreads] = useState([]);

    useState(async () => {
        const threads_response = await getThreads();
        setThreads(threads_response);
    }, []);

    // const fetchMessageData = async () => {
    //     const messages_response = await getMessages();
    //     setMessages(messages_response);
    // };

    // const addMessage = (message) => {
    //     setMessages([...messages, message]);
    // };

    return { threads, setThreads };
}

export default useThreadHooks;