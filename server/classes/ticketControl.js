const fs = require("fs");

class TicketControl {

    constructor(){

        this.last = 0;
        this.today = new Date().getDate();
        this.tickets = [];
        this.lastFourTickets = [];

        const data = require('../data/data.json');
        
        if( data.today === this.today ){

            this.last = data.last;
            this.tickets = data.tickets;
            this.lastFourTickets = data.lastFourTickets;


        }else{
            this.resetCount();

        }

    }

    resetCount(){
        
        this.last = 0;
        this.tickets = [];
        this.lastFourTickets = [];
        this.writeData();
        
    }

    next(){
        this.last++;
        let ticket = new Ticket(this.last, null);
        this.tickets.push(ticket);
        this.writeData();
        return `ticket ${this.last}`;
    }

    writeData(){
        fs.writeFileSync('./server/data/data.json', JSON.stringify({
            last: this.last,
            today: this.today,
            tickets: this.tickets,
            lastFourTickets: this.lastFourTickets
        }));
        console.log("saved data success");
    }

    getLastTicket(){
        return `ticket ${this.last}`;
    }

    attendTicket(desktop){
        if(this.tickets.length === 0){
            return "No hay tickets";
        }

        let numberTicket = this.tickets[0].number;

        this.tickets.shift();

        let attendTicket = new Ticket(numberTicket, desktop);
        this.lastFourTickets.unshift(attendTicket);

        if( this.lastFourTickets.length > 4){
            this.lastFourTickets.splice(-1,1);
        }

        this.writeData();
        return attendTicket;
    }

    getLastFourTickets(){
        return this.lastFourTickets;
    }

}

class Ticket{

    constructor(number, desktop){
        this.number = number;
        this.desktop = desktop;
    }

}

module.exports = {
    TicketControl
}