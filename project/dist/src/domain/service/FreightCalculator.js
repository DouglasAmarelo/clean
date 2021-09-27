"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FreightCalculator {
    static calculate({ distance, item }) {
        const freight = distance * item.getVolume() * (item.getDensity() / 100);
        const minimumFreightValue = 10;
        return freight > minimumFreightValue ? freight : minimumFreightValue;
    }
}
exports.default = FreightCalculator;
