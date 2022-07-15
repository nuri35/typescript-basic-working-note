import "./style.css";

/** exercise void error */
type voidFunc = () => void;

let f1: voidFunc;

f1 = function f1() {
  //ayrıca f1() :{blablabla} void bu sekılde belırtırsem hata verır ancak f1 için hatta f1 için f1() :{blablabla} string dersem string dondurebılrım
  return false; //hata vermez return false dedıgımde zorlamaz void olmasına return false dedım dırek  fonksıyonun dipi boolen oldu
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

// function Returner<T = string>(par: T) {
//   return par;
// }

// const c = Returner<Deneme>({ text: "asd", res: true });

function Returner<T = Deneme>(par: T) {
  let a: T;
  a = par;
  return a;
}

const c = Returner(2); //Returner(2); ve Returner<T = Deneme> olsa dahi sen Returner(2); dedıgın ıcın orotmatıktman function Returner<2>(par: 2): 2 seklınde olur ve  Returner<T = Deneme> burayı overwrite eder hata vermez  fakat Returner<other tip>({ text: "ana" }); dersen başka tip olarak overwrite eder ayrıca uygulamassan o tipin kurallarını bu sefer hata verir çünkü belirtiyorsun <> yaparak en son  Returner<Deneme<({ text: "ana" }); diyerek overwrite etmene gerek yok zaten fonksıyonda o gine <> belirttiigin için uygulamassan kuralı hata verir

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
