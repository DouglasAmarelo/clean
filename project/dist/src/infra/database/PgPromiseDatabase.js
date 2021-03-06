"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_promise_1 = __importDefault(require("pg-promise"));
class PgPromisseDatabase {
    constructor() {
        this.pgp = pg_promise_1.default()('postgres://postgres:123456@localhost:5432/app');
    }
    many(query, params) {
        return this.pgp.query(query, params);
    }
    one(query, params) {
        return this.pgp.oneOrNone(query, params);
    }
}
exports.default = PgPromisseDatabase;
