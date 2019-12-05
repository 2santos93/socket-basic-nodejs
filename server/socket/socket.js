const {io} = require('../server');
const {TicketControl} = require('../classes/ticketControl');

const ticketControl = new TicketControl();

io.on('connection', (client) => {

    client.on('disconnect', () => {
        console.log("client disconnected")
    });

    // listen client
    client.on("nextTicket", (data, callback) => {
        
        const newTicket = ticketControl.next();
        console.log(newTicket);

        callback(newTicket);
    });

    client.emit("getLastTicket", {
        lastTicket:ticketControl.getLastTicket(),
        lastFourTickets: ticketControl.getLastFourTickets()
    });

    client.on("attendTicket", (data, callback) => {

        if( !data.desktop){
            return callback({
                err: true,
                message: "desktop required"
            });
        }

        const attendedTicket = ticketControl.attendTicket(data.desktop);
        callback(attendedTicket);
        client.broadcast.emit("getLastTicket", {lastFourTickets:ticketControl.lastFourTickets});

    });



});