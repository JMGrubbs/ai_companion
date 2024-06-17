import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThreeDotDropdown from '../../actions/ActionDropdown';

function Thread({ thread, index, handleThreadClick, handleDeleteThread, handleThreadNameChange }) {
    const [actions, setActions] = useState([]);

    useEffect(() => {
        setActions([{ action: handleDeleteThread, text: 'Delete' }, { action: handleThreadNameChange, text: 'Rename' }])
    }, [handleDeleteThread, handleThreadNameChange]);

    return (
        <div className="item-holder">
            <Link to={`/ai-chat/thread/${index}`} style={{ textDecoration: 'none' }}>
                <li id={index} className={`list-item`}>
                    <span style={{ userSelect: 'none' }} onClick={(e) => handleThreadClick(e, index)} key={index} >{thread.name}</span>
                    <span>
                        <ThreeDotDropdown actions={actions} identity={index} />
                    </span>
                </li>
            </Link>
        </div>
    );
}

export default Thread;
