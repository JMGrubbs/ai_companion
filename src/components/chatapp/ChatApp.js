import React, { useState, useEffect } from 'react';
import Message from './Message';
import { getMessages, sendMessage } from '../../api/fastapi/messages';
// import NetworkBox from './networkbox/NetworkBox';

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
        }
    }, [curThread]);

    const handleSendMessage = async () => {
        if (newMessage) {
            const newMessageObj = { text: newMessage, sender: 'user', thread: curThread.id, "proxy": proxy.agent_id };
            setMessages([newMessageObj, ...messages]);
            setNewMessage('');
            const new_agent_message = await sendMessage(newMessageObj);
            setMessages(new_agent_message)

        }
    };

    const handleClearMessages = async () => {
        // Add clear message logic if necessary
    };

    return (
        <div className="chat-app">
            <div className={`chat box`}>
                <h1 className='agent-header'>Agent: {proxy ? proxy.name : "None"}</h1>
                <div className={`message-list`}>
                    {messages.map((message_obj, index) => (
                        <Message
                            key={index}
                            text={message_obj.text}
                            sender={message_obj.sender}
                        />
                    ))}
                </div>
                <div className={`message-list-input`}>
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => {
                            setNewMessage(e.target.value);
                        }}
                    />
                    <button className='message-list-input button send' onClick={handleSendMessage}>Send</button>
                    <button className='message-list-input button clear' onClick={handleClearMessages}>Clear</button>
                </div>
            </div>

            {/* <div className={`network box`}>
                <NetworkBox networkobject={networkEvents["proxy_network_messages"]} />
                <NetworkBox networkobject={networkEvents["assistant_network_messages"]} />
            </div> */}
        </div>
    );
}

export default ChatApp;
