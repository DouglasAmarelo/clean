import CouponRepository from '../domain/repository/CouponRepository';
import FreightCalculator from '../domain/service/FreightCalculator';
import ItemRepository from '../domain/repository/ItemRepository';
import Order from '../domain/entity/Order';
import PlaceOrderInput from './PlaceOrderInput';
import PlaceOrderOutput from './PlaceOutput';
import ZipcodeCalculatorAPIMemory from '../infra/gateway/memory/ZipcodeCalculatorAPIMemory';

import { OrderItemProps } from '../domain/entity/OrderItem';
import OrderRepository from '../domain/repository/OrderRepository';

export default class PlaceOrder {
  zipcodeCalculator: ZipcodeCalculatorAPIMemory;
  itemRepository: ItemRepository;
  couponRepository: CouponRepository;
  orderRepository: OrderRepository;

  constructor(
    itemRepository: ItemRepository,
    couponRepository: CouponRepository,
    orderRepository: OrderRepository,
    zipcodeCalculator: ZipcodeCalculatorAPIMemory
  ) {
    this.itemRepository = itemRepository;
    this.couponRepository = couponRepository;
    this.orderRepository = orderRepository;
    this.zipcodeCalculator = zipcodeCalculator;
  }

  execute(input: PlaceOrderInput): PlaceOrderOutput {
    const order = new Order(input.cpf);
    const distance = this.zipcodeCalculator.calculate(
      input.zipcode,
      '99999-999'
    );

    input.items.forEach((orderItem: OrderItemProps) => {
      const item = this.itemRepository.getById(orderItem.id);

      if (!item) throw new Error('Item not found');

      order.addItem({
        id: orderItem.id,
        quantity: orderItem.quantity,
        price: item.price,
      });

      order.freight +=
        FreightCalculator.calculate({ distance, item }) * orderItem.quantity;
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
