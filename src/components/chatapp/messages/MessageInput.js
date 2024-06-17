import React from 'react';

const MessageInput = ({ newMessage, setNewMessage, handleSendMessage, handleClearMessages }) => {
    return (
        <div className="message-list-input">
            <input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />
            <button className="message-list-input button send" onClick={handleSendMessage}>
                Send
            </button>
            <button className="message-list-input button clear" onClick={handleClearMessages}>
                Clear
            </button>
        </div>
    );
};

export default MessageInput;