import TicketCalculator from './TicketCalculator';

export default class AirportTicketCalculator implements TicketCalculator {
  calculate(checkinDate: Date, checkoutDate: Date): number {
    const period =
      (checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 60 * 60);
    const initialPrice = 10;
    const extraHourPrice = 3;
    const initialFreeHours = 3;
    const remainingHours = period - initialFreeHours;

    let amount = initialPrice;

    if (remainingHours > 0) {
      amount += remainingHours * extraHourPrice;
    }

    return amount;
  }
}
