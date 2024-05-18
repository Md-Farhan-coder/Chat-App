// src/MessageInput.js
import React, { useState } from 'react';


function MessageInput({ sendMessage }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <div class="bg-gray-300 p-4">
    <form onSubmit={handleSubmit}>
      <input
        type="text" className='flex items-center h-10 w-full rounded px-3 text-sm'
        value={message}
        placeholder="Type your message…"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>

    </div>
  );
}

export default MessageInput;
						// <input
						// 	class="flex items-center h-10 w-full rounded px-3 text-sm"
						// 	type="text"
						// 	placeholder="Type your message…"
						// />
					