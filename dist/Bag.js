"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bag = void 0;
class Bag {
    constructor(maxWeight, bagType) {
        this.presents = [];
        this.maxWeight = maxWeight;
        this.bagType = bagType;
    }
    addPresent(present) {
        this.presents.push(present);
    }
}
exports.Bag = Bag;
