var socket = io();

// listen info
socket.on('connect', function(){
    console.log("connected to server");
});

socket.on('disconnect', () => {
    console.log("lost connection with server")
});

socket.on('sendMessage', function(data){
    console.log(data);
});

// send info
socket.emit('sendMessage', {
    user: "Nelson",
    message: "Hello"
}, function(res) {
    console.log(res);
});