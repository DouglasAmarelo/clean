import FreightCalculator from '../../src/domain/service/FreightCalculator';
import Item from '../../src/domain/entity/Item';

test('Deve calcular o frete da guitarra', () => {
  const item = new Item({
    id: '1',
    description: 'Guitarra',
    price: 1000,
    dimension: { width: 100, height: 50, length: 15 },
    weight: 3,
  });
  const distance = 1000;
  const price = FreightCalculator.calculate({ distance, item });

  expect(price).toBe(30);
});

test('Deve calcular o frete do amplificador', () => {
  const item = new Item({
    id: '2',
    description: 'Amplificador',
    price: 5000,
    dimension: { width: 50, height: 50, length: 50 },
    weight: 22,
  });
  const distance = 1000;
  const price = FreightCalculator.calculate({ distance, item });

  expect(price).toBe(220);
});

test('Deve calcular o frete do cabo', () => {
  const item = new Item({
    id: '3',
    description: 'Cabo',
    price: 30,
    dimension: { width: 9, height: 9, length: 9 },
    weight: 0.1,
  });
  const distance = 1000;
  const price = FreightCalculator.calculate({ distance, item });

  expect(price).toBe(10);
});
