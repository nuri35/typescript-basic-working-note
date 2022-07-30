import "./style.css";

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

Returner2x(["ada",1]); //hata vermez üstüne gelip bakarsın

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
  ) {
   
  }
}



let arr = new Array<Producta> // Array'e tıkladıgında gorcenkı <T > seklınde alıyormus  oda Producta  ondan dolayı biz yenı olusturulan arrayın ıcınde Producta turunde bırşey kullancagımızı soyluyoruz teyıt ıcın lutfen new Array'ye tıkla anlıcan


/***
 * 
 * 
 */ //EXMP TODOS DOSYASINA BAK ORNEK VAR 
 import { denemeFn, denemeFnType } from './exmpTodos';
 denemeFn()

 interface TodoExm {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const val =  denemeFnType<TodoExm>("https://jsonplaceholder.typicode.com/todos/4");
val.then(e=>{
  console.log(e)
}).catch(err=>{
  console.log(err)
})


/***
 * 
 * exmp aklıma gelen
 */ 
 type ABC<T> = [
  description: T
 ];

let myArr : ABC<string|number>

myArr = ["tanımalmadır"]


/**
 * 
 * bir diziyi tuple yapmak ıstıyorsanız
 */


 type ABCdenem<T> = [
  description: T
 ];

let myArr2 : ABCdenem<string|number> // bunu nasıl tuple yaparız
let forTuple : [string,number]//böyle


//this is tuple
var employee: [number, string] = [1, "Steve"];
const employee2: [number, string] = [2, "Steve"]; //constdan dolayı 1 kere atama yaparsın onun yerıne let kullanabılrısn

employee2.push() // buna ızın verır ama

//pekı *** bir degerın kendısı olmasını ıstıyorsan bır objede tip degılde şöyle

const myObj = {
  name:"kadir",
  age:'22'
} // tip olarak belırledı

const myObj2x : {
  name:"kadir",
  age:'22'
} = {
  name:"kadir",
  age:'22'
}


myObj2x.name = "kadir" //illa kadir olması gerektı buda böyle bilgi olsun 


/** 
 * 
 * arrayı sımdı readonly yapmak ıstedıgımızde
*/

const myarxas =  Object.freeze(["ada",2]) // readonly T[] seklınde donduruyormus dolayısıyla  freeze uzerıne gelırsen ne parametresı verıyorsan o turde oluyor <> buranın içi  ama reeadonly seklındeymıs dolaysyla push vs bıle kulanamazsın

// myarxas.push() not use

const myX : readonly any[] = ["as"]



// myX = 4 hata verır readonly cunku

const myarxasTypeByObj =  Object.freeze({name:"kerım"}) //başka bir freeze'ye denk gelır freeze tıkladıgımzıda  T extends {[idx: string]: U | null | undefined | object} demıs farklı tür verirsen Object.freeze() kısmına baska freeze'ye denk gelır extends dedıgı içinde zaten Object.freeze({name:"kerım"}) ustune geldıgınde extends'dekı kabul olur  tabı buda readonlydır



//örnek fonsıyonda kullanalım readonylımızı


function isExisting<T extends  readonly any[]>(array:T,child:any): ABCdenem<boolean> { //ABCdenem<any> yerıne tuple yapabırlsın [boolen]  tuple kullanmak daha mantıklı olabılır 
  
  const index = array.findIndex((value)=>value === child)

  if (index >= 0) {
    return [true] // true aslında  ABCdenem arrayındekı descriptiona denktır
    
  }

  return [false]
}


const [existing] = isExisting(myarxas,25)

console.log(existing) //true yada false verır

/**
 * 
 * 
 * 
 */

