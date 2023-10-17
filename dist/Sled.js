"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sled = void 0;
class Sled {
    constructor(santa) {
        this.bags = [];
        this.santa = santa;
    }
    addBag(bag) {
        this.bags.push(bag);
    }
    setSanta(santa) {
        this.santa = santa;
    }
}
exports.Sled = Sled;
