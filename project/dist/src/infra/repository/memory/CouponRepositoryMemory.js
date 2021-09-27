"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Coupon_1 = __importDefault(require("../../../domain/entity/Coupon"));
class CouponRepositoryMemory {
    constructor() {
        this.coupons = [
            new Coupon_1.default('VALE20', 20, new Date('2022-10-10')),
            new Coupon_1.default('VALE20_EXPIRED', 20, new Date('2020-10-10')),
        ];
    }
    getByCode(code) {
        const coupon = this.coupons.find(coupon => coupon.code === code);
        return coupon;
    }
}
exports.default = CouponRepositoryMemory;
