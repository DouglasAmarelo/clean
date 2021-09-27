"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Coupon_1 = __importDefault(require("../../src/domain/entity/Coupon"));
const Order_1 = __importDefault(require("../../src/domain/entity/Order"));
const CPF_VALID = '928.904.870-08';
const CPF_INVALID = '111.111.111-11';
test('Não deve criar um pedido com CPF inválido', () => {
    expect(() => new Order_1.default(CPF_INVALID)).toThrow(new Error('Invalid CPF'));
});
test('Deve criar um pedido com 3 itens', () => {
    const order = new Order_1.default(CPF_VALID);
    order.addItem({ id: '1', price: 1000, quantity: 2 });
    order.addItem({ id: '2', price: 5000, quantity: 1 });
    order.addItem({ id: '3', price: 30, quantity: 3 });
    expect(order.getTotal()).toBe(7090);
});
test('Deve criar um pedido com cupom de desconto', () => {
    const order = new Order_1.default(CPF_VALID);
    const coupon = new Coupon_1.default('VALE20', 20, new Date('2022-10-10'));
    order.addItem({ id: '1', price: 1000, quantity: 2 });
    order.addItem({ id: '2', price: 5000, quantity: 1 });
    order.addItem({ id: '3', price: 30, quantity: 3 });
    order.addCoupon(coupon);
    expect(order.getTotal()).toBe(5672);
});
test('Deve criar um pedido com cupom de desconto expirado', () => {
    const order = new Order_1.default(CPF_VALID);
    const coupon = new Coupon_1.default('VALE20_EXPIRED', 20, new Date('2020-10-10'));
    order.addItem({ id: '1', price: 1000, quantity: 2 });
    order.addItem({ id: '2', price: 5000, quantity: 1 });
    order.addItem({ id: '3', price: 30, quantity: 3 });
    order.addCoupon(coupon);
    expect(order.getTotal()).toBe(7090);
});
