import Item from '../entity/Item';

type FreightCalculatorProps = {
  distance: number;
  item: Item;
};

export default class FreightCalculator {
  static calculate({ distance, item }: FreightCalculatorProps): number {
    const freight = distance * item.getVolume() * (item.getDensity() / 100);
    const minimumFreightValue = 10;

    return freight > minimumFreightValue ? freight : minimumFreightValue;
  }
}
