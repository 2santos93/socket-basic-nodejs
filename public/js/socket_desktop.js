const socket = io();

const searchParams = new URLSearchParams(window.location.search);
const lblSmall = $('small');

socket.on("connect", function() {
    console.log("connected to server");
});

socket.on("disconnect", function() {
    console.log("connected to server");
});

if(!searchParams.has('desktop')){
    window.location = "index.html";
    throw new Error("desktop required");
}

const desktop = searchParams.get('desktop');

$("h1").text(`Escritorio ${desktop}`);

$('button').on("click", function(){

    socket.emit("attendTicket", {desktop: desktop}, function(data){
        if(data.number){
            lblSmall.text(`Ticket ${data.number}`);
            
        }else{
            lblSmall.text("no hay tickets");
            alert(data);
        }
    });

});