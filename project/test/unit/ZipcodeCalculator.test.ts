import ZipcodeCalculatorAPIMemory from '../../src/infra/gateway/memory/ZipcodeCalculatorAPIMemory';

test('Deve calcular a distância entre dois ceps', () => {
  const zipcodeCalculator = new ZipcodeCalculatorAPIMemory();
  const distance = zipcodeCalculator.calculate('11111-111', '99999-999');

  expect(distance).toBe(1000);
});
