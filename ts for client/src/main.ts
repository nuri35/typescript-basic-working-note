import "./style.css";
import { denemeFn, denemeFnType } from "./exmpTodos";

/** exercise void error */
type voidFunc = () => void;

let f1: voidFunc;

f1 = function f1() {
  return false;
};

// function f2(): void { normal fonksıyonlar ıcınde bu yazılımda hata verecektır
//   return false; //hata verir
// }

/**
 * tip parametreleri
 */
//

interface Deneme {
  text: string;
  res: boolean;
}

function Returner<T = number>(par: string) {
  //
  console.log(typeof par);
}

// Returner(false); calısıtırsan hata verir

function Returner2x<T = number>(par: T) {
  //
  console.log(typeof par);
}

Returner2x(["ada", 1]); //hata vermez üstüne gelip bakarsın

function Returner2xx<T = number>(par: string) {
  //T'yi içerde kullanırsın
  // let xsa: T = bla bla bla hata vermıcek birşey eklenebilri
}

Returner2xx<boolean>("false");

function deneme<T = number>(par: T) {
  //
  // console.log(typeof par);
}

deneme<boolean>(true);

function Returnerabc<T = Deneme>(par: T) {
  // let a: T;
  // a = par;
  // return a;
}

// Returnerabc<string>(2); //hata verir
Returnerabc<number>(2); //good
//Returnerabc(2); ve üstte Returner<T = Deneme> olsa dahi sen Returner(2); dedıgın ıcın orotmatıktman function Returner<2>(par: 2): 2 seklınde olur ve  Returner<T = Deneme> burayı overwrite eder hata vermez  fakat Returner<other tip>({ text: "ana" }); dersen başka tip olarak overwrite eder ayrıca uygulamassan o tipin kurallarını bu sefer hata verir çünkü belirtiyorsun <> yaparak en son  Returner<Deneme<({ text: "ana" }); diyerek overwrite etmene gerek yok zaten fonksıyonda o gine <> belirttiigin için uygulamassan kuralı hata verir

/**
 * eaxample
 */
//
//  [string, any][] buna şaşma aynı şöyle düşün Product[] yani product interface oldugunu dusun içinde key value'lar var bunun dışındaki olacak şeyde birarray yani [{}] şeklinde  burdan yola çıkarak bu [string, any][]'da  [["kadir","ana"]]
function createHeader<T = [string, any][]>(params: T) {
  //
  // return params;
}

createHeader(true);

// extends ile yukardaki fonskıyon gibi yapamıyoruz
function createHeader2<T extends string | [string, any][]>(params: T) {
  //
  return params;
}

// createHeader2(true); hata verri ama params: false dersen hata vermez

createHeader2([["adana", 25]]); //burda <> yapmasanda  createHeader2 fonskyonu parametresinde belirttihin türe sadık kalmalısın

// createHeader2<number>([["adana", 25]]); // createHeader2 fonksıyonda belırtılen <>'deki tür tanımlamalarını secebılrısn

// createHeader2<string>("as");

/****
 *
 *
 *
 */

interface Abc<P = string, CarCount = number> {
  text: P;
  count: CarCount;
}

let a: Abc<boolean, string>; //tipleri overrite etmiş olduk

// a = {
//   text: "sasa",
//   count: 2,
// }; hata verecektır

a = {
  text: false,
  count: "sayıdır",
};

/***
 *
 *
 *
 */

class Producta {
  constructor(
    public id: number,
    public name: string,
    public category?: string
  ) {}
}

let arr =
  new Array() <
  Producta > // Array'e tıkladıgında gorcenkı <T > seklınde alıyormus  oda Producta  ondan dolayı biz yenı olusturulan arrayın ıcınde Producta turunde bırşey kullancagımızı soyluyoruz teyıt ıcın lutfen new Array'ye tıkla anlıcan
  /***
   *
   *
   */ //EXMP TODOS DOSYASINA BAK ORNEK VAR

  denemeFn();

