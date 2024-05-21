import React from 'react';

const AgentList = ({ agents, handleAgentClick }) => {
    return (
        <div>
            <h2>Agents</h2>
            <ul>
                {agents.map((agent, index) => (
                    <li onClick={handleAgentClick} key={index} id={index}>
                        <span style={{ userSelect: 'none' }}>{agent.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AgentList;