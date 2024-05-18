// src/MessageList.js
import React from "react";
import moment from 'moment';

function MessageList({ messages, id }) {
	{
		//console.log(msg[0].content);
		console.log(messages);
	}

	// return <> 	<div className="flex w-full mt-2 space-x-3 max-w-xs">
	// <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
	// <div>
	//   <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
	//     <p className="text-sm">
	//       Lorem ipsum dolor sit amet, consectetur adipiscing
	//       elit.
	//     </p>
	//   </div>
	//   <span className="text-xs text-gray-500 leading-none">
	//     2 min ago
	//   </span>
	// </div>
	// </div>
	// <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
	// <div>
	//   <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
	//     <p className="text-sm">
	//       Lorem ipsum dolor sit amet, consectetur adipiscing
	//       elit, sed do eiusmod.
	//     </p>
	//   </div>
	//   <span className="text-xs text-gray-500 leading-none">
	//     2 min ago
	//   </span>
	// </div>
	// <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
	// </div>

	// </>
	return (
		<>
			<p>dd</p>
			{messages.map((msg, index) => {
				if (msg.userId == id)
					return (
						<>
							
							<div key={index} className="flex w-full space-x-3 max-w-xs ml-auto justify-end mt-6">
								<div>
									<div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
										<p className="text-sm">
											{msg.content}
										</p>
									</div>
									<span className="text-xs text-gray-500 leading-none">
                  {moment(msg.timestamp).format('h:mm:ss:a, MMMM Do YYYY')}
									</span>
								</div>
								<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
							</div>
						</>
					);
				else
					return (
						<>
							<div
								key={index}
								className="flex w-full space-x-3 max-w-xs mt-6"
							>
								<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
								<div>
									<div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg mb-1">
									<span className="text-slate-900 capitalize">{msg.name} :</span>	
										<span className="text-sm">
                    {msg.content} 
										</span>
									</div>
									<span className=" text-xs text-gray-500 leading-none">
						
                {moment(msg.timestamp).format('h:mm:ss:a, MMMM Do YYYY')}
									</span>
								</div>
							</div>
						</>
					);
			})}
		</>
	);
}

export default MessageList;
//messages.map((msg, index) => (

//   msg.userId==id?(<div key={index} className="flex w-full mt-2 space-x-3 max-w-xs">
//   <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
//   <div>
//     <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
//       <p className="text-sm">
//         Lorem ipsum dolor sit amet, consectetur adipiscing
//         elit.
//       </p>
//     </div>
//     <span className="text-xs text-gray-500 leading-none">
//       2 min ago
//     </span>
//   </div>
// </div>):(	<div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
// <div>
//   <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
//     <p className="text-sm">
//       Lorem ipsum dolor sit amet, consectetur adipiscing
//       elit, sed do eiusmod.
//     </p>
//   </div>
//   <span className="text-xs text-gray-500 leading-none">
//     2 min ago
//   </span>
// </div>
// <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
// </div>)
//))
