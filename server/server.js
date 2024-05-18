// server.js
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");
const  dotenv = require("dotenv");
const route = require("./routes.js");
const app = express();
dotenv.config();

const server = http.createServer(app); 
const io = socketIo(server, {
	cors: {
		origin: "http://localhost:5173", // Frontend URL
		methods: ["GET", "POST"],
	}
	
});

app.use(cors());
app.use(express.json());

const PORT = 7000;
const URL = 'mongodb+srv://childkazari:mdfarhan@cluster1.3rllqla.mongodb.net/ChatApp?retryWrites=true&w=majority&appName=Cluster1';
 
mongoose
	.connect(URL)
	.then(() => {
		console.log("DB connected successfully");

		// app.listen(PORT, () => {
		// 	console.log(`Server is running on port: ${PORT}`);
		// });
	})
	.catch((error) => console.log(error));

// mongoose.connect("mongodb://localhost:27017/chat", {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// });

const MessageSchema = new mongoose.Schema({
	content: String,
	name:String,
	timestamp: Date,
	userId:String,
});

const Message = mongoose.model("Message", MessageSchema);

app.use("/", route);

// New User Connected
io.on("connection", (socket) => {
	console.log("New client connected");

////   New User  Sending Notification
	io.emit("newUser",{id:socket.id},()=>{

		console.log("getting message");
		Message.find().then((result) => {
       io.emit("newUerNotification",)
		/// User Only sending  provious message
		socket.emit("message", result);

	}); 
	})

	


	socket.on("sendMessage", ({message,name,userId}) => {
		
		const messageData = new Message({ content: message,name, timestamp: new Date(),userId});
		console.log(messageData);
		messageData.save().then(() => {
			io.emit("message", [messageData]);
		});
	}); 

	socket.on("disconnect", () => {
		console.log("Client disconnected");
	});
}); 

server.listen(PORT, () => {
	console.log("Server is running on port ",PORT);
});
app.listen(8000,()=>{
	console.log("Listening Express server");
})