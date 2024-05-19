import React, { useEffect, useState } from 'react';
import ThreeDotDropdown from '../actions/ActionDropdown';

function Thread({ thread, index, handle_thread_click, handle_delete_thread, handle_thread_name_change }) {
    const [actions, setActions] = useState([]);

    useEffect(() => {
        setActions([{ action: handle_delete_thread, text: 'Delete' }, { action: handle_thread_name_change, text: 'Rename' }])
    }, [handle_delete_thread, handle_thread_name_change]);

    return (
        <div className="thread-item">
            <li id={index} className={`thread-list-item`}>
                <span style={{ userSelect: 'none' }} onClick={(e) => handle_thread_click(e, index)} key={index} >{thread.name}</span>
                <span>
                    <ThreeDotDropdown actions={actions} identity={index} />
                </span>
            </li>
        </div>
    );
}

export default Thread;
