"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CouponRepositoryMemory_1 = __importDefault(require("../../src/infra/repository/memory/CouponRepositoryMemory"));
const ItemRepositoryMemory_1 = __importDefault(require("../../src/infra/repository/memory/ItemRepositoryMemory"));
const OrderRepositoryMemory_1 = __importDefault(require("../../src/infra/repository/memory/OrderRepositoryMemory"));
const PlaceOrder_1 = __importDefault(require("../../src/application/PlaceOrder"));
const PlaceOrderInput_1 = __importDefault(require("../../src/application/PlaceOrderInput"));
const ZipcodeCalculatorAPIMemory_1 = __importDefault(require("../../src/infra/gateway/memory/ZipcodeCalculatorAPIMemory"));
const VALID_CPF = '928.904.870-08';
const itemRepository = new ItemRepositoryMemory_1.default();
const couponRepository = new CouponRepositoryMemory_1.default();
const orderRepository = new OrderRepositoryMemory_1.default();
const zipcodeCalculator = new ZipcodeCalculatorAPIMemory_1.default();
test('Deve fazer um pedido', () => {
    const input = new PlaceOrderInput_1.default({
        cpf: VALID_CPF,
        zipcode: '01001-000',
        items: [
            { id: '1', quantity: 2 },
            { id: '2', quantity: 1 },
            { id: '3', quantity: 3 },
        ],
        coupon: 'VALE20',
    });
    const placeOrder = new PlaceOrder_1.default(itemRepository, couponRepository, orderRepository, zipcodeCalculator);
    const output = placeOrder.execute(input);
    expect(output.total).toBe(5982);
});
test('Deve fazer um pedido com cupom de desconto expirado', () => {
    const input = new PlaceOrderInput_1.default({
        cpf: VALID_CPF,
        zipcode: '01001-000',
        items: [
            { id: '1', quantity: 2 },
            { id: '2', quantity: 1 },
            { id: '3', quantity: 3 },
        ],
        coupon: 'VALE20_EXPIRED',
    });
    const placeOrder = new PlaceOrder_1.default(itemRepository, couponRepository, orderRepository, zipcodeCalculator);
    const output = placeOrder.execute(input);
    expect(output.total).toBe(7400);
});
test('Deve fazer um pedido com cálculo de frete', () => {
    const input = new PlaceOrderInput_1.default({
        cpf: VALID_CPF,
        zipcode: '01001-000',
        items: [
            { id: '1', quantity: 2 },
            { id: '2', quantity: 1 },
            { id: '3', quantity: 3 },
        ],
    });
    const placeOrder = new PlaceOrder_1.default(itemRepository, couponRepository, orderRepository, zipcodeCalculator);
    const output = placeOrder.execute(input);
    expect(output.freight).toBe(310);
});
