import React, { useEffect, useState } from 'react';
import ThreeDotDropdown from '../../actions/ActionDropdown';

function Agent({ index, agent, handleAgentClick, handleAgentDelete }) {
    const [actions, setActions] = useState([]);

    useEffect(() => {
        setActions([{ action: handleAgentDelete, text: 'Delete' }])
    }, [handleAgentDelete]);

    return (
        <div className="item-holder">
            <li className={`list-item`} onClick={handleAgentClick} key={index} id={index}>
                <span style={{ userSelect: 'none' }}>{agent.name}</span>
                <span>
                    <ThreeDotDropdown actions={actions} identity={index} />
                </span>
            </li>
        </div>
    );
}

export default Agent;
