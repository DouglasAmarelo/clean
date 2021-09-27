"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FreightCalculator_1 = __importDefault(require("../../src/domain/service/FreightCalculator"));
const Item_1 = __importDefault(require("../../src/domain/entity/Item"));
test('Deve calcular o frete da guitarra', () => {
    const item = new Item_1.default({
        id: '1',
        description: 'Guitarra',
        price: 1000,
        dimension: { width: 100, height: 50, length: 15 },
        weight: 3,
    });
    const distance = 1000;
    const price = FreightCalculator_1.default.calculate({ distance, item });
    expect(price).toBe(30);
});
test('Deve calcular o frete do amplificador', () => {
    const item = new Item_1.default({
        id: '2',
        description: 'Amplificador',
        price: 5000,
        dimension: { width: 50, height: 50, length: 50 },
        weight: 22,
    });
    const distance = 1000;
    const price = FreightCalculator_1.default.calculate({ distance, item });
    expect(price).toBe(220);
});
test('Deve calcular o frete do cabo', () => {
    const item = new Item_1.default({
        id: '3',
        description: 'Cabo',
        price: 30,
        dimension: { width: 9, height: 9, length: 9 },
        weight: 0.1,
    });
    const distance = 1000;
    const price = FreightCalculator_1.default.calculate({ distance, item });
    expect(price).toBe(10);
});
