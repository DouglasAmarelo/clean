import AirportTicketCalculator from './AirportTicketCalculator';
import BeachTicketCalculator from './BeachTicketCalculator';
import ShoppingTicketCalculator from './ShoppingTicketCalculator';

import ParkingLot from './ParkingLot';
describe('ParkingLot', () => {
  it('Deve calcular o valor do ticket para um carro que ficou 3 horas estacionado na praia', () => {
    const parkingLot = new ParkingLot('praia', new BeachTicketCalculator());

    parkingLot.checking('ABC-9876', new Date('2020-10-10T10:00:00'));

    const ticket = parkingLot.checkout(
      'ABC-9876',
      new Date('2020-10-10T13:00:00')
    );

    expect(ticket.amount).toBe(15);
  });

  it('Deve calcular o valor do ticket para um carro que ficou 10 horas estacionado no aeroporto', () => {
    const parkingLot = new ParkingLot(
      'aeroporto',
      new AirportTicketCalculator()
    );

    parkingLot.checking('ABC-9876', new Date('2020-10-10T10:00:00'));

    const ticket = parkingLot.checkout(
      'ABC-9876',
      new Date('2020-10-10T20:00:00')
    );

    expect(ticket.amount).toBe(31);
  });

  it('Deve calcular o valor do ticket para um carro que ficou 2 horas estacionado no shopping na hora do almoço', () => {
    const parkingLot = new ParkingLot(
      'shopping',
      new ShoppingTicketCalculator()
    );

    parkingLot.checking('ABC-9876', new Date('2020-10-10T12:00:00'));

    const ticket = parkingLot.checkout(
      'ABC-9876',
      new Date('2020-10-10T14:00:00')
    );

    expect(ticket.amount).toBe(0);
  });
});
