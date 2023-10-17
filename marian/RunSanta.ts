import { Bag } from "./Bag";
import { Present } from "./Present";
import { Santa } from "./Santa";
import { Sled } from "./Sled";
import { BagType, PresentType } from "./enums";

const mySanta: Santa = new Santa("Mos Craciun", 200);
const mySled: Sled = new Sled(mySanta);

const myBag: Bag = new Bag(25, BagType.paper);
const ionelas: Present = new Present("supriza pt Ionela", 8, PresentType.hard);
const marians: Present = new Present("supriza pt Marian", 3, PresentType.soft);

myBag.addPresent(ionelas);
myBag.addPresent(marians);

mySled.addBag(myBag);
mySled.addPresentAndNewBagIfNeeded(marians);

mySled.print();
