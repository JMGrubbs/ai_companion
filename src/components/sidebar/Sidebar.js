import React, { useState } from 'react';
// import { get_agents } from '../../api/fastapi/agents';
// import { get_creations } from '../../api/fastapi/files';
import useAgentHooks from '../../hooks/agentHooks';
import useThreadHooks from '../../hooks/threadHooks';
import Thread from './thread';

function Sidebar({ setProxy, setCurThread }) {
    const { agents } = useAgentHooks();
    const { threads, deleteThread } = useThreadHooks()

    // const [files, setFiles] = useState([]);



    const handle_agent_click = async (event) => {
        const agent_key_index = event.currentTarget.getAttribute('id');
        const clicked_agent = agents[agent_key_index];
        setProxy(clicked_agent);

    };

    const handle_thread_click = async (event, index) => {
        setCurThread(threads[index]);
    };

    const handleLinkClick = (event) => {
        // return (
        //     <div>
        //         <a href={`/creations/${file}`} download>{file}</a>
        //     </div>)
    }

    const handle_thread_name_change = async (e, index) => {
        console.log('changing thread name', index);
    }
    const handle_delete_thread = async (e, index) => {
        await deleteThread(index);
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
            <ul className={`thread-list`}>
                {threads.map((thread, index) => (
                    <Thread key={index} thread={thread} index={index} handle_thread_click={handle_thread_click} handle_delete_thread={handle_delete_thread} handle_thread_name_change={handle_thread_name_change} />
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
