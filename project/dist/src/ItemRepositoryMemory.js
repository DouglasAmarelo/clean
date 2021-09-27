"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./domain/entity/Item"));
class ItemRepositoryMemory {
    constructor() {
        this.items = [
            new Item_1.default({
                id: '1',
                description: 'Guitarra',
                price: 1000,
                dimension: { width: 100, height: 50, length: 15 },
                weight: 3,
            }),
            new Item_1.default({
                id: '2',
                description: 'Amplificador',
                price: 5000,
                dimension: { width: 50, height: 50, length: 50 },
                weight: 22,
            }),
            new Item_1.default({
                id: '3',
                description: 'Cabo',
                price: 30,
                dimension: { width: 10, height: 10, length: 10 },
                weight: 1,
            }),
        ];
    }
    getById(id) {
        const item = this.items.find(item => item.id === id);
        return item;
    }
}
exports.default = ItemRepositoryMemory;
