import { useState } from 'react';
import { get_threads } from '../api/fastapi/threads.js';


function useThreadHooks() {
    const [threads, setThreads] = useState([]);
    const [curThread, setCurThread] = useState(null);

    useState(async () => {
        const threads_response = await get_threads();
        setThreads(threads_response);
    }, []);

    // const fetchMessageData = async () => {
    //     const messages_response = await getMessages();
    //     setMessages(messages_response);
    // };

    // const addMessage = (message) => {
    //     setMessages([...messages, message]);
    // };

    return { threads, curThread, setCurThread };
}

export default useThreadHooks;