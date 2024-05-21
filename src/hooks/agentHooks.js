import { useState, useEffect } from 'react';
import { get_agents, create_agent, delete_agent } from '../api/fastapi/agents.js';

function useAgentHooks() {
    const [agents, setAgents] = useState([]);
    const [proxy, setProxy] = useState(null);

    useEffect(() => {
        const fetchAgents = async () => {
            const agents_response = await get_agents();
            setAgents(agents_response);
            agents_response.filter(agent => agent.name === "default" ? setProxy(agent) : null);
        };

        fetchAgents();
    }, []);

    const deleteAgent = async (agentIndex) => {
        await delete_agent(agents[agentIndex]);
        const agents_response = await get_agents();
        setAgents(agents_response);
    };

    const createNewAgent = async (newAgent) => {
        await create_agent(newAgent);
        const agents_response = await get_agents();
        setAgents(agents_response);
    };

    return { agents, proxy, setProxy, createNewAgent, deleteAgent };
}

export default useAgentHooks;