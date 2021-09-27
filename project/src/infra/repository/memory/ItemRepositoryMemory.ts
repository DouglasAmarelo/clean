import Item from '../../../domain/entity/Item';
import ItemRepository from '../../../domain/repository/ItemRepository';

export default class ItemRepositoryMemory implements ItemRepository {
  items: Item[];

  constructor() {
    this.items = [
      new Item({
        id: '1',
        description: 'Guitarra',
        price: 1000,
        dimension: { width: 100, height: 50, length: 15 },
        weight: 3,
      }),
      new Item({
        id: '2',
        description: 'Amplificador',
        price: 5000,
        dimension: { width: 50, height: 50, length: 50 },
        weight: 22,
      }),
      new Item({
        id: '3',
        description: 'Cabo',
        price: 30,
        dimension: { width: 10, height: 10, length: 10 },
        weight: 1,
      }),
    ];
  }

  getById(id: string): Item | undefined {
    const item = this.items.find(item => item.id === id);

    return item;
  }
}
