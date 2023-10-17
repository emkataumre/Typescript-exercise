import { Present } from "./Present";
import { BagType, PresentType } from "./enums";

export class Bag {
  maxWeight: number;
  bagType: BagType;
  presents: Present[] = [];

  constructor(maxWeight: number, bagType: BagType) {
    this.maxWeight = maxWeight;
    this.bagType = bagType;
  }

  addPresent(present: Present): boolean {
    const maxWeightExceded: boolean = present.getWeight() + this.totalWeight() >= this.maxWeight;
    const softInPaper: boolean = present.getPresentType() === PresentType.soft && this.bagType === BagType.paper;

    if (!softInPaper && !maxWeightExceded) {
      this.presents.push(present);
      return true;
    } else {
      return false;
    }
  }

  totalWeight(): number {
    let totalWeight = 0;
    this.presents.forEach((present) => (totalWeight += present.getWeight()));
    return totalWeight;
  }

  print(): void {
    console.log("Bag max weight:", this.maxWeight, "of type:", this.bagType);
    this.presents.forEach((present) => present.print());
  }
}
