const io = require("socket.io-client");
let socket = io("http://localhost:3000");
socket.on("welcome", (data) => {
   console.log("Receieved: ", data);
});