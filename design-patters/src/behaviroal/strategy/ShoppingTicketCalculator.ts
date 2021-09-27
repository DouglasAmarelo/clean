import TicketCalculator from './TicketCalculator';

export default class ShoppingTicketCalculator implements TicketCalculator {
  calculate(checkinDate: Date, checkoutDate: Date): number {
    const period =
      (checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 60 * 60);

    const shoppingPrice = 3;
    let amount = 0;

    const lunchTime =
      checkinDate.getHours() >= 12 && checkoutDate.getHours() <= 14;

    if (!lunchTime) {
      amount = period * shoppingPrice;
    }

    return amount;
  }
}
