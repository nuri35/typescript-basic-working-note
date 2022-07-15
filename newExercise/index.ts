// import express from "express";
// const app = express();

// app.listen(() => {
//   console.log("listen");
// });
console.log("hello word backend type");

//** gelişmiş örneklere devam  */

function logPerson(
  name: String,
  last: string,
  age?: string | number
): Promise<object> {
  return new Promise((resolve) => {
    resolve({ name, last, age });
  });
}
1;
logPerson("nurettin", "şen", 22);

type Person = {
  name: string;
  last: string;
  age: number;
};

type Dog = {
  name: string;
  last: string;
  age: number;
  cins: string;
  typ: string;
};

type DogPerson = Person & Dog;

let personDog: DogPerson;

personDog = {
  name: "saas",
  last: "ddsfd",
  age: 44,
  cins: "df",
  typ: "saa",
};

//** opsiyonel soru işaretle yapmanın başka bir yolu */

type Myobject = Partial<{
  name: string;
  age: string;
}>;

let myobject: Myobject;

myobject = {
  name: "nuri", // opsiyonel age yazmadık mesela
};

//** record type */
//yani key string olsun value boolen olsun dedım
let myobjects: Record<string, boolean>;

myobjects = {
  acikmi: false,
};

let myobjects2: Record<string, { isim: string; yas: number }>;

myobjects2 = {
  whois: { isim: "nuretin", yas: 25 },
};

//** interface again example */

//ts dosyasında bu yukardakı stıle benzer ornek

//eşittir diyerek <> içinde direk tipini belirtebiliyorum
// export interface RequestHandler<
//   P = ParamsDictionary,
//   ResBody = any,
//   ReqBody = any,
//   ReqQuery = ParsedQs
// > {
//   (
//     req: Request<P, ResBody, ReqBody, ReqQuery, Locals>,
//     res: Response<ResBody, Locals>,
//     next: NextFunction
//   ): void;
// }

interface StringBox {
  contents: string;
}

interface Box<
  Type = string | number,
  ResBody = any,
  ReqBody = any //bunları overwrite edebiliyorum

  //
> {
  contents: Type;
  x: ResBody;
  y: ReqBody;
}

let boxA: Box<boolean, string, number> = { contents: true, x: "as", y: 3 };
boxA.contents;
//2 farklı  yazılmış aynı şey
let boxB: StringBox = { contents: "world" };

boxB.contents;

import { RequestHandler } from "express";
//request mesela bir interface kullanıcı tarafından genısletebılır ve oynanabılır ama typelar oyle degıl statıctır onlar degıstırılmıyor

//zaten ts dosyasına baktıgımızda RequestHandler ıcın <> içinde neyin ne tipde olcagını belirtmiş biz belirtmemize gerek yok sonra {} bunda bir fonksıyon yapmıs ona bakarsak;

let handler: RequestHandler;
handler = (req, res, next) => {
  //
  //   req.params = ["1", "2"]; tipi ts dosyasında ParamsDictionary oldugu ıcın array türü atanamaz interface sayesinde   req: Request<P, ResBody, ReqBody, ReqQuery, Locals>, seklınde belırtmıs dosyada ornekte Request 'de bir interface
  console.log("void func");
};
console.log(handler);

/** other example */

interface myass {
  [key: string]: number;
}

let arr: myass = {
  count: 2,
};

console.log(arr);

/** other example */

interface myArr {
  [index: number]: number | string;
}

const myArray: myArr = {
  0: "selam",
  1: "nasılsın",
};

const myArray2: myArr = ["selam", "nasılsın"];
console.log(myArray, myArray2);

/** interace example functıon */

interface IProductService {
  getById(id: number): number;
  getProducts(): Array<object>;
}

/** interace example arrow functıon */

interface IProductService2 {
  (name: string, age: number, ye: number, asss: string): number; // 1 tane tanımla tanımlıcaksan bu seklınde 2.3 bu türde bir fonksıyonda kafa karısıyor
}

let myfunc: IProductService2 = (name, age, ye, asss) => {
  return age;
};

myfunc("as", 2, 2, "assa");

/** interace extend  exampke*/

