const selam = () => {
  console.log("selamlar diliyorum");
};

selam();

const myArr = ["coding", "with", "enjoy"];

const copyArr = [...myArr];

let x = "assa";

let a: any;

a = ["1", "2"];

enum Colors {
  "pembe",
  "yeşil",
  "krımzı",
}
let bgColor = Colors.pembe;
bgColor = Colors.yeşil; // bu degıskene yanı enum deger atayabılrısn bgColor = "strıng" dedıgınde atayamıyorsun cunku  bgcolora enum turunde bırşey atanmıs

let productA: [string, number];

// productA = ["araba", "xx"]; hatalı

let deneme = true;

let notSureType: unknown;
notSureType = 25;

// deneme = notSureType; hatalı atamadır boolen turune unknown atayamayız

let notSureTypetwo: any;
notSureType = 25;

deneme = notSureTypetwo;

/**
 *
 *
 *type assertion
 *
 *
 */

let message: any;

message = "asas";
const newMessage = (<string>message).toLocaleLowerCase(); //tip olarka any oldugu için hangi tür tipin mtotlarını getircegını bılemez ondan böyle yaptık

const newMessagetwo = (message as string).toLocaleLowerCase();

/**
 *
 *
 *object type
 *
 *
 */

let user = {
  name: "nuri",
  age: 22,
  product: "tv",
}; // burdada uzerıne gelınce typscript objesını görebılrsın bunu farklı sekıldede tanımlayabırlsın ama otomatıkmen yapılıyor

let job = { meslek: "polis", name: "nuri", age: 22, product: "tv" }; //mesela product sildiginde job objesınde, usera eşitlicen ama userda product  var dolayısıyla o key olacak çünkü yukarda user objesınının uzerıne gelınce typescript objesı gorunuyor o key alanı olcak ynai  ayrıca jobda yenı key ekleyebilrisin
user = job;

let user2: {
  name: string;
  age: string | number;
  role: "admin" | "user";
};

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

/**
 *
 *
 * custom type
 */

type Color = {
  name: string;
  hex: string;
  feature: "yukarı" | "aşagı" | "öne";
};

let featur: {
  name: string;
  age: string | number;
  color: Color;
};

featur = {
  name: "reddd",
  age: 12,
  color: { name: "renkısmı", hex: "aaabbc", feature: "öne" },
};

/**
 *
 *
 * functions
 * default, optional params
 */

const add = (num1: number, num2: number) => {
  console.log(num1 + num2);
  return num1 + num2;
};

add(2, 2);

const userLogin = (first: string, last?: string) => {
  console.log(first + " " + last);
};

userLogin("nurettin", "şen");

/**
 *
 *
 * interfaces
 *
 */

interface Employee {
  readonly id: number;
  name: string;
  age: number | string;
  // getSalary: () => number;
}

let newEmployee: Employee;

newEmployee = {
  id: 1,
  name: "nurettin",
  age: "25",
};

// newEmployee.id = 3; readonly oldugu ıcın atama yaptırmıyor

/**
 *
 *
 * extending interfaces
 *
 */

interface Person {
  name: string;
  age: number | string;
}

interface Employees extends Person {
  readonly id: number;
}

let newEmployeeCla: Employees;

newEmployeeCla = {
  id: 1,
  name: "hasan",
  age: "25",
};

/**
 *
 *
 * implement interfaces
 *
 */

interface EmployeeExm {
  readonly id: number;
  name: string;
  age: number | string;
  getSalary: (num1: number) => number;
}

// class EmpExm implements EmployeeExm {
//   //bir interfac'i classa impelemnt etmek eger  EmployeeExm'ı implement ediyorsak onun özelliklerini classa eklemen lazım
//   id: number;
//   name: string;
//   age: number | string;
//   //ayrıca class içinde tür tanımı yapıyoruz constructura
//   constructor(id: number, name: String, age: number) {}

