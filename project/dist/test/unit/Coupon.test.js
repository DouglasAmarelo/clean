"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Coupon_1 = __importDefault(require("../../src/domain/entity/Coupon"));
test('Deve verificar se o cupom está expirado', () => {
    const coupom = new Coupon_1.default('VALE20', 20, new Date('2020-10-10'));
    expect(coupom.isExpired()).toBe(true);
});
