"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BeachTicketCalculator {
    calculate(checkinDate, checkoutDate) {
        const period = (checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 60 * 60);
        const beachPrice = 5;
        return period * beachPrice;
    }
}
exports.default = BeachTicketCalculator;
