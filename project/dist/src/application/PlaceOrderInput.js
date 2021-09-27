"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlaceOrderInput {
    constructor({ cpf, items, coupon, zipcode }) {
        this.cpf = cpf;
        this.items = items;
        this.coupon = coupon;
        this.zipcode = zipcode;
    }
}
exports.default = PlaceOrderInput;
