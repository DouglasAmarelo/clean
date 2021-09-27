import CouponRepositoryMemory from '../../src/infra/repository/memory/CouponRepositoryMemory';
import ItemRepositoryMemory from '../../src/infra/repository/memory/ItemRepositoryMemory';
import OrderRepositoryMemory from '../../src/infra/repository/memory/OrderRepositoryMemory';
import PlaceOrder from '../../src/application/PlaceOrder';
import PlaceOrderInput from '../../src/application/PlaceOrderInput';
import ZipcodeCalculatorAPIMemory from '../../src/infra/gateway/memory/ZipcodeCalculatorAPIMemory';

const VALID_CPF = '928.904.870-08';

const itemRepository = new ItemRepositoryMemory();
const couponRepository = new CouponRepositoryMemory();
const orderRepository = new OrderRepositoryMemory();
const zipcodeCalculator = new ZipcodeCalculatorAPIMemory();

test('Deve fazer um pedido', () => {
  const input = new PlaceOrderInput({
    cpf: VALID_CPF,
    zipcode: '01001-000',
    items: [
      { id: '1', quantity: 2 },
      { id: '2', quantity: 1 },
      { id: '3', quantity: 3 },
    ],
    coupon: 'VALE20',
  });
  const placeOrder = new PlaceOrder(
    itemRepository,
    couponRepository,
    orderRepository,
    zipcodeCalculator
  );
  const output = placeOrder.execute(input);

  expect(output.total).toBe(5982);
});

test('Deve fazer um pedido com cupom de desconto expirado', () => {
  const input = new PlaceOrderInput({
    cpf: VALID_CPF,
    zipcode: '01001-000',
    items: [
      { id: '1', quantity: 2 },
      { id: '2', quantity: 1 },
      { id: '3', quantity: 3 },
    ],
    coupon: 'VALE20_EXPIRED',
  });
  const placeOrder = new PlaceOrder(
    itemRepository,
    couponRepository,
    orderRepository,
    zipcodeCalculator
  );
  const output = placeOrder.execute(input);

  expect(output.total).toBe(7400);
});

test('Deve fazer um pedido com cálculo de frete', () => {
  const input = new PlaceOrderInput({
    cpf: VALID_CPF,
    zipcode: '01001-000',
    items: [
      { id: '1', quantity: 2 },
      { id: '2', quantity: 1 },
      { id: '3', quantity: 3 },
    ],
  });
  const placeOrder = new PlaceOrder(
    itemRepository,
    couponRepository,
    orderRepository,
    zipcodeCalculator
  );

  const output = placeOrder.execute(input);

  expect(output.freight).toBe(310);
});