interface TodoExm {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const val = denemeFnType<TodoExm>(
  "https://jsonplaceholder.typicode.com/todos/4"
);
val
  .then((e) => {
    console.log(e);
  })
  .catch((err) => {
    console.log(err);
  });

/***
 *
 * exmp aklıma gelen
 */
type ABC<T> = [description: T];

let myArr: ABC<string | number>;

myArr = ["tanımalmadır"];

/**
 *
 * bir diziyi tuple yapmak ıstıyorsanız
 */

type ABCdenem<T> = [description: T];

let myArr2: ABCdenem<string | number>; // bunu nasıl tuple yaparız
let forTuple: [string, number]; //böyle

//this is tuple
var employee: [number, string] = [1, "Steve"];
const employee2: [number, string] = [2, "Steve"]; //constdan dolayı 1 kere atama yaparsın onun yerıne let kullanabılrısn

employee2.push(); // buna ızın verır ama

//pekı *** bir degerın kendısı olmasını ıstıyorsan bır objede tip degılde şöyle

const myObj = {
  name: "kadir",
  age: "22",
}; // tip olarak belırledı

const myObj2x: {
  name: "kadir";
  age: "22";
} = {
  name: "kadir",
  age: "22",
};

myObj2x.name = "kadir"; //illa kadir olması gerektı buda böyle bilgi olsun

/**
 *
 * arrayı sımdı readonly yapmak ıstedıgımızde
 */

const myarxas = Object.freeze(["ada", 2]); // readonly T[] seklınde donduruyormus dolayısıyla  freeze uzerıne gelırsen ne parametresı verıyorsan o turde oluyor <> buranın içi  ama reeadonly seklındeymıs dolaysyla push vs bıle kulanamazsın

// myarxas.push() not use

const myX: readonly any[] = ["as"];

// myX = 4 hata verır readonly cunku

const myarxasTypeByObj = Object.freeze({ name: "kerım" }); //başka bir freeze'ye denk gelır freeze tıkladıgımzıda  T extends {[idx: string]: U | null | undefined | object} demıs farklı tür verirsen Object.freeze() kısmına baska freeze'ye denk gelır extends dedıgı içinde zaten Object.freeze({name:"kerım"}) ustune geldıgınde extends'dekı kabul olur  tabı buda readonlydır

//örnek fonsıyonda kullanalım readonylımızı

function isExisting<T extends readonly any[]>(
  array: T,
  child: any
): ABCdenem<boolean> {
  //ABCdenem<any> yerıne tuple yapabırlsın [boolen]  tuple kullanmak daha mantıklı olabılır

  const index = array.findIndex((value) => value === child);

  if (index >= 0) {
    return [true]; // true aslında  ABCdenem arrayındekı descriptiona denktır
  }

  return [false];
}

const [existing] = isExisting(myarxas, 25);

console.log(existing); //true yada false verır

/**
 *
 * condition types
 *
 */

type ArrxDnm<T> = [];

type other = [];

let aabh: number[];
aabh = [4, 1, 2, 3, 4]; // istedifgin kadar number ekleyebılrsın array ıcıne ama number turunde olcak

let axx: ArrxDnm<any>;
// axx = ["as",1,2,3,4] //olmaz  ArrxDnm tipi atanmış  bu daga cok specifik alanlar belırlemek ıcın olabılır böyle hata veriyor

let otherx: other;
// otherx = [4,1,2,3,4] other bu bir 0 ogeden olusan array tipinde  biz 5 tane deger vermısız hata verır

type ToArr<T> = T; // = T dedık ıstersen obje de array de yanı burda  suan ToArr T donduruyormus

type c = ToArr<number>; //  böyle yaparsan c ' de number dondurur artık  ToArr<number>'da T number oluyor  ToArr ozaman number dondurur dolayısıyla c'ye atadıgımız ıcın type olarak c artık number dondurur.

let axxas: c;
axxas = 4; //perfect

type ToArrDn<T = string> = T[];

type Arx = ToArrDn<number>; //mesela burda koşulları devreye sokabılrız mesela sadece strıng ve number dızısı uretmek ısteyelım extends kullanabırlıaz

let axxa1s: Arx;
axxa1s = [1, 2, 3, 4, 5, 6]; //perfect

type ToArrDnas<T extends string | boolean> = T[];

type Arxas2 = ToArrDnas<string>; //mesela burda koşulları devreye sokabılrız mesela sadece strıng ve number dızısı uretmek ısteyelım extends kullanabırlıaz yada

/**
 *
 * tip kullanabılrıa
 */

type condTtp<T> = T extends string | boolean ? T[] : never;

type condTypeby = condTtp<number>; //never olur hata vermez ama artık never olur birşey yapamaz

/**
 *
 * tip kullanabılrıa
 */

class Robot {
  genId = "sdlkklkl24+kldkdffdopoplsdlk";
}

class Human {
  tcId = "kfopopptrğpfvöfcxö ö alqwşwlşl^+%lşdflfdldf";
}
//yanı condition type yaptık T human ise seklınde
type GetIdentfy<T> = T extends Human
  ? T["tcId"]
  : T extends Robot
  ? T["genId"]
  : never;

let user: GetIdentfy<Human>;
//  user = 2 //hata verır
user = "a";

function getIdentifier<T>(param: T): GetIdentfy<T> {
  // yanı burası : T["tcId"] busekılde oluyor yanı strıng dondurmek lazım
  //@ts-ignore // bunu sor hocaya
  return param.tcId;
}

const id = getIdentifier(new Human());
console.log(id);
const neverid = getIdentifier(15);
console.log(neverid); //undefined doner asla birşey atayamazsın .push vs dıyemıyorsunda never yanı asla dönmuyor birşey

/***
 *
 *
 *
 *
 *
 */

//   type MessageOf<T> = diyerek  türünü belırtıyorsun
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

const myMesage = {
  message: "SELAMLAR",
};

let yMessage: MessageOf<typeof myMesage>; //typeof ile türünü verdik başka kullanım **********

yMessage = "selamm";

/**
 *
 *
 * TypeScript Dersleri / Infer
 */

function myFn() {
  return 100;
}

type MyFunctionReturnType = ReturnType<typeof myFn>; // fonskıyonun turunu aldık  oda number type MyFunctionReturnType = diyerek eşitin karsısında yazdık yanı number yazıldı  type MyFunctionReturnType  turu number oldu

//ReturnType uzerıne geldıgımızde infer goruyoruz  bu nedır *********

//unutma typelarda eşittirin karşısında tür belirtirsin obje array vs vs
type returnT<T, C> = T extends (...args: unknown[]) => C ? C : never;

type MyFunctionR = returnT<typeof myFn, {}>; // 2.parametreyide vermem lazım C'ya yoksa hata verıyor {} verelım sımdılık

type returnT2<T> = T extends (...args: unknown[]) => infer C ? C : never;

type MyFunctionR2 = returnT2<typeof myFn>; //c'nın orda infer kullanmasam hata verıyor <> kısmıdna 1 tane T var sadece ama ve eger fonksıyonsa tıpı kı fonksıyon tıpı  returnT2 tipi  c olsun demısız ama c yok hata verır işte infer dedık c number oldu cunku fonksıyon number dondurdugu ıcın

/***
 *
 * başkaaa
 */

function myFn2(
  a: Promise<Array<{ [key in string]: number }>>,
  b: String,
  c: boolean
) {
  return 100;
}

type FirstParameterType<T extends (...args: any[]) => unknown> = T extends (
  firstArg: infer F, //aslında firstarg'ın degerını infer ile f'e koyduk
  ...args: any[]
) => unknown
  ? F
  : never;

type MyfuncParamaterx = FirstParameterType<typeof myFn2>;

/***
 *
 *  Tip Doğrulamak (Type Predicate)
 */

function maisan(params: any) {
  if (Array.isArray(params)) {
    //gibi birşey yapabirliz array oldgunu anlamak ıcın params nokta dıyınce arrayle ılgılı şeylerıde kullanıyoruz
  }
}
const newDnArr = [1, 2, 3];
const notArrValue = "deneme amaclı strıng";
function maisan2(params: any) {
  //peki ya böyle olsaydı kendı isarray fonskkıyonumuzu yazıp array oldgunu anlasaydık sadece boolen doncektı arrayle ılgılı birşey ypaamıcaktık işte bu durumda tip dogrulama karsımıza cıkıyor  yanı  arg is any[] seklınde
  if (isArray(params)) {
    // params.length vs seklınde array metotlarını kullanabıldım
    console.log(params.length);
  } else {
    console.log("calısmadı array degıl" + params);
  }
}

maisan2(newDnArr);
maisan2(notArrValue);

function isArray(arg: any): arg is any[] {
  if (arg instanceof Array) {
    //  arg.find instance array dedıgım ıcın kullanabılrıdım fakat return true dedıgım ıcın  maisan2 fonksıyonunda  if kısmında kullanamıyordum  arg is any[] tip parametresı ekleyerek cozduk bu ısı
    return true;
  }
  return false;
}

/*** örnek */

class Personden {
  private id: string;
  public name: string;
  public surname: string; // tür ataması yapalım constrouctor ıcındekı name ıcın yoksa kızıyor böyle yapmak yerıne aşagıdakı gıbı yap
  constructor(name: string, surname: string) {
    this.id = Math.random().toString();
    this.name = name;
    this.surname = surname;
  }
}

class PersonlıkeThat {
  // id: string; // bunu yazmassan yada constructorda yazmazsan tur tanımlamasını sana kızıyor ya orda ya cosntrcutorda belırtmen lazımkı constructır {} parantez kısmında this.id dedıgınde türleri belirtilmiş olsun ben artık  this.id'e 2 number veremıyorum onun ıcın this.name ile constructordakı isimde aynı olması lazım
  constructor(public name: string, public surname: string, private id: string) {
    this.id = Math.random().toString();
    this.name = name;
    this.surname = surname;
  }
  asx(): void {
    console.log(this.id + "helloo");
  }
}

const denemaxasfd = new PersonlıkeThat("asa", "dsdf", "2144354");
denemaxasfd.asx();

function mainobj(arg: any) {
  if (isPerson(arg)) {
    console.log("person" + arg.name);
  } else {
    console.log("obje degıl person degıl" + arg); //arg. dedııgmızde gelmıyor
  }
}

mainobj("asassaStringArray degıl");
mainobj(new PersonlıkeThat("fdk", "lkglk", "4300"));

function isPerson(arg: any): arg is PersonlıkeThat {
  //burda PersonlıkeThat bunu verdık unutma classların tipi kendisidir tipi böyle veriyoruz yani
  //instance of kullandık ya PersonlıkeThat objesı kendısı classın tipi oluyor yanı classların tipi kendısıdır.onunla ılgılı bılgıyı verecektır burda instanceof dedıgımz ııcın .  arg.name felan gelebılyır nasıl array instance of kısmında nokta diyip onun metotlarını alabılyıorsam
  if (arg instanceof PersonlıkeThat) {
    return true;
  }
  return false;
}

/**
 *
 * Obje Tiplendirme 2
 *
 */

const myObject = {
  name: "kadir",
  channel: "viorene",
  age: 22,
};

// myObject.name diyip calıstırmak yerıne fonksıyon olarak ulaşmak ıstesem   myObject.name() seklınde yapınca name'ın degerı donsun pekı nasıl yapaca işte cevabı functionfy

function functionfy<T extends { [key: string]: any }>(param: T) {
  //tip belırlıyelım unutma bununla  [key: keyof typeof param]: bu aynı şey  [key: keyof T]:
  type FunctionObj = {
    [Key in keyof T]: string; // yan ıburda dıyoruz kı FunctionObj objenın ıcındekı key T objemızın anahtarlarından olsun
    //ayrıca  yukarda myObject age number ama burda value kısımların hepsı strıng dıyor  [Key in keyof T]: string; bu şekilde dolayısyla functionfy(myObject).age dedıgmızde gorecegızkı age strıng oluyor artık
  };

  type FunctionObjtwo = {
    [Key in keyof T]: T[Key];
  }; // bunu yaparsam functionfy(myObject).age artık age number dıyeecek denersın yanı myObject dekı tıpler olur

  type FunctionObjtwoFn = {
    [Key in keyof T]: () => T[Key];
  }; // fonksıyon calıstırmamız gerekır bu sekılde yaparsakda

  return param as FunctionObjtwoFn; // belirtmem lazım
}

// functionfy(myObject).age vs ulasabıldık

console.log(functionfy(myObject).age() + " " + " burdayım");
