import React, { useEffect, useState } from 'react';
// import { get_agents } from '../../api/fastapi/agents';
// import { get_creations } from '../../api/fastapi/files';
import useAgentHooks from '../../hooks/agentHooks';

function Sidebar() {
    const { agents, setProxy } = useAgentHooks();
    // const [files, setFiles] = useState([]);
    // const [agentKeys, setAgentsKeys] = useState([]);
    // const [currAgent, setcurrAgent] = useState([]);
    // const [currThread, setcurrThread] = useState([]);
    // const [threadKeys, setThreadKeys] = useState([]);
    // const [threads, setThreads] = useState([]);

    useState(async () => {
        // let creations_response = await get_creations();
        // let agents_response = await get_agents();
        // let threads_response = await get_threads();
        // setThreads(threads_response);
        // setThreadKeys(Object.keys(threads_response));

        // setFiles(creations_response);
    }, []);



    const handle_agent_click = async (event) => {
        const agent_key_index = event.currentTarget.getAttribute('id');
        const clicked_agent = agents[agent_key_index];
        setProxy(clicked_agent);

    };

    const handle_thread_click = async (event) => {
        // const thread_key_index = event.currentTarget.getAttribute('id');
        // let clicked_thread = threads[threadKeys[thread_key_index]];
        // let selected_thread = await select_proxy_thread(clicked_thread.id);
        // setcurrThread(selected_thread);
        // fetchMessageData();
        // setMessages(selected_thread.messages);
    };

    const handleLinkClick = (event) => {
        // return (
        //     <div>
        //         <a href={`/creations/${file}`} download>{file}</a>
        //     </div>)
    }

    return (
        <div className="sidebar">
            <h2>Agents</h2>
            <ul>
                {agents.map((agent, index) => (
                    <li onClick={handle_agent_click} key={index} id={index}>
                        <span style={{ userSelect: 'none' }}>{agent.name}</span>
                    </li>
                ))}
            </ul>
            <h2>Download a file</h2>
            <ul>
                {/* {files.map((file, index) => (
                    <li onClick={handleLinkClick} key={index}>
                        {file}
                        <a href={`/creations/${file}`} download>{file}</a>
                    </li>
                ))} */}
            </ul>
            <h2>Conversation</h2>
            <ul>
                {/* {threadKeys.map((thread_id, index) => (
                    <li id={index} onClick={handle_thread_click} key={index}>
                        {thread_id}
                        <a href={`/creations/${file}`} download>{file}</a>
                    </li>
                ))} */}
            </ul>
        </div>
    );
}

export default Sidebar;
