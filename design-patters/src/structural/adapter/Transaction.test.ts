import PagSeguroTransaction from './PagSeguroTransaction';
import PagSeguroTransactionAdapter from './PagSeguroTransactionAdapter';

test('Deve fazer uma transação PagSeguro', () => {
  const pagSeguroTransaction = new PagSeguroTransaction(
    'AHN67JNHT5HF',
    1000,
    '2'
  );
  const transaction = new PagSeguroTransactionAdapter(pagSeguroTransaction);

  expect(transaction.status).toBe('paid');
});
