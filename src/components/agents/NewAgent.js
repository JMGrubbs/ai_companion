import React, { useState } from "react";
import "./Agents.css";
import useAgentHooks from "../../hooks/agentHooks";

const NewAgent = () => {
    const [agentName, setAgentName] = useState("");
    const [agentDescription, setAgentDescription] = useState("");
    const [agentCapabilities, setAgentCapabilities] = useState("");
    const { createNewAgent } = useAgentHooks();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newAgent = {
            "agentName": agentName,
            "agentDescription": agentDescription,
            "agentInstructions": agentCapabilities,
            "model": "gpt-3.5-turbo",
        }
        createNewAgent(newAgent);
        // setAgentName("");
        // setAgentDescription("");
        // setAgentCapabilities("");
    };

    return (
        <div className="agents-home">
            <h1>Create New Agent</h1>
            <div className="agent-form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="agentName">Agent Name</label>
                        <input
                            type="text"
                            placeholder="Enter agent name"
                            id="agentName"
                            value={agentName}
                            onChange={(e) => setAgentName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="agentDescription">Agent Description</label>
                        <textarea
                            id="agentDescription"
                            placeholder="Enter agent description"
                            value={agentDescription}
                            onChange={(e) => setAgentDescription(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="agentCapabilities">Agent Capabilities</label>
                        <textarea
                            id="agentCapabilities"
                            placeholder="Enter agent capabilities"
                            value={agentCapabilities}
                            onChange={(e) => setAgentCapabilities(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Create Agent</button>
                </form>
            </div>
        </div>
    );
};

export default NewAgent;