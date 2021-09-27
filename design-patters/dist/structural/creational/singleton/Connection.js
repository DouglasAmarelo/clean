"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Connection {
    constructor() {
        this.id = Math.floor(Math.random() * 100000);
    }
    static getInstance() {
        if (!Connection.instance) {
            Connection.instance = new Connection();
        }
        return Connection.instance;
    }
}
exports.default = Connection;