interface MongoDbResponse {
  _id: string;
  createAt: string;
  updateAt: string;
}

//bir veri cektık gelen verıyı bılıyorsunuz ama  mesela id createAt gibi şeyleride elimizle yazmk istemıyoruz artık ozmaan ;

//kitapları kaydetmisiz mesela veritabanına   veri tabanından gelen kitapların donuş tipini ayarlıcaz burada MongoDbResponse'daki özellikleri de sahip olmak için kalıtırız
interface BookResponse extends MongoDbResponse {
  name: string;
  date: string;
}

//veri ceken bir func yazalaım

function getBooks(): BookResponse {
  return {
    _id: "2133232",
    createAt: "assa",
    updateAt: "dsdffd",
    name: "xxx kiptap",
    date: "bilmem kacıncı gun",
  };
}

//** farklı class ornegı */

class Students {
  public name: string; //burda tanımlaman lazım this.name hata verir yoksa
  constructor(name: string, last: string) {
    this.name = name;
  }
  yazdır() {
    console.log(this.name);
  }
} //bunun yerine daha kısa yolu var

class StudentsKısayol {
  constructor(public name: string, private last: string) {
    this.name = name;
  }

  yazdır() {
    console.log(this.name);
  }
}

let a = new Students("nuri", "şen");
let b = new StudentsKısayol("nuri", "şen");

/**TypeScript Dersleri / Yardımcı Tipler (Utility Types) */

interface Personobj {
  name: string;
  last: string;
  age: number;
}
//Person dersek omit yerine name last age hepsını yazmamızlazım omit diyerek <> içine istemedigimiz tipi yazarak cıkartacka
let people: Omit<Personobj, "age">;

people = {
  name: "nuri",
  last: "şen",
};
/**
 *
 */
interface Obj {
  memleket: string;
  kutuk: string;
}

/** interface ve type arasında fark ıcın burda guzel anlatmıs   https://hvsonmez.medium.com/typescript-intersection-type-ve-interfaces-6f65fdcee5ea */

type AsdasTip = Obj; //exmp

/** function example*/

function writersExmp(val: { name: string; age: number }): object {
  return val;
}
//parametredeki tipi alabilriz
type AsdasTip2 = Parameters<typeof writersExmp>[0]; //[0] yap cunku  parametrenin tiplerini alırken oyle yap yoksa hata verir

let cubuk: AsdasTip2 = {
  name: "sdds",
  age: 22,
};

/**
 * readonly type
 */

interface PersonEx {
  name: string;
  age: number;
  married: boolean;
}

let cx: PersonEx = { name: "nurettin", age: 22, married: false };

interface PersonExa {
  name: string;
  age: number;
  married: boolean;
}

let cxaa: Readonly<PersonExa>;
cxaa = {
  name: "nurettin",
  age: 22,
  married: false,
};
// cxaa.age = 22 atama yapılmaz readonly cunmku

/**
 * Pick
 */
//PersonEx interfacesinden sadece name sahıp olsun ıstıyoruz
let abx: Pick<PersonEx, "name"> = {
  name: "denız",
};

/**
 *Exclude
 */

type qw = Exclude<string | number | (() => void) | boolean, number>; //bu sekılde number'ları yok say diyoruz virgul ile

let lsqz: qw = () => {
  return 1; //voiddden dolayı yoksayar
};

/**
 * return type
 */
function returnNumberFn(): string {
  return "25";
}
//ReturnType ile fonksıyonun dondurdugu şeyin tipini alır
const myvalue: ReturnType<typeof returnNumberFn> = "dsd";

/**
 * enum
 */

enum Notifaction {
  success,
  error,
  warning,
}

function sendNotfn(params: Notifaction): string {
  //
  if (params === 0) {
    return "good success";
  }
  return "ohhh nooo";
}

sendNotfn(0);

/**
 *
 * symbol
 */

const sym = Symbol(); //bunlar uniq oldugu ıcınde const yap degıskenı
let obj = {
  [sym]: "value", //key olara kullanaılabılır
};
console.log(obj[sym]); // "value" symbollar uniqdir başka bir symbol olusunca onla eşit degildir sym2 === sym3; // false, symbols are unique
