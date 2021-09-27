"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Coupon {
    constructor(code, percentage, expiredDate) {
        this.code = code;
        this.percentage = percentage;
        this.expiredDate = expiredDate;
    }
    isExpired() {
        const today = new Date();
        return this.expiredDate.getTime() < today.getTime();
    }
}
exports.default = Coupon;
