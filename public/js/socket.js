var socket = io();

// listen info
socket.on('connect', function(){
    console.log("connected to server");
});

socket.on('disconnect', () => {
    console.log("lost connection with server")
});
