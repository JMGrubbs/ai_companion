import React from 'react';
import { Link } from 'react-router-dom';
import Agent from './Agent';

const AgentList = ({ agents, handleAgentClick, createNewAgent, handleAgentDelete }) => {
    return (
        <div className="sidebar-holder">
            <div className="title-holder">
                <h2>Agents</h2>
                <Link to="/ai-chat/agent/new">
                    <button onClick={(e) => createNewAgent(e)} className="new-button">+</button>
                </Link>
            </div>
            <ul>
                {agents.map((agent, index) => (
                    <Agent index={index} key={index} agent={agent} handleAgentClick={handleAgentClick} handleAgentDelete={handleAgentDelete} />
                ))}
            </ul>
        </div>
    );
};

export default AgentList;