import React from 'react';

function Message({ sender, text }) {
    const senderClass = sender === 'assistant' ? 'agent' : 'user';

    return (
        <div className={`message-list-message ${senderClass}`}>
            <div className={`message-list-message sender ${senderClass}`}>{sender}</div>
            <div className={`message-list-message text ${senderClass} holder`}>
                {text}
            </div>
        </div>
    );
}

export default Message;
