type ItemProps = {
  id: string;
  description: string;
  price: number;
  dimension: {
    width: number;
    height: number;
    length: number;
  };
  weight: number;
};

export default class Item {
  id: string;
  description: string;
  price: number;
  dimension: {
    width: number;
    height: number;
    length: number;
  };
  weight: number;

  constructor({ id, description, price, dimension, weight }: ItemProps) {
    this.id = id;
    this.description = description;
    this.price = price;
    this.dimension = dimension;
    this.weight = weight;
  }

  getVolume() {
    const { width, height, length } = this.dimension;

    return (width / 100) * (height / 100) * (length / 100);
  }

  getDensity() {
    return this.weight / this.getVolume();
  }
}
