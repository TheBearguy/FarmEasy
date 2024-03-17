// Chat.js
import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5001"); // Update the URL with your server URL

function Chat() {
    const [messages, setMessages] = useState<string[]>([]);
    const [messageInput, setMessageInput] = useState("");

    useEffect(() => {
        socket.on("chat message", (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });
    }, []);

    const sendMessage = () => {
        if (messageInput.trim() !== "") {
            socket.emit("chat message", messageInput);
            setMessageInput("");
        }
    };

    return (
        <div>
            <h1>Chat App</h1>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
            <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default Chat;
