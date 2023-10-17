import { Bag } from "./Bag";
import { Present } from "./Present";
import { Santa } from "./Santa";
import { BagType } from "./enums";

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

  addPresentAndNewBagIfNeeded(present: Present): void {
    const index = this.bags.findIndex((bag: Bag) => bag.totalWeight() + present.getWeight() <= bag.maxWeight);
    const newBag = new Bag(10, BagType.canvas);
    if (index === -1 || !this.bags[index].addPresent(present)) {
      newBag.addPresent(present);
      this.bags.push(newBag);
    }
  }

  print(): void {
    this.bags.forEach((bag) => bag.print());
  }
}
