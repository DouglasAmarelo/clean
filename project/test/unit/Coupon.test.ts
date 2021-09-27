import Coupon from '../../src/domain/entity/Coupon';

test('Deve verificar se o cupom está expirado', () => {
  const coupom = new Coupon('VALE20', 20, new Date('2020-10-10'));

  expect(coupom.isExpired()).toBe(true);
});
