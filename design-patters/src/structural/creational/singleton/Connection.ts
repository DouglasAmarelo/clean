export default class Connection {
  private static instance: Connection;
  id: number;

  private constructor() {
    this.id = Math.floor(Math.random() * 100000);
  }

  static getInstance(): Connection {
    if (!Connection.instance) {
      Connection.instance = new Connection();
    }

    return Connection.instance;
  }
}
