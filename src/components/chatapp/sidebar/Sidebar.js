import React from 'react';
import useAgentHooks from '../hooks/agentHooks';
import useThreadHooks from '../hooks/threadHooks';
import AgentList from './AgentList';
import DownloadFiles from './DownloadFiles';
import Threads from './Threads';

function Sidebar({ setProxy, setCurThread }) {
    const { agents, deleteAgent } = useAgentHooks();
    const { threads, deleteThread } = useThreadHooks();

    const handleAgentClick = async (event) => {
        const agentKeyIndex = event.currentTarget.getAttribute('id');
        const clickedAgent = agents[agentKeyIndex];
        setProxy(clickedAgent);
    };

    const handleThreadClick = async (event, index) => {
        setCurThread(threads[index]);
    };

    const handleThreadNameChange = async (e, index) => {
        console.log('changing thread name', index);
    };

    const handleDeleteThread = async (e, index) => {
        await deleteThread(index);
    };

    const createNewThread = async () => {
        setCurThread(null);
    }

    const handleAgentDelete = async (e, index) => {
        deleteAgent(index)
    }

    const createNewAgent = async () => {
        console.log('creating new agent');
    };
    return (
        <div className={`sidebar`}>
            <AgentList agents={agents} handleAgentClick={handleAgentClick} createNewAgent={createNewAgent} handleAgentDelete={handleAgentDelete} />
            <DownloadFiles />
            <Threads
                threads={threads}
                handleThreadClick={handleThreadClick}
                handleDeleteThread={handleDeleteThread}
                handleThreadNameChange={handleThreadNameChange}
                createNewThread={createNewThread}
            />
        </div>
    );
}

export default Sidebar;