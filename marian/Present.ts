import { PresentType } from "./enums";

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

  print(): void {
    console.log(
      "Present name:",
      this.name,
      "\n",
      "Present weight:",
      this.weight,
      "\n",
      "Present type:",
      this.presentType
    );
  }
}
