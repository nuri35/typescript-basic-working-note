import { Taxi4 } from "./taxi";

const newTaxi4 = new Taxi4({ x: 2, y: 5 }, "siyah");
newTaxi4.travelTo2({ x: 1, y: 9 });

newTaxi4.location = { x: 1, y: 7 };

let learnLocation = newTaxi4.location;
console.log(learnLocation);
