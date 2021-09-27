import Connection from './Connection';

test('Deve conectar sempre na mesma instância', () => {
  const conenction_01 = Connection.getInstance();
  const connection_02 = Connection.getInstance();

  expect(conenction_01.id).toBe(connection_02.id);
});
