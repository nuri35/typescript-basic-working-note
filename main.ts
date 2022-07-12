import { Product } from "./exercise/Product";
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
 *bir ornek uzerınden gidelim  bir şirkette stop takip projemız var veritabanı işşlemlerı yapacaz her veri tabanında mysql mongodb vs işlemler bellidir crud işlemleri yani ve bu mysql classı mongo db classı olsun bir class olusturdugumuzda service yani bu service clasında crud işlemleri yapılır işte bu durumlarda eğer biz  yapılması gereken crud metotlarını bir interfacede depolarsanız ve burda   tür işlemlerini yaparsınız daha sonra gider classlara dersin bu interface'i implement etmek zorundasınız işte interfaceın mantıgını anlamış oluyoruz bildigin gibi zaten
 */

export interface IDatabase {
  //bak şuan yazdıgımız bu metotlar hiç bir iş yapmıyor ayrıca türünü felanda belirlciez burda
  add(): void;
  get(): Product[];
  update(): void;
  delete(): void;
}

class Mysql implements IDatabase {
  add() {
    console.log("added");
    throw new Error("Method not implemented.");
  }
  get() {
    return [];
  }
  update() {
    throw new Error("Method not implemented.");
  }
  delete() {
    throw new Error("Method not implemented.");
  }
}

class MongoDb implements IDatabase {
  add() {
    console.log("added mongo vs");
    throw new Error("Method not implemented.");
  }
  get() {
    return [];
  }
  update() {
    throw new Error("Method not implemented.");
  }
  delete() {
    throw new Error("Method not implemented.");
  }
}

//database: IDatabase yaparak biz diyoruzki  ben sana  IDatabasi implement eden bir class gönderecegım db olarak mongo db mysql vs olabilir yanı ben bu fonksıyonu cagırdıgımda database diye bir value yollayacagım onun tipi Idatabase oluversın diyorum  bende  addDatabase(new Mysql()); diyorum  new Mysql() zaten Idatabase'i implement ettigi için  class mysql yolladıgımda oluyor . ayrıca sonuç olarak ben mongodb classı yarattıgımda   hiç biryere ellemeden onun ıcınde 1 tane yarattıgım ınterface  geçerli oluyor addDatabase(new MongoDb()); yaparak onuda çalıştırmıs olabılıoyurm cunku ondada Idatabasi implement ediyoruz ve böylelikle addDatabase fonskıyonunu degıstırmemıze gerek kalmıyor
function addDatabase(database: IDatabase) {
  //
  database.add();
}

addDatabase(new Mysql());
addDatabase(new MongoDb());

// en son not :classlardan implementleri kaldırıırsak interface kullanmasaydık  addDatabase diye fonksıoyunumuz var mysql ekle dedik mysql ekledık tabı fonksıyonun parametre kısmıda addDatabase(database:Mysql ) olacaktı ee buseferde mongo db için yap dedıgınde gıne adddatabase diye bir fonksıyon yaratmamız lazımkı onun ıcınde yanı sonuc olarak bazi şeyleri IDatabase interface diyerek ortak çatıda topluyoruz

/**
 *
 *
 * abstract class
 *bu classlarda aslında interface ile inheritancın birleşmiş hali gibi düşün hem gövdeli hem gövdesiz metotlarımızı yazabılıyoruz  başka classlar bu abstrack classlardan kalıtım yapıyor
 */

//eğer bizim bazi metotlarımız ortak ise  kopyala yapıstır yapmak yerine ortak mettotlarımızı bu classın ıcınde depoloyabilriiz mesela get metotumuz  ortak ise ; bu abstract classından kalıtıım yapan tüm classlarımız  buna otamatık sahıp olur birdaha kendı ıclerınde yazmak zorunda kalmazlar
abstract class Database {
  get() {
    console.log();
  }
  add() {
    console.log();
  }
  //fakat bunlar herkese göre degişecek bunları gövdesız olarak bırakbılrızm
  abstract update(): void;
  abstract delete(): void;
}

class Mysql2 extends Database {
  update() {
    throw new Error("Method not implemented.");
  }
  delete() {
    throw new Error("Method not implemented.");
  } //mesela kalıttık işte ortak olanları kullanmadık birdaha burda ama birde govdesızlerı örnegın delete diyelim kullanmasak hata verecektır sanki interface gibi olur bunları kalıtmadık kendımıze göre yazmamız gerekıyor bukaa
}

class MongoDb2 extends Database {
  update() {
    throw new Error("Method not implemented.");
  }
  delete() {
    throw new Error("Method not implemented.");
  }
}

function addDatabase2(database: Database) {
  //
  database.delete();
}

addDatabase2(new Mysql2()); //bu sekılde interface'in de katkısını burda sankı kullanmıs olduk
addDatabase2(new MongoDb2());
