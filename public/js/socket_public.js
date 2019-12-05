const socket = io();

const lblTicket1 = $('#lblTicket1');
const lblTicket2 = $('#lblTicket2');
const lblTicket3 = $('#lblTicket3');
const lblTicket4 = $('#lblTicket4');

const lblDesktop1 = $('#lblEscritorio1');
const lblDesktop2 = $('#lblEscritorio2');
const lblDesktop3 = $('#lblEscritorio3');
const lblDesktop4 = $('#lblEscritorio4');

const lblTickets = [lblTicket1,lblTicket2,lblTicket3,lblTicket4];
const lblDesktops = [lblDesktop1,lblDesktop2,lblDesktop3,lblDesktop4];


socket.on("connect", function() {
    console.log("connected to server");
});

socket.on("disconnect", function() {
    console.log("connected to server");
});

socket.on("getLastTicket", function(data){
    var audio = new Audio('../audio/new-ticket.mp3');
    audio.play();
    updateHtml(data.lastFourTickets);
});

function updateHtml( lastFourTickets ){

    for(let i = 0; i < lblTickets.length; i++){
        lblTickets[i].text(`Ticket ${lastFourTickets[i].number}`);
        lblDesktops[i].text(`Desktop ${lastFourTickets[i].desktop}`);

    }

}