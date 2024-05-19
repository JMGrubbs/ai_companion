import { useState } from 'react';
import { get_threads, delete_thread } from '../api/fastapi/threads.js';


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

    const deleteThread = async (index) => {
        const deleted_thread = threads.splice(index, 1)[0]
        await delete_thread(deleted_thread.id)
        setThreads([...threads]);
    }

    return { threads, curThread, setCurThread, deleteThread };
}

export default useThreadHooks;