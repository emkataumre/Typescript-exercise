import { Present } from "./Present";
import { BagType } from "./enums";
export class Bag {
  maxWeight: number;
  bagType: BagType;
  presents: Present[] = [];

  constructor(maxWeight: number, bagType: BagType) {
    this.maxWeight = maxWeight;
    this.bagType = bagType;
  }

  addPresent(present: Present) {
    this.presents.push(present);
  }
}
