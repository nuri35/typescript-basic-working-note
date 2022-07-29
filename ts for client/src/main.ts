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

Returner2x(false); //hata vermez üstüne gelip bakarsın

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
  return params;
}

createHeader(true); // <> belirtmedıgım ıcın hata vermez function createHeader<true>(params: true): true böyle olur yani artık T = true

// extends ile yukardaki fonskıyon gibi yapamıyoruz
function createHeader2<T extends string | [string, any][]>(params: T) {
  //
  return params;
}

// createHeader2(true); hata verri

createHeader2([["adana", 25]]); //burda <> yapmasanda  createHeader2 fonskyonu parametresinde belirttihin türe sadık kalmalısın

// createHeader2<number>([["adana", 25]]); // createHeader2 fonksıyonda belırtılen <>'deki tür tanımlamalarını secebılrısn

createHeader2<string>("as");
