"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Present = void 0;
class Present {
    constructor(name, weight, presentType) {
        this.name = name;
        this.weight = weight;
        this.presentType = presentType;
    }
    getPresentType() {
        return this.presentType;
    }
    getWeight() {
        return this.weight;
    }
}
exports.Present = Present;
