import { Sled } from "./Sled";
import { Santa } from "./Santa";
import { Bag } from "./Bag";
import { BagType, PresentType } from "./enums";
import { Present } from "./Present";

const mySanta: Santa = new Santa("Emil", 20);
const mySled: Sled = new Sled(mySanta);
const myBag: Bag = new Bag(25, BagType.canvas);
const emilPresent = new Present("forEmil", 8, PresentType.hard);
const mathiasPresent = new Present("forMathias", 3, PresentType.soft);

myBag.addPresent(emilPresent);
myBag.addPresent(mathiasPresent);
mySled.addBag(myBag);
