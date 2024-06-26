import React, { useState, useEffect } from 'react';
import Message from './messages/Message';
import MessageInput from './messages/MessageInput';
import { getMessages, sendMessage } from './api/messages';


function ChatApp({ proxy, curThread }) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        if (curThread) {
            const fetchMessages = async () => {
                const messages = await getMessages(curThread);
                setMessages(messages);
            };
            fetchMessages();
        } else {
            setMessages([]);
        }
    }, [curThread]);

    const handleSendMessage = async () => {
        if (newMessage) {
            const newMessageObj = {
                text: newMessage,
                sender: 'user',
                thread: curThread?.thread_id ?? null,
                proxy: proxy.agent_id,
            };
            setMessages([newMessageObj, ...messages]);
            setNewMessage('');
            const newAgentMessage = await sendMessage(newMessageObj);
            setMessages(newAgentMessage);
        }
    };

    const handleClearMessages = async () => {
        // Add clear message logic if necessary
    };

    return (
        <div className="app-content">
            <div className="chat-box">
                <div className={`agent-header`}>
                    <span>{proxy ? proxy.name : "None"}</span>
                </div>
                <div className="message-list">
                    {messages.map((messageObj, index) => (
                        <Message key={index} text={messageObj.text} sender={messageObj.sender} />
                    ))}
                </div>
                <MessageInput
                    newMessage={newMessage}
                    setNewMessage={setNewMessage}
                    handleSendMessage={handleSendMessage}
                    handleClearMessages={handleClearMessages}
                />
            </div>
        </div>
    );
}

export default ChatApp;