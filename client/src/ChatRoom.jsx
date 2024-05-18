// src/ChatRoom.js
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import MessageList from "./MessageList.jsx";
import MessageInput from "./MessageInput.jsx";
import Cookies from "js-cookie";



	const socket = io("http://localhost:7000"); // Backend server URL
function ChatRoom() {
	
	const [messages, setMessages] = useState([]);
	const [id, setId] = useState(null);
	const [name, setName] = useState("");

	useEffect( () => {
		console.log(messages);

    /// Getting Messages
		socket.on("message", (message) => {

			console.log(message);
			if (messages.length === 0) setMessages(message);
			else setMessages([...messages, message[0]]);
		});

		return () => socket.off("message");
	}, [messages]);



	useEffect(() => {
		if (Cookies.get("isLoggedIn") != undefined){
			setId(JSON.parse(Cookies.get("isLoggedIn")).id);
      setName(JSON.parse(Cookies.get("isLoggedIn")).name);
}
		socket.on("newUser", (idSocket) => {
			
			console.log("socked idSocket", idSocket);
		});
	}, []);



  /// Sending Messages
	const sendMessage = (message) => {
		socket.emit("sendMessage", {
			message,
			name:name,
			userId: id,
		});
	};

	return (
		
		<div class="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10">
		{/* <!-- Component Start --> */}
		<div class="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
			<div class="flex flex-col flex-grow h-0 p-4 overflow-auto">
			
			<MessageList messages={messages} id={id} />
			</div>
			 <MessageInput sendMessage={sendMessage} />

				</div>
			</div>
		
	);
}

export default ChatRoom;
