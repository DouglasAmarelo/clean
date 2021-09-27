"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OrderItem_1 = __importDefault(require("./OrderItem"));
const Cpf_1 = __importDefault(require("./Cpf"));
class Order {
    constructor(cpf) {
        this.cpf = new Cpf_1.default(cpf);
        this.items = [];
        this.freight = 0;
    }
    addItem({ id, price, quantity }) {
        const order = new OrderItem_1.default({ id, price, quantity });
        this.items.push(order);
    }
    addCoupon(coupon) {
        if (!coupon.isExpired()) {
            this.coupon = coupon;
        }
    }
    calculateDiscount(value) {
        if (this.coupon) {
            const discount = (value * this.coupon.percentage) / 100;
            return discount;
        }
        return 0;
    }
    getTotal() {
        const totalItems = this.items.reduce((accumulatedValue, currentItem) => {
            const currentValue = currentItem.price * currentItem.quantity;
            return currentValue + accumulatedValue;
        }, 0);
        const discount = this.calculateDiscount(totalItems);
        const freight = this.freight;
        const total = totalItems + freight - discount;
        return total;
    }
}
exports.default = Order;
