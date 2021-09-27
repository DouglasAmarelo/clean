"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Connection_1 = __importDefault(require("./Connection"));
test('Deve conectar sempre na mesma instância', () => {
    const conenction_01 = Connection_1.default.getInstance();
    const connection_02 = Connection_1.default.getInstance();
    expect(conenction_01.id).toBe(connection_02.id);
});
