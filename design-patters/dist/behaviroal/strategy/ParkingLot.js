"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParkingLot {
    constructor(location, ticketCalculator) {
        this.tickets = [];
        this.location = location;
        this.ticketCalculator = ticketCalculator;
    }
    checking(plate, checkinDate) {
        this.tickets.push({ plate, checkinDate });
    }
    checkout(plate, checkoutDate) {
        const ticket = this.tickets.find(ticket => ticket.plate === plate);
        if (!ticket)
            throw new Error('Ticket not found');
        const amount = this.ticketCalculator.calculate(ticket.checkinDate, checkoutDate);
        return { amount };
    }
}
exports.default = ParkingLot;
