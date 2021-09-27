import Item from '../../src/domain/entity/Item';

test('Deve calcular o volume de um item', () => {
  const item = new Item({
    id: '2',
    description: 'Amplificador',
    price: 5000,
    dimension: {
      width: 50,
      height: 50,
      length: 50,
    },
    weight: 22,
  });

  // Volume é [largura * altura * profundidade]
  const volume = item.getVolume();

  expect(volume).toBe(0.125);
});

test('Deve calcular a densidade de um item', () => {
  const item = new Item({
    id: '2',
    description: 'Amplificador',
    price: 5000,
    dimension: {
      height: 50,
      width: 50,
      length: 50,
    },
    weight: 22,
  });

  // Densidade é [peso / volume]
  const density = item.getDensity();

  expect(density).toBe(176);
});
