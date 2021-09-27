export type OrderItemProps = {
  id: string;
  price: number;
  quantity: number;
};

export default class OrderItem {
  id: string;
  price: number;
  quantity: number;

  constructor({ id, price, quantity }: OrderItemProps) {
    this.id = id;
    this.price = price;
    this.quantity = quantity;
  }

  getTotal() {
    return this.price * this.quantity;
  }
}
