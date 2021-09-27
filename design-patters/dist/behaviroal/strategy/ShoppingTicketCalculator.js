"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShoppingTicketCalculator {
    calculate(checkinDate, checkoutDate) {
        const period = (checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 60 * 60);
        const shoppingPrice = 3;
        let amount = 0;
        const lunchTime = checkinDate.getHours() >= 12 && checkoutDate.getHours() <= 14;
        if (!lunchTime) {
            amount = period * shoppingPrice;
        }
        return amount;
    }
}
exports.default = ShoppingTicketCalculator;
