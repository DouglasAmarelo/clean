"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AirportTicketCalculator_1 = __importDefault(require("./AirportTicketCalculator"));
const BeachTicketCalculator_1 = __importDefault(require("./BeachTicketCalculator"));
const ShoppingTicketCalculator_1 = __importDefault(require("./ShoppingTicketCalculator"));
const ParkingLot_1 = __importDefault(require("./ParkingLot"));
describe('ParkingLot', () => {
    it('Deve calcular o valor do ticket para um carro que ficou 3 horas estacionado na praia', () => {
        const parkingLot = new ParkingLot_1.default('praia', new BeachTicketCalculator_1.default());
        parkingLot.checking('ABC-9876', new Date('2020-10-10T10:00:00'));
        const ticket = parkingLot.checkout('ABC-9876', new Date('2020-10-10T13:00:00'));
        expect(ticket.amount).toBe(15);
    });
    it('Deve calcular o valor do ticket para um carro que ficou 10 horas estacionado no aeroporto', () => {
        const parkingLot = new ParkingLot_1.default('aeroporto', new AirportTicketCalculator_1.default());
        parkingLot.checking('ABC-9876', new Date('2020-10-10T10:00:00'));
        const ticket = parkingLot.checkout('ABC-9876', new Date('2020-10-10T20:00:00'));
        expect(ticket.amount).toBe(31);
    });
    it('Deve calcular o valor do ticket para um carro que ficou 2 horas estacionado no shopping na hora do almoço', () => {
        const parkingLot = new ParkingLot_1.default('shopping', new ShoppingTicketCalculator_1.default());
        parkingLot.checking('ABC-9876', new Date('2020-10-10T12:00:00'));
        const ticket = parkingLot.checkout('ABC-9876', new Date('2020-10-10T14:00:00'));
        expect(ticket.amount).toBe(0);
    });
});
