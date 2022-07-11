"use strict";
const selam = () => {
    console.log("selamlar diliyorum");
};
selam();
const myArr = ["coding", "with", "enjoy"];
const copyArr = [...myArr];
let x = "assa";
let a;
a = ["1", "2"];
var Colors;
(function (Colors) {
    Colors[Colors["pembe"] = 0] = "pembe";
    Colors[Colors["ye\u015Fil"] = 1] = "ye\u015Fil";
    Colors[Colors["kr\u0131mz\u0131"] = 2] = "kr\u0131mz\u0131";
})(Colors || (Colors = {}));
let bgColor = Colors.pembe;
bgColor = Colors.yeşil;
let productA;
let deneme = true;
let notSureType;
notSureType = 25;
let notSureTypetwo;
notSureType = 25;
deneme = notSureTypetwo;
let message;
message = "asas";
const newMessage = message.toLocaleLowerCase();
const newMessagetwo = message.toLocaleLowerCase();
let user = {
    name: "nuri",
    age: 22,
    product: "tv",
};
let job = { meslek: "polis", name: "nuri", age: 22, product: "tv" };
user = job;
let user2;
user2 = {
    name: "hasan",
    age: 55,
    role: "admin",
};
let value = user2;
value = {
    name: "adıvar",
    age: 55,
    role: "admin",
};
let featur;
featur = {
    name: "reddd",
    age: 12,
    color: { name: "renkısmı", hex: "aaabbc", feature: "öne" },
};
const add = (num1, num2) => {
    console.log(num1 + num2);
    return num1 + num2;
};
add(2, 2);
const userLogin = (first, last) => {
    console.log(first + " " + last);
};
userLogin("nurettin", "şen");
let newEmployee;
newEmployee = {
    id: 1,
    name: "nurettin",
    age: "25",
};
let newEmployeeCla;
newEmployeeCla = {
    id: 1,
    name: "hasan",
    age: "25",
};
class Car {
    constructor(id, name, age) {
        this.getSalary = (num1) => {
            return 1000;
        };
    }
}
let newCar = new Car(2, "adam", 22);
const travelTo = (point) => {
    return 1000;
};
travelTo({ x: 1, y: 2 });
const travelTo2 = (value) => {
    return value.x + value.y;
};
travelTo2({ x: 1, y: 2 });
class Taxi {
    constructor(location, color) {
        this.currentLocation = location;
    }
    travelTo2(point) {
        console.log(`taxi: " ${point.x} konumuna gidiyor`);
        return 1000;
    }
}
const newTaxi = new Taxi({ x: 2, y: 5 }, "siyah");
newTaxi.travelTo2({ x: 1, y: 2 });
console.log(newTaxi.currentLocation);
class Taxi2 {
    constructor(location, color) {
        this.location = location;
        this.color = color;
    }
    travelTo2(point) {
        console.log(`taxi: " ${point.x} konumuna gidiyor nerden gidiyor ${this.location.y}  dannnnn gidiyor`);
        return 1000;
    }
}
const newTaxi2 = new Taxi2({ x: 2, y: 5 }, "siyah");
newTaxi2.travelTo2({ x: 1, y: 2 });
class Taxi3 {
    constructor(location, color) {
        this.location = location;
        this.color = color;
    }
    travelTo2(point) {
        console.log(`taxi: " ${point.x} konumuna gidiyor nerden gidiyor ${this.location.y}  dannnnn gidiyor`);
        return 1000;
    }
    getLocation() {
        return this.location;
    }
    setLocation(value) {
        if (value.x < 0 || value.y < 0) {
            throw new Error("error");
        }
        this.location = value;
    }
}
const newTaxi3 = new Taxi3({ x: 2, y: 5 }, "siyah");
newTaxi3.getLocation();
class Taxi4 {
    constructor(_location, _color) {
        this._location = _location;
        this._color = _color;
    }
    travelTo2(point) {
        console.log(`taxi: " ${point.x} konumuna gidiyor nerden gidiyor ${this._location.y}  dannnnn gidiyor en son class`);
        return 1000;
    }
    get location() {
        return this._location;
    }
    set location(value) {
        if (value.x < 0 || value.y < 0) {
            throw new Error("error");
        }
        this._location = value;
    }
}
const newTaxi4 = new Taxi4({ x: 2, y: 5 }, "siyah");
newTaxi4.travelTo2({ x: 1, y: 9 });
newTaxi4.location = { x: 1, y: 7 };
let learnLocation = newTaxi4.location;
console.log(learnLocation);
//# sourceMappingURL=main.js.map