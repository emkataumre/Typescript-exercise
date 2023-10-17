import { Bag } from "./Bag";
import { Santa } from "./Santa";

export class Sled {
  santa: Santa;
  bags: Bag[] = [];

  constructor(santa: Santa) {
    this.santa = santa;
  }
  addBag(bag: Bag): void {
    this.bags.push(bag);
  }

  setSanta(santa: Santa): void {
    this.santa = santa;
  }
}
