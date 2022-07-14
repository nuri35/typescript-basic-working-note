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
  (name: string, age: number, ye: number, asss: string): number; // 1 tane tanımla tanımlıcaksan arrow func seklınde
}

let myfunc: IProductService2 = (name, age, ye, asss) => {
  return age;
};

myfunc("as", 2, 2002, "d");

/** interace extend  exampke*/
