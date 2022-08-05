const app= require('express')();
const server=require('http').createServer(app);

const io=require('socket.io')(server,{
    cors: {
        origin: "*",
        // or with an array of origins
        // origin: ["https://my-frontend.com", "https://my-other-frontend.com", "http://localhost:3000"],
        credentials: true
      }
});

io.on("connection",(socket) => {
    console.log("What is socket",socket);
    console.log("Socket is active to be connected");

    socket.on("chat",(payload) => {
        console.log("What is payload",payload);
        io.emit("chat",payload);
    })
})

server.listen(5000,() => {
    console.log("Server is listening at port 5000...");
})