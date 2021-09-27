"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor({ id, description, price, dimension, weight }) {
        this.id = id;
        this.description = description;
        this.price = price;
        this.dimension = dimension;
        this.weight = weight;
    }
    getVolume() {
        const { width, height, length } = this.dimension;
        return (width / 100) * (height / 100) * (length / 100);
    }
    getDensity() {
        return this.weight / this.getVolume();
    }
}
exports.default = Item;
