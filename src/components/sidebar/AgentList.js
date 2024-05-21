import React from 'react';
import Agent from './Agent';

const AgentList = ({ agents, handleAgentClick, createNewAgent }) => {
    return (
        <div className="sidebar-holder">
            <div className="title-holder">
                <h2>Agents</h2>
                <button onClick={(e) => createNewAgent(e)} className="new-button">+</button>
            </div>
            <ul>
                {agents.map((agent, index) => (
                    <Agent index={index} key={index} agent={agent} handleAgentClick={handleAgentClick} />
                ))}
            </ul>
        </div>
    );
};

export default AgentList;