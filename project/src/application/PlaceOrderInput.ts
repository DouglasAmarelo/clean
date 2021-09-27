export type PlaceOrderInputProps = {
  cpf: string;
  items: any;
  coupon?: string;
  zipcode: string;
};

export default class PlaceOrderInput {
  cpf: string;
  items: any;
  coupon?: string;
  zipcode: string;

  constructor({ cpf, items, coupon, zipcode }: PlaceOrderInputProps) {
    this.cpf = cpf;
    this.items = items;
    this.coupon = coupon;
    this.zipcode = zipcode;
  }
}
