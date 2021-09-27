"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FreightCalculator_1 = __importDefault(require("../domain/service/FreightCalculator"));
const Order_1 = __importDefault(require("../domain/entity/Order"));
class PlaceOrder {
    constructor(itemRepository, couponRepository, orderRepository, zipcodeCalculator) {
        this.itemRepository = itemRepository;
        this.couponRepository = couponRepository;
        this.orderRepository = orderRepository;
        this.zipcodeCalculator = zipcodeCalculator;
    }
    execute(input) {
        const order = new Order_1.default(input.cpf);
        const distance = this.zipcodeCalculator.calculate(input.zipcode, '99999-999');
        input.items.forEach((orderItem) => {
            const item = this.itemRepository.getById(orderItem.id);
            if (!item)
                throw new Error('Item not found');
            order.addItem({
                id: orderItem.id,
                quantity: orderItem.quantity,
                price: item.price,
            });
            order.freight +=
                FreightCalculator_1.default.calculate({ distance, item }) * orderItem.quantity;
        });
        if (input.coupon) {
            const coupon = this.couponRepository.getByCode(input.coupon);
            if (coupon) {
                order.addCoupon(coupon);
            }
        }
        this.orderRepository.save(order);
        return {
            freight: order.freight,
            total: order.getTotal(),
        };
    }
}
exports.default = PlaceOrder;