//   getSalary = (id: number) => {
//     return 1000;
//   };
// }

// let processEmployeNew = new EmpExm(1, "nurettin", 11);
// console.log(processEmployeNew);

class Car {
  constructor(id: number, name: String, age: number) {}

  getSalary = (num1: number) => {
    return 1000;
  };
}
let newCar = new Car(2, "adam", 22);

/**
 *
 *
 * exmp
 *
 */

const travelTo = (point: { x: number; y: number }) => {
  //.,
  return 1000;
};

travelTo({ x: 1, y: 2 });

/**
 *
 *
 * exmp
 *
 */

interface Point {
  x: number;
  y: number;
}

const travelTo2 = (value: Point) => {
  //.

  return value.x + value.y;
};

travelTo2({ x: 1, y: 2 });

/**
 *
 *
 * exmp
 *
 */

interface Vehicle {
  currentLocation: Point;
  travelTo2(point: Point): Number;
}

class Taxi implements Vehicle {
  constructor(location: Point, color: string) {
    this.currentLocation = location; // var olan this.currentLocation'a bir atama yapıyorsun oda point türünde olmalı
  }
  // ..
  currentLocation: Point; // buraya currentLocation degıskenı yazıldıysa  ürettigim nesne üzerinden buna ulaşmamak adına private yazarız tek tek istedigimize private yazabilriiz
  travelTo2(point: Point) {
    console.log(`taxi: " ${point.x} konumuna gidiyor`);
    return 1000;
  }
}

const newTaxi = new Taxi({ x: 2, y: 5 }, "siyah");
newTaxi.travelTo2({ x: 1, y: 2 });
console.log(newTaxi.currentLocation); //x ve y bilgiine ulaşabildik

/**
 *
 *
 * exmp
 *
 */

interface Vehicle2 {
  travelTo2(point: Point): Number;
}

class Taxi2 implements Vehicle2 {
  constructor(private location: Point, private color: string) {
    //private oldugu için tanımlamadık burda yanı artık location bilgisi
  }

  travelTo2(point: Point) {
    console.log(
      `taxi: " ${point.x} konumuna gidiyor nerden gidiyor ${this.location.y}  dannnnn gidiyor`
    );

    return 1000;
  }
}

const newTaxi2 = new Taxi2({ x: 2, y: 5 }, "siyah");
newTaxi2.travelTo2({ x: 1, y: 2 });

/**
 *
 *
 * exmp diffrenet
 *
 */

interface Vehicle3 {
  travelTo2(point: Point): Number;
}

class Taxi3 implements Vehicle3 {
  constructor(private location: Point, private color: string) {}

  travelTo2(point: Point) {
    console.log(
      `taxi: " ${point.x} konumuna gidiyor nerden gidiyor ${this.location.y}  dannnnn gidiyor`
    );

    return 1000;
  }
  //kontrollu bir şekilde get ve set işlemlerimizi yapabiliriz private olan bir değer üzerinden işte bunu exmp set get yanı bir aşagıdaki gibi yapabirliza
  getLocation() {
    return this.location;
  }
  setLocation(value: Point) {
    if (value.x < 0 || value.y < 0) {
      throw new Error("error");
    }
    this.location = value;
  }
}

const newTaxi3 = new Taxi3({ x: 2, y: 5 }, "siyah");
newTaxi3.getLocation();

/**
 *
 *
 * exmp set get
 *
 */

interface Vehicle4 {
  travelTo2(point: Point): Number;
}

class Taxi4 implements Vehicle4 {
  constructor(private _location: Point, private _color: string) {}

  travelTo2(point: Point) {
    console.log(
      `taxi: " ${point.x} konumuna gidiyor nerden gidiyor ${this._location.y}  dannnnn gidiyor en son class`
    );

    return 1000;
  }

  get location() {
    return this._location;
  }
  set location(value: Point) {
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

/**
 *
 *
 * example interfaces reality
 *
 */
