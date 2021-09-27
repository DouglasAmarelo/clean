"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PagSeguroTransaction_1 = __importDefault(require("./PagSeguroTransaction"));
const PagSeguroTransactionAdapter_1 = __importDefault(require("./PagSeguroTransactionAdapter"));
test('Deve fazer uma transação PagSeguro', () => {
    const pagSeguroTransaction = new PagSeguroTransaction_1.default('AHN67JNHT5HF', 1000, '2');
    const transaction = new PagSeguroTransactionAdapter_1.default(pagSeguroTransaction);
    expect(transaction.status).toBe('paid');
});
