import React from 'react';

function Thread({ thread, index, handle_thread_click, handle_delete_thread }) {
    return (
        <div className="thread-item">
            <li id={index} className={`thread-list-item`}>
                <span style={{ userSelect: 'none' }} onClick={(e) => handle_thread_click(e, index)} key={index} >{thread.name}</span>
                <button className={`delete-thread-item`} onClick={(e) => handle_delete_thread(e, index)}>Delete</button>
            </li>
        </div>
    );
}

export default Thread;
