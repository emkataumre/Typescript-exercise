import { BagType, PresentType } from "./enums";

export class Present {
  name: string;
  weight: number;
  presentType: PresentType;
  constructor(name: string, weight: number, presentType: PresentType) {
    this.name = name;
    this.weight = weight;
    this.presentType = presentType;
  }

  getPresentType(): PresentType {
    return this.presentType;
  }

  getWeight(): number {
    return this.weight;
  }
}
