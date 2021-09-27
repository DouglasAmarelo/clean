type PlaceOrderOutputProps = {
  total: number;
  freight: number;
};

export default class PlaceOrderOutput {
  total: number;
  freight: number;

  constructor({ total, freight }: PlaceOrderOutputProps) {
    this.total = total;
    this.freight = freight;
  }
}
