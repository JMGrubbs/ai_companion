import React from 'react';
import Thread from './Thread';

const ConversationList = ({ threads, handleThreadClick, handleDeleteThread, handleThreadNameChange, createNewThread }) => {
    return (
        <div className="conversation-holder">
            <div className="conversation-title-holder">
                <h2>Conversation</h2>
                <button onClick={(e) => createNewThread(e)} className="new-conversation-button">+</button>
            </div>
            <ul className="thread-list">
                {threads.map((thread, index) => (
                    <Thread
                        key={index}
                        thread={thread}
                        index={index}
                        handleThreadClick={handleThreadClick}
                        handleDeleteThread={handleDeleteThread}
                        handleThreadNameChange={handleThreadNameChange}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ConversationList;