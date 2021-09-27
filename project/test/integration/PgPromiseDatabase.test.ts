import PgPromiseDatabase from '../../src/infra/database/PgPromiseDatabase';

test('Deve conectar no banco de dados e listar os itens', async () => {
  const pgPromiseDatabase = new PgPromiseDatabase();

  const items = await pgPromiseDatabase.many('select * from ccca.item', []);

  console.log(items);
});
