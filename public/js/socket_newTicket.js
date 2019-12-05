const socket = io();

let lblNewTicket = $("#lblNuevoTicket");

socket.on("connect", function() {
    console.log("connected to server");
});

socket.on("disconnect", function() {
    console.log("connected to server");
});

socket.on("getLastTicket", function(lastTicket) {
    lblNewTicket.text(lastTicket);

});

$('button').on("click", function(){
    socket.emit("nextTicket", null, function(nextTicket){
        lblNewTicket.text(nextTicket);
    });
});