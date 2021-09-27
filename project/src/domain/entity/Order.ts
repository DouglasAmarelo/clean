import OrderItem, { OrderItemProps } from './OrderItem';
import Coupon from './Coupon';
import Cpf from './Cpf';

export default class Order {
  cpf: Cpf;
  items: OrderItem[];
  coupon?: Coupon;
  freight: number;

  constructor(cpf: string) {
    this.cpf = new Cpf(cpf);
    this.items = [];
    this.freight = 0;
  }

  addItem({ id, price, quantity }: OrderItemProps) {
    const order = new OrderItem({ id, price, quantity });

    this.items.push(order);
  }

  addCoupon(coupon: Coupon) {
    if (!coupon.isExpired()) {
      this.coupon = coupon;
    }
  }

  calculateDiscount(value: number) {
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
